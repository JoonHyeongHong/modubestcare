'use client';

import { useActiveSection } from "@/hooks/useActiveSection";


interface NavbarProps {
  viewMode : 'b2b' | 'edu';
  setViewMode : (mode:'b2b' | 'edu') => void;
}

const menuConfig = {
  b2b: [
    { name: "서비스 소개", id: "hero" },
    {name : "세척 전후 비교", id: "before-after"},
    {name : "프로세스", id: "process"},
    { name: "예상 견적", id: "calculator" },
    { name: "견적 문의", id: "contact" },
    { name: "작업 후기", id: "portfolio" },
    { name: "자주 묻는 질문", id: "faq" },
  ],
  edu: [
    { name: "커리큘럼", id: "curriculum" },
    { name: "수강 혜택", id: "benefits" },
    { name: "수강 상담", id: "contact" },
    { name: "교육 후기", id: "reviews" },
  { name: "자주 묻는 질문", id: "faq" }
  ],
};

export default function Navbar({ viewMode, setViewMode }: NavbarProps) {
  const sectionIds = menuConfig[viewMode].map(m => m.id);
  const activeSection = useActiveSection(sectionIds);
    return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 */}
        <a href="#hero" className="text-xl font-bold text-blue-600">모두베스트케어</a>

        {/* 동적 메뉴 */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          {menuConfig[viewMode].map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              className={`relative py-2 transition-all duration-300 ${
                activeSection === menu.id 
                  ? "text-blue-600 font-bold" 
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              {menu.name}
              {/* 활성화된 메뉴 하단에 바 표시 (선택사항) */}
              {activeSection === menu.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 animate-in fade-in zoom-in duration-300" />
              )}
            </a>
          ))}
        </div>

    {/* 3. 우측 토글 스위치 영역 */}
    <div className="flex items-center">
      <div className="bg-gray-100 p-1 rounded-full shadow-inner flex relative w-44 md:w-56 h-10">
        {/* 스위치 배경 애니메이션 */}
        <div 
          className={`absolute top-1 bottom-1 w-[calc(50%-4px)] rounded-full transition-all duration-300 ease-in-out shadow-sm ${
            viewMode === 'b2b' ? 'bg-[#0F172A] left-1' : 'bg-[#10B981] left-[calc(50%+4px)]'
          }`}
        ></div>

        {/* B2B 모드 버튼 */}
        <button 
          onClick={() => setViewMode('b2b')}
          className={`flex-1 flex items-center justify-center text-[10px] md:text-sm font-bold z-10 transition-colors duration-300 ${
            viewMode === 'b2b' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          🏢 <span className="ml-1">B2B 세척</span>
        </button>

        {/* 교육 모드 버튼 */}
        <button 
          onClick={() => setViewMode('edu')}
          className={`flex-1 flex items-center justify-center text-[10px] md:text-sm font-bold z-10 transition-colors duration-300 ${
            viewMode === 'edu' ? 'text-white' : 'text-gray-500 hover:text-gray-900'
          }`}
        >
          🛠️ <span className="ml-1">창업 교육</span>
        </button>
      </div>
    </div>

  </div>
</nav>


  );
}