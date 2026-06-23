'use client';

import { useState } from 'react';
import { useScrollFadeIn } from '@/hooks/useScrollFadeIn';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  viewMode?: 'b2b' | 'edu'; 
}

interface FormData {
  name: string;
  phone: string;
  location: string;
  acType: string;
  quantity: number;
  hasVehicle: string;
  availableTime: string;
  message: string;
}

export default function ContactForm({ viewMode = 'b2b' }: ContactFormProps) {
  // ⚡ 1. 폼 데이터 및 상태 관리
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    location: '',
    acType: '천장형 4Way',
    quantity: 1,
    hasVehicle: '차량 보유 (운전 가능)', 
    availableTime: '즉시 활동 가능',
    message: '',
  });

  // ⚡ 2. 스텝 관리를 위한 상태 추가 (1단계, 2단계)
  const [step, setStep] = useState<1 | 2>(1);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { ref, className } = useScrollFadeIn();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // ⚡ 3. 다음 단계로 넘어가기 전 필수 항목 검사
  const handleNextStep = () => {
    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      alert('필수 연락처 정보를 모두 입력해 주세요.');
      return;
    }
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);


    try {
    // ⚡ 실제 이메일 전송 API 호출
    await emailjs.send(
      'service_syw6mbo', 
      'template_p7hdikx', 
      { ...formData }, 
      'ck_pHQrlkrtV1lJT4'
    );
    setIsSuccess(true);
  } catch (error) {
    alert('전송 실패: 잠시 후 다시 시도해주세요.');
  } finally {
    setIsSubmitting(false);
  }
  };

  const themeBtnColor = viewMode === 'b2b' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-emerald-600 hover:bg-emerald-700';
  const themeTextColor = viewMode === 'b2b' ? 'text-blue-600' : 'text-emerald-600';
  const themeBgColor = viewMode === 'b2b' ? 'bg-blue-600' : 'bg-emerald-600';

  return (
    <section 
      id="contact" 
      ref={ref}
      className={`w-full bg-slate-50 py-16 md:py-24 box-border scroll-mt-20 ${className}`}
    >
      <div className="w-full max-w-2xl mx-auto px-6 flex flex-col justify-center">
        
        {/* 헤더 */}
        <div className="text-center mb-10 md:mb-12">
          <span className={`text-xs md:text-sm font-bold px-3 py-1.5 rounded-full tracking-wide ${viewMode === 'b2b' ? 'bg-blue-100 text-blue-700' : 'bg-emerald-100 text-emerald-700'}`}>
            {viewMode === 'b2b' ? 'CONTACT US' : 'JOIN OUR CREW'}
          </span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            {viewMode === 'b2b' ? '빠른 견적 문의하기' : '세척 기사 지원하기'}
          </h2>
        </div>

        {/* 메인 폼 박스 */}
        <div className="bg-white p-6 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden min-h-[400px] flex flex-col">
          
          {/* ⚡ 상단 진행률 표시기 (Progress Bar) */}
          <div className="flex items-center gap-3 mb-8">
            <div className={`h-2 flex-1 rounded-full transition-colors duration-500 ${step >= 1 ? themeBgColor : 'bg-slate-100'}`} />
            <div className={`h-2 flex-1 rounded-full transition-colors duration-500 ${step >= 2 ? themeBgColor : 'bg-slate-100'}`} />
          </div>

          <div className="flex justify-between items-center mb-6">
            <h3 className={`font-bold text-lg md:text-xl ${themeTextColor}`}>
              {step === 1 ? '1. 기본 정보 입력' : '2. 상세 정보 입력'}
            </h3>
            <span className="text-sm font-semibold text-slate-400">{step} / 2</span>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 flex flex-col justify-between">
            
            {/* ⚡ STEP 1: 기본 인적 사항 */}
            {step === 1 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500 flex-1">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    {viewMode === 'b2b' ? '업체명 또는 담당자명 *' : '지원자 성함 *'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                    placeholder={viewMode === 'b2b' ? '예: 홍길동 / (주)OO컴퍼니' : '실명을 입력해 주세요'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">연락처 *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                    placeholder="010-0000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    {viewMode === 'b2b' ? '세척 대상지 주소 *' : '거주 지역 (인천/김포 등) *'}
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                    placeholder={viewMode === 'b2b' ? '예: 인천 서구 청라동' : '예: 인천 서구'}
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className={`w-full py-4 rounded-xl text-white font-extrabold text-base tracking-wide shadow-md transition-all active:scale-[0.98] ${themeBtnColor}`}
                  >
                    다음 단계로 ➔
                  </button>
                </div>
              </div>
            )}

            {/* ⚡ STEP 2: 상세 정보 및 제출 */}
            {step === 2 && (
              <div className="space-y-5 animate-in fade-in slide-in-from-right-4 duration-500 flex-1">
                
                {viewMode === 'b2b' ? (
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">주요 기종</label>
                      <select
                        name="acType"
                        value={formData.acType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                      >
                        <option value="천장형 4Way">천장형 4Way</option>
                        <option value="천장형 1Way">천장형 1Way</option>
                        <option value="스탠드형">스탠드형</option>
                        <option value="벽걸이형">벽걸이형</option>
                        <option value="혼합(내용에 기재)">여러 기종 혼합</option>
                      </select>
                    </div>
                    <div className="w-24">
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">대수</label>
                      <input
                        type="number"
                        name="quantity"
                        min="1"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-center text-base focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col gap-5">
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">차량 및 운전 여부</label>
                      <select
                        name="hasVehicle"
                        value={formData.hasVehicle}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                      >
                        <option value="차량 보유 (운전 가능)">차량 보유 (운전 가능)</option>
                        <option value="차량 미보유 (운전 가능)">차량 미보유 (운전 가능)</option>
                        <option value="운전 불가능">운전 불가능</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-1.5">활동 가능 시기</label>
                      <select
                        name="availableTime"
                        value={formData.availableTime}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-base focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
                      >
                        <option value="즉시 활동 가능">교육 후 즉시 활동 가능</option>
                        <option value="1개월 이내">1개월 이내 가능</option>
                        <option value="협의 후 결정">일정 협의 필요</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-1.5">
                    {viewMode === 'b2b' ? '추가 문의 내용 (선택)' : '경력 사항 및 다짐 (선택)'}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 text-slate-900 rounded-xl text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all placeholder:text-slate-400"
                    placeholder={
                      viewMode === 'b2b' 
                        ? '예) 층고가 4m 이상입니다, 주말 야간 작업만 가능합니다 등' 
                        : '나이, 유관 업무 경력이나 다짐을 간단히 적어주시면 우선 선발에 도움이 됩니다.'
                    }
                  />
                </div>

                <div className="pt-4 flex gap-3">
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="w-1/3 py-4 rounded-xl text-slate-600 font-bold text-base bg-slate-100 hover:bg-slate-200 transition-all active:scale-[0.98]"
                  >
                    이전
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-2/3 py-4 rounded-xl text-white font-extrabold text-base tracking-wide shadow-md transition-all active:scale-[0.98] ${
                      isSubmitting ? 'bg-slate-400 cursor-not-allowed shadow-none' : themeBtnColor
                    }`}
                  >
                    {isSubmitting ? '제출 중...' : '최종 제출하기'}
                  </button>
                </div>
              </div>
            )}

            {/* 성공 알림 */}
            {isSuccess && (
  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-6 text-center animate-in fade-in duration-300">
    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
      </svg>
    </div>
    <h4 className="text-xl font-bold text-slate-900 mb-2">접수 완료</h4>
    <p className="text-slate-600 text-sm mb-6 whitespace-pre-line">
      {viewMode === 'b2b' 
        ? '견적 요청이 성공적으로 접수되었습니다.\n담당자가 확인 후 연락드리겠습니다.' 
        : '지원서가 정상 접수되었습니다.\n검토 후 면접 일정을 안내해 드리겠습니다.'}
    </p>
    
    {/* ⚡ 재확인 버튼 추가 */}
    <button 
      onClick={() => {
        setIsSuccess(false);
        setFormData({
          name: '',
          phone: '',
          location: '',
          acType: '천장형 4Way',
          quantity: 1,
          hasVehicle: '차량 보유 (운전 가능)',
          availableTime: '즉시 활동 가능',
          message: '',
        });
        setStep(1); // 다시 1단계로 복귀
      }}
      className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all"
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

