import styled from '@emotion/styled'

const BlockItem = styled('article')`
  position: relative;
  padding: 2rem;
  display: flex;
  align-items: flex-end;
  .project-title {
    position: absolute;
    bottom: -25px;
    left: -25px;
    color: #fff;
    font-size: 55px;
    line-height: 1.2;
    max-width: 300px;
  }
  a {
    display: block;
  }
`

export { BlockItem }
