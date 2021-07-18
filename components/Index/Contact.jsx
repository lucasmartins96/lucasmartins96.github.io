import React from 'react'
import styled from 'styled-components';
import Wrapper from '../../layout/Wrapper';
import mailIcon from '../../public/icons/envelope.svg';
import githubIcon from '../../public/icons/github.svg';
import linkedinIcon from '../../public/icons/linkedin.svg';
import telegramIcon from '../../public/icons/telegram.svg';
import whatsappIcon from '../../public/icons/whatsapp.svg';

const SocialIcons = styled.ul`
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 40%;
`;

const IconItem = styled.li`
  list-style-type: none;
`;

function Contact() {
  return (
    <Wrapper justifyContent="space-between">
      <span>©️ 2021 Lucas Martins da Silva</span>
      <SocialIcons>
        <IconItem>
          <a href="https://github.com/lucasmartins96" target="_blank">
            <img src={githubIcon} alt="github" />
          </a>
        </IconItem>
        <IconItem>
          <a href="https://www.linkedin.com/in/lumartins-silva/" target="_blank">
            <img src={linkedinIcon} alt="linkedin" />
          </a>
        </IconItem>
        <IconItem>
          <a href="https://api.whatsapp.com/send?phone=5511910163029&text=Ol%C3%A1!%20Fique%20a%20vontade%20para%20entrar%20em%20contato%20comigo!" target="_blank">
            <img src={whatsappIcon} alt="whatsapp" />
          </a>
        </IconItem>
        <IconItem>
          <a href="https://t.me/lmartins96" target="_blank">
          <img src={telegramIcon} alt="telegram" />
          </a>
        </IconItem>
        <IconItem>
          <a href="mailto:lucasmartins.dsilva@gmail.com?subject=Informe%20o%20assunto" target="_blank">
            <img src={mailIcon} alt="mail" />
          </a>
        </IconItem>
      </SocialIcons>
    </Wrapper>
  )
}

export default Contact;
