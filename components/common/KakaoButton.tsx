'use client';

export default function KakaoButton() {
  const KAKAO_CHAT_URL = "https://open.kakao.com/o/s03CkhJc";

  return (
    <a
      href={KAKAO_CHAT_URL}
      target="_blank"
      rel="noopener noreferrer"
      // 1. 모바일(bottom-4 right-4)과 PC(bottom-8 right-8)의 여백 차별화
      className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 group flex items-center gap-2 md:gap-3 select-none"
    >
      {/* 도움말 말풍선: 
          - md:block을 주어 PC에서만 마우스 오버 시 나타나도록 제어 (모바일은 원천 차단)
          - 그림자 및 보더 최적화
      */}
      <div className="hidden md:block bg-white text-gray-800 px-4 py-2 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.1)] border border-gray-100 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        실시간 1:1 친절 상담 💬
      </div>
      
      {/* 카카오톡 아이콘 버튼:
          - 모바일에서는 w-12 h-12 (48px) / 아이콘 24px 로 축소하여 본문 방해 최소화
          - PC(md) 환경에서는 원래 크기인 w-16 h-16 (64px) / 아이콘 32px 유지
          - 모바일 터치 피드백을 위해 active:scale-95 추가
      */}
      <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FEE500] rounded-full shadow-[0_4px_16px_rgba(0,0,0,0.15)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200">
        {/* 모바일과 PC에서 SVG 크기도 최적화 */}
        <svg 
          className="w-6 h-6 md:w-8 md:h-8" 
          viewBox="0 0 24 24" 
          fill="#3C1E1E"
        >
          <path d="M12 3c-4.97 0-9 3.134-9 7 0 2.474 1.65 4.643 4.133 5.921l-.8 2.94c-.06.22.19.4.37.27l3.45-2.288c.6.084 1.22.127 1.847.127 4.97 0 9-3.134 9-7s-4.03-7-9-7z" />
        </svg>
      </div>
    </a>
  );
}