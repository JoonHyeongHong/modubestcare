'use client';

import EduHero from '@/components/sections/EduHero';
import Curriculum from '@/components/sections/Curriculum';

import ContactForm from '../sections/ContactForm'; // 공통 사용

export default function EduMain() {
  return (
    <div className="animate-fadeIn flex-1 flex flex-col">
      {/* 1. 교육 히어로 섹션 */}
      <div className="snap-start w-full h-screen">
        <EduHero />
      </div>

      {/* 2. 핵심 커리큘럼 */}
      <div className="snap-start w-full h-screen">
        <Curriculum />
      </div>



      {/* 4. 상담 신청 (B2B와 공통 폼 사용하되, ID만 맞춰줌) */}
      <div className="snap-start w-full h-screen">
        <ContactForm />
      </div>
    </div>
  );
}