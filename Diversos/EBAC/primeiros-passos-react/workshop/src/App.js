import React, {useState} from 'react';

import './App.css';

export default function App() {

  const [livros, setLivros] = useState([
    {id: 1, nome: `React`},
    {id: 2, nome: `Java`},
    {id: 3, nome: `Node`},
  ])
  // primeiro paramentar o valor que quer armazenar,
  // segundo a funcao a ser executada a atualizar o estado

  function addLivro() {
    const newLivro = { id: Math.random(), nome: `` }
    // atualizar o state
    setLivros([...livros, newLivro])
  }

  return (
    <div className="App">
      <h1>Tecnologias</h1>
      <ul>
        {livros.map((elemento) => (
          <li key={elemento.id}>{elemento.nome}</li>
        ))}
      </ul>
      
      <input type="button" value="Adicionar Livros" onClick={() => addLivro()}/>
    </div>
  );
}