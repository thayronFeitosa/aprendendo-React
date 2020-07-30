import React, { Component } from 'react';
import FormValidator from './FormValidador';

class Formulario extends Component {
    constructor(props) {
        super(props);

        this.validador = new FormValidator([
        {
            campo: 'nome',
            metodo:'isEmpty',
            validoQuando: false,
            messagem: 'Entre com um nome valido!'
        },{
            campo: 'livro',
            metodo:'isEmpty',
            validoQuando: false,
            messagem: 'Entre com um livro!'
        },{
            campo: 'preco',
            metodo:'isInt',
            args:[{mim:0,max:9999}],
            validoQuando: true,
            messagem: 'Entre com um valo numerico!'
        }
    ]);

        this.stateInicial = {
            nome: '',
            livro: '',
            preco: '',
            validacao: this.validador.valido()
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
        const validacao = this.validador.valida(this.state);

        if(validacao.isValid){
            this.props.escutadorDeSubmite(this.state);
            this.setState(this.stateInicial);
        }else{
            const {nome, livro, preco} = validacao;
            const campos = [nome, livro, preco]

            const camposInvalidos = campos.filter(elem=>{
                return elem.isInvalid;
            });
            camposInvalidos.forEach(console.log);
        }

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