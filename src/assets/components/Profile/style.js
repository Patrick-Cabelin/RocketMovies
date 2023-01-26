import styled from "styled-components"

export{ Container}

const Container = styled.div`
    display: flex;
    flex-direction: row-reverse;
    gap: .9rem;
    align-items: center;
    justify-content: center;

    width: 30rem;
    height: 6.8rem;

    img{   
        width: 6.4rem;
        height: 6.4rem;
        border: 1px solid ${({theme})=> theme.COLORS.GRAY_200};
        border-radius: 50%;
    }

    div{
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    span{
        font-weight: 700;
        font-size: 1.4rem;
        line-height: 1.8rem;

        color: ${({theme})=> theme.COLORS.ICE};
    }
`
