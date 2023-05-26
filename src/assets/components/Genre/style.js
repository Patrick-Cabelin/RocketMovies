import styled from "styled-components"

export {Container}
const Container = styled.div`

    margin-bottom: 2.4rem;
    display: flex;
    flex-direction: row;
    align-items: center ;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 1.6rem;
    gap: 2.4rem;

    width: 111.3rem;

    background: ${({theme})=>theme.COLORS.BLACK};
    border-radius: .8rem;

    svg{
        background: ${({theme})=>theme.COLORS.PINK};
    }
    
    input{
        background: ${({theme })=>theme.COLORS.GRAY_300};
        color: ${({theme})=>theme.COLORS.ICE};
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 1.6rem;

        width: 11.3rem;
        height: 5.6rem;

        border:none;
        border-radius: 1rem;

    }

    div{
        display: none;
    }

    button{
        padding: 1.6rem;
        gap: .8rem;

        width: 18rem;
        height: 5.6rem;

        border: .2rem dashed ${({theme})=>theme.COLORS.GRAY_100};
        border-radius: 1rem;

        background:transparent;
        color: ${({theme})=>theme.COLORS.GRAY_100};

        cursor:pointer;

    }
`