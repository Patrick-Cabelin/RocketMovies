import styled from "styled-components"

export{ Container, Content} 

const Container = styled.div`
    display: grid;
    grid-template-rows: 11.6rem auto;
    grid-template-areas:
    'header'
    'content' ;
`

const Content = styled.div`
    grid-area: content;
    width: 113.7rem;
    
    margin: 5rem auto;
    padding-right: 2.4rem;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    color: ${({theme})=>theme.COLORS.ICE};

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        
        img{
            height: 1.6rem;
            width: 1.6rem;

            border: .1rem solid ${({theme})=>theme.COLORS.GRAY_200};
            border-radius: 50%;
        }

        h1{
            font-weight: 500;
            font-size: 3.6rem;
            line-height: 4.7rem;
            margin: 2.4rem 0 2.4rem ;
        }

        div:nth-child(2){
            flex-direction: row;
            align-items: center;
            gap:2rem;
        }

        div:nth-child(3){
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
            gap: .8rem;

            svg{
                fill: ${({theme})=>theme.COLORS.PINK};
            }
        }

        div:nth-child(4){
            height: 3rem;
            margin: 4rem 0;

            flex-direction: row;
            align-items: center;
            gap: .8rem;

            span{
                background: #282124;
            }
        }
    }
    
    section{
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 2.1rem;
        text-align: justify;
    }
    
`
