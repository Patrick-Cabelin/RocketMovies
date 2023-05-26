import { Container } from "./style";


import { ButtonText } from "../ButtonText";
import { useAuth } from "../../hooks/auth";


export {Profile}

function Profile(){
    const {signOut} = useAuth()
    function SignOut(){
        window.location.pathname = '/'
        signOut()
    }
    return(
        <Container to= '/profile'>
            <img src="https://github.com/Patrick-Cabelin.png" alt="" />
            <div>
                <span>Patrick Alex</span>
                <ButtonText title={'Sair'} onClick={SignOut}/>
            </div>
        </Container>
    )
}