import styled from 'styled-components'

const StyledTile = styled.h1`
  color: ${(props) => props.theme.primary};
`

export default function Title(props) {
  return <StyledTile>{props.children}</StyledTile>
}
