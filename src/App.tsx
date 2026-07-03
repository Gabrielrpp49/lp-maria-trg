import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problema } from "@/components/Problema";
import { Filosofia } from "@/components/Filosofia";
import { OQueETRG } from "@/components/OQueETRG";
import { ComoFunciona } from "@/components/ComoFunciona";
import { ParaQuem } from "@/components/ParaQuem";
import { Diferencial } from "@/components/Diferencial";
import { Sobre } from "@/components/Sobre";
import { Depoimentos } from "@/components/Depoimentos";
import { Atendimento } from "@/components/Atendimento";
import { FAQ } from "@/components/FAQ";
import { Poema } from "@/components/Poema";
import { CTAFinal } from "@/components/CTAFinal";
import { Footer } from "@/components/Footer";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

export function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problema />
        <Filosofia />
        <OQueETRG />
        <ComoFunciona />
        <ParaQuem />
        <Diferencial />
        <Sobre />
        <Depoimentos />
        <Atendimento />
        <Poema />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
      <MobileStickyCTA />
    </>
  );
}
