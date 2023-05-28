import { Container } from "./style"


import { ButtonText } from "../ButtonText"
import { useAuth } from "../../hooks/auth"
import avatarPlaceholder from '/avatarPlaceholder.svg'
import { api } from "../../../services/api"

export {Profile}

function Profile(){
    const {signOut, user} = useAuth()
    const avatar = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    function SignOut(){
        window.location.pathname = '/'
        signOut()
    }
    return(
        <Container to= '/profile'>
            <img src={avatar} alt="imagem do usuário" />
            <div>
                <span>{user.name}</span>
                <ButtonText title={'Sair'} onClick={SignOut}/>
            </div>
        </Container>
    )
}