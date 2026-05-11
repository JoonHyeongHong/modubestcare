'use client';


interface NavbarProps {
  viewMode : 'b2b' | 'edu';
  setViewMode : (mode:'b2b' | 'edu') => void;
}

export default function Navbar({ viewMode, setViewMode }: NavbarProps) {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between gap-4">
    
    {/* 1. 로고 영역 (Flex-shrink-0으로 형태 유지) */}
    <div className="flex-shrink-0">
      <a href="#hero" className="text-xl font-extrabold text-blue-600 tracking-tight hover:opacity-80 transition">
        모두<span className="text-gray-800">베스트케어</span>
      </a>
    </div>

    {/* 2. 메뉴 영역 (데스크톱에서만 노출, 중앙 정렬) */}
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
      <a href="#calculator" className="hover:text-blue-600 transition">예상 견적</a>
      <a href="#contact" className="hover:text-blue-600 transition">견적 문의</a>
      <a href="#portfolio" className="hover:text-blue-600 transition">작업 후기</a>
      <a href="#contact" className="hover:text-blue-600 transition">
        무료 상담
      </a>
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