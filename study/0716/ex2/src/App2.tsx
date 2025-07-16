import { useState, useEffect } from 'react';
import CheckboxExample from './pages/checkboxExample';

function App2() {
  const [count, setCount] = useState(0);

  // useEffect(()=> {
  //   console.log("useEffect 실행");
  //   setTimeout(()=>{
  //     alert("환영합니다!");
  //   }, 3000);
  // }, []);

  useEffect(() => {
    console.log("useEffect 실행", count);
  }, [count]);

  const countUp = () => {
    setCount(count + 1);

  };

  return (
    <div className="App">
      <CheckboxExample/>
      <h2>useEffect</h2>
      <button onClick={countUp}>카운트 증가</button>
    </div>
  );
}

export default App2;