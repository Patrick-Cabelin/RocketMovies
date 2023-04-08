import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Link } from 'react-router-dom'

import { Container, Forms, Background } from './style.js';

function SignIn() {
  return (

    <Container>
  
      <Forms>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua conta</h2>

        <Input type='text' placeholder='E-mail'></Input>
        <Input type='password' placeholder='Senha'></Input>
        <Button title={'Entar'} />

        <Link to= '/signup'>Criar conta</Link>
      </Forms>
      <Background />
  
    </Container>
  
  );
}

export { SignIn };