import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  count = new Date()

  useEffect(() => {
    document.title = `Clock ${count.toLocaleTimeString()}`
  },[count]);

  setInterval(() => {
    setCount(count = new Date())
  },1000)
   
  return (
    <div className='clock'>
      <p>{count.toLocaleTimeString()}</p>
    </div>
  )
  
}

export default App;
