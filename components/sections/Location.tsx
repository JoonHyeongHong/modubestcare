'use client';

export default function Location() {
  // 실제 사무실/교육장 주소 및 지도 주소 매핑
  const JIDO_URL = "https://map.naver.com/"; // 네이버 지도 공유 링크 주소 넣는 곳

  return (
    <section 
      id="location" 
      className="w-full min-h-screen md:h-screen flex flex-col items-center justify-center bg-white pt-20 pb-10 box-border"
    >
      <div className="max-w-4xl w-full mx-auto px-4 flex flex-col justify-center h-full min-h-0">
        
        {/* 상단 타이틀 */}
        <div className="text-center mb-6 flex-shrink-0">
          <span className="text-xs font-bold bg-slate-100 text-slate-700 px-2.5 py-1 rounded-full">
            LOCATION
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 mt-2 tracking-tight">
            모두베스트케어 오시는 길
          </h2>
          <p className="text-gray-500 mt-1 text-xs md:text-sm">
            소속 기사 이론 교육 및 완전 분해 실습이 이루어지는 본사 센터입니다.
          </p>
        </div>

        {/* 메인 주소 및 시각 레이아웃 박스 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch flex-1 md:flex-none">
          
          {/* 왼쪽: 가상의 지도 플레이스홀더 (모바일 스크롤 시 지도에 손가락이 갇히는 현상 방지) */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[200px] relative overflow-hidden group">
            <div className="absolute inset-0 bg-cover bg-center opacity-40 blur-xs" style={{ backgroundImage: "url('https://placehold.co/600x400/E2E8F0/475569?text=Map+Image')" }}></div>
            <div className="relative z-10 space-y-3">
              <span className="text-3xl">📍</span>
              <p className="text-xs md:text-sm text-gray-600 font-bold break-keep">
                인천 서구 청라 / 김포 고촌 인근 <br /> 모두베스트케어 가전 세척 교육장
              </p>
              <a 
                href={JIDO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white font-bold text-xs rounded-xl shadow-md active:scale-95 transition-all"
              >
                🗺️ 네이버 지도로 큰 화면 보기
              </a>
            </div>
          </div>

          {/* 오른쪽: 상세 텍스트 정보 피드 */}
          <div className="bg-slate-50/60 border border-slate-100 rounded-2xl p-5 md:p-6 flex flex-col justify-center space-y-4 text-xs md:text-sm">
            <div>
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5 text-sm">
                <span>🏢</span> 상세 주소
              </h4>
              <p className="text-gray-600 leading-relaxed font-medium">
                인천광역시 서구 청라라임로 OOO, OO타워 O층 <br />
                <span className="text-[11px] text-gray-400 font-normal">(김포 거점 기사 실습실 동시 운영)</span>
              </p>
            </div>

            <div className="border-t border-gray-200/60 pt-3">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5 text-sm">
                <span>🚗</span> 교통 및 주차 안내
              </h4>
              <p className="text-gray-600 leading-relaxed break-keep">
                <strong className="text-gray-800 font-semibold">[지하철]</strong> 인천2호선 가정역 또는 7호선 연장선 인근 <br />
                <strong className="text-gray-800 font-semibold">[주차]</strong> 소속 기사 면접 및 장비 수령 방문 시 건물 내 무상 주차 지원 가능 (차량 방문 편리)
              </p>
            </div>

            <div className="border-t border-gray-200/60 pt-3">
              <h4 className="font-bold text-gray-900 mb-1 flex items-center gap-1.5 text-sm">
                <span>📞</span> 방문 및 면접 문의
              </h4>
              <p className="text-gray-600 font-medium">
                전화 번호: <span className="text-gray-900 font-bold">010-0000-0000</span> <br />
                <span className="text-[11px] text-gray-400 font-normal">* 상시 현장 교육이 진행 중이므로, 사전 예약 후 방문 부탁드립니다.</span>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}