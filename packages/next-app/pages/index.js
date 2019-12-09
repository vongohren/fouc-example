import { Box, Grommet } from 'grommet';
import Foo from '@zooniverse/grommet-lib';
import Bar from '@zooniverse/styled-components-lib';
import { CssButton } from '@zooniverse/emotions-lib';
// import { StyleButton } from '@zooniverse/emotions-lib';

export default function () {
  console.log(CssButton)
  console.log(Bar)
  // console.log(StyleButton);
  return (
    <>
      <Bar /> 
      <CssButton />
      {/* <StyleButton/> */}
    </>
  )
}
