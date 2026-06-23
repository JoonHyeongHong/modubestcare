import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'], // 얇은 글씨부터 아주 두꺼운 글씨까지
  display: 'swap', // 폰트가 로드되기 전에는 시스템 폰트로 대체하여 빠르게 텍스트를 보여줌
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    // 하위 페이지에서 제목을 별도로 지정하지 않으면 default가 뜹니다.
    // 하위 페이지에서 제목을 "아카데미"로 지정하면 "아카데미 | 모두홈케어"로 자동 완성됩니다.
    template: "%s | 모두홈케어",
    default: "모두홈케어 - 기업/관공서 전문 에어컨 세척",
  },
  description: "인천 및 수도권 대량 에어컨 세척, LG 시스템 에어컨 유지보수 및 홈케어 기사 양성 전문 아카데미 모두홈케어입니다.",
keywords: [
    "시스템 에어컨 세척",
    "인천 에어컨 청소",
    "관공서 에어컨 유지보수",
    "B2B 냉난방기 관리",
    "에어컨 청소 창업",
    "홈케어 기사 교육"
  ],
  openGraph: {
    title: "모두홈케어",
    description: "기업/관공서 전문 에어컨 세척 및 기사 양성 아카데미",
    url: "https://modubestcare.com",
    siteName: "모두홈케어",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // scroll-smooth: Navbar의 메뉴 클릭 시 해당 섹션으로 부드럽게 스크롤 이동하도록 돕는 Tailwind 클래스
    <html lang="ko" className="scroll-smooth">
      <body className={`${notoSansKr.className} antialiased bg-white text-gray-900`}>
        
        {/* 모든 페이지 상단에 고정되는 공통 네비게이션 바 */}
        <Navbar />
        
        {/* 
          Navbar가 fixed(고정) 속성이므로 화면을 가리지 않도록 
          main 태그 상단에 pt-16 (약 64px) 여백을 주어 콘텐츠가 아래부터 시작하게 합니다.
        */}
        <main className="pt-16 min-h-screen">
          {children}
        </main>

        {/* 나중에 Footer 컴포넌트를 만들면 여기에 추가합니다. */}
        <Footer />

      </body>
    </html>
  );
}
