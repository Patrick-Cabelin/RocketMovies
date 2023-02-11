import { Container, EditInfo } from './style'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

export { Profile }

function Profile (){
    return(
        <Container>
            <header>
            <img src="https://github.com/Patrick-Cabelin.png" alt="" />
            
            </header>
            <EditInfo>
                <Input type='text' placeholder='Nome'/>
                <Input type='e-mail' placeholder='Email'/>
                <Input type='password' placeholder='Senha atual'/>
                <Input type='password' placeholder=' Nova Senha'/>
                <Button title={'Salvar'} />
            </EditInfo>
        </Container>
    )
}