"use client";

import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import emailjs from "@emailjs/browser";

interface B2BFormData {
  name: string;
  phone: string;
  location: string;
  acType: string;
  quantity: number;
  message: string;
}

export default function B2BContact() {
  const [formData, setFormData] = useState<B2BFormData>({
    name: "",
    phone: "",
    location: "",
    acType: "천장형 4Way",
    quantity: 1,
    message: "",
  });

  const [step, setStep] = useState<1 | 2>(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { ref, className } = useScrollFadeIn();

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleNextStep = () => {
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.location.trim()
    ) {
      alert("필수 연락처 정보를 모두 입력해 주세요.");
      return;
    }
    setStep(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_syw6mbo",
        "template_p7hdikx",
        { ...formData, type: "B2B 견적 문의" },
        "ck_pHQrlkrtV1lJT4",
      );
      setIsSuccess(true);
    } catch (error) {
      alert("전송 실패: 잠시 후 다시 시도해주세요.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`w-full bg-[#0F172A] py-16 md:py-24 box-border scroll-mt-20 ${className}`}
    >
      <div className="w-full max-w-2xl mx-auto px-6 flex flex-col justify-center">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-xs md:text-sm font-bold px-4 py-1.5 rounded-full tracking-wide bg-sky-500/10 text-sky-400 border border-sky-500/20">
            B2B CONTACT US
          </span>
          <h2 className="text-2xl md:text-4xl font-black text-white mt-5 tracking-tight">
            지금 바로 <span className="text-sky-400">맞춤 견적</span>을
            받아보세요
          </h2>
        </div>

        <div className="bg-white/5 backdrop-blur-md p-6 md:p-10 rounded-3xl shadow-2xl border border-white/10 relative overflow-hidden min-h-[420px] flex flex-col">
          {/* 진행률 표시기 */}
          <div className="flex items-center gap-3 mb-8">
            <div
              className={`h-2 flex-1 rounded-full transition-colors duration-500 ${step >= 1 ? "bg-sky-500" : "bg-slate-700"}`}
            />
            <div
              className={`h-2 flex-1 rounded-full transition-colors duration-500 ${step >= 2 ? "bg-sky-500" : "bg-slate-700"}`}
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg md:text-xl text-sky-400">
              {step === 1 ? "1. 담당자 정보 입력" : "2. 견적 상세 정보"}
            </h3>
            <span className="text-sm font-bold text-slate-500">{step} / 2</span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col justify-between"
          >
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500 flex-1">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-1.5 ml-1">
                    기업명 또는 담당자명 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-500"
                    placeholder="예: 홍길동 대리 / (주)모두홈케어"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-1.5 ml-1">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-500"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-1.5 ml-1">
                    현장 지역 *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-500"
                    placeholder="예: 인천 서구 청라동"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full py-4 rounded-xl text-white font-extrabold text-base tracking-wide shadow-lg shadow-sky-900/50 bg-sky-500 hover:bg-sky-600 transition-all active:scale-[0.98]"
                  >
                    다음 단계로 ➔
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500 flex-1">
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-bold text-slate-300 mb-1.5 ml-1">
                      주요 기종
                    </label>
                    <select
                      name="acType"
                      value={formData.acType}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 text-white rounded-xl focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    >
                      <option value="천장형 4Way">천장형 4Way</option>
                      <option value="천장형 1Way">천장형 1Way</option>
                      <option value="스탠드형">스탠드형</option>
                      <option value="벽걸이형">벽걸이형</option>
                      <option value="혼합(내용에 기재)">여러 기종 혼합</option>
                    </select>
                  </div>
                  <div className="w-24">
                    <label className="block text-sm font-bold text-slate-300 mb-1.5 ml-1">
                      대수
                    </label>
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      value={formData.quantity}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 text-white rounded-xl text-center focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-1.5 ml-1">
                    상세 문의 내용 (선택)
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-800/50 border border-slate-700 text-white rounded-xl resize-none focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all placeholder:text-slate-500"
                    placeholder="예) 층고가 4m 이상입니다, 주말 야간 작업만 가능합니다 등"
                  />
                </div>
                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-4 rounded-xl text-slate-300 font-bold bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all active:scale-[0.98]"
                  >
                    이전
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-2/3 py-4 rounded-xl text-white font-extrabold tracking-wide shadow-lg transition-all active:scale-[0.98] ${isSubmitting ? "bg-slate-600 cursor-not-allowed shadow-none" : "bg-sky-500 hover:bg-sky-600 shadow-sky-900/50"}`}
                  >
                    {isSubmitting ? "전송 중..." : "견적 요청하기"}
                  </button>
                </div>
              </div>
            )}

            {isSuccess && (
              <div className="absolute inset-0 bg-[#0F172A]/95 backdrop-blur-md z-20 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-sky-500/20 text-sky-400 rounded-full flex items-center justify-center mb-4 border border-sky-500/30">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">
                  견적 요청 완료
                </h4>
                <p className="text-slate-400 text-sm mb-8 whitespace-pre-line leading-relaxed">
                  견적 요청이 성공적으로 접수되었습니다.
                  <br />
                  B2B 전담 매니저가 확인 후 연락드리겠습니다.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setStep(1);
                    setFormData({
                      name: "",
                      phone: "",
                      location: "",
                      acType: "천장형 4Way",
                      quantity: 1,
                      message: "",
                    });
                  }}
                  className="px-8 py-3.5 bg-white text-[#0F172A] rounded-xl font-bold hover:bg-slate-200 transition-all"
                >
                  확인했습니다
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
