import { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nickname, setNickname] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(userCredential.user, { displayName: nickname });
            navigate("/home");
        } catch (err) {
            alert("회원가입 실패: " + err);
        }
    };
    return (
        <div className="flex flex-col items-center justufy-center min-h-screen bg-gray-100">
            <h1 className="text-2xl mb-4">회원가입</h1>
            <input className="mb-2 p-2 border" type="text" placeholder="닉네임" onChange={(e) => setNickname(e.target.value)} />
            <input className="mb-2 p-2 border" type="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
            <input className="mb-2 p-2 border" type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
            <button className="bg-blue-500 text-white px-4 py-2" onClick={handleRegister}>회원가입</button>
        </div>
    );
}