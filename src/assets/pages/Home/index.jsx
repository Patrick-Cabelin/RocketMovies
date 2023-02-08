import { Container, Content } from './style';

import { Header } from '../../components/Header';
import { Movies } from '../../components/Movies';
import { Button } from '../../components/Button';
import { Tag } from '../../components/Tag';

export {Home}

function Home(){
    const data={
        title: 'Coraline',
        tags: [
            {
            id: 1,
            title: 'Animação'
            },
            {
            id: 2,
            title: 'Terror'
            }
        ]
        } 
    return(
        <Container>
            <Header/>
            <Content>
            <div>
                <h2>Meus filmes</h2>
                <Button title={'Adicionar Filme'}/>
            </div>

            <main>
            <Movies data={data} />

                
                <Movies/>
            </main>
            </Content>
       </Container>
    )
}