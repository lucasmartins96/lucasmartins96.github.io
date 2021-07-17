import React from 'react'
import Wrapper from '../../layout/Wrapper';
import Image from 'next/image';
import profileImage from '../../public/lucas_martins_2.jpg';

function About() {
  const widHeiImage = 300;
  return (
    <Wrapper>
      <Image
        src={profileImage}
        alt="minha foto"
        width={widHeiImage}
        height={widHeiImage}
      />

    </Wrapper>
  )
}

export default About;
