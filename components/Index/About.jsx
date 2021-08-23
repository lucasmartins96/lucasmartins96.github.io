import React from 'react'
import Wrapper from '../../layout/Wrapper';
import Image from 'next/image';
import profileImage from '../../public/lucas_martins_2.jpg';
import styled from 'styled-components';

const WrapperImage = styled.div`
  border: 1px solid black;
  width: 30%;
`;

const AboutText = styled.section`
  border: 1px solid black;
  padding-left: 30px;
  width: 70%;

  p {
    /* font-size: 1.4rem; */
    line-height: 2rem;
    padding-bottom: 1rem;
  }
`;

function About() {
  const widHeiImage = 1440;
  const paddingValue = '50px 0';
  return (
    <Wrapper padding={paddingValue}>
      <WrapperImage>
        <Image
          src={profileImage}
          alt="minha foto"
          width={widHeiImage}
          height={widHeiImage}
        />
      </WrapperImage>
      <AboutText>
        <p>
          Olá! Eu sou Lucas Martins da Silva, tenho 24 anos e moro em Suzano - SP.
        </p>
        <p>
          Sou são-paulino sofredor, gosto de acompanhar futebol e basquete. Também curto tocar um violão, contrabaixo e resolver problemas codificando.
        </p>
        <p>
          Minha primeira experiência no desenvolvimento foi por volta de 2010, quando fiz um curso de Informática/Manutenção de Computadores na escola profissionalizante Liceu de Artes e Ofícios de Itaquaquecetuba - SP e no último módulo tive o primeiro contato com HTML e CSS desenvolvendo um site sobre o time europeu que eu gostava na época: Football Club Internazionale Milano (conhecido no Brasil como Inter de Milão).
        </p>
        <p>
          Entre 2013 e 2018 estudei na Etec de Poá, cursando Técnico em Informática para Internet e logo após ingressei na UMC-SP, cursando Tecnólogo em Análise e Desenvolvimento de Sistemas. Como trabalho de conclusão de ambos os cursos, desenvolvemos em grupo sites/sistemas funcionais. Na Etec desenvolvemos o EWTV, um portal com informações sobre diversos seriados. Na UMC, desenvolvemos a Salus, um sistema de gerenciamento de consultas para a ala de fisioterapia da faculdade.
        </p>
        <p>
          Desde então me tornei autodidata enquanto procurava oportunidades na área. Durante esse tempo tenho aprimorado minhas habilidades em Javascript, concluí a certificação em Web Design Responsivo gratuitamente na freeCodeCamp e cursando o módulo de back-end da b7Web. Atualmente faço parte da 10ª turma da Trybe, cursando a formação em Desenvolvimento Web pelo MSC (Modelo de Sucesso Compartilhado) e aprimorando minhas hard-skills e soft-skills.
        </p>
      </AboutText>
    </Wrapper>
  )
}

export default About;
