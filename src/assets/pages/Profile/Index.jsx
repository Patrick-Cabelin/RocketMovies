import { Container, EditInfo } from './style'

import {useNavigate} from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { BsArrowLeft } from 'react-icons/bs'

export { Profile }

function Profile (){
    const navigate = useNavigate()

    function navigateBack(){
        navigate(-1)
    }
    return(
        <Container>
            <header>

            <ButtonText title={'voltar'} icon={BsArrowLeft} onClick={navigateBack}/>

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