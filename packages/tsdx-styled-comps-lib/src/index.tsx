import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
  background: yellow;
`

const Div2 = styled.div`
  background: red;
`

const Button = styled.button`
  background: green;
`


export default () => {
  const [show, setShow] = React.useState(false);
  const click = 'CLICK!'
  if(show) {
    return (
      <>
        <Div2>foo</Div2>
        <Button onClick={()=>{setShow(!show)}}>{click}</Button>
      </>
    )
  }
  return (
    <>
      <Div>bar</Div>
      <Button onClick={()=>{setShow(!show)}}>{click}</Button>
    </>
  )
}