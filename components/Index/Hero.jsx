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
  color: #edf3f7;
  display: flex;
  flex-direction: column;
  height: 30%;
  justify-content: space-evenly;
  width: 1000px;
  text-align: center;

  h1 {
    font-size: 6.0rem;
    text-shadow: 
    1px 0px 1px #080e12, 0px 1px 1px #080e12, 
    2px 1px 1px #080e12, 1px 2px 1px #080e12,
    3px 2px 1px #080e12, 2px 3px 1px #080e12,
    4px 3px 1px #080e12, 3px 4px 1px #080e12,
    5px 4px 1px #080e12, 4px 5px 1px #080e12,
    6px 5px 1px #080e12, 5px 6px 1px #080e12,
    7px 6px 1px #080e12;
    /* text-shadow: 2px 2px 4px #080e12; */
  }

  span {
    font-size: 1.8rem;
  }
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
