import { Container, Author, Content, TitleMovie} from "./style";

import { Header } from '../../components/Header'
import { Rating } from '../../components/Rating'
import { Genre } from '../../components/Genre'

export {MoviePreview}

function MoviePreview(){
    return(
        <Container>
            <Header/>
            <Content>
                
               
                    <TitleMovie>
                        
                        <h1>Coraline</h1>
                        <Rating/>
                    </TitleMovie>
                    
                    <Author>
                        <img src="https://github.com/Patrick-Cabelin.png" alt="" />
                        <p>Por Patrick Cabelin</p>
                        <p>30/02/23</p>
                    </Author>
                    <div>
    
                    <Genre/>
                    <Genre/>

                    </div>
               
                <section>
                Enquanto explora sua nova casa à noite, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Todos têm botões no lugar dos olhos, os pais são carinhosos e os sonhos de Coraline viram realidade por lá. Ela se encanta com essa descoberta, mas logo percebe que segredos estranhos estão em ação: uma outra mãe e o resto de sua família tentam mantê-la eternamente nesse mundo paralelo.
                </section>
            </Content>
        </Container>
    )
}