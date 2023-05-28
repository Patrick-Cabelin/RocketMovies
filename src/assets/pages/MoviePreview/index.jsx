import { Container, Content } from './style';
import { BsArrowLeft, BsClock } from 'react-icons/bs'

import { useNavigate, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react';

import { Header } from '../../components/Header'
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'
import { ButtonText } from '../../components/ButtonText'
import { useAuth } from '../../hooks/auth'
import { api } from '../../../services/api';

export {MoviePreview}

function MoviePreview(){
    const {user} = useAuth()
    const [preview, setPreview] = useState({})

    const navigate = useNavigate()
    const params = useParams()
    function navigateBack(){
        
        navigate(-1)
    }
    useEffect(()=>{
        async function getPreview(){
            const response = await api.get(`/movie/${params.id}`)
            setPreview(response.data)
        }
        getPreview()
    },[])
    return(
        <Container>
            <Header/>
            <Content>
                <div>
                
                    <ButtonText title={'voltar'} icon={BsArrowLeft} onClick={navigateBack}/>

                    <div>
                        <h1>{preview.title}</h1>
                        <Rating star={preview.rating}/>
                    </div>
                    
                    <div>
                        <img src='https://github.com/Patrick-Cabelin.png' alt='' />
                        <p>{user.name}</p>
                        <BsClock/>
                        <p>{preview.created_at}</p>
                    </div>

                    <div>
                        {preview.tags?.map(tag => <Tag key={tag.id} title={tag.name}/>)}
                    </div>

                </div>
               
                <section>
                    {preview.description}
                </section>
            </Content>
        </Container>
    )
}