import styled from "styled-components"

export {Container}

const Container = styled.button`
    font-size: 1.6rem;
    line-height: 2.11rem;

    border: none;
    background: none;

    display:flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    color:${({ theme }) => theme.COLORS.PINK};
`