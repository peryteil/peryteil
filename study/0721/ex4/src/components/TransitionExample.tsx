import React, {useState, useTransition} from "react";

export default function TransitionExample() {
    const [input, setInput] = useState("");
    const [list, setList] = useState<string[]>([]);
    const [isPending, startTransition] = useTransition();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);

        startTransition(() =>{
            // 비긴급 상태 업데이트
            const items = [];
            for (let i = 0; i < 10000; i++){
                items.push(e.target.value);
            }
            setList(items);
        });
    };
    return (
        <div>
            <input value={input} onChange={handleChange} />
            {isPending && <span>로딩 중...</span>}
            <div>총 {list.length}개</div>
        </div>
    )
}