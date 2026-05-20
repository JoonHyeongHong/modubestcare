'use client'

export default function WhyUs() {
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
        <section id="why-us" className="w-full h-screen flex flex-col bg-gray-50 pt-20 scroll-mt-20 overflow-hidden box-border">
      {/* 내부 컨테이너: flex-1과 min-h-0으로 브라우저 높이에 맞춰 유연하게 줄어듦 */}
      <div className="flex-1 w-full max-w-6xl mx-auto px-6 flex flex-col justify-center min-h-0">
        
        {/* 상단 타이틀 레이어 (flex-shrink-0으로 글자 찌그러짐 방지) */}
        <div className="text-center mb-6 md:mb-10 flex-shrink-0">
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 tracking-tight">
            왜 기업 담당자들은 <br className="md:hidden"/>
            <span className="text-blue-600">모두베스트케어</span>를 선택할까요?
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            대기업급 압도적 퀄리티에 직거래의 합리적인 비용을 더했습니다.
          </p>
        </div>

        {/* 핵심 3단 카드 영역 (max-h를 주어 작은 모니터에서도 화면을 넘지 않음) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-h-[60vh] overflow-y-auto md:overflow-hidden pr-1 md:pr-0 custom-scrollbar">
          {points.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200/60 shadow-sm flex flex-col items-center md:items-start text-center md:text-left group hover:shadow-md hover:border-blue-300 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-2xl mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                <span className="group-hover:animate-pulse">{item.icon}</span>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed break-keep">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
    )
}