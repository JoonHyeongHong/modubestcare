"useclient";

import B2BHero from "@/components/sections/B2BHero";
import KeyServices from "@/components/sections/KeyServices"; // 아래에서 새로 만들 컴포넌트
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import WhyUs from "@/components/sections/WhyUs";
import FaqAccordion from "../sections/FaqAccordion";
import ProcessSliders from "../sections/ProcessSliders";
import SideScrollNav from "../common/SideScrollNav";

export default function B2BMain() {
  return (
    <main className="w-full bg-slate-900 scroll-smooth snap-y">
      {/* 아래 섹션들도 스냅이 걸리길 원한다면 각 컴포넌트의 <section> 태그에 'snap-start' 클래스를 추가해야 합니다. */}
      <SideScrollNav />

      <B2BHero />
      <WhyUs />
      <ProcessSliders />
      <KeyServices />
      <BeforeAfterSlider />

      <FaqAccordion />
    </main>
  );
}
