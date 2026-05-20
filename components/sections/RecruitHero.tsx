'use client';

export default function RecruitHero() {
  return (
    <section 
      id="hero" 
      className="w-full min-h-screen md:h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden pt-20 md:pt-24 box-border"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_45%)]"></div>
      
      {/* 부모 컨테이너에 약간의 기본 패딩(py-8)을 주어 위아래 최소한의 방어막 형성 */}
      <div className="max-w-5xl w-full mx-auto px-6 flex flex-col justify-center items-center text-center h-full relative z-10 py-8 min-h-0">
        
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 font-bold text-xs md:text-sm tracking-wide mb-3 md:mb-4 animate-fade-in flex-shrink-0">
          🛠️ 모두베스트케어 가전 세척 기사 정시 채용
        </div>

        <h1 className="text-2xl sm:text-3.5xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight mb-3 md:mb-4 break-keep flex-shrink-0">
          비수기 없는 가전 세척 기술,<br />
          교육을 통해 <span className="text-emerald-400">'모두베스트케어 소속 세척 기사'</span>로<br/> 활동하세요.
        </h1>

        <p className="text-slate-400 text-xs sm:text-sm md:text-base lg:text-lg max-w-2xl leading-relaxed mb-6 md:mb-7 break-keep flex-shrink-0">
           <span className="text-slate-200 font-semibold">영업 압박 없는 오더 무상 배정</span>부터 
          여름철 에어컨은 물론 가을·겨울 세탁기, 냉장고, 공기청정기 마스터까지. 
          모두베스트케어가 사계절 안정적인 고수익 커리어를 직접 책임집니다.
        </p>

        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-center justify-center flex-shrink-0">
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-emerald-900/20 active:scale-95 transition-all text-center text-sm md:text-base"
          >
            소속 기사 간편 지원하기 ➔
          </a>
        </div>

        {/* ⚡ 수정 포인트: 여기에 mb-8 md:mb-12 (바닥 투명 쿠션)를 추가하여 전체를 위로 살짝 띄움 */}
        <div className="grid grid-cols-3 gap-2 md:gap-8 w-full max-w-3xl mt-8 md:mt-10 lg:mt-12 mb-8 md:mb-12 border-t border-slate-800 pt-5 md:pt-6 flex-shrink-0">
          <div className="text-center">
            <div className="text-lg md:text-2xl lg:text-3xl font-black text-white">100%</div>
            <div className="text-[10px] md:text-xs text-slate-500 mt-1">소속 기사 오더 배정</div>
          </div>
          <div className="text-center border-x border-slate-800">
            <div className="text-lg md:text-2xl lg:text-3xl font-black text-emerald-400">사계절</div>
            <div className="text-[10px] md:text-xs text-slate-500 mt-1">비수기 없는 전 가전 역량</div>
          </div>
          <div className="text-center">
            <div className="text-lg md:text-2xl lg:text-3xl font-black text-white">LG 규격</div>
            <div className="text-[10px] md:text-xs text-slate-500 mt-1">대기업 순정 매뉴얼 이수</div>
          </div>
        </div>

      </div>
    </section>
  );
}