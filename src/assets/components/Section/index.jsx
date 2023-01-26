
import { Container } from './style'

export {Section}

function Section({title , children}){
    return (
        <Container>
            <h2>{title}</h2>
                {children}
        </Container>
    )
}