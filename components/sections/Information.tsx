'use client';

import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

export default function Information() {
  const { ref, className } = useScrollFadeIn();

  return (
    // ⚡ 최상단 래퍼에 ref와 className을 적용합니다.
    <div ref={ref} className={`w-full flex flex-col ${className}`}>
      
      <section 
        id="hero" 
        className="relative bg-[#0F172A] text-white w-full pt-28 pb-16 md:pt-36 md:pb-24 px-6 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 text-center md:text-left z-10 w-full">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black mb-5 md:mb-6 leading-[1.35] md:leading-[1.2] break-keep tracking-tight">
              호흡기를 위협하는 곰팡이,<br />
              <span className="text-[#FBBF24]">완전 분해 세척</span>이 답입니다.
            </h1>
            <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-10 break-keep font-medium">
              인천/부천 지역 관공서, 지식산업센터, 상가 대량 유지보수 전문
            </p>
            
            <div className="flex justify-center md:justify-start">
              <a 
                href="#contact" 
                className="bg-white text-[#0F172A] px-8 py-3.5 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-slate-100 hover:scale-105 transition-all shadow-xl"
              >
                B2B 전담팀 견적 문의
              </a>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md md:max-w-none mx-auto">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 border border-slate-800">
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=tjOr-MBFc-k&controls=0&modestbranding=1"
                className="absolute top-0 left-0 w-full h-full object-cover"
                allow="autoplay; encrypted-media"
                title="모두홈케어 세척 공정 안내"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white border-b border-slate-100 py-8 md:py-12 px-4 w-full">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid grid-cols-3 gap-2 md:gap-6 text-center divide-x divide-slate-100">
            {[
              { icon: '🏢', title: '대량 세척 특화', desc: '관공서 및 상가 전문' },
              { icon: '🛡️', title: '사후 관리 보장', desc: 'AS 및 정기 유지보수' },
              { icon: '⚡', title: '신속 정확한 공정', desc: '업무 지장 없는 작업' }
            ].map((item, i) => (
              <div key={i} className="group px-2 md:px-4">
                <div className="text-3xl md:text-4xl mb-2 md:mb-3 transform group-hover:scale-110 transition-transform">{item.icon}</div>
                <h3 className="font-extrabold text-slate-900 text-sm md:text-lg tracking-tight">{item.title}</h3>
                <p className="text-[11px] md:text-sm text-slate-500 hidden sm:block mt-1 md:mt-2 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
    </div>
  )
}