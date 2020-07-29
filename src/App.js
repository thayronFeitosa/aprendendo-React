import React, { Component, Fragment } from 'react';
import './App.css';
import Header from './Header';
import Tabela from './tabelas';
import 'materialize-css/dist/css/materialize.min.css'

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
        <Header />
        <div className="container">
        <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
        <Form escutadorDeSubmite={this.escutadorDeSubmite}/>
        </div>
      </Fragment>
    );
  }
}

export default App;
