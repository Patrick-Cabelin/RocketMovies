import styled from "styled-components"

export {Container, MovieTag}

const Container = styled.section`
    width: 100%;
    height: 100%;

    margin:auto;
    background: rgba(255, 133, 155, 0.05);
    border-radius: 1.6rem;
    padding: 3.2rem;


    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 1.9rem;
    
    color: ${({theme})=>theme.COLORS.GRAY_100};

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    
    `

const MovieTag = styled.h2`
    display: flex;
    flex-direction: column;
    gap: .8rem;
    height: 5.2rem;
    margin: 0rem;
    
    color: ${({theme})=> theme.COLORS.ICE};
    
`
