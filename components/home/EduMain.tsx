// components/home/EduMain.tsx
'use client';

import RecruitHero from "../sections/RecruitHero";
import Curriculum from "../sections/Curriculum";
import TrainingBenefits from "../sections/TrainingBenefits";
import Location from "../sections/Location"; // ⚡ 찾아오시는 길 추가
import ContactForm from "../sections/ContactForm";
import FaqAccordion from "../sections/FaqAccordion";

export default function EduMain() {
  return (
    <div className="animate-fadeIn flex-1 flex flex-col">
      <div className="snap-start w-full h-screen"><RecruitHero /></div>
      <div className="snap-start w-full h-screen"><Curriculum /></div>
      {/* <div className="snap-start w-full h-screen"><TrainingBenefits /></div> */}
      <div className="snap-start w-full h-screen"><FaqAccordion viewMode="edu" /></div> {/* ⚡ 기사 맞춤형 FAQ 작동 */}

      <div className="snap-start w-full h-screen"><ContactForm viewMode="edu" /></div>
      <div className="snap-start w-full h-screen"><Location /></div> {/* ⚡ 지도 및 주소 정보 배치 */}
    </div>
  );
}