import React from "react";
import "../repeticao/TabelaProdutos.css"
import produtos from "../../data/produtos";

export default (props) => {
  const prodList = produtos.map((prod, i) => {
    return (
      <tr key={prod.id} className={i % 2 === 0 ? 'Par' : ''}>
        <td>{prod.id}</td>
        <td>{prod.nome}</td>
        <td>{prod.preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</td>
      </tr>
    );
  });

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Produto</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {prodList}
        </tbody>
      </table>
    </div>
  );
};
