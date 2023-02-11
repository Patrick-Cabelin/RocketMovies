import styled from "styled-components";

export { Conteiner };

const Conteiner = styled.button`
  width: 100%;
  height: 5.6rem;

   background: ${({theme}) => theme.COLORS.PINK };

  border-radius: 1rem;

  cursor: pointer;

  &:hover{
    filter: brightness(.9);
  }
`;
