import React, { useRef } from "react";
import CustomInput from "./CustomInput";

// 부모가 사용할 수 있는 메서드를 명시적으로 정의 (타입 안정성 강화)
export interface CustomInputHandle {
  focus: () => void;
  clear: () => void;
};


export default function Parent() {
  const inputRef = useRef<CustomInputHandle | null>(null);

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button onClick={() => inputRef.current?.focus()}>포커스</button>
      <button onClick={() => inputRef.current?.clear()}>지우기</button>
    </div>
  );
}
