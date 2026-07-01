/* LP Maria de Fátima Abreu - Terapeuta TRG */

(function () {
  'use strict';

  // ============================================
  // Header: scroll effect (esconde ao rolar pra baixo)
  // ============================================
  const header = document.getElementById('header');
  let lastY = window.scrollY;
  let ticking = false;

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > 20) header.classList.add('scrolled');
        else header.classList.remove('scrolled');

        if (y > lastY && y > 180) header.classList.add('hidden');
        else header.classList.remove('hidden');

        lastY = y;
        ticking = false;
      });
      ticking = true;
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });

  // ============================================
  // Mobile menu toggle
  // ============================================
  const menuToggle = document.querySelector('.menu-toggle');
  const navMobile = document.getElementById('menu-mobile');

  if (menuToggle && navMobile) {
    menuToggle.addEventListener('click', () => {
      const open = navMobile.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    navMobile.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navMobile.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ============================================
  // Reveal on scroll (IntersectionObserver)
  // ============================================
  const reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && reveals.length) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach((el) => observer.observe(el));

    // Fallback: elementos que já estão dentro do viewport ao carregar
    // devem aparecer imediatamente (evita pisca-pisca no hero)
    requestAnimationFrame(() => {
      reveals.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.9) {
          el.classList.add('in-view');
        }
      });
    });
  } else {
    reveals.forEach((el) => el.classList.add('in-view'));
  }

  // ============================================
  // FAQ: fecha os outros ao abrir um
  // ============================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach((other) => {
          if (other !== item && other.open) other.open = false;
        });
      }
    });
  });

  // ============================================
  // Sticky CTA: esconde quando footer ou CTA final visível
  // ============================================
  const stickyCta = document.querySelector('.sticky-cta');
  const footer = document.querySelector('.site-footer');
  const ctaFinal = document.querySelector('.cta-final');

  if (stickyCta && 'IntersectionObserver' in window) {
    const hideOn = [footer, ctaFinal].filter(Boolean);
    const hideObserver = new IntersectionObserver((entries) => {
      const anyVisible = entries.some((e) => e.isIntersecting);
      stickyCta.style.opacity = anyVisible ? '0' : '1';
      stickyCta.style.pointerEvents = anyVisible ? 'none' : 'auto';
      stickyCta.style.transform = anyVisible ? 'translateY(20px) scale(0.9)' : 'translateY(0) scale(1)';
    }, { threshold: 0.15 });
    hideOn.forEach((el) => hideObserver.observe(el));
  }

  // ============================================
  // Cookie banner LGPD
  // ============================================
  const banner = document.getElementById('cookieBanner');
  const accept = document.getElementById('cookieAccept');
  const COOKIE_KEY = 'mfa-cookie-ok';

  if (banner && accept) {
    if (!localStorage.getItem(COOKIE_KEY)) {
      setTimeout(() => {
        banner.hidden = false;
      }, 1500);
    }
    accept.addEventListener('click', () => {
      localStorage.setItem(COOKIE_KEY, '1');
      banner.hidden = true;
    });
  }

  // ============================================
  // Smooth scroll para âncoras (fallback JS)
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
