export default function LoginBox() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-xl">
        <h2 className="mb-6 text-2xl font-bold text-center">로그인</h2>

        <input
          type="email"
          placeholder="이메일"
          className="w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <input
          type="password"
          placeholder="비밀번호"
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        />

        <button className="w-full py-2 font-semibold text-white transition-colors duration-200 bg-blue-500 rounded hover:bg-blue-600">
          로그인
        </button>
      </div>
    </div>
  );
}