"use client";

import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion"; // framer-motion import
import { themeConfig } from "@/lib/theme";

// 메뉴 구성 객체 정의
const menuConfig = {
  b2b: [
    { name: "서비스 소개", id: "hero" },
    { name: "세척 퀄리티", id: "before-after" },
    { name: "실시간 견적", id: "calculator" },
    { name: "최근 작업", id: "portfolio" },
    { name: "자주 묻는 질문", id: "faq" },
    { name: "견적 문의", id: "contact" },
  ],
  edu: [
    { name: "모집 안내", id: "hero" },
    { name: "교육 과정", id: "curriculum" },
    { name: "자주 묻는 질문", id: "faq" },
    { name: "지원하기", id: "contact" },
    { name: "찾아오시는 길", id: "location" },
  ],
};

export default function Navbar() {
  const pathname = usePathname();
  const viewMode = pathname.startsWith("/edu") ? "edu" : "b2b";
  const theme = themeConfig[viewMode];

  const sectionIds = menuConfig[viewMode].map((m) => m.id);
  const activeSection = useActiveSection(sectionIds);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const targetPath = viewMode === "b2b" ? "/" : "/edu";
    if (pathname === targetPath) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-[100] select-none border-b border-white/10 shadow-lg ${theme.navBg}`}
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* 1. 로고 영역 (고정 너비 240px) */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <Link
            href={viewMode === "b2b" ? "/" : "/edu"}
            onClick={handleLogoClick}
            className="flex items-center gap-2"
          >
            <div
              className={`w-7 h-7 rounded-lg ${theme.accentBg} flex items-center justify-center text-white font-black text-sm hidden md:flex`}
            >
              M
            </div>

            <div className="flex items-center gap-1.5 whitespace-nowrap">
              <span className="text-xl font-extrabold text-white tracking-tight">
                모두홈케어
              </span>

              {viewMode === "edu" && (
                <span
                  className={`${theme.accentText} text-xl font-extrabold tracking-tight hidden md:flex`}
                >
                  아카데미
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* 2. 중앙 메뉴 영역 (flex-1) */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 font-medium justify-center flex-1 px-10">
          {menuConfig[viewMode].map((menu) => (
            <a
              key={menu.id}
              href={`#${menu.id}`}
              className={`relative py-2 transition-colors duration-300 ${
                activeSection === menu.id
                  ? `font-black ${theme.textActive} `
                  : `${theme.textHover}`
              }`}
            >
              {menu.name}

              {/* AnimatePresence로 감싸서, activeSection이 바뀌면 이전 span을 즉시 exit시킴 */}
              <AnimatePresence mode="wait">
                {activeSection === menu.id && (
                  <motion.span
                    key={menu.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }} // 상태 해제 시 즉시 페이드 아웃
                    transition={{ duration: 0.15 }} // 반응 속도를 더 빠르게 설정
                    className={`absolute bottom-0 left-0 w-full h-0.5 ${theme.accentBg} rounded-full ${theme.glowShadow}`}
                  />
                )}
              </AnimatePresence>
            </a>
          ))}
        </div>

        {/* 3. 우측 토글 영역 (고정 너비 240px) */}
        <div className="flex items-center justify-end">
          <div
            className={`${theme.toggleWrapBg} p-1.5 rounded-full flex relative lg:w-[240px] h-12 border border-white/5`}
          >
            <div
              className={`absolute hidden lg:flex top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] ${theme.accentBg} rounded-full transition-transform duration-500 ease-out ${viewMode === "b2b" ? "translate-x-0" : "translate-x-[114px]"}`}
            />
            <Link
              href="/"
              className={`flex-1 flex items-center justify-center gap-1.5 font-bold z-10 text-white  ${viewMode === "b2b" ? "hidden lg:flex" : `lg:text-white/40 `}`}
            >
              <span className="hidden lg:flex">🏢</span> 단체 접수
            </Link>
            <Link
              href="/edu"
              className={`flex-1 flex items-center justify-center gap-1.5 font-bold z-10  text-white  ${viewMode === "edu" ? "text-white hidden lg:flex" : "lg:text-white/40"}`}
            >
              <span className="hidden lg:flex">🛠️</span>
              아카데미
            </Link>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            className={`fixed inset-0 ${theme.drawerBg} z-[110] flex flex-col p-6 md:hidden`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="self-end text-white text-3xl mb-10"
            >
              ✕
            </button>
            <div className="flex flex-col gap-8 text-2xl font-bold text-white">
              {menuConfig[viewMode].map((menu) => (
                <a
                  key={menu.id}
                  href={`#${menu.id}`}
                  onClick={() => setIsOpen(false)}
                >
                  {menu.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
