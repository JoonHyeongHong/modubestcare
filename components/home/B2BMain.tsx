'use client';

import BeforeAfterSlider from "../sections/BeforeAfterSlider";
import ContactForm from "../sections/ContactForm";
import FaqAccordion from "../sections/FaqAccordion";
import ProcessSliders from "../sections/ProcessSliders";
import QuoteCalculator from "../sections/QuoteCalculator";
import Information from "../sections/Information";
import Portfolio from "../sections/Portfolio";
import WhyUs from "../sections/WhyUs";
import Footer from "../common/Footer";

export default function B2BMain() {
  return (
    <div className="animate-fadeIn flex-1 flex flex-col">
      <div className="snap-start w-full h-screen"><Information /></div>
      <div className="snap-start w-full h-screen"><WhyUs /></div> {/* ⚡ 추가된 핵심 명분 섹션 */}
      <div className="snap-start w-full h-screen"><BeforeAfterSlider /></div>
      <div className="snap-start w-full h-screen"><ProcessSliders /></div>
      <div className="snap-start w-full h-screen"><QuoteCalculator /></div>
      <div className="snap-start w-full h-screen"><Portfolio /></div>
      <div className="snap-start w-full h-screen"><FaqAccordion /></div>
      
      
      {/* ⚡ [튕김 해결 핵심 치트키] 
        - ContactForm과 Footer를 하나의 snap-start 그룹으로 묶어버립니다.
        - 모바일(md 미만)에선 자연스러운 높이를 갖고, PC(md)에선 콘텐츠 양에 맞춰 스크롤을 허용하도록 h-screen 제약을 지웁니다.
    */}
    <div className="snap-start w-full min-h-screen md:min-h-screen flex flex-col justify-between bg-gray-50">
      {/* FAQ 섹션 내부의 h-screen, min-h-screen 속성은 완전히 지워주거나 제거해야 밀리지 않습니다 */}
    <ContactForm viewMode="b2b" />
      {/* 이제 자석에 걸리지 않고 FAQ 바로 아래 단정하게 안착합니다 */}
      <Footer /> 
    </div>
    </div>
  );
}