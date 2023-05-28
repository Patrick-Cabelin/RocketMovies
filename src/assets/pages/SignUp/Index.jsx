import { Container, Forms, Background } from './style.js';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {BsArrowLeftCircle} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {useAuth} from '../../hooks/auth.jsx'

export { SignUp };

function SignUp() {
  const [name, setName]= useState('')
  const [email,setEmail]= useState('')
  const [password,setPassword]= useState('')

  const {signUp} = useAuth()
  function register(){
    signUp({name,email,password})
    alert('craido com sucesso, Agora faça o login')
  }
  return (

    <Container>
  
      <Forms>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua conta</h2>

        <Input type='text' placeholder='Nome' onChange={(e)=>{setName(e.target.value)}}></Input>
        <Input type='text' placeholder='E-mail' onChange={(e)=>{setEmail(e.target.value)}}></Input>
        <Input type='password' placeholder='Senha' onChange={(e)=>{setPassword(e.target.value)}}></Input>
        <Button title={'Cadastrar'} onClick={register}/>


        <Link to= '/' > <BsArrowLeftCircle/> Voltar para o login</Link>
      </Forms>
      <Background />
  
    </Container>
  
  );
}
