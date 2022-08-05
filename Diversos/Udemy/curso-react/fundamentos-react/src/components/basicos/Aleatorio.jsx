import React from "react";

const getRandom = (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min)) + min;
  return (
    <div>
      <h2>Valor Aleatorio</h2>
      <p>
        Valor Minimo: <strong>{min}</strong>
      </p>
      <p>
        Valor Maximo: <strong>{max}</strong>
      </p>
      <p>
        Valor Gerado: <strong>{aleatorio}</strong>
      </p>
    </div>
  );
};

export default getRandom;
