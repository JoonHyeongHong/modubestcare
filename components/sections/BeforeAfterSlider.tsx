'use client';

import { useState } from 'react';

export default function BeforeAfterSlider() {
  const [sliderValue, setSliderValue] = useState(50);

  return (
    // 1. ID를 다시 부여하고, 배경색과 높이를 설정합니다.
    // h-full을 주어 부모의 snap-start 컨테이너 높이를 꽉 채우게 합니다.
    <section id="before-after" className="bg-white w-full h-full flex items-center justify-center overflow-hidden">
      
      {/* 2. 내부 컨텐츠 영역: 패딩을 최소화하여 화면 응축 */}
      <div className="w-full max-w-5xl mx-auto px-6 flex flex-col justify-center">
        
        {/* 텍스트 영역 */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 leading-tight">
            백문이 불여일견, <span className="text-[#2563EB]">압도적인 세척 결과</span>
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base break-keep">
            화살표를 드래그하여 세척 전후의 차이를 확인해보세요.
          </p>
        </div>

        {/* 이미지 컨테이너: 높이를 화면의 50% 이하로 제한(max-h-[50vh]) */}
        <div className="relative w-full aspect-[16/10] md:aspect-[21/9] max-h-[50vh] rounded-2xl overflow-hidden shadow-2xl bg-gray-100 select-none group mx-auto">
          
          {/* After Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: "url('https://placehold.co/1200x600/10B981/FFFFFF?text=AFTER%5Cn(Clean+State)')" 
            }}
          ></div>

          {/* Before Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center border-r-2 border-white/50"
            style={{ 
              backgroundImage: "url('https://placehold.co/1200x600/374151/FFFFFF?text=BEFORE%5Cn(Dirty+State)')",
              clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)`
            }}
          ></div>

          {/* 라벨 */}
          <div className="absolute top-3 left-3 bg-black/60 text-white px-2 py-1 rounded text-[10px] md:text-xs font-bold backdrop-blur-sm">
            세척 전 (Before)
          </div>
          <div className="absolute top-3 right-3 bg-[#2563EB]/90 text-white px-2 py-1 rounded text-[10px] md:text-xs font-bold backdrop-blur-sm">
            세척 후 (After)
          </div>

          {/* 드래그 핸들 */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] pointer-events-none"
            style={{ left: `calc(${sliderValue}% - 2px)` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 bg-white rounded-full shadow-xl flex items-center justify-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" transform="rotate(90 12 12)" />
              </svg>
            </div>
          </div>

          <input 
            type="range" 
            min="0" 
            max="100" 
            value={sliderValue}
            onChange={(e) => setSliderValue(Number(e.target.value))}
            className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10 m-0"
          />
        </div>
      </div>
    </section>
  );
}