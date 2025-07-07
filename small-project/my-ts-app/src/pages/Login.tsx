import { useState } from "react";
import {signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/home");
        }catch (err) {
            alert("로그인 실패: " + err );
        }
    };
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl mb-4">로그인</h1>
      <input className="mb-2 p-2 border" type="email" placeholder="이메일" onChange={(e) => setEmail(e.target.value)} />
      <input className="mb-2 p-2 border" type="password" placeholder="비밀번호" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-500 text-white px-4 py-2" onClick={handleLogin}>로그인</button>
    </div>
  );
}