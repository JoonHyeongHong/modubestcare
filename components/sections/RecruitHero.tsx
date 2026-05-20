'use client';

export default function RecruitHero() {
  const KAKAO_CHAT_URL = "https://open.kakao.com/o/s03CkhJc";

  return (
    // 1. 모바일에서는 자연스럽게 늘어나고(min-h-screen), PC(md)에서는 꽉 찬 한 화면(md:h-screen)
    <section 
      id="hero" 
      className="w-full min-h-screen md:h-screen flex items-center justify-center bg-slate-900 text-white relative overflow-hidden pt-16 box-border"
    >
      {/* 백그라운드 은은한 기하학 그래픽 효과 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.12),transparent_45%)]"></div>
      
      <div className="max-w-5xl w-full mx-auto px-6 flex flex-col justify-center items-center text-center h-full relative z-10 py-12 md:py-0">
        
        {/* ⚡ 1. 핵심 가치 명분 뱃지 */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 font-bold text-xs md:text-sm tracking-wide mb-4 animate-fade-in flex-shrink-0">
          🛠️ 모두베스트케어 가전 세척 크루 정시 채용
        </div>

        {/* ⚡ 2. 메인 슬로건 (비수기 타파 및 안정성 강조) */}
        <h1 className="text-2xl sm:text-3.5xl md:text-5xl font-black text-white leading-tight tracking-tight mb-4 md:mb-6 break-keep flex-shrink-0">
          비수기 없는 가전 세척 기술,<br />
          <span className="text-emerald-400">배우고 즉시 '소속 기사'로 활동</span>하세요.
        </h1>

        {/* ⚡ 3. 서브 카피 (구직자가 가장 원하는 조건 요약) */}
        <p className="text-slate-400 text-xs sm:text-sm md:text-lg max-w-2xl leading-relaxed mb-8 md:mb-10 break-keep flex-shrink-0">
           <span className="text-slate-200 font-semibold">영업 압박 없는 오더 무상 배정</span>부터 
          여름철 에어컨은 물론 가을·겨울 세탁기, 냉장고, 공기청정기 마스터까지. 
          모두베스트케어가 사계절 안정적인 고수익 커리어를 직접 책임집니다.
        </p>

        {/* ⚡ 4. 행동 유도 버튼 묶음 (반응형 모바일 터치 대응) */}
        <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3 items-center justify-center flex-shrink-0">
          {/* 메인 액션: 간편 지원서 스크롤 이동 */}
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold rounded-xl shadow-lg hover:shadow-emerald-900/20 active:scale-95 transition-all text-center text-sm md:text-base"
          >
            소속 기사 간편 지원하기 ➔
          </a>
          
          {/* 서브 액션: 카톡 1:1 직통 문의 */}
          <a
            href={KAKAO_CHAT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#FEE500] text-[#191919] font-extrabold rounded-xl shadow-md active:scale-95 transition-all text-center text-sm md:text-base flex items-center justify-center gap-2"
          >
            💬 카톡으로 조건 바로 물어보기
          </a>
        </div>

        {/* ⚡ 5. 신뢰도를 주는 3단 팩트 요약 레이어 (하단 안착) */}
        <div className="grid grid-cols-3 gap-2 md:gap-8 w-full max-w-3xl mt-12 md:mt-16 border-t border-slate-800 pt-6 md:pt-8 flex-shrink-0">
          <div className="text-center">
            <div className="text-lg md:text-3xl font-black text-white">100%</div>
            <div className="text-[10px] md:text-xs text-slate-500 mt-1">소속 기사 오더 배정</div>
          </div>
          <div className="text-center border-x border-slate-800">
            <div className="text-lg md:text-3xl font-black text-emerald-400">사계절</div>
            <div className="text-[10px] md:text-xs text-slate-500 mt-1">비수기 없는 전 가전 역량</div>
          </div>
          <div className="text-center">
            <div className="text-lg md:text-3xl font-black text-white">LG 규격</div>
            <div className="text-[10px] md:text-xs text-slate-500 mt-1">대기업 순정 매뉴얼 이수</div>
          </div>
        </div>

      </div>
    </section>
  );
}