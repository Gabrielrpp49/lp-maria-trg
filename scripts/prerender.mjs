// Prerender: pega o SPA React já buildado e serializa a home renderizada.
// Bots crawlam HTML completo com toda a copy. React hidrata no client depois.

import { createServer } from "node:http";
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { extname, join, dirname } from "node:path";
import puppeteer from "puppeteer";

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, "..", "dist");
const PORT = 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript",
  ".mjs": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".svg": "image/svg+xml",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".txt": "text/plain",
  ".xml": "application/xml",
};

// Servidor estático mínimo do dist/
const server = createServer(async (req, res) => {
  try {
    const url = decodeURIComponent(req.url.split("?")[0]);
    let filePath = join(DIST, url === "/" ? "/index.html" : url);
    let ext = extname(filePath);
    if (!ext) {
      filePath = join(DIST, "/index.html");
      ext = ".html";
    }
    const data = await readFile(filePath);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});

await new Promise((resolve) => server.listen(PORT, resolve));
console.log(`[prerender] servindo dist/ em http://localhost:${PORT}`);

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

// Emulate desktop for stable render
await page.setViewport({ width: 1280, height: 800 });

// Trigger whileInView animations pra ficarem visíveis no SSR também
page.on("console", (msg) => {
  if (msg.type() === "error") console.error("[browser]", msg.text());
});

await page.goto(`http://localhost:${PORT}/`, { waitUntil: "networkidle0", timeout: 30000 });

// Espera Framer resolver initial states + garantir que tudo virou visible
await page.evaluate(async () => {
  // Rola até o fim pra disparar todos whileInView e volta
  const total = document.body.scrollHeight;
  const step = window.innerHeight * 0.6;
  for (let y = 0; y <= total; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 80));
  }
  window.scrollTo(0, 0);
  // Força qualquer motion.div escondido a virar visible pro SSR
  document.querySelectorAll('[style*="opacity: 0"]').forEach((el) => {
    el.style.opacity = "1";
    el.style.transform = "none";
  });
  await new Promise((r) => setTimeout(r, 300));
});

const html = await page.content();

const OUT = join(DIST, "index.html");
await writeFile(OUT, html, "utf8");
console.log(`[prerender] ✓ salvou ${OUT} (${(html.length / 1024).toFixed(1)} KB)`);

await browser.close();
server.close();
