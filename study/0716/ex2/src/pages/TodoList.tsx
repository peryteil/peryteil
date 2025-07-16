import { useState } from 'react';

export default function TodoList() {
  const [items, setItems] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      setItems([...items, input]);
      setInput(''); // 입력 후 초기화
    }
  };

  return (
    <div className="p-4 space-y-4">
      <input
        type="text"
        value={input}
        placeholder="항목을 입력하고 엔터를 누르세요."
        className="w-full p-2 border rounded"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <ul className="pl-5 list-disc">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
