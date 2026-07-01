import Link from "next/link";
import { RiKakaoTalkFill } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineAssignment } from "react-icons/md";

export default function FloatingButtons() {
  return (
    // items-end를 주어 버튼들이 우측 정렬된 상태에서 왼쪽으로 늘어나게 합니다.
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50 items-end">
      {/* 1. 카카오톡 상담 버튼 */}
      <a
        href="http://pf.kakao.com/_여기에_카톡_ID_입력"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-end w-14 hover:w-44 h-14 bg-[#FEE500] text-[#191919] rounded-full shadow-lg transition-all duration-300 overflow-hidden"
        aria-label="카카오톡 상담"
      >
        {/* 마우스 hover 시 나타날 텍스트 (기본 hidden, group-hover 시 block) */}
        <span className="hidden group-hover:block whitespace-nowrap text-sm font-semibold pl-5 pr-2 animate-fade-in">
          카카오톡 문의
        </span>
        {/* 우측에 고정될 아이콘 */}
        <div className="flex items-center justify-center w-14 h-14 shrink-0">
          <RiKakaoTalkFill size={28} />
        </div>
      </a>

      {/* 2. 전화 상담 버튼 */}
      <a
        href="tel:010-1234-5678"
        className="group flex items-center justify-end w-14 hover:w-44 h-14 bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300 overflow-hidden"
        aria-label="전화 상담"
      >
        <span className="hidden group-hover:block whitespace-nowrap text-sm font-semibold pl-5 pr-3 animate-fade-in">
          전화하기
        </span>
        <div className="flex items-center justify-center w-14 h-14 shrink-0">
          <FaPhoneAlt size={20} />
        </div>
      </a>

      {/* 3. 온라인 접수(게시판) 버튼 */}
      <Link
        href="/inquiry"
        className="group flex items-center justify-end w-14 hover:w-44 h-14 bg-gray-700 text-white rounded-full shadow-lg transition-all duration-300 overflow-hidden"
        aria-label="온라인 문의"
      >
        <span className="hidden group-hover:block whitespace-nowrap text-sm font-semibold pl-5 pr-2 animate-fade-in">
          문의하기
        </span>
        <div className="flex items-center justify-center w-14 h-14 shrink-0">
          <MdOutlineAssignment size={24} />
        </div>
      </Link>
    </div>
  );
}
