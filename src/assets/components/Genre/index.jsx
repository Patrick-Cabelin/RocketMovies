import { Container } from "./style";

export{ Genre}

function Genre ({value, onClick, ...rest}){
    
    return(
        <Container  >
            <input type="text"
            value={value} 
            {...rest}/>

            <button
            onClick={onClick}
            >Gênero Do filme</button>
        </Container>
    )
}
