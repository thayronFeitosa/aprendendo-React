import React from 'react';

const Header = () =>{
    return(
        <nav>
        <div class="nav-wrapper teal darken-2">
          <a href="/" class="brand-logo">Mascara de registro</a>
          <ul class="right hide-on-med-and-down">
            <li><a href="/">Autores</a></li>
            <li><a href="/">Livros</a></li>
            <li><a href="/">Sobre</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default  Header;