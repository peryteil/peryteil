import { useState } from "react";

export default function UserForm() {
    const [name, setName] = useState("");
    const[ agree, setAgree] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert(`이름: ${name}\n동의 여부: ${agree ? "동의함" : "동의 안 함"}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>이름: </label>
                <input type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>
                    <input type="checkbox" 
                    checked={agree}
                    onChange={(e) => setAgree(e.target.checked)}
                    />
                    약관에 동의합니다.
                </label>
            </div>
            <button type="submit">제출</button>
        </form>
    )
}