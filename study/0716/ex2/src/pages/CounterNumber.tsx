import { useState } from "react";

export default function CounterNumber() {
    const [num, setNum] = useState(0);

    return (
        <div className="flex items-center gap-3">
            <button className="px-4 py-2 text-white bg-red-500 rounded"
            onClick={() => setNum(num -1)}
            >
                -
            </button>
            <span className="text-xl"></span>

            <button className="px-4 py-2 text-white bg-blue-500 rounded"
            onClick={() => setNum(num + 1)}
            >
                +
            </button>

        </div>
    )
}