import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feed from "./components/Feed";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<div>홈 화면 (피드 등)</div>} />
      <Route path="/feed" element={<Feed />}/>
      <Route path="/create" element={<CreatePost />} />     
    </Routes>
    </BrowserRouter>
  )
}

export default App;