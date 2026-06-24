"use client";

import { useState } from "react";
import { useScrollFadeIn } from "@/hooks/useScrollFadeIn";
import emailjs from "@emailjs/browser";

interface EduFormData {
  name: string;
  phone: string;
  location: string;
  hasVehicle: string;
  availableTime: string;
  message: string;
}

export default function EduContact() {
  const [formData, setFormData] = useState<EduFormData>({
    name: "",
    phone: "",
    location: "",
    hasVehicle: "차량 보유 (운전 가능)",
    availableTime: "즉시 활동 가능",
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
        { ...formData, type: "크루 지원서" },
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
      className={`w-full bg-slate-50 py-16 md:py-24 box-border scroll-mt-20 ${className}`}
    >
      <div className="w-full max-w-2xl mx-auto px-6 flex flex-col justify-center">
        <div className="text-center mb-10 md:mb-12">
          <span className="text-xs md:text-sm font-bold px-4 py-1.5 rounded-full tracking-wide bg-emerald-100 text-emerald-700">
            JOIN OUR CREW
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-5 tracking-tight">
            기술 자립의 첫 걸음,{" "}
            <span className="text-emerald-600">지원하기</span>
          </h2>
        </div>

        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden min-h-[420px] flex flex-col">
          <div className="flex items-center gap-3 mb-8">
            <div
              className={`h-2 flex-1 rounded-full transition-colors duration-500 ${step >= 1 ? "bg-emerald-500" : "bg-slate-100"}`}
            />
            <div
              className={`h-2 flex-1 rounded-full transition-colors duration-500 ${step >= 2 ? "bg-emerald-500" : "bg-slate-100"}`}
            />
          </div>

          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg md:text-xl text-emerald-600">
              {step === 1 ? "1. 지원자 기본 정보" : "2. 활동 조건 및 경력"}
            </h3>
            <span className="text-sm font-semibold text-slate-400">
              {step} / 2
            </span>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex-1 flex flex-col justify-between"
          >
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500 flex-1">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                    지원자 성함 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                    placeholder="실명을 입력해 주세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                    placeholder="010-0000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                    거주 지역 *
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                    placeholder="예: 인천 서구"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="w-full py-4 rounded-xl text-white font-extrabold text-base tracking-wide shadow-md bg-emerald-600 hover:bg-emerald-700 transition-all active:scale-[0.98]"
                  >
                    다음 단계로 ➔
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500 flex-1">
                <div className="flex flex-col gap-4">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                      차량 및 운전 여부
                    </label>
                    <select
                      name="hasVehicle"
                      value={formData.hasVehicle}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    >
                      <option value="차량 보유 (운전 가능)">
                        차량 보유 (운전 가능)
                      </option>
                      <option value="차량 미보유 (운전 가능)">
                        차량 미보유 (운전 가능)
                      </option>
                      <option value="운전 불가능">운전 불가능</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                      활동 가능 시기
                    </label>
                    <select
                      name="availableTime"
                      value={formData.availableTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all"
                    >
                      <option value="즉시 활동 가능">
                        교육 후 즉시 활동 가능
                      </option>
                      <option value="1개월 이내">1개월 이내 가능</option>
                      <option value="협의 후 결정">일정 협의 필요</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5 ml-1">
                    경력 사항 및 다짐 (선택)
                  </label>
                  <textarea
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl resize-none focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder:text-slate-400"
                    placeholder="나이, 유관 업무 경력이나 다짐을 간단히 적어주시면 우선 선발에 도움이 됩니다."
                  />
                </div>
                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-1/3 py-4 rounded-xl text-slate-600 font-bold bg-slate-100 hover:bg-slate-200 transition-all active:scale-[0.98]"
                  >
                    이전
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-2/3 py-4 rounded-xl text-white font-extrabold tracking-wide shadow-md transition-all active:scale-[0.98] ${isSubmitting ? "bg-slate-400 cursor-not-allowed shadow-none" : "bg-emerald-600 hover:bg-emerald-700"}`}
                  >
                    {isSubmitting ? "전송 중..." : "최종 제출하기"}
                  </button>
                </div>
              </div>
            )}

            {isSuccess && (
              <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
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
                <h4 className="text-xl font-bold text-slate-900 mb-2">
                  지원서 접수 완료
                </h4>
                <p className="text-slate-600 text-sm mb-8 whitespace-pre-line leading-relaxed">
                  지원서가 정상적으로 접수되었습니다.
                  <br />
                  내부 검토 후 면접 일정을 안내해 드리겠습니다.
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setStep(1);
                    setFormData({
                      name: "",
                      phone: "",
                      location: "",
                      hasVehicle: "차량 보유 (운전 가능)",
                      availableTime: "즉시 활동 가능",
                      message: "",
                    });
                  }}
                  className="px-8 py-3.5 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
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
