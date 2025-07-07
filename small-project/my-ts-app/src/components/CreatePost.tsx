import React, { useState } from "react";

const CreatePost: React.FC = () => {
    const [caption, setCaption] = useState("");
    const [imageFile, setImageFile] = useState<File | null>(null);
    const[previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if(file) {
            setImageFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
    };
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (! caption || !imageFile) {
            alert("이미지와 설명을 모두 입력하세요!");
            return;
        }

        // 백엔드 API 호출 예정
        console.log("📤 이미지:", imageFile);
        console.log("📝 설명:", caption);

        alert("게시글이 업로드되었습니다!");
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 space-y-4">
            <h2 className="text-wl font-semibold">📸 게시글 작성</h2>

            <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="block w-full"
            />

            {previewUrl && (
                <img
                src={previewUrl}
                alt="미리보기"
                className="w-full h-auto rounded border"
                />
            )}

            <textarea
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            placeholder="설명을 입력하세여"
            className="w-full p-2 border rounded"
            rows={3}
            />

            <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
                업로드
            </button>
        </form>
    );
};

export default CreatePost;