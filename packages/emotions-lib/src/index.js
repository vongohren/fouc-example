import React from 'react';
import { jsx, css } from '@emotion/core';

import styled from '@emotion/styled'

const Button = styled.button`
  padding: 32px;
  background-color: hotpink;
  font-size: 24px;
  border-radius: 4px;
  color: black;
  font-weight: bold;
  &:hover {
    color: white;
  }
`

const style = css`
  color: hotpink;
`

export const CssButton = ({ children }) => (
  <div css={style}>
    Some hotpink text.
    {children}
  </div>
)

export const StyleButton = ({}) => {
  return (
    <Button>This my button component.</Button>
  )
}