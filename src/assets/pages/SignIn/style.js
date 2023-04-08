import styled from 'styled-components'


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
        margin: 2.4rem 0 4.2rem;
        text-align: center;
    }

    a{
        color: ${({theme})=> theme.COLORS.PINK}; 
        font-size: 1.6rem;
        
        text-align: center;
        text-decoration: none;

        &:hover{
            text-decoration: underline;
            filter: brightness(0.9);
        }
    }
    
`

const Background = styled.div`
    flex: 1;
    background:url('/muv.svg') no-repeat, top center;
`