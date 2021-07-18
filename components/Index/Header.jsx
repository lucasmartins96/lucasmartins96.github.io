import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../layout/Wrapper';

const HeaderPage = styled.header`
  border: 1px solid black;
  overflow: hidden;
  padding: 20px 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const Menu = styled.nav`
  display: flex;
  width: 80%;

  ul {
    display: inherit;
  }

  li {
    border: 1px solid black;
    list-style-type: none;
    flex-grow: 1;
    padding: 10px 0;
    text-align: center;
  }

  flex-direction: column;
`;

function Header() {
  const justifyContentValue = 'center';
  return (
    <HeaderPage>
      <Wrapper justifyContent={justifyContentValue}>
        <Menu>
          <ul>
            <li>
              <a>home</a>
            </li>
            <li>
              <a>sobre mim</a>
            </li>
            <li>
              <a>projetos desenvolvidos</a>
            </li>
            <li>
              <a>contato</a>
            </li>
          </ul>
        </Menu>
      </Wrapper>
    </HeaderPage>
  );
}

export default Header;
