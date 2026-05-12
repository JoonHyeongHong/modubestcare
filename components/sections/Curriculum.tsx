'use client';

const COURSES = [
  { step: "01", title: "완전 분해 마스터", desc: "벽걸이부터 천장형 4Way까지, 전 기종 구조 이해 및 완전 분해 실습" },
  { step: "02", title: "고압 세척 및 보양", desc: "130bar 고압 세척기 컨트롤 및 현장 오염 방지를 위한 특수 보양 기술" },
  { step: "03", title: "현장 대처 로직", desc: "에러 코드 대응, 냉매 점검, 고객 응대 등 실전에서 발생하는 변수 해결" },
  { step: "04", title: "영업 및 마케팅", desc: "블로그 운영, 플레이스 세팅, 관공서 입찰 등 실제 오더를 따는 방법" },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="w-full h-screen flex flex-col items-center justify-center bg-white pt-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 w-full flex flex-col justify-center h-full">
        <div className="text-center mb-10 flex-shrink-0">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">실전 압축 커리큘럼</h2>
          <p className="text-gray-500 mt-3">기초부터 수익 창출까지, 단 2주면 충분합니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 flex-1 min-h-0 max-h-[60vh]">
          {COURSES.map((course) => (
            <div key={course.step} className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100 flex flex-col justify-between group hover:bg-emerald-600 transition-all duration-300">
              <span className="text-4xl font-black text-emerald-200 group-hover:text-emerald-400 transition-colors">{course.step}</span>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-white transition-colors">{course.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed group-hover:text-emerald-50 transition-colors break-keep">
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