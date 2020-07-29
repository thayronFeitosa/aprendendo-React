import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Autores</th>
                <th>Livros</th>
                <th>Preço</th>
            </tr>
        </thead>
    );
}

const TableBody = function () {
    return (

        <tbody>
            <tr>
                <td>Paulo</td>
                <td>react</td>
                <td>1.00</td>
                <td><button>Remover</button> </td>
            </tr>
            <tr>
                <td>Nico</td>
                <td>React</td>
                <td>1.00</td>
                <td><button>Remover</button></td>
            </tr>
            <tr>
                <td>Daniel</td>
                <td>React</td>
                <td>1.00</td>
                <td><button>Remover</button> </td>
            </tr>
        </tbody>
    );
}

class Tabela extends Component {

    render() {
        return (
            <table>

                <TableHead />
                <TableBody />

            </table>
        )
    }
}

export default Tabela;