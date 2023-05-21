import { Container, Forms, Background } from './style.js';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import {useAuth} from '../../hooks/auth.jsx'
import {useState} from 'react'

import { Link } from 'react-router-dom'


function SignIn() {
  const {signIn} = useAuth()

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  function userSignIn(){
    console.log()
    signIn({email,password})
  }
  return (

    <Container>
  
      <Forms>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua conta</h2>

        <Input type='text' placeholder='E-mail'
        onChange={e => setEmail(e.target.value)}
        ></Input>
        <Input type='password' placeholder='Senha'
        onChange={e => setPassword(e.target.value)}
        ></Input>
        <Button title={'Entar'} onClick={userSignIn}/>

        <Link to= '/signup'>Criar conta</Link>
      </Forms>
      <Background />
  
    </Container>
  
  );
}

export { SignIn };