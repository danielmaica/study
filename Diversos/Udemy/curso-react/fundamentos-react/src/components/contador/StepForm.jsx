import React from "react";

export default (props) => {
  return (
    <div>
      <label htmlFor="stepInput">Salto: </label>
      <input
        id="stepInput"
        type="number"
        value={props.step}
        onChance={e => props.setStep(+e.target.value)}
      />
    </div>
  );
};
