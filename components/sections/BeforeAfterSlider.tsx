'use client';

import { useState } from 'react';

export default function BeforeAfterSlider() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    // 1. 모바일에서는 자연스러운 스크롤(min-h-screen), PC에서는 한 화면 고정(md:h-screen)
    <section 
      id="before-after" 
      className="w-full min-h-screen md:h-screen flex flex-col items-center justify-center bg-white pt-20 scroll-mt-20 overflow-hidden box-border"
    >
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col justify-center h-full py-4 md:py-8">
        
        {/* 텍스트 헤더 레이어 (flex-shrink-0으로 글자 보호) */}
        <div className="text-center mb-6 md:mb-8 flex-shrink-0">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-950 leading-tight">
            백문이 불여일견, <span className="text-blue-600">압도적인 세척 결과</span>
          </h2>
          <p className="text-gray-500 mt-2 text-xs md:text-sm break-keep">
            슬라이더를 좌우로 움직여 보이지 않는 내부 오염이 제거된 모습을 확인해 보세요.
          </p>
        </div>

        {/* 2. 메인 이미지 컨테이너: 
            - 모바일에서는 세로로 길게 aspect-[4/5], PC(md)에서는 가로로 넓게 aspect-[21/9]
            - max-h 단계를 모바일[45vh], PC[50vh]로 이중 제어하여 화면 탈출 방지
        */}
        <div className="relative w-full aspect-[4/5] md:aspect-[21/9] max-h-[45vh] md:max-h-[50vh] rounded-2xl overflow-hidden shadow-xl bg-gray-100 select-none group mx-auto flex-1 md:flex-none">
          
          {/* 깨끗한 세척 후 (After) 배경 이미지 */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://placehold.co/1200x850/10B981/FFFFFF?text=AFTER%5Cn(Clean+State)')" 
            }}
          ></div>

          {/* 오염된 세척 전 (Before) 덮개 이미지 */}
          <div 
            className="absolute inset-0 bg-cover bg-center border-r border-white/40"
            style={{ 
              backgroundImage: "url('https://placehold.co/1200x850/374151/FFFFFF?text=BEFORE%5Cn(Dirty+State)')",
              clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`
            }}
          ></div>

          {/* 모바일 가독성을 위해 상단 뱃지 텍스트 크기 최적화 */}
          <div className="absolute top-3 left-3 bg-black/60 text-white px-2 py-1 rounded text-[10px] md:text-xs font-bold backdrop-blur-xs">
            세척 전
          </div>
          <div className="absolute top-3 right-3 bg-blue-600/90 text-white px-2 py-1 rounded text-[10px] md:text-xs font-bold backdrop-blur-xs">
            세척 후
          </div>

          {/* 중앙 드래그 조절 핸들 바 */}
          <div 
            className="absolute top-0 bottom-0 w-0.5 bg-white shadow-[0_0_8px_rgba(0,0,0,0.4)] pointer-events-none"
            style={{ left: `calc(${sliderValue}% - 1px)` }}
          >
            {/* 모바일 터치 타겟 강화를 위해 핸들 구체 크기 튜닝 */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-lg flex items-center justify-center border border-gray-200">
              <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
              </svg>
            </div>
          </div>

          {/* invisible 투명 범주의 실제 컨트롤러 영역 (모바일 터치 감도 매끄럽게 제어) */}
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20 m-0"
          />
        </div>

        {/* 3. 모바일 하단 유저 가이드 캡션 추가 (터치 유도 명분) */}
        <div className="text-center mt-3 block md:hidden flex-shrink-0">
          <p className="text-gray-400 text-[11px] flex items-center justify-center gap-1">
            👆 이미지를 좌우로 밀어서 비교해 보세요
          </p>
        </div>

      </div>
    </section>
  );
}