'use client';

import BeforeAfterSlider from "../sections/BeforeAfterSlider";
import ContactForm from "../sections/ContactForm";
import FaqAccordion from "../sections/FaqAccordion";
import ProcessTabs from "../sections/ProcessTabs";
import QuoteCalculator from "../sections/QuoteCalculator";
import Information from "../sections/Information";
import Portfolio from "../sections/Portfolio";
import WhyUs from "../sections/WhyUs";

export default function B2BMain() {
  return (
    <div className="animate-fadeIn flex-1 flex flex-col">
      <div className="snap-start w-full h-screen"><Information /></div>
      <div className="snap-start w-full h-screen"><WhyUs /></div> {/* ⚡ 추가된 핵심 명분 섹션 */}
      <div className="snap-start w-full h-screen"><BeforeAfterSlider /></div>
      <div className="snap-start w-full h-screen"><ProcessTabs /></div>
      <div className="snap-start w-full h-screen"><QuoteCalculator /></div>
      <div className="snap-start w-full h-screen"><ContactForm viewMode="b2b" /></div>
      <div className="snap-start w-full h-screen"><Portfolio /></div>
      <div className="snap-start w-full h-screen"><FaqAccordion /></div>
    </div>
  );
}