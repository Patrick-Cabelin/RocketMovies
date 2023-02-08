import styled from "styled-components"

export {Container}

const Container = styled.span`
    /* font-family: 'Roboto'; */
    font-weight: 400;
    font-size: 1.2rem;
    line-height: 1.4rem;
    text-align: center;
    color: ${({theme})=>theme.COLORS.ICE};

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: .5rem 1.6rem;
    gap: .8rem;

    width: 12.1rem;
    height: 2.4rem;

    background: ${({theme})=>theme.COLORS.GRAY_300};
    border-radius: .8rem
`