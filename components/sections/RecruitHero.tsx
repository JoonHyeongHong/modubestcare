'use client';

import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';

export default function RecruitHero() {
  const { ref, className } = useScrollFadeIn();

  return (
    // ⚡ 수정 포인트: pt-28 md:pt-40 이었던 상단 여백을 pt-20 md:pt-24 로 대폭 줄였습니다.
    // 하단 여백도 pb-20 md:pb-32 에서 pb-16 md:pb-20 으로 줄여 컴팩트하게 맞췄습니다.
    <section 
      id="hero" 
      ref={ref}
      className={`w-full bg-slate-900 text-white relative overflow-hidden pt-20 pb-16 md:pt-24 md:pb-20 box-border ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.08),transparent_40%)]"></div>
      
      <div className="max-w-5xl w-full mx-auto px-6 flex flex-col justify-center items-center text-center relative z-10">
        
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 font-extrabold text-xs md:text-sm tracking-wide mb-6 md:mb-8 shadow-sm">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          TECHNICAL CREW 채용 및 기술 교육 마스터 과정
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.3] md:leading-[1.25] tracking-tight mb-6 md:mb-8 break-keep">
          단순 세척을 넘어 <span className="text-emerald-400">기술 자립</span>으로,<br />
          사계절 안정적인 <br/>수익의 주인공이 되세요.
        </h1>

        <p className="text-slate-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl leading-relaxed mb-8 md:mb-10 break-keep font-medium">
          
          여름철 에어컨 특수는 물론 가을·겨울 세탁기, 냉장고, 공기청정기 완전분해 마스터까지.<br />
          본사가 직접 책임지는 탄탄한 인프라 속에서 프로 기사로 정착할 크루를 모십니다.
        </p>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-4 items-center justify-center">
          <a
            href="#contact"
            className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-black rounded-xl shadow-xl shadow-emerald-950/50 hover:scale-105 active:scale-95 transition-all text-center text-base tracking-wide"
          >
            소속 크루 간편 지원하기 ➔
          </a>
        </div>

        {/* ⚡ 하단 3단 지표 역시 mt-12 md:mt-16 이었던 마진을 mt-10 md:mt-12 로 약간 좁혔습니다. */}
        <div className="grid grid-cols-3 gap-2 md:gap-8 w-full max-w-4xl mt-10 md:mt-12 border-t border-slate-800/80 pt-6 md:pt-8">
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">
              100%
            </div>
            <div className="text-[11px] md:text-sm text-slate-500 mt-2 font-semibold break-keep">
              안정적인 무상 오더 공급
            </div>
          </div>
          
          <div className="text-center border-x border-slate-800/80 px-2">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-emerald-400 tracking-tight">
              사계절
            </div>
            <div className="text-[11px] md:text-sm text-slate-500 mt-2 font-semibold break-keep">
              비수기 없는 전 가전 라인업
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white tracking-tight">
              정석 규격
            </div>
            <div className="text-[11px] md:text-sm text-slate-500 mt-2 font-semibold break-keep">
              대기업 가전 구조 매뉴얼 이수
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}