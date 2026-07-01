"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";

export default function InquiryForm() {
  const { ref, className } = useScrollFadeIn();
  // ⚡ 추가: 라우터 초기화
  const router = useRouter();

  const [formData, setFormData] = useState({
    companyName: "",
    clientName: "",
    phone: "",
    address: "",
    quantity: "",
    details: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert(
          "견적 문의가 정상적으로 접수되었습니다. 신속하게 연락드리겠습니다!",
        );
        setFormData({
          companyName: "",
          clientName: "",
          phone: "",
          address: "",
          quantity: "",
          details: "",
        });

        // ⚡ 추가: 제출 성공 시 현재 페이지의 데이터를 즉시 다시 불러옵니다.
        // 이렇게 하면 하단 문의 게시판 컴포넌트에 방금 쓴 글이 실시간으로 뜹니다.
        router.refresh();
      } else {
        alert("접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
      }
    } catch (error) {
      console.error(error);
      alert("서버 연결에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      // ⚡ 전체 배경을 완전한 화이트(bg-white)로 변경
      className={`w-full bg-white py-16 lg:py-20 xl:py-24 md:snap-start box-border border-t border-slate-100 ${className}`}
    >
      <div className="w-full max-w-4xl mx-auto px-5 sm:px-6">
        {/* 상단 타이틀 */}
        <div className="text-center mb-10 xl:mb-14">
          <h2 className="text-2xl lg:text-3xl xl:text-5xl font-black text-slate-900 tracking-tight">
            간편 문의
          </h2>
          <p className="text-slate-500 mt-3 text-sm xl:text-lg break-keep font-medium">
            정보를 남겨주시면 전문가가 맞춤형 세척 견적안을 확인해 드립니다.
          </p>
        </div>

        {/* 폼 카드 컨테이너 (배경이 흰색이므로 폼 컨테이너에 미세한 그림자와 테두리를 주어 입체감 부여) */}
        <div className="bg-white p-6 sm:p-10 rounded-2xl md:rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* 회사/기관명 */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">
                  업체명
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  placeholder="예:모두홈케어"
                  // ⚡ 배경이 하얗기 때문에 인풋 박스는 bg-slate-50으로 설정해 시인성 확보
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] text-slate-900 text-sm font-medium transition-all"
                  required
                />
              </div>

              {/* 담당자명 */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">
                  담당자 이름
                </label>
                <input
                  type="text"
                  name="clientName"
                  value={formData.clientName}
                  onChange={handleChange}
                  placeholder="예:홍길동"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] text-slate-900 text-sm font-medium transition-all"
                  required
                />
              </div>

              {/* 연락처 */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">
                  연락처
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="숫자만 입력 (예: 01012345678)"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] text-slate-900 text-sm font-medium transition-all"
                  required
                />
              </div>

              {/* 이메일 */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700">주소</label>
                <input
                  type="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="예: 서울특별시 강남구 테헤란로 123"
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] text-slate-900 text-sm font-medium transition-all"
                  required
                />
              </div>
            </div>

            {/* 예상 세척 수량 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700">
                예상 세척 수량 (대수)
              </label>
              <input
                type="text"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="예: 천장형 40대, 벽걸이 10대"
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] text-slate-900 text-sm font-medium transition-all"
              />
            </div>

            {/* 상세 문의 내용 */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-bold text-slate-700">
                상세 요청사항
              </label>
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows={4}
                placeholder="세척이 필요한 가전 종류, 희망 일정, 주차 가능 여부 등을 자유롭게 적어주세요."
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:bg-white focus:border-[#1E3A8A] focus:ring-1 focus:ring-[#1E3A8A] text-slate-900 text-sm font-medium transition-all resize-none leading-relaxed"
                required
              ></textarea>
            </div>

            {/* 제출 버튼 */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 mt-2 bg-[#1E3A8A] hover:bg-[#172554] text-white font-black rounded-xl shadow-lg shadow-[#1E3A8A]/20 hover:scale-[1.01] active:scale-[0.99] transition-all text-center text-base tracking-wide disabled:bg-slate-300 disabled:scale-100 disabled:shadow-none disabled:cursor-not-allowed"
            >
              {isSubmitting ? "제출 중..." : "무료 맞춤 견적 신청하기"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
