// components/home/EduMain.tsx
'use client';

import RecruitHero from "../sections/RecruitHero";
import Curriculum from "../sections/Curriculum";
import TrainingBenefits from "../sections/TrainingBenefits";
import Location from "../sections/Location"; // ⚡ 찾아오시는 길 추가
import ContactForm from "../sections/ContactForm";
import FaqAccordion from "../sections/FaqAccordion";
import Footer from "../common/Footer";
import KakaoButton from "../common/KakaoButton";

export default function EduMain() {
  return (
    <div className="animate-fadeIn flex-1 flex flex-col">
      <div className="snap-start w-full h-screen"><RecruitHero /></div>
      <div className="snap-start w-full h-screen"><Curriculum /></div>
      {/* <div className="snap-start w-full h-screen"><TrainingBenefits /></div> */}
      <div className="snap-start w-full h-screen"><FaqAccordion viewMode="edu" /></div> {/* ⚡ 기사 맞춤형 FAQ 작동 */}

      <div className="snap-start w-full h-screen"><ContactForm viewMode="edu" /></div>
    <div className="snap-start w-full min-h-screen md:min-h-screen flex flex-col justify-between bg-gray-50">
      {/* FAQ 섹션 내부의 h-screen, min-h-screen 속성은 완전히 지워주거나 제거해야 밀리지 않습니다 */}
    <Location />
      {/* 이제 자석에 걸리지 않고 FAQ 바로 아래 단정하게 안착합니다 */}
    </div>
      <KakaoButton/>
    </div>
  );
}