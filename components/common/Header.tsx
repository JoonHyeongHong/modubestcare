"use client";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuConfig = [
    { name: "홈", id: "/" },
    { name: "서비스 단가", id: "/price" },
    { name: "작업 후기", id: "/review" },
    { name: "문의 게시판", id: "/inquiry" },
    { name: "자주 묻는 질문", id: "/faq" },
  ];

  return (
    <>
      {/* Navbar에는 햄버거 버튼 클릭 시 setIsMobileMenuOpen(true)를 하도록 프롭스 전달 */}
      <Navbar
        menuConfig={menuConfig}
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
      />

      {/* MobileMenu는 Navbar 밖에서 화면 전체를 덮도록 대기 */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        setIsOpen={setIsMobileMenuOpen}
        menuConfig={menuConfig}
      />
    </>
  );
}
