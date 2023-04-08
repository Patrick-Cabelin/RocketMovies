import styled from "styled-components"


export{Container, InfoMovie, Content}

const Container = styled.div`
    display:grid;
    grid-template-areas: 
    'header'
    'content';
`
const InfoMovie = styled.form`
    display:flex;
    flex-direction: column;
    gap: 4rem;

    div{
        display:flex;
        gap: 4rem;
    }
`

const Content = styled.div`
    grid-area: content;

    width: 113.7rem;
    height: 78.3rem;

    padding: 0 2.4rem 1.6rem 0;
    margin: 4rem auto;

    display:flex;
    flex-direction: column;
   
   h2{
    font-style: normal;
    font-weight: 500;
    font-size: 3.6rem;
    line-height: 4.7rem;
    color: ${({theme})=>theme.COLORS.ICE};

    margin: 2.4rem 0 4rem ;

   }

   section{
    margin-top: 4rem;

        p{
            font-style: normal;
            font-weight: 400;
            font-size: 2rem;
            line-height: 2.6rem;
            color: ${({theme})=>theme.COLORS.GRAY_050};
            margin-bottom: 2.4rem;
        }

        
  }

  div:last-child{
      display: flex;
      gap: 4rem;
    
        button:first-child{
            border: none;
            
            background: ${({theme})=>theme.COLORS.BLACK};
            color: ${({theme})=>theme.COLORS.PINK};
            
            font-style: normal;
            font-weight: 500;
            font-size: 1.6rem;
            line-height: 2.1rem;
            text-align: center;

            width: 100%;
            border-radius: 1rem;

            cursor:pointer;

            &:hover{
                filter: brightness(1.3)
            }

        }
    }
`