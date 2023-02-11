import styled from "styled-components"

export {Container, EditInfo}

const Container= styled.div`
    header{

        display : flex;
        align-items: center;
        justify-content: center;
        
        background: rgba(255, 133, 155, 0.05);
        
        width: 100%;
        height: 14.4rem;

        padding: 0px 12.4rem;
    
        img{
            border-radius: 50%;
            width: 18.6rem;
            height: 18.6rem;
            margin-top: 5.1rem;
        }
    }
`


const EditInfo= styled.form`
    display: flex;
    flex-direction: column;
    gap: .8rem;

    width: 34rem;
    height: 100%;
    margin: 6.3rem auto;

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