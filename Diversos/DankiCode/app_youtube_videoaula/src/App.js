import "./App.css";
import React, {useState} from "react";
import MyBody from "./MyBody";

function App() {
  
  const [str, setStr] = useState([]);

  function handleClick(){
    setStr(`Ola Daniel`)
    console.log(str);
  }

  return (
    <div className="App">
      <h2>{str}</h2>
      <MyBody conteudo="Body 1" />
      <MyBody conteudo="Body 2" />
      <MyBody conteudo="Body 3" />

    </div>
  );
}

export default App;
