import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="mt-10 text-center">
        <p className="text-xl">현재 카운트: {count}</p>
        <button className="mt-4 btn btn-primary" onClick={() => setCount(count + 1)}>
            +1 증가
        </button>

        </div>
    );
}