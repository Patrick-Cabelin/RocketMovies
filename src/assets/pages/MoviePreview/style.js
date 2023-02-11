import styled from "styled-components"

export{ Container, Author, Content, TitleMovie} 

const Container = styled.div`
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    'header'
    'content' ;
`

const Author = styled.div`
    display: flex;
    gap: .8rem;
    justify-content: flex-start;
    align-items: center;

    img{
        height: 1.6rem;
        width: 1.6rem;

        border: .1rem solid ${({theme})=>theme.COLORS.GRAY_200}; ;
        border-radius: 50%;
    }
`
const Content = styled.div`
    grid-area: content;
    width: 113.7rem;
    
    margin: auto;
    padding-right: 2.4rem;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4rem;

    color: ${({theme})=>theme.COLORS.ICE};

    div{
        display: flex;
        gap: .8rem;
    }
    
    section{
        font-style: normal;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.1rem;
        text-align: justify;
    }
    
`
const TitleMovie = styled.div`
    display:flex;
    justify-content: flex-start;
    align-items: center;

    h1{
        font-style: normal;
        font-weight: 500;
        font-size: 3.6rem;
        line-height: 4.7rem;
        margin: 2.4rem 0 2.4rem ;
    }

    div{
        margin-left: 1.9rem;
    }
`

