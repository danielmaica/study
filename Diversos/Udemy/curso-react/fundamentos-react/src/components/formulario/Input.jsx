import React, { useState } from "react";
import "./Input.css";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  const quandoClicar = () => {
    setValor('')
  }

  const quandoMudar = (e) => {
    setValor(e.target.value)
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
        <input value={valor} onFocus={quandoClicar} onChange={quandoMudar} />
        <input value={valor} readOnly />
        <input value={undefined} /> {/* componente não controlado */}
      </div>
    </div>
  );
};
