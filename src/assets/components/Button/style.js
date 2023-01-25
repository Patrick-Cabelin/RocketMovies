import styled from "styled-components";

export { Conteiner };

const Conteiner = styled.button`
  width: 34rem;
  height: 5.6rem;

   background: ${({theme}) => theme.COLORS.PINK };

  border-radius: 1rem;

  cursor: pointer;

  &:hover{
    filter: brightness(.9);
  }
`;
