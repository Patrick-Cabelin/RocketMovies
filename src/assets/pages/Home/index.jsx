import { Container, Content } from './style';

import { Header } from '../../components/Header';
import { Movies } from '../../components/Movies';
import { Button } from '../../components/Button';

import { BsPlus } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

import { useState, useEffect } from 'react';
import { api } from '../../../services/api';

function Home(){
    const navigate = useNavigate()
    const [movies,setMovies] = useState([])
    const [search,setSearch] = useState('')
 
    function showMoviePreview(id){
        navigate(`/movie/${id}`)
    }


    useEffect(()=>{
        async function getPreviews(){
            const response = await api.get(`/movie?title=${search}`)

            setMovies(response.data)
        }
        getPreviews()
    },[])
    
    return(
        <Container>
            <Header/>
            <Content>
                <div>
                    <h2>Meus filmes</h2>
                    <div>
                        <Button icon={BsPlus} title={'Adicionar Filme'} onClick={()=>navigate('/newmovie')}/>
                    </div>
                </div>

                <main>
                    {movies.map(movie =>{
                        return (
                            <Movies 
                                data={movie}
                                key={movie.id}
                                onClick={()=>showMoviePreview(movie.id)}
                            >
                                {movie.description}
                            </Movies>
                        )
                    })}
                </main>
            </Content>
       </Container>
    )
}     

export {Home}