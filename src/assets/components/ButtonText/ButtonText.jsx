import { Container } from "./style";    
export {ButtonText}

function ButtonText ({title, icon:Icon}){
    return(
        <Container>
            {Icon && <Icon size={15}/>}
            {title}
        </Container>

    )
}
