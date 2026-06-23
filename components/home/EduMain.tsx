'use client';

import RecruitHero from "../sections/RecruitHero";
import Curriculum from "../sections/Curriculum";
import TrainingBenefits from "../sections/TrainingBenefits";
import Location from "../sections/Location"; 
import ContactForm from "../sections/ContactForm";
import FaqAccordion from "../sections/FaqAccordion";
// Footer는 최상위 layout이나 page에서 렌더링되므로 여기서 import하지 않아도 됩니다.
import KakaoButton from "../common/KakaoButton";

export default function EduMain() {
  return (
    // ⚡ 1. 전체 컨테이너는 너비 100%(w-full)와 세로 정렬(flex-col)만 유지합니다.
    <div className="w-full flex flex-col animate-fadeIn">
      
      <div className="w-full"><RecruitHero /></div>
      <div className="w-full"><Curriculum /></div>
      
      {/* 필요시 주석 해제 후 사용 */}
      {/* <div className="w-full"><TrainingBenefits /></div> */}
      
      {/* ⚡ 2. 억지로 부여된 h-screen을 제거하여 FAQ가 길어져도 자연스럽게 늘어나게 합니다. */}
      <div className="w-full"><FaqAccordion viewMode="edu" /></div> 

      <div className="w-full"><ContactForm viewMode="edu" /></div>
      
      {/* ⚡ 3. Location 래퍼에 있던 min-h-screen과 불필요한 bg-gray-50을 걷어냈습니다.
             배경색과 패딩은 Location 컴포넌트 내부에서 자체적으로 처리하는 것이 원칙입니다. */}
      <div className="w-full"><Location /></div>
      
      <KakaoButton />
    </div>
  );
}