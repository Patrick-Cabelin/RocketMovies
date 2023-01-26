import { Container } from './style'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'


export function Home(){
    return(
        <Container>
            <Header/>
            <div>
                <h2>Meus filmes</h2>
                <Button title={'Adicionar filme'}/>
            </div>

            <aside>
                <Section>
                </Section>
                
                <Section>
                </Section>
                
                <Section>
                </Section>
            </aside>
        </Container>
    )
} 