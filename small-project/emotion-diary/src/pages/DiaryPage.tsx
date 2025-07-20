import axios from "axios";
import { useEffect, useState } from "react";

interface Diary {
  id: number;
  content: string;
  emotion: string;
  date: string;
}

export default function DiaryPage() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchDiaries();
  }, []);

  const fetchDiaries = async () => {
    try {
      const res = await axios.get<Diary[]>("http://localhost:4000/api/diaries", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setDiaries(res.data); // ✅ 이제 오류 안 남
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl p-4 mx-auto">
      <h1 className="mb-4 text-2xl font-bold">감정 일기장</h1>
      {diaries.map((diary) => (
        <div key={diary.id}>{diary.content}</div>
      ))}
    </div>
  );
}
