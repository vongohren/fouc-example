import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo_brandmark.png'

let log = console.log.bind(console);

const Div = styled.div`
  background: yellow;
`

const Div2 = styled.div`
  background: red;
`

const Button = styled.button`
  background: green;
`

const Img = styled.img`
  width: 100px;
`

function useMount({ onMount, onUnmount }: {onMount:any, onUnmount:any}) {
  let ref = React.useRef();

  let callbackRef = React.useCallback(
    node => {
      if (node) {
        ref.current = node;
        onMount && onMount(node);
      }
    },
    [onMount]
  );

  React.useEffect(() => {
    return () => {
      onUnmount && onUnmount(ref.current);
    };
  }, [onUnmount]);

  return callbackRef;
}


export const Bar = () => {
  const [show, setShow] = React.useState(false);
  let onMount = (node:any) => log("I mounted this node in the DOM:", node);
  let onUnmount = (node:any) => log("I unmounted this node from the DOM:", node);
  let ref = useMount({ onMount, onUnmount });
  const click = 'CLICK!'
  if(show) {
    return (
      <>
        <Div2 ref={ref}>foo</Div2>
        <Button onClick={()=>{setShow(!show)}}>{click}</Button>
      </>
    )
  }
  return (
    <>
      <Img src={logo} alt={'a logo'}/>
      <Div ref={ref}>bar</Div>
      <Button onClick={()=>{setShow(!show)}}>{click}</Button>
    </>
  )
}

export { ServerStyleSheet } from 'styled-components';