import React, { useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [nome, setNome] = useState('Nome');
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome)
    setIdade(idade)
    setNerd(nerd)
  }

  return (
    <div>
      <div>
        <span>
          {nome} {idade} {nerd ? "É nerd" : "Não é nerd"}
        </span>
      </div>
      <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  );
};
