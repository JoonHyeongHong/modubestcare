'use client';

import BeforeAfterSlider from "../sections/BeforeAfterSlider";
import ContactForm from "../sections/ContactForm";
import FaqAccordion from "../sections/FaqAccordion";
import ProcessTabs from "../sections/ProcessTabs";
import QuoteCalculator from "../sections/QuoteCalculator";
import Information from "../sections/Information";
import Portfolio from "../sections/Portfolio";
import Footer from "../common/Footer";

export default function B2BMain() {
  return (
    <div className="animate-fadeIn flex-1 flex flex-col">
      {/* 1. Information (Hero + Service) */}
      <div className="snap-start w-full h-screen overflow-hidden">
        <Information />
      </div>

      {/* 2. 비포애프터 (슬라이더 크기 제어) */}
      <div className="snap-start w-full h-screen flex items-center justify-center bg-white overflow-hidden p-4 md:p-12">
        <div className="w-full max-w-5xl max-h-full">
          <BeforeAfterSlider />
        </div>
      </div>

      {/* 3. 세척 프로세스 (탭 메뉴 간격 조절) */}
      <div className="snap-start w-full h-screen flex items-center justify-center bg-gray-50 overflow-hidden p-4 md:p-12">
        <div className="w-full max-w-5xl max-h-[90vh]">
          <ProcessTabs />
        </div>
      </div>

      {/* 4. 견적 계산기 (가장 길어지기 쉬운 섹션) */}
      <div className="snap-start w-full h-screen flex items-center justify-center bg-white overflow-hidden p-4 md:p-12">
        <div className="w-full max-w-4xl max-h-[85vh]">
          <QuoteCalculator />
        </div>
      </div>

      {/* 5. 견적 문의 (폼 크기 축소) */}
      <div className="snap-start w-full h-screen flex items-center justify-center bg-gray-50 overflow-hidden ">
        <div className="w-full max-w-3xl max-h-full">
          <ContactForm />
        </div>
      </div>

      {/* 6. 포트폴리오 & FAQ (내용이 많으므로 묶어서 처리하거나 끝에 배치) */}
      <div className="snap-start w-full min-h-screen flex flex-col bg-white">
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-5xl"><Portfolio /></div>
        </div>
        <div className="flex-1 flex items-center justify-center p-8 bg-gray-50">
          <div className="w-full max-w-5xl"><FaqAccordion /></div>
        </div>
        <Footer />
      </div>
    </div>
  );
}