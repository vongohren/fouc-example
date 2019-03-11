import { Box, Grommet } from 'grommet'
import Foo from '@zooniverse/grommet-lib'
import Bar from '@zooniverse/styled-components-lib'

export default function () {
  return (
    <Grommet>
      <Box margin='medium'>
        Welcome to the test app
        <Foo />
        <Bar />
      </Box>
    </Grommet>
  )
}
