import { Box, Grommet } from 'grommet';
import Foo from '@zooniverse/grommet-lib';
import Bar from '@zooniverse/styled-components-lib';
import { CssButton, StyleButton } from '@zooniverse/emotions-lib';

export default function () {
  console.log(CssButton)
  console.log(StyleButton)
  console.log(Bar)
  return (
    <>
      <Bar /> 
      <CssButton />
      <StyleButton />
    </>
  )
}
