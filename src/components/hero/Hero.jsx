import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <div id="hero">
      <div className="container flexHero">
        <p>Saudações, meu nome é</p>
        <h1>Lucas Martins</h1>
        <p className="postHeader">Aspirante a desenvolvedor full-stack</p>
        <p className="postHeader">Boas vindas ao meu portfolio</p>
      </div>
    </div>
  );
}

export default Hero;
