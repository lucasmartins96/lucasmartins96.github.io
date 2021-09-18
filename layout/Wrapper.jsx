import React from 'react';
import styled from 'styled-components';

const ComponentWrapper = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: ${(props) => props.flexDirection || 'row'};
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
  margin: 0 auto;
  max-width: 1000px;
  padding: ${(props) => props.padding || 0};
`;

function Wrapper({ children, flexDirection, justifyContent, padding }) {
  return (
    <ComponentWrapper
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      padding={padding}
    >
      {children}
    </ComponentWrapper>
  );
}

export default Wrapper;
