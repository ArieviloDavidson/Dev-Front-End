import { useState } from 'react';
import './App.css';

function App() {
  const [list, setList] = useState([])
  const [undid, setUndid] = useState([])

  const gerar = (event) => {
    const newCircle = {
      clientX: event.clientX,
      clientY: event.clientY,
    }
    // console.log(newCircle);
    setList((prev) => [...prev, newCircle]);
  };

  const desfazer = (event) => {
    event.stopPropagation();

    if(list.length === 0){
      return;
    }
    
    const lastItem = list[list.length - 1]
    setUndid((prev) => [...prev, lastItem])

    setList((prev) => {
      const newArr = [...prev].slice(0,-1);
      return newArr;
    });
  }

  const refazer = (event) => {
    event.stopPropagation();

    const lastItem = undid[undid.length - 1]
    setUndid((prev) => {
      const newArr = [...prev].slice(0,-1);
      return newArr;
    });
    gerar(lastItem);
  }

  return (
    <div id="page" onClick={gerar}>
      <button onClick={desfazer}>Desfazer</button>
      <button onClick={refazer}>Refazer</button>
      {list.map(item => (
        <div className="circle" style={{left: item.clientX, top: item.clientY}}/>
      ))}
    </div>
  );
}

export default App;