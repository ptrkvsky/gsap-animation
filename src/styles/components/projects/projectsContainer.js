import styled from '@emotion/styled'
import theme from '../../theme'

const BlockProjects = styled('section')`
  display: grid;
  grid-column-gap: 40px;

  margin: 0 auto;
  padding-top: 20vw;
  width: ${theme.maxWidth};
  max-width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  a {
    display: block;
  }
`

export { BlockProjects }
