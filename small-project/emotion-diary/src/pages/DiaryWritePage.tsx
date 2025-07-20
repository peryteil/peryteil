import { useState } from "react";
import axios from "axios";

export default function DiaryWritePage() {
  const [content, setContent] = useState("");
  const [emotion, setEmotion] = useState("😀");
  const token = localStorage.getItem("token");

  const handleSubmit = async () => {
    try {
      await axios.post(
        "http://localhost:4000/api/diaries",
        {
          content,
          emotion,
          date: new Date().toISOString(),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      alert("일기가 저장되었습니다.");
      setContent("");
      setEmotion("😀");
    } catch (err) {
      console.error(err);
      alert("오류가 발생했습니다.");
    }
  };

  return (
    <div className="max-w-xl p-4 mx-auto">
      <h2 className="mb-4 text-2xl font-bold">오늘의 감정과 일기</h2>
      <textarea
        className="w-full mb-4 textarea textarea-bordered"
        placeholder="일기 내용을 작성하세요..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="flex items-center justify-between mb-4">
        <select
          className="select select-bordered"
          value={emotion}
          onChange={(e) => setEmotion(e.target.value)}
        >
          <option>😀</option>
          <option>😐</option>
          <option>😢</option>
          <option>😡</option>
        </select>
        <button className="btn btn-primary" onClick={handleSubmit}>
          저장하기
        </button>
      </div>
    </div>
  );
}
