import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { CustomInputHandle } from "./ParentComponent";
// ✅ 부모가 사용할 수 있는 메서드를 명시적으로 타입으로 정의

const CustomInput = forwardRef<CustomInputHandle>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => {
      if (inputRef.current) inputRef.current.value = "";
    },
  }));

  return <input ref={inputRef} type="text" />;
});

export default CustomInput;
