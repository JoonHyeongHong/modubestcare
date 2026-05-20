'use client';

const BENEFITS = [
  {
    id: "01",
    badge: "비수기 제로",
    title: "사계절 끊이지 않는 전 가전 수익 확보",
    desc: "에어컨 세척 비수기인 가을·겨울에도 걱정 없습니다. 세탁기, 냉장고, 공기청정기 등 LG 전 가전제품 클리닝 역량을 이수하여 공백기 없이 연중 안정적인 고수익을 실현합니다.",
    icon: "🔥", // 기존 가방에서 불꽃이나 강력한 아이콘으로 변경 유도
  },
  {
    id: "02",
    badge: "공식 커리어",
    title: "대기업 세척 기사 등록 및 연계",
    desc: "정석 표준 규격 매뉴얼 교육을 마스터한 후, 대기업(LG) 세척 기사로 정식 등록되어 현장에서 활동할 수 있도록 본사 차원의 공식 루트를 전폭 연계합니다.",
    icon: "✨",
  },
  {
    id: "03",
    badge: "현장 직결",
    title: "1:1 밀착 현장 실습",
    desc: "테스트 룸에서의 이론 교육으로 끝나지 않습니다. 베테랑 사수와 함께 실제 김포, 인천 서구 등 B2B 현장에 동행하며 완벽하게 마스터할 때까지 리드합니다.",
    icon: "🛠️",
  },
  {
    id: "04",
    badge: "초기 부담 제로",
    title: "전문 세척 장비 원가 지원",
    desc: "고가의 고압 세척기, 특수 보양 가방, 전용 약품 등 현장 필수 장비 세트를 거품 없는 파트너 원가로 제공하여 초기 진입 장벽을 완전히 낮춰드립니다.",
    icon: "🤝",
  }
];

export default function TrainingBenefits() {
  return (
    // 1. 모바일 min-h-screen으로 본문 보존, PC md:h-screen으로 스냅 유지
    <section 
      id="benefits" 
      className="w-full min-h-screen md:h-screen flex flex-col items-center justify-center bg-white pt-20 scroll-mt-20 overflow-hidden box-border"
    >
      <div className="max-w-6xl w-full mx-auto px-4 md:px-6 flex flex-col justify-center h-full py-4 md:py-8 min-h-0">
        
        {/* 상단 타이틀 레이어 (채용 명분 강조) */}
        <div className="text-center mb-6 md:mb-10 flex-shrink-0">
          <span className="text-xs md:text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            모두베스트케어 크루 독점 혜택
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 mt-2.5 leading-tight">
            기술 교육부터 일거리 배정까지 <br className="md:hidden"/>
            <span className="text-emerald-600">본사가 직접 책임집니다</span>
          </h2>
          <p className="text-gray-500 mt-2 text-xs md:text-sm break-keep">
            단순 기술 전수가 아닙니다. 당사의 소속 프로 기사로서 자립할 수 있는 최고의 환경을 제공합니다.
          </p>
        </div>

        {/* 2. [반응형 카드 그리드]:
            - 모바일(md 미만): 카드가 세로로 밀리지 않도록 overflow-x-auto를 줘서 가로 스와이프로 얇게 넘겨보게 최적화
            - 데스크톱(md): 2x2 그리드로 화면에 예쁘게 안착
        */}
        <div className="flex overflow-x-auto md:overflow-visible md:grid md:grid-cols-2 gap-4 md:gap-6 max-h-[60vh] pb-3 md:pb-0 scrollbar-hide no-scrollbar flex-row whitespace-nowrap md:whitespace-normal min-h-0 flex-1 md:flex-none">
          {BENEFITS.map((item) => (
            <div 
              key={item.id}
              className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-auto bg-gray-50 p-5 md:p-6 rounded-2xl border border-gray-100 flex flex-col justify-between group hover:border-emerald-500 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div>
                {/* 상단 뱃지 및 아이콘 묶음 */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-100/60 px-2.5 py-0.5 rounded-md">
                    {item.badge}
                  </span>
                  <span className="text-2xl group-hover:scale-110 transition-transform duration-200">
                    {item.icon}
                  </span>
                </div>
                
                {/* 제목 및 본문 (break-keep과 모바일용 text-xs/sm 가공) */}
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 whitespace-normal">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed whitespace-normal break-keep">
                  {item.desc}
                </p>
              </div>

              {/* 하단 백그라운드 넘버링 스펙 */}
              <div className="text-right mt-4 border-t border-gray-200/60 pt-2 flex-shrink-0">
                <span className="text-xl font-black text-gray-200 group-hover:text-emerald-200 transition-colors">
                  {item.id}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 3. 모바일 하단 가이드 가시성 향상 */}
        <div className="text-center mt-3 block md:hidden flex-shrink-0">
          <p className="text-gray-400 text-[10px]">
            👉 옆으로 밀어서 혜택 더 보기
          </p>
        </div>

      </div>
    </section>
  );
}