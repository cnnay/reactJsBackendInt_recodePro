import React from 'react';
import {useSelector, useDispatch } from 'react-redux';
import menu from '../src/components/menu';

function App() { 

const [inputFrutas, setInputFrutas] = React.useState("");
const [inputTitulo, setInputTitulo] = React.useState("");

  // redux
const frutas = useSelector((state) => state.frutasReducer.frutas);
const stateTitulo = useSelector((state) => state.tituloReducer.titulo);
const dispatch = useDispatch();


function adicionarFrutas(Event) {
  Event.preventDefault();

  const objFrutas = {
    nome: inputFrutas
  }

  dispatch({type: "ADICIONAR", value: objFrutas});
  
}

  function alterarTitulo(Event) {
    setInputTitulo(Event.target.value);
    dispatch({ type: "ALTERAR", value: Event.target.value});
  }

  return (
    <div >
      <nav>
        <div class="nav-wrapper teal lighten-2">
          <a href="#" class="brand-logo ">App list</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
          </ul>
        </div>
        </nav>
      <menu/>


    <div className="container">

      <form>
        <label className="subtitle">Titulo da lista</label>
        <input placeholde="Digite um titulo" value={inputTitulo} onChange={alterarTitulo}></input>
      </form>

      <form onSubmit={adicionarFrutas}>

        <input placeholder="Digite um item..." value={inputFrutas} onChange={(Event) => setInputFrutas(Event.target.value)}></input>
        <div className="container ">
          <button className="btn-large container ">Enviar</button>
        </div>
      </form>


      <div>

      <br></br>

      </div>

      <div>

      <table>
        <thead>
        <h1>Lista: {stateTitulo}</h1>
          <tr>
              <th>Nome do item</th>
          </tr>
        </thead>


        <tbody>
          {frutas.map((frutas, index) => {
            return (
              <tr key={index}>{frutas.nome}</tr>
            )
          })}
        </tbody>
      </table>
      </div>

    </div>
    </div>



  );
}

export default App;
