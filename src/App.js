import React, { Component, Fragment } from 'react';
import './App.css';
import Tabela from './tabelas';

import Form from './Formulario';

class App extends Component {

  state = {

    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Danel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }, {
        nome: 'thayron',
        livro: 'Est. de dados',
        preco: '50'
      }
    ],
  };

  removeAutor = index => {
    const { autores } = this.state;
    this.setState(
      {
        autores: autores.filter((autor, posAtual) => {
          return posAtual !== index;
        }),
      }
    )
  }

  escutadorDeSubmite = autor =>{
    this.setState({autores:[...this.state.autores, autor]})
  }

  render() {
    return (
      <Fragment>
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Form escutadorDeSubmite={this.escutadorDeSubmite}/>
      </Fragment>
    );
  }
}

export default App;
