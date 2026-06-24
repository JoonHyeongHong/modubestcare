"use client";
import { PortfolioNode } from "@/app/page";
import BeforeAfterSlider from "../sections/BeforeAfterSlider";
import ContactForm from "../sections/B2BContact";
import FaqAccordion from "../sections/FaqAccordion";
import ProcessSliders from "../sections/ProcessSliders";
import QuoteCalculator from "../sections/QuoteCalculator";
import B2BHero from "../sections/B2BHero";
import Portfolio from "../sections/Portfolio";
import WhyUs from "../sections/WhyUs";
import KakaoButton from "../common/KakaoButton";

interface B2BMainProps {
  portfolios: PortfolioNode[];
}

export default function B2BMain({ portfolios }: B2BMainProps) {
  return (
    <div className="w-full flex flex-col animate-fadeIn">
      {/* ⚡ 수정: Information 컴포넌트 자체에서 높이를 조절하도록 감싸는 div를 단순화했습니다. */}
      <div className="w-full">
        <B2BHero />
      </div>
      <div className="w-full">
        <WhyUs />
      </div>
      <div className="w-full">
        <BeforeAfterSlider />
      </div>
      <div className="w-full">
        <ProcessSliders />
      </div>
      <div className="w-full">
        <QuoteCalculator />
      </div>
      <div className="w-full">
        <Portfolio portfolios={portfolios} />
      </div>
      <div className="w-full">
        <FaqAccordion />
      </div>

      <div className="w-full">
        <ContactForm />
      </div>
      <KakaoButton />
    </div>
  );
}
