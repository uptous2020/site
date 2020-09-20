import React from 'react';
import styled from "@emotion/styled";


const Heading = ( props ) => {
  return(<h1>{props.children}</h1>);
};

const HeroHeading = styled(Heading)`
  font-size: 36px;
  text-transform: uppercase;

  background: linear-gradient(
      to right,
      #f00 0%,
      #f80 14.28%,
      #dd0 28.56%,
      #0d0 42.85%,
      #0dd 57.14%,
      #00f 71.42%,
      #e0e 85.71%,
      #f00 100%
    )
    0% center / 200% auto;

  background-clip: text;
  webkit-text-fill-color: transparent;
  animation: example 4s linear infinite;
`;

export default HeroHeading;
