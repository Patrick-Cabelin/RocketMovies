import { Container, Content } from './style';
import { BsArrowLeft, BsClock } from 'react-icons/bs'

import { useNavigate } from 'react-router-dom'

import { Header } from '../../components/Header'
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'

export {MoviePreview}

function MoviePreview(){
   const navigate = useNavigate()
    function navigateBack(){
        console.log('voltei')
        navigate(-1)
    }
   
    return(
        <Container>
            <Header/>
            <Content>
                <div>
                
                    <ButtonText title={'voltar'} icon={BsArrowLeft} onClick={navigateBack}/>

                    <div>
                        <h1>Coraline</h1>
                        <Rating/>
                    </div>
                    
                    <div>
                        <img src='https://github.com/Patrick-Cabelin.png' alt='' />
                        <p>Por Patrick Cabelin</p>
                        <BsClock/>
                        <p>30/02/23</p>
                    </div>

                    <div>
                        {/* {data.tags.map(tag => <Tag key={tag.id} title={tag.title}/>)} */}
                    </div>

                </div>
               
                <section>
                Enquanto explora sua nova casa à noite, a pequena Coraline descobre uma porta secreta que contém um mundo parecido com o dela, porém melhor em muitas maneiras. Todos têm botões no lugar dos olhos, os pais são carinhosos e os sonhos de Coraline viram realidade por lá. Ela se encanta com essa descoberta, mas logo percebe que segredos estranhos estão em ação: uma outra mãe e o resto de sua família tentam mantê-la eternamente nesse mundo paralelo.
                </section>
            </Content>
        </Container>
    )
}