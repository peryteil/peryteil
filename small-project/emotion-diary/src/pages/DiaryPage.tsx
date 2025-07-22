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
  const [editContent, setEditContent] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetchDiaries();
  }, []);

  const fetchDiaries = async () => {
    try {
      const res = await axios.get<Diary[]>("http://localhost:4000/api/diaries", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const sorted = res.data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setDiaries(sorted);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteDiary = async (id: number) => {
    try {
      await axios.delete(`http://localhost:4000/api/diaries/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchDiaries();
    } catch (err) {
      console.error(err);
    }
  };

  const startEdit = (id: number, content: string) => {
    setEditId(id);
    setEditContent(content);
  };

  const saveEdit = async () => {
    if (editId === null) return;
    try {
      await axios.put(
        `http://localhost:4000/api/diaries/${editId}`,
        {
          content: editContent,
          emotion: "😀", // 기본 감정. 실제 앱에서는 원래 값 유지하거나 고를 수 있게 해야 함.
          date: new Date().toISOString(),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEditId(null);
      setEditContent("");
      fetchDiaries();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="max-w-2xl p-4 mx-auto">
      <h1 className="mb-6 text-3xl font-bold text-center">📔 감정 일기장</h1>

      {diaries.length === 0 ? (
        <p className="text-center text-gray-500">작성된 일기가 없습니다.</p>
      ) : (
        <div className="space-y-4">
          {diaries.map((diary) => (
            <div key={diary.id} className="shadow-md card bg-base-100">
              <div className="card-body">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-2xl">{diary.emotion}</span>
                  <span className="text-sm text-gray-400">
                    {new Date(diary.date).toLocaleDateString()}
                  </span>
                </div>
                {editId === diary.id ? (
                  <>
                    <textarea
                      className="w-full mb-2 textarea textarea-bordered"
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                    />
                    <button className="mr-2 btn btn-success btn-sm" onClick={saveEdit}>
                      저장
                    </button>
                    <button className="btn btn-ghost btn-sm" onClick={() => setEditId(null)}>
                      취소
                    </button>
                  </>
                ) : (
                  <>
                    <p className="mb-2 text-base">{diary.content}</p>
                    <div className="flex gap-2">
                      <button
                        className="btn btn-sm btn-outline btn-primary"
                        onClick={() => startEdit(diary.id, diary.content)}
                      >
                        수정
                      </button>
                      <button
                        className="btn btn-sm btn-outline btn-error"
                        onClick={() => deleteDiary(diary.id)}
                      >
                        삭제
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
