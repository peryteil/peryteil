import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Users from './pages/Users';
function App() {
    return (
    <Router>
      <div>
        <h1>🐶 코코 React 페이지</h1>
        <nav>
          <ul>
            <li><Link to="/users">사용자 목록</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
