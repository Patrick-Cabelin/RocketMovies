import { Container } from "./style";

import { ButtonText } from "../ButtonText";

export {Profile}

function Profile(){
    return(
        <Container to= '/profile'>
            <img src="https://github.com/Patrick-Cabelin.png" alt="" />
            <div>
                <span>Patrick Alex</span>
                <ButtonText title={'Sair'}/>
            </div>
        </Container>
    )
}