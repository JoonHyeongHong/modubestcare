'use client';

export default function Portfolio() {
  // 임시 데이터 (나중에 워드프레스 API 데이터로 대체)
  const dummyPortfolios = Array(3).fill({
    title: "인천 OO구청 시스템 에어컨 45대 세척",
    content: "대강당 및 사무실 전수 분해 세척 완료. 야간 작업을 통해 업무 방해 없이 마무리했습니다."
  });

  return (
    <section id="portfolio" className="w-full h-screen flex flex-col items-center justify-center bg-white pt-20 scroll-mt-20 overflow-hidden">
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col h-full py-8">
        
        {/* 헤더 */}
        <div className="flex items-center justify-between mb-6 flex-shrink-0 border-b pb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">최근 작업 포트폴리오</h2>
            <p className="text-gray-500 text-sm mt-1">모두베스트케어의 생생한 현장 기록입니다.</p>
          </div>
          <button className="text-blue-600 font-bold text-sm hover:underline">전체보기</button>
        </div>

        {/* 포트폴리오 리스트 영역: flex-1과 내부 스크롤 적용 */}
        <div className="flex-1 min-h-0 overflow-y-auto pr-2 custom-scrollbar">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {dummyPortfolios.map((item, index) => (
              <div key={index} className="group bg-gray-50 p-5 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300">
                <div className="w-full aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                   {/* 실제 연동 시 img 태그로 교체 */}
                   <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">Work Image</div>
                </div>
                <h3 className="text-base font-bold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}