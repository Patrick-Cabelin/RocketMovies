
import { Container, InfoMovie, Content } from './style'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea} from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Genre } from '../../components/Genre'
import { ButtonText } from '../../components/ButtonText'

import { BsArrowLeft } from 'react-icons/bs'


export{ NewMovie }

function NewMovie(){
    return(
        <Container>
            <Header/>
            <Content>
       
                <ButtonText title={'voltar'} icon={BsArrowLeft}/>

                <h2>Novo Filme</h2>

                <InfoMovie>
                    <div>
                        <Input placeholder='Título'/>
                        <Input placeholder='Nota (0 a 5)'/>
                    </div>
                    <TextArea placeholder='Observações'/>
                </InfoMovie>
                <section>
                    <p>Marcadores</p>
                    <Genre isNew={false} value={'Animação'}/>
                </section>
                <div>
                    <button>Excluir Filme</button>
                    <Button title={'Salvar Alteração'}/>                  
                </div>
                
            </Content>
        </Container>
    )
}