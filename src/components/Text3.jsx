import styled from 'styled-components';
const value = 5;

export function Text3() {
  return <Title>Text3 {value}</Title>;
}

const Title = styled.h2`
  font-size: 5em;
  text-align: center;
  color: palevioletred;
  &:hover {
    color: #36b660;
  }
`
