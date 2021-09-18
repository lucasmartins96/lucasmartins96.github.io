import React from 'react';
import styled from 'styled-components';
import Wrapper from '../../layout/Wrapper';
import HeaderLink from './HeaderLink';

const CONTENT_LINK = ['Home', 'Sobre Mim', 'Projetos Desenvolvidos', 'Contato'];

const HeaderPage = styled.header`
  background-color: rgba(8, 14, 18, 0.8);
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

  flex-direction: column;
`;

function Header() {
  const justifyContentValue = 'center';
  const callbackFn = (content) => <HeaderLink key={ content } content={ content } />;
  return (
    <HeaderPage>
      <Wrapper justifyContent={justifyContentValue}>
        <Menu>
          <ul>
            { CONTENT_LINK.map(callbackFn) }
          </ul>
        </Menu>
      </Wrapper>
    </HeaderPage>
  );
}

export default Header;
