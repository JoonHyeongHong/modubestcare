import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function MobileMenu({
  isOpen,
  setIsOpen,
  menuConfig,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  menuConfig: { name: string; id: string }[];
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 1. 배경 어둡게 처리 (뒤쪽 콘텐츠 클릭 방지 및 블러 효과) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            // z-[150]으로 높여서 일반 Navbar보다 확실하게 위에 배치합니다.
            className="fixed inset-0 z-[150] bg-black/50 backdrop-blur-md md:hidden"
          />

          {/* 2. 우측에서 슬라이드 되어 들어오는 메뉴 패널 */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", bounce: 0, duration: 0.35 }}
            // ⚡ bg-white 뒤에 !important 역할을 하는 bg-opacity-100을 추가하고,
            // z-[160]으로 설정하여 투명한 Navbar나 본문 글자가 완벽히 가려지도록 만듭니다.
            className="fixed inset-y-0 right-0 z-[160] w-[80%] max-w-sm bg-white bg-opacity-100 shadow-2xl flex flex-col p-6 md:hidden rounded-l-2xl border-l border-slate-100"
          >
            {/* 상단 닫기 버튼 */}
            <div className="flex justify-end mb-6">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 text-slate-400 hover:text-slate-800 transition-colors"
                aria-label="메뉴 닫기"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* 메뉴 리스트 */}
            <div className="flex flex-col gap-2">
              {menuConfig.map((menu) => (
                <Link
                  key={menu.id}
                  href={`${menu.id}`}
                  onClick={() => setIsOpen(false)}
                  // text-slate-800으로 글자색을 명확히 주어 흰 배경에서 잘 보이게 합니다.
                  className="px-4 py-4 text-xl font-bold text-slate-800 hover:bg-slate-50 hover:text-[#1E3A8A] rounded-xl transition-all block"
                >
                  {menu.name}
                </Link>
              ))}
            </div>

            {/* 하단 고객센터 정보 */}
            <div className="mt-auto pt-8 border-t border-slate-100">
              <p className="text-sm text-slate-500 font-medium mb-1">
                고객센터
              </p>
              <a
                href="tel:010-1234-5678"
                className="text-xl font-black text-[#1E3A8A] block"
              >
                010-5171-3562
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
