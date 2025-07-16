import { useState } from "react";

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    return (
        <div className={dark ? 'bg-black text-white' : 'bg-white text-black'}>
            <button onClick={() => setDark(!dark)}>
                테마: {dark ? '다크' : '라이트'}
            </button>

            <p>
                현재 테마는 {dark ? '🌙 다크 모드입니다.' : '☀️ 라이트 모드입니다.'}
            </p>
        </div>
    )
}