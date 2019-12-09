import { Box, Grommet } from 'grommet';
import Foo from '@zooniverse/grommet-lib';
import Bar from '@zooniverse/styled-components-lib';
import { CssButton } from '@zooniverse/emotions-lib';
// import { StyleButton } from '@zooniverse/emotions-lib';
import { CssButton as BabelCssButton } from '@zooniverse/emotions-babel-lib';
// import { StyleButton as BabelStyleButton } from '@zooniverse/emotions-babel-lib';

export default function () {
  console.log(CssButton)
  console.log(Bar)
  // console.log(StyleButton);
  console.log(BabelCssButton);
  // console.log(BabelStyleButton);
  return (
    <>
      <Bar /> 
      <CssButton />
      {/* <StyleButton/> */}
      <BabelCssButton />
      {/* <BabelStyleButton/> */}
    </>
  )
}
