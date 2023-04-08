import { Container, Content } from './style';

import { Header } from '../../components/Header';
import { Movies } from '../../components/Movies';
import { Button } from '../../components/Button';

import { BsPlus } from 'react-icons/bs'


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
        ],
        
        } 
    return(
        <Container>
            <Header/>
            <Content>
                <div>
                    <h2>Meus filmes</h2>
                    <div>
                        <Button icon={BsPlus} title={'Adicionar Filme'}/>
                    </div>
                </div>

                <main>

                    <Movies data={data}>
                        <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim quis, nesciunt ad laboriosam cum voluptatem culpa? Reiciendis dolore eligendi rem ea eveniet, iusto qui, aliquid recusandae, necessitatibus exercitationem veritatis libero!    
                        </p> 
                    </Movies>
                </main>
            </Content>
       </Container>
    )
}     

export {Home}