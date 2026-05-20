'use client';

const COURSES = [
  { step: "01", title: "에어컨 전 기종 마스터", desc: "벽걸이형, 스탠드형부터 시스템 천장형(1Way/4Way)까지 전 기종 완전 분해 및 고압 세척 기술 완벽 습득" },
  { step: "02", title: "세탁기·냉장고 완전 분해", desc: "일반/드럼 세탁기 튜브 분해 및 냉장고 열교환기·팬 세척 등 비수기 핵심 수익 모델 분해 실습" },
  { step: "03", title: "공기청정기 및 생활가전", desc: "사계절 내내 오더가 끊이지 않는 공기청정기 오염 진단, 특수 보양 및 정석 클리닝 프로세스 이수" },
  { step: "04", title: "현장 CS 및 서비스 마인드", desc: "대기업 규격의 정중한 고객 응대 로직, 사후 A/S 예방 조치 및 모두베스트케어 현장 실전 투입 준비" },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="w-full min-h-screen md:h-screen flex flex-col items-center justify-center bg-white pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 md:px-6 w-full flex flex-col justify-center h-full py-4 md:py-8">
        <div className="text-center mb-6 md:mb-10 flex-shrink-0">
          <span className="text-xs md:text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
            비수기 제로 인력 양성
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-950 mt-2.5">
            LG 전 가전제품 <span className="text-emerald-600">올인원 마스터 교육</span>
          </h2>
          <p className="text-gray-500 mt-2 text-xs md:text-sm">단 하나의 품목에 의존하지 않는 전천후 베테랑 기술자로 육성합니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 flex-1 min-h-0 max-h-[60vh] overflow-y-auto lg:overflow-hidden pr-1 custom-scrollbar">
          {COURSES.map((course) => (
            <div key={course.step} className="bg-emerald-50/50 p-6 md:p-8 rounded-2xl border border-emerald-100/60 flex flex-col justify-between group hover:bg-emerald-600 transition-all duration-300">
              <span className="text-3xl md:text-4xl font-black text-emerald-200 group-hover:text-emerald-400 transition-colors">{course.step}</span>
              <div className="mt-4">
                <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 group-hover:text-white transition-colors">{course.title}</h3>
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed group-hover:text-emerald-50 transition-colors break-keep">
                  {course.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}