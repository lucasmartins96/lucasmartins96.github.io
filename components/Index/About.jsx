import React from 'react'
import Wrapper from '../../layout/Wrapper';
import Image from 'next/image';
import profileImage from '../../public/lucas_martins_2.jpg';
import styled from 'styled-components';

const WrapperImage = styled.div`
  border: 1px solid black;
  width: 40%;
`;

function About() {
  const widHeiImage = 1440;
  return (
    <Wrapper>
      <WrapperImage>
        <Image
          src={profileImage}
          alt="minha foto"
          width={widHeiImage}
          height={widHeiImage}
        />
      </WrapperImage>
    </Wrapper>
  )
}

export default About;
