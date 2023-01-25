import styled from "styled-components"

export{Container, Forms, Background}

const Container = styled.div`
    height: 100vh;
    
    display: flex;
    align-items: stretch;

    
   
`
const Forms= styled.form`
    margin-top: 4.8rem;
    display: flex;
    flex-direction: column;

    padding: 0 13.4rem;
   

    h1{
        color: ${({theme})=> theme.COLORS.PINK};
        font-size: 4.8rem;
        line-height: 6.3rem;
    }

    span{
        color: ${({theme})=> theme.COLORS.GRAY_050};
        font-size: 1.4rem;
        line-height: 1.8rem;
        margin-bottom: 4.8rem;
    }

    h2{
        font-size: 2.4rem;
        line-height: 3.2rem;
        margin-bottom: 4.8rem;

        color: ${({theme})=> theme.COLORS.ICE};
    }

    input{
        margin-bottom: .8rem;
    }

    button{
        margin-top: 2.4rem;
        text-align: center;
    }

    
`

const Background = styled.div`
    flex: 1;
    background:url('../public/muv.svg') no-repeat, top center;
`