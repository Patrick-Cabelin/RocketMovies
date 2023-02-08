import styled from "styled-components"


export {Container, Content}

const Container = styled.div`
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas: 
    'header'
    'content'
    ;
    width: 100%;
    height: 100%;

    
    `

const Content = styled.div`
    grid-area: content;
    margin: auto;
    
    main{
        overflow-y: scroll;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        width: 113.7rem;
    }

    div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 4rem 0 5rem;

        h2{
            font-style: normal;
            font-weight: 400;
            font-size: 3.2rem;
            line-height: 4.2rem;
            color: ${({theme})=> theme.COLORS.ICE};

        }
    }
`