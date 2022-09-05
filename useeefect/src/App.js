import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(new Date());


  useEffect(() => {
    document.title = `Clock ${count.toLocaleTimeString()}`
  },[count]);

  setInterval(() => {
    setCount(new Date())
  },1000)
   
  return (
    <div className='clock'>
      <p>{count.toLocaleTimeString()}</p>
    </div>
  )
  
}

export default App;
