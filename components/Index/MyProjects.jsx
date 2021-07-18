import React from 'react'
import styled from 'styled-components';
import Wrapper from '../../layout/Wrapper';

const MyProjectsList = styled.section`
  display: grid;
  gap: 4% 1.25%;
  grid-template-columns: repeat(3, 1fr);
  height: 50vh;
  width: 100%;
`;

const MyProjectCard = styled.div`
  background-color: #295fa5;
  display: flex;

  div {
    align-self: flex-end;
    background-color: #e1e7ef;
    padding: 10px 20px;
    width: 100%;
  }
`;

function MyProjects() {
  return (
    <Wrapper flexDirection="column">
      <h3>Projetos desenvolvidos</h3>
      <MyProjectsList>
        <MyProjectCard><div>1</div></MyProjectCard>
        <MyProjectCard><div>2</div></MyProjectCard>
        <MyProjectCard><div>3</div></MyProjectCard>
        <MyProjectCard><div>4</div></MyProjectCard>
        <MyProjectCard><div>5</div></MyProjectCard>
        <MyProjectCard><div>6</div></MyProjectCard>      
      </MyProjectsList>
    </Wrapper>
  )
}

export default MyProjects;
