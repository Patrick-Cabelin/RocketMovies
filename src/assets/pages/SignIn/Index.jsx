import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';


import { Container, Forms, Background } from './style.js';
export { SignIn };

function SignIn() {
  return (

    <Container>
  
      <Forms>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua conta</h2>

        <Input type='text' placeholder='E-mail'></Input>
        <Input type='password' placeholder='Senha'></Input>
        <Button title={'Cadastrar'} />

        <a>Criar conta</a>
      </Forms>
      <Background />
  
    </Container>
  
  );
}
