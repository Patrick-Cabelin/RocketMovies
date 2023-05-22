import { Container, Content } from './style';

import { Header } from '../../components/Header';
import { Movies } from '../../components/Movies';
import { Button } from '../../components/Button';

import { BsPlus } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';

function Home(){
    const navigate = useNavigate()
    const [data,setData]=useState({})
    
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
                    {Object.keys(data).length > 0 && <Movies data={data} />}
                </main>
            </Content>
       </Container>
    )
}     

export {Home}