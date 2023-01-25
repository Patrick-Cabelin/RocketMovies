import { Container } from './style';
import { Input } from '../Input'
import { Profile } from '../Profile'
 
export{ Header } 

function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <Input type="text" placeholder={'Pesquisar pelo título'}/>
            <Profile/>
        </Container>
    )
}