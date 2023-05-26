
import { Container, InfoMovie, Content } from './style'

import { useNavigate } from 'react-router-dom'
import { api } from '../../../services/api'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { TextArea} from '../../components/TextArea'
import { Button } from '../../components/Button'
import { Genre } from '../../components/Genre'
import { ButtonText } from '../../components/ButtonText'

import { BsArrowLeft } from 'react-icons/bs'
import { useState } from 'react'


export{ NewMovie }

function NewMovie(){
    const navigate = useNavigate()
    const [title,setTitle] = useState('')
    const [rating,setRating] = useState('')
    const [description,setDescription] = useState('')
    const [tags,setTags] = useState([])

    function infoOfReview(tag){
        setTags(tag)
       
    }
    
    async function createReview(){
 
        await api.post('/movie',{
            title,
            description,
            rating,
            tags
        })

        alert('Review Feita com sucesso')

        navigateBack()

    }
    
    function navigateBack(){
        navigate(-1)
    }
    return(
        <Container>
            <Header/>
            <Content>
       
                <ButtonText title={'voltar'} icon={BsArrowLeft} onClick={navigateBack}/>

                <h2>Novo Filme</h2>

                <InfoMovie>
                    <div>
                        <Input placeholder='Título' onChange={(e)=>{setTitle(e.target.value)}}/>
                        <Input placeholder='Nota (0 a 5)' onChange={(e)=>{setRating(e.target.value)}}/>
                    </div>
                    <TextArea placeholder='Observações' onChange={(e)=>{setDescription(e.target.value)}}/>
                </InfoMovie>
                <section>
                    <p>Marcadores</p>
                    <Genre infoOfReview={infoOfReview}  />
                </section>
                <div>
                    <button>Excluir Filme</button>
                    <Button title={'Salvar Alteração'} onClick={createReview}/>                  
                </div>
                
            </Content>
        </Container>
    )
}