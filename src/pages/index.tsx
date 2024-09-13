import HeroSection from "@/sections/HomeSection/HeroSection";
import LetplanSection from "@/sections/HomeSection/LetplanSection";
import InvestmentTax from "@/sections/HomeSection/InvestmentTax";
import FaqallSection from "../sections/HomeSection/Faqallsection";
import { useState } from "react";

export default function Home() {
 

  return (
    <main>
    
    <div className="bg">
      <HeroSection/>
      <LetplanSection/>
      <InvestmentTax/>
      <FaqallSection/>
      </div>
    
    </main>
  );
}
