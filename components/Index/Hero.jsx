import React from 'react';
import { CircleFill } from 'react-bootstrap-icons';

function Hero() {
  return (
    <div>
      <h1>
        Olá... Eu sou Lucas
        Desenvolvedor Web
      </h1>
      <ul>
        <li>Estudante</li>
        <CircleFill size={14}/>
        <li>Desenvolvedor</li>
        <CircleFill size={14}/>
        <li>Músico</li>
      </ul>
    </div>
  );
}

export default Hero;
