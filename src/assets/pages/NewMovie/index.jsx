import { Container, InfoMovie, Content } from './style'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea} from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'
import { Rating } from '../../components/Rating'

export{ NewMovie }

function NewMovie(){
    return(
        <Container>
            <Header/>
            <Content>
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
                    <div>
                        <Tag title={'Suspence'}/>
                        <Tag title={'Novo Marcador'}/>
                    </div>
                </section>
                <div>
                    <button>Excluir Filme</button>
                    <Button title={'Salvar Alteração'}/>                  
                </div>
                
            </Content>
        </Container>
    )
}