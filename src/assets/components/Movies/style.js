import styled from "styled-components"

export {Container, Categorize}

const Container = styled.section`
    width: 100%;
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
      
    h2{
        display: flex;
        flex-direction: column;
        gap: .8rem;
        
        margin: 0rem;
        
        color: ${({theme})=> theme.COLORS.ICE};
        
    }

    &:hover{
        cursor: pointer;
        filter: brightness(0.7) blur(.1rem);
    }
    `

const Categorize = styled.footer`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
    padding: .5rem;
    gap: .8rem;
    `

    

