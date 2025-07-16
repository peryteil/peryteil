import './App.css';
import GreetingPage from './pages/GreetingPage';
import ProductListPage from './pages/ProductListPage';
import QuotePage from './pages/QuotePage';
import ContactPage from './pages/ContactPage';
import ApplyScrapPage from './pages/ApplyScrapPage';
import QuotationPage from './pages/QuotationPage';
import ScrapCompletePage from './pages/ScrapCompletePage';
import { useState } from 'react';
import Counter from './pages/Counter';
import TitleUpdater from './pages/TitleUpdater';
import ThemeToggle from './pages/ThemeToggle';
import CounterNumber from './pages/CounterNumber';
import App2 from './App2';

function App() {

  const [stage, setStage] = useState(1);
  const [count, setCount] = useState(0);

  const prevStage = () => {
    setStage(stage - 1)
  };
  const nextStage = () => {
    setStage(stage + 1)
  };

  const countUp = () => {
    setCount(count + 1);
  }

  // 입력창 실시간 반영
  const [name, setName] = useState('');

  // 다크모드 토글
  const [dark, setDark] = useState(false);
  

  return <App2 />;
    // <div className="App">
    //   <button className='p-4 m-4 bg-blue-500' onClick={countUp}>카운트 증가{count}</button>
    //   <button className='p-4 m-4 bg-blue-500' onClick={prevStage}>이전</button>
    //   <span>{stage}</span>
    //   <button className='p-4 m-4 bg-blue-500' onClick={nextStage}>다음</button>
    //   {stage === 1 && <GreetingPage />}
    //   {stage === 2 && <ApplyScrapPage />}
    //   {stage === 3 && <QuotationPage />}
    //   {stage === 4 && <ScrapCompletePage />}

    //   <input value={name} onChange={(e) => setName(e.target.value)} />
    //   <p>안녕하세요, {name}님!</p>
    //   <button onClick={() => setDark(!dark)}>테마: {dark ? '다크': '라이트'}</button>


    //   <ProductListPage />
    //   <QuotePage />
    //   <ContactPage />
    //   <Counter />
    //   <TitleUpdater />
    //   <ThemeToggle/>
    //   <CounterNumber/>

    // </div>
  
}

export default App;