'use client'
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

export default function WhyUs() {
  const { ref, className } = useScrollFadeIn();
    const points = [
        {
      icon: "🎯",
      title: "대기업 규격 순정 매뉴얼",
      desc: "까다로운 대기업 가전 세척 표준 규격을 완벽히 준수합니다. 기기 손상 없는 정석 분해와 승인된 친환경 세제만을 사용하여 안심할 수 있습니다."
    },
    {
      icon: "💰",
      title: "유통 마진 없는 합리적 견적",
      desc: "본사 플랫폼을 거치지 않는 다이렉트 B2B 계약으로, 대기업 서비스센터 대비 대량 세척 예산을 대폭 절감할 수 있는 투명한 단체 할인을 제공합니다."
    },
    {
      icon: "📅",
      title: "기업 맞춤형 프리 스케줄",
      desc: "업무에 지장이 없도록 야간, 주말, 공휴일 작업 등 유연한 일정 조율이 가능합니다. 인천 서구 및 김포 지역 신속한 방문 실사 및 사후 A/S를 보장합니다."
    }
    ];

    return (
        // ⚡ 1. h-screen과 overflow-hidden을 지우고, 자연스러운 패딩(py-16 md:py-24)으로 위아래 여백을 줍니다.
        <section 
          id="why-us" 
          ref={ref} 
          className={`w-full bg-slate-50 py-16 md:py-24 box-border ${className}`}
        >
      {/* ⚡ 2. min-h-0을 지우고 일반적인 컨테이너 구조로 변경합니다. */}
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col justify-center">
        
        {/* 상단 타이틀 레이어 */}
        <div className="text-center mb-10 md:mb-14">
          {/* 모바일에서는 줄바꿈(br)을 허용하고, PC에서는 한 줄로 나오게 설계된 부분 아주 좋습니다! */}
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug md:leading-tight">
            왜 기업 담당자들은 <br className="md:hidden"/>
            <span className="text-blue-600">모두홈케어</span>를 선택할까요?
          </h2>
          <p className="text-slate-500 mt-3 md:mt-4 text-sm md:text-base break-keep">
            대기업급 압도적 퀄리티에 직거래의 합리적인 비용을 더했습니다.
          </p>
        </div>

        {/* 핵심 3단 카드 영역 */}
        {/* ⚡ 3. max-h-[60vh]와 내부 스크롤(overflow-y-auto)을 완전히 제거하여 내용만큼 늘어나게 합니다. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
          {points.map((item, index) => (
            <div 
              key={index} 
              // ⚡ 카드의 높이가 달라도 하단 선이 맞도록 h-full 처리
              className="h-full bg-white p-6 md:p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col items-center md:items-start text-center md:text-left group hover:shadow-lg hover:border-blue-300 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50/80 flex items-center justify-center text-2xl mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-3 transition-all duration-300">
                <span>{item.icon}</span>
              </div>
              
              <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              
              <p className="text-slate-600 text-sm leading-relaxed break-keep">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    )
}