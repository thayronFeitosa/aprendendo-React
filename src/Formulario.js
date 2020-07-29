import React, { Component } from 'react';

class Formulario extends Component {
    constructor(props) {
        super(props);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: ''
        }
        this.state = this.stateInicial;

    }

    escutadorDeInput = event => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    }
    submitFormulario = () => {
        this.props.escutadorDeSubmite(this.state);
        this.setState(this.stateInicial);

    }

    render() {
        const { nome, livro, preco } = this.state;
        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label htmlFor="nome">Nome</label>
                        <input
                        className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.escutadorDeInput}
                        />
                    </div>
                    <div className="input-field col s4">

                        <label htmlFor="livro">Livro</label>
                        <input
                        className="validate"
                            id="livro"
                            type="text"
                            name="livro"
                            value={livro}
                            onChange={this.escutadorDeInput}

                        />
                    </div>
                    <div className="input-field col s4">

                        <label htmlFor="preco">Preço</label>
                        <input
                        className="validate"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.escutadorDeInput}

                        />
                    </div>
                </div>
                <button onClick={this.submitFormulario} className="btn waves-effect waves-light blue" type="button">Salvar
            </button>
            </form>
        )

    }

}

export default Formulario;