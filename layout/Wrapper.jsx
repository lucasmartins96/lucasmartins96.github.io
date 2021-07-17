import React from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  margin: 0 auto;
  max-width: 1000px;
`;

function Wrapper({ children, flexDirection, justifyContent }) {
  return (
    <ComponentWrapper flexDirection={flexDirection} justifyContent={justifyContent}>
      {children}
    </ComponentWrapper>
  );
}

export default Wrapper;
