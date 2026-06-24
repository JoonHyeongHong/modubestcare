"use client";

import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function WhyUs() {
  const { ref, className } = useScrollFadeIn();

  const points = [
    {
      icon: "🎯",
      title: "대기업 규격 순정 매뉴얼",
      desc: "까다로운 대기업 가전 세척 표준 규격을 완벽히 준수합니다. 기기 손상 없는 정석 분해와 승인된 친환경 세제만을 사용합니다.",
    },
    {
      icon: "💰",
      title: "유통 마진 없는 합리적 견적",
      desc: "다이렉트 B2B 계약으로, 대기업 서비스센터 대비 대량 세척 예산을 대폭 절감할 수 있는 투명한 단체 할인을 제공합니다.",
    },
    {
      icon: "📅",
      title: "기업 맞춤형 프리 스케줄",
      desc: "업무에 지장이 없도록 야간, 주말 작업 등 유연한 일정 조율이 가능합니다. 신속한 방문 실사 및 사후 A/S를 보장합니다.",
    },
  ];

  return (
    <section
      id="why-us"
      ref={ref}
      // ⚡ 모바일은 py-12, 데스크톱은 py-24로 유연한 여백 적용
      className={`w-full bg-slate-50 py-12 sm:py-16 lg:py-20 xl:py-24 box-border ${className}`}
    >
      <div className="w-full max-w-7xl mx-auto px-5 sm:px-6 flex flex-col justify-center">
        <div className="text-center mb-8 sm:mb-12 xl:mb-16">
          <h2 className="text-[26px] sm:text-3xl lg:text-4xl xl:text-5xl font-black text-b2b-primary tracking-tight leading-snug md:leading-tight">
            왜 기업 담당자들은 <br className="md:hidden" />
            <span className="text-b2b-accent">모두홈케어</span>를 선택할까요?
          </h2>
          <p className="text-slate-500 mt-2 sm:mt-3 xl:mt-5 text-xs sm:text-sm xl:text-lg break-keep font-medium">
            대기업급 압도적 퀄리티에 직거래의 합리적인 비용을 더했습니다.
          </p>
        </div>

        {/* ⚡ 모바일: 1열, 태블릿: 2열(마지막 카드 넓게), 데스크톱: 3열 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 xl:gap-8 w-full max-w-6xl mx-auto">
          {points.map((item, index) => (
            <div
              key={index}
              // md:grid-cols-2 일 때 3번째 카드를 가운데 꽉 차게 배치하는 센스 (md:col-span-2 lg:col-span-1)
              className={`h-full bg-white p-5 sm:p-6 xl:p-10 rounded-[1.25rem] xl:rounded-3xl border border-slate-200/80 shadow-sm flex flex-col items-center md:items-start text-center md:text-left group hover:shadow-xl hover:border-b2b-accent/40 hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-500 ${index === 2 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="w-12 h-12 xl:w-16 xl:h-16 rounded-xl xl:rounded-2xl bg-b2b-secondary/50 flex items-center justify-center text-2xl xl:text-3xl mb-4 xl:mb-6 group-hover:bg-b2b-accent group-hover:scale-110 transition-all duration-500 shadow-sm">
                <span className="group-hover:grayscale-0 transition-all duration-300">
                  {item.icon}
                </span>
              </div>

              <h3 className="text-base sm:text-lg xl:text-2xl font-extrabold text-b2b-primary mb-2 xl:mb-4 group-hover:text-b2b-accent transition-colors duration-300">
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
