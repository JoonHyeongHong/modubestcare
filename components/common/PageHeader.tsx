import HeaderImage from "@/public/default-header-bg.jpg";

interface PageHeaderProps {
  title: string;
  subtitle: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    // 💡 1 & 2: 배경 이미지를 가장 바탕이 되는 section으로 옮기고, HeaderImage.src를 사용합니다.
    <section
      className="relative w-full h-[320px] md:h-[400px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${HeaderImage.src})` }}
    >
      {/* 💡 3: 이 div는 오로지 파란색 반투명 필터(오버레이) 역할만 깔끔하게 수행합니다. */}
      <div className="absolute inset-0 bg-[#1e3a8a]/80"></div>

      {/* 💡 4: 오타 수정 (z-10과 flex 사이 띄어쓰기) */}
      <div className="relative z-10 flex flex-col items-center text-center text-white pt-24 px-4 w-full">
        <span className="text-sm md:text-base tracking-[0.4em] font-light mb-3 opacity-90 uppercase">
          {subtitle}
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          {title}
        </h1>
      </div>
    </section>
  );
}
