'use client'

export default function KakaoButton() {
    const KAKAO_CHAT_URL = "https://open.kakao.com/o/s03CkhJc";

    return (
        <a
      href={KAKAO_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group flex items-center gap-3"
    >
      {/* 도움말 말풍선 (마우스 올리면 등장) */}
      <div className="bg-white text-gray-800 px-4 py-2 rounded-lg shadow-xl border border-gray-100 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        에어컨 세척 1:1 상담 💬
      </div>
      
      {/* 카카오톡 아이콘 버튼 */}
      <div className="w-16 h-16 bg-[#FEE500] rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="#3C1E1E">
          <path d="M12 3c-4.97 0-9 3.134-9 7 0 2.474 1.65 4.643 4.133 5.921l-.8 2.94c-.06.22.19.4.37.27l3.45-2.288c.6.084 1.22.127 1.847.127 4.97 0 9-3.134 9-7s-4.03-7-9-7z" />
        </svg>
      </div>
    </a>    )
}