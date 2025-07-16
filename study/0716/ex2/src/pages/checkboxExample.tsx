import { useState } from "react";

export default function CheckboxExample() {
    const [checked, setChecked] = useState(false);

    return (
        <div className="p-4">
            <input type="checkbox"
            id="myCheckbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mr-2" 
            />
            <label htmlFor="myCheckbox" className="font-semibold">
                {checked ? '✅ 체크됨' : '⬜ 체크 안됨'}
            </label>
        </div>
    );
}