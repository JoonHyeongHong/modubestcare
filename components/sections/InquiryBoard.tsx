"use client";

import { useState } from "react";

// 포스트 데이터 타입 정의
interface Post {
  id: string;
  title: string;
  date: string;
  name: string; // 마스킹된 작성자 이름 (예: 홍*동)
}

export default function InquiryBoard({ posts }: { posts: Post[] }) {
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [phone, setPhoneNumber] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [postContent, setPostContent] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // 모달 열기
  const handleOpenModal = (post: Post) => {
    setSelectedPost(post);
    setPhoneNumber("");
    setErrorMsg("");
    setPostContent(null); // 이전 본문 초기화
  };

  // 모달 닫기
  const handleCloseModal = () => {
    setSelectedPost(null);
    setPostContent(null);
  };

  // 인증 API 호출
  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMsg("");

    try {
      const res = await fetch("/api/inquiry/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ postId: selectedPost?.id, phone: phone }),
      });

      const data = await res.json();

      if (res.ok && data.authenticated) {
        setPostContent(data.content); // 성공 시 본문 세팅
      } else {
        setErrorMsg(data.message || "연락처 정보가 일치하지 않습니다.");
      }
    } catch (err) {
      setErrorMsg("서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto w-full">
      {/* 1. 게시글 목록 영역 */}
      <div className="bg-white border rounded-lg shadow-sm overflow-hidden">
        <div className="grid grid-cols-12 bg-gray-50 p-4 border-b text-sm font-semibold text-gray-600 text-center">
          <div className="col-span-8 text-left pl-2">제목</div>
          <div className="col-span-2">작성자</div>
          <div className="col-span-2">작성일</div>
        </div>

        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => handleOpenModal(post)}
            className="grid grid-cols-12 p-4 border-b cursor-pointer hover:bg-blue-50 transition-colors text-sm text-center items-center"
          >
            <div className="col-span-8 text-left pl-2 font-medium text-gray-800 truncate">
              🔒 {post.title}
            </div>
            <div className="col-span-2 text-gray-500">{post.name}</div>
            <div className="col-span-2 text-gray-400">{post.date}</div>
          </div>
        ))}
      </div>

      {/* 2. 비밀번호(연락처) 입력 모달 창 */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fade-in">
            {/* 닫기 버튼 */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
            >
              ✕
            </button>

            <div className="p-6 sm:p-8">
              {!postContent ? (
                /* 인증 폼 영역 */
                <form onSubmit={handleVerify} className="flex flex-col gap-4">
                  <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl">
                      🔒
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      본인 확인
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      문의 등록 시 입력한 연락처를 입력해주세요.
                    </p>
                  </div>

                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="예: 01012345678 (숫자만 입력)"
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-center tracking-widest"
                    required
                  />

                  {errorMsg && (
                    <p className="text-red-500 text-sm text-center font-medium">
                      {errorMsg}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-[#1e3a8a] hover:bg-blue-800 text-white font-bold py-3 px-4 rounded-lg transition-colors disabled:bg-gray-400 mt-2"
                  >
                    {isLoading ? "확인 중..." : "글 내용 보기"}
                  </button>
                </form>
              ) : (
                /* 인증 성공 시 본문 표시 영역 */
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 pb-4 border-b border-gray-200">
                    {selectedPost.title}
                  </h3>
                  <div
                    className="prose prose-sm sm:prose-base text-gray-700"
                    // 워드프레스에서 가져온 HTML 본문을 안전하게 렌더링
                    dangerouslySetInnerHTML={{ __html: postContent }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
