import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiaryPage from "./pages/DiaryPage";
import DiaryWritePage from "./pages/DiaryWritePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DiaryPage />} />
        <Route path="/write" element={<DiaryWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
