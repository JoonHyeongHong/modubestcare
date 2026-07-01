"use client";

import EduHero from "../sections/EduHero";
import Curriculum from "../sections/Curriculum";
import Location from "../sections/Location";
import FaqAccordion from "../sections/FaqAccordion";
// Footer는 최상위 layout이나 page에서 렌더링되므로 여기서 import하지 않아도 됩니다.
import EduContact from "../sections/EduContact";
import SideScrollNav from "../common/SideScrollNav";
import FloatingButtons from "../common/FloatingButtons";

export default function EduMain() {
  return (
    // ⚡ 1. 전체 컨테이너는 너비 100%(w-full)와 세로 정렬(flex-col)만 유지합니다.
    <div className="w-full flex flex-col animate-fadeIn">
      <EduHero />
      <Curriculum />

      <FaqAccordion viewMode="edu" />

      <EduContact />

      <Location />
      <FloatingButtons />
    </div>
  );
}
