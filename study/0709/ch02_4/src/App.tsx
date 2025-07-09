import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventListener from './pages/EventListener'
import ReactOnClick from './pages/ReactOnClick';
import EventBubbling from './pages/EventBubbling';
import OnChange from './pages/OnChange';
import FileInput from './pages/FileInput';
import DragDrop from './pages/DragDrop';

// export default function App() {
//   // const texts = [<p key="1">hello</p>,<p key="2">world</p>]
//   const texts = ['hello', 'world'].map((text, index)=>
//   <p key={index}>{text}</p>)
  
//   return <div>{texts}</div>
// }

export default function App() {
  // const texts = [<p key="1">hello</p>,<p key="2">world</p>]
  // const texts = ['hello', 'world'].map((text, index)=>
  // <p key={index} children= {text}/>)
  
  return (
    <div>
      {/* <EventListener/> */}
      {/* <ReactOnClick/> */}
      {/* <EventBubbling/> */}
      {/* <OnChange/> */}
      {/* <FileInput/> */}
      <DragDrop/>
      
    </div>
  )
}