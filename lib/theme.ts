export const themeConfig = {
  b2b: {
    navBg: "bg-[#1E3A8A]", // 꽉 찬 배경으로 확실히 지정
    drawerBg: "bg-[#1E3A8A]",
    accentBg: "bg-[#0EA5E9]", 
    accentText: "text-[#0EA5E9]",
    
    // ⚡ 여기가 핵심! 확실한 Hex 코드로 직접 지정합니다.
    textActive: "text-[#E0F2FE]", 
    textHover: "hover:text-[#E0F2FE]",
    
    glowShadow: "shadow-[0_0_8px_rgba(14,165,233,0.6)]",
    toggleWrapBg: "bg-[#172554]", 
    logoHoverBg: "group-hover:bg-[#E0F2FE]",
    logoHoverText: "group-hover:text-[#1E3A8A]",
    mobileActiveBg: "bg-[#0EA5E9]/20", // 이 정도 투명도는 대부분 잘 먹힙니다
    mobileActiveBorder: "border-[#0EA5E9]/30",
  },
  edu: {
    navBg: "bg-[#064E3B]", 
    drawerBg: "bg-[#064E3B]",
    accentBg: "bg-[#10B981]", 
    accentText: "text-[#10B981]",
    
    // ⚡ 확실한 Hex 코드로 직접 지정
    textActive: "text-[#ECFDF5]", 
    textHover: "hover:text-[#ECFDF5]",
    
    glowShadow: "shadow-[0_0_8px_rgba(16,185,129,0.6)]",
    toggleWrapBg: "bg-[#022C22]", 
    logoHoverBg: "group-hover:bg-[#ECFDF5]",
    logoHoverText: "group-hover:text-[#064E3B]",
    mobileActiveBg: "bg-[#10B981]/20",
    mobileActiveBorder: "border-[#10B981]/30",
  }
};