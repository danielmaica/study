import React from "react";
import "./App.css";

import Card from "./components/layout/Card";

import Contador from "./components/contador/Contador"
import Input from "./components/formulario/Input";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar"
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div className="App">
    <h1 className="TitleApp">Fundamentos React</h1>

    <div className="Cards">
      <Card titulo="#12 - Componente Classe (Contador)" color="#EEE5E9" >
        <Contador iniNum={10} iniStep={1} />
      </Card>

      <Card titulo="#11 - Componente Controlado (Input)" color="#3c687a" >
        <Input />
      </Card>

      <Card titulo="#10 - Comunicação Inireta" color="#eb9e57" >
        <IndiretaPai />
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#1ee8af" >
        <DiretaPai />
      </Card>

      <Card titulo="#08 - Par ou Impar" color="#982395" >
        <ParOuImpar numero={7} />
        <UsuarioInfo usuario={{nome: 'Daniel'}} />
        {/* <UsuarioInfo /> */}
      </Card>

      <Card titulo="#07 - Desafio Produtos" color="#9838f2" className="Prods">
        <TabelaProdutos />
      </Card>

      <Card titulo="#06 - Lista de Alunos" color="#FF4C65">
        <ListaAlunos />
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro" />
          <FamiliaMembro nome="Ana" />
          <FamiliaMembro nome="Gustavo" />
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatorio" color="#FA6900">
        <Aleatorio min={10} max={60} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Situação do Aluno" color="#E8B71A">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Daniel Maicá"
          nota={9.9}
        />
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro />
      </Card>
    </div>
  </div>
);
