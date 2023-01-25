import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';

import {BsArrowLeftCircle} from 'react-icons/bs'
import { Container, Forms, Background } from './style.js';
export { SignUp };

function SignUp() {
  return (

    <Container>
  
      <Forms>
        <h1>RocketMovies</h1>
        <span>Aplicação para acompanhar tudo que assistir.</span>

        <h2>Crie sua conta</h2>

        <Input type='text' placeholder='Nome'></Input>
        <Input type='text' placeholder='E-mail'></Input>
        <Input type='password' placeholder='senha'></Input>
        <Button title={'Cadastrar'} />


        <a> <BsArrowLeftCircle/> Voltar para o login</a>
      </Forms>
      <Background />
  
    </Container>
  
  );
}
