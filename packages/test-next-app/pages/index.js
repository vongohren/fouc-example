import { Box, Grommet } from 'grommet'
import Foo from '@zooniverse/testlib'

export default function () {
  return (
    <Grommet>
      <Box margin='medium'>
        Welcome to the test app
        <Foo />
      </Box>
    </Grommet>
  )
}
