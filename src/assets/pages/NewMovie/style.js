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
    margin:auto;

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

        div{
            margin-bottom: 2.4rem;
            display: flex;
            flex-direction: row;
            align-items: center ;
            justify-content: flex-start;
            padding: 1.6rem;
            gap: 2.4rem;

            width: 111.3rem;
            height: 8.8rem;

            background: ${({theme})=>theme.COLORS.BLACK};
            border-radius: .8rem;
        }
  
  }

  div:nth-child(4){
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
        padding: 1.6rem 25rem;

        width: 65%;
        border-radius: 1rem;

    }
  }
`