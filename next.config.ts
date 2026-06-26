import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'b845-121-173-24-219.ngrok-free.app', // 에러에 표시된 외부 도메인 호스트명
        port: '',
        pathname: '/**',       // 해당 도메인의 모든 경로 이미지 허용
      },
    ],
  },
};

export default nextConfig;
