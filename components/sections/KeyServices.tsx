"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function KeyServices() {
  const { ref, className } = useScrollFadeIn();

  const services = [
    {
      id: "system",
      title: "시스템 에어컨",
      desc: "천장형 시스템 에어컨 완전 분해 세척으로 대규모 공간의 최고의 청결도를 보장합니다.",
      icon: "🏢",
    },
    {
      id: "stand",
      title: "스탠드 에어컨",
      desc: "업소용 및 사무실용 대용량 스탠드 에어컨의 보이지 않는 사각지대까지 완벽하게 케어합니다.",
      icon: "🌬️",
    },
    {
      id: "wall",
      title: "벽걸이 에어컨",
      desc: "소형 상가 및 기숙사 등에 설치된 벽걸이 에어컨의 곰팡이와 찌든 때를 안전하게 세척합니다.",
      icon: "❄️",
    },
  ];

  return (
    <section
      id="services"
      ref={ref}
      // Hero 섹션(연그레이)과 구분되도록 순백색 배경 사용
      className={`w-full scroll-mt-20 bg-white py-16 lg:py-24 box-border border-b border-slate-100 ${className} snap-start`}
    >
      <div className="w-full max-w-6xl mx-auto px-5 sm:px-6">
        {/* 상단 타이틀 (Pain Points & 솔루션) */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-[26px] sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-snug">
            어떤 기종이든 완벽하게
            <br />
            <span className="text-[#1E3A8A]">모두홈케어 주요 서비스</span>
          </h2>
          <p className="text-slate-500 mt-4 text-sm sm:text-base xl:text-lg break-keep font-medium max-w-2xl mx-auto">
            오래된 에어컨의 성능 저하와 냄새, 전문가의 완전 분해 세척만이 유일한
            해결책입니다. 용도와 기종에 맞는 최적의 솔루션을 제공합니다.
          </p>
        </div>

        {/* 4분할 서비스 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-slate-50 border border-slate-100 p-6 xl:p-8 rounded-2xl hover:bg-white hover:border-sky-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* 아이콘 영역 */}
              <div className="w-16 h-16 xl:w-20 xl:h-20 bg-white border border-slate-200 rounded-full flex items-center justify-center text-3xl xl:text-4xl shadow-sm mb-5 group-hover:bg-[#1E3A8A] group-hover:border-[#1E3A8A] group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>

              {/* 텍스트 영역 */}
              <h3 className="text-lg xl:text-xl font-extrabold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 text-sm xl:text-base font-medium break-keep leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
