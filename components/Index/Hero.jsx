import React from 'react';
import { CircleFill } from 'react-bootstrap-icons';
import styled from 'styled-components';
import wallpaper from '../../public/2109964.jpg';

const HeroImage= styled.div`
  align-items: center;
  background-image: url(${wallpaper});
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
`;

const HeroMessage = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-evenly;
  width: 1000px;
  text-align: center;
`;

function Hero() {
  return (
    <HeroImage>
      <HeroMessage>
        <h1>Lucas Martins da Silva</h1>
        <span>
          Estudante <CircleFill size={7} /> Desenvolvedor <CircleFill size={7} /> Músico{' '}
        </span>
      </HeroMessage>
    </HeroImage>
  );
}

export default Hero;
