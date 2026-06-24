"use client";

export default function KakaoButton() {
  const KAKAO_CHAT_URL = "https://open.kakao.com/o/s03CkhJc";

  return (
    <a
      href={KAKAO_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      // 모바일은 살짝 띄우고, PC는 넉넉하게 띄움
      className="fixed bottom-6 right-5 md:bottom-8 md:right-8 z-50 group flex items-center gap-3 select-none"
    >
      {/* PC용 툴팁 (말풍선) - 기존 코드 유지 */}
      <div className="hidden md:block bg-white text-gray-800 px-4 py-2.5 rounded-2xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-100 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        실시간 1:1 친절 상담 💬
      </div>

      {/* ⚡ 반응형 카카오 버튼 본체 */}
      <div
        className="bg-[#FEE500] text-[#3C1E1E] shadow-[0_4px_16px_rgba(0,0,0,0.15)] hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center
        /* 모바일: 텍스트를 포함하는 둥근 알약 형태 (px-5 py-3) */
        rounded-full px-5 py-3.5 
        /* PC(md): 텍스트 숨기고 완벽한 원형 형태 (w-16 h-16) */
        md:w-16 md:h-16 md:p-0
      "
      >
        <svg
          className="w-6 h-6 md:w-8 md:h-8 flex-shrink-0"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M12 3c-4.97 0-9 3.134-9 7 0 2.474 1.65 4.643 4.133 5.921l-.8 2.94c-.06.22.19.4.37.27l3.45-2.288c.6.084 1.22.127 1.847.127 4.97 0 9-3.134 9-7s-4.03-7-9-7z" />
        </svg>

        {/* ⚡ 모바일에서만 보이는 텍스트 */}
        <span className="md:hidden font-black text-sm ml-2 tracking-tight">
          카톡 상담
        </span>
      </div>
    </a>
  );
}
