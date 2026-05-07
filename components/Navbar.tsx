'use client';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* 로고 영역 (클릭 시 맨 위로) */}
        <a href="#hero" className="text-xl font-extrabold text-blue-600 tracking-tight hover:opacity-80 transition">
          모두<span className="text-gray-800">베스트케어</span>
        </a>

        {/* 메뉴 영역 */}
        <div className="flex gap-6 text-sm font-medium text-gray-600">
          <a href="#calculator" className="hover:text-blue-600 transition">예상 견적</a>
          <a href="#contact" className="hover:text-blue-600 transition">견적 문의</a>
          <a href="#portfolio" className="hover:text-blue-600 transition">작업 후기</a>
        </div>
        
        {/* 강조 버튼 */}
        <a 
          href="#contact" 
          className="hidden md:inline-block bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition shadow-md"
        >
          무료 상담
        </a>
      </div>
    </nav>
  );
}