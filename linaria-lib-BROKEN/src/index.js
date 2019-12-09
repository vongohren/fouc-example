import React from 'react';
import { styled } from 'linaria/react';


const Div = styled.div`
  background: blue;
`


function LinaraDiv () {
  return (
    <Div>linaria</Div>
  )
}

export default LinaraDiv
