"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function WhyUs() {
  const { ref, className } = useScrollFadeIn();

  const points = [
    {
      icon: "🎯",
      title: "",
      desc: "기기 손상 없는 정석 분해와 친환경 세제만을 사용합니다.",
    },
    {
      icon: "💰",
      title: "유통 마진 없는 합리적 견적",
      desc: "대기업 서비스센터 대비 대량 세척 예산을 대폭 절감할 수 있는 투명한 단체 할인을 제공합니다.",
    },
    {
      icon: "📅",
      title: "맞춤형 프리 스케줄",
      desc: "주말 작업 등 유연한 일정 조율이 가능합니다. 신속한 방문 실사 및 사후 A/S를 보장합니다.",
    },
  ];

  return (
    <section
      id="why-us"
      ref={ref}
      // 🎨 이전 섹션(Hero)이 #F8FAFC(연한 회색)였으므로, 여기는 완전한 화이트(bg-white)로 교차 배치하면 화면이 지루하지 않습니다.
      className={`w-full  bg-white py-12 sm:py-16 lg:py-20 xl:py-24 box-border ${className} md:snap-start`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 flex flex-col justify-center">
        <div className="text-center mb-8 sm:mb-12 xl:mb-16">
          {/* ✍️ 텍스트 컬러를 slate-900으로 고정하여 가독성 확보, '모두홈케어'는 Navy(#1E3A8A)로 강한 신뢰감 부여 */}
          <h2 className="text-[26px] sm:text-3xl lg:text-4xl xl:text-5xl font-black text-slate-900 tracking-tight leading-snug md:leading-tight">
            왜 기업 담당자들은 <br className="md:hidden" />
            <span className="text-[#1E3A8A]">모두홈케어</span>를 선택할까요?
          </h2>
          <p className="text-slate-500 mt-2 sm:mt-3 xl:mt-5 text-xs sm:text-sm xl:text-lg break-keep font-medium">
            대기업급 압도적 퀄리티에 직거래의 합리적인 비용을 더했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-8 w-full max-w-6xl mx-auto">
          {points.map((item, index) => (
            <div
              key={index}
              // 🎨 카드 배경을 아주 연한 그레이(bg-slate-50)로 주어 화이트 배경과 분리.
              // 호버 시 카드가 새하얗게(bg-white) 변하며 스카이 블루 테두리가 나타나도록 입체감 부여
              className={`h-full bg-slate-50 p-5 sm:p-6 xl:p-10 rounded-[1.25rem] xl:rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center md:items-start text-center md:text-left group hover:bg-white hover:shadow-xl hover:border-sky-200 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* 🎯 아이콘 컨테이너: 기본은 부드러운 스카이 블루(bg-sky-100), 호버 시 딥 네이비(bg-[#1E3A8A])로 변하며 무게감 있게 잡아줌 */}
              <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-xl xl:rounded-2xl bg-sky-100 flex items-center justify-center text-2xl xl:text-3xl mb-4 xl:mb-6 group-hover:bg-[#1E3A8A] group-hover:scale-110 transition-all duration-500 shadow-sm">
                <span className="group-hover:grayscale-0 transition-all duration-300">
                  {item.icon}
                </span>
              </div>

              {/* 텍스트 Hover 시 시원한 sky-600으로 변경되어 B2B SaaS 특유의 인터랙티브한 느낌 강조 */}
              <h3 className="text-base sm:text-lg xl:text-2xl font-extrabold text-slate-900 mb-2 xl:mb-4 group-hover:text-sky-600 transition-colors duration-300">
                {item.title}
              </h3>

              <p className="text-slate-600 text-[13px] sm:text-sm xl:text-base leading-relaxed break-keep font-medium">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
