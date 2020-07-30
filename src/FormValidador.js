import validador from 'validator';

class FormValidador {
    constructor(validacoes) {
        this.validacoes = validacoes;
    }

    valida(state) {

        let validacao = this.valido();
        this.validacoes.forEach(regra => {

            const campoValor = state[regra.campo.toString()];
            const agrs = regra.agrs || [];

            const metodoValidacao =  typeof regra.metodo === 'string' ? 
            validador[regra.metodo] : regra.metodo;


            if (metodoValidacao(campoValor, ...agrs, state) !== regra.validoQuando) {
                validacao[regra.campo] ={
                    isInvalid: true,
                    message: regra.messagem
                }
                validacao.isValid = false;
            }
        });

        return validacao;
    }
    valido() {
        const validacao = {};
        this.validacoes.map(regra => {
            validacao[regra.campo] = { isInvalid: false, messagem: '' }
        });
        return { isValid: true, ...validacao };
    }
}
export default FormValidador;