import styled from "styled-components"

export {Container, EditInfo, Avatar}

const Container= styled.div`
    header{

        display : flex;
        align-items: center;
        justify-content: space-between;
        
        background: rgba(255, 133, 155, 0.05);
        
        width: 100%;
        height: 14.4rem;

        padding: 0rem 12.4rem;
    
        img{
            border-radius: 50%;
            width: 18.6rem;
            height: 18.6rem;
            margin: auto;
        }

}

`

const Avatar = styled.div`
    position: relative;
    margin:  auto;

    > label {
        width: 4.8rem;
        height: 4.8rem;

        background: ${({theme})=> theme.COLORS.PINK};
        border-radius: 50%;
        
        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        right: .7rem;
        bottom: .7rem;

        cursor: pointer;

        input{
            display: none;
        }

        svg{
            width: 2rem;
            height: 2rem;
            color: ${({theme})=> theme.COLORS.GRAY_400}
        }
}
`


const EditInfo= styled.form`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    width: 34rem;
    height: 100%;
    margin: 6.4rem auto 0;

    div:nth-child(2){
        margin-bottom: 2.4rem;
    }
    div:nth-child(1){
        margin-top: 6.4rem;
    }
    button{
        margin-top: 2.4rem;
    }
`