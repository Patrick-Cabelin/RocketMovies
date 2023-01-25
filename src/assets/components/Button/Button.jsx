import { Conteiner } from './style';
export {Button}

function Button({title, ...rest}){
    return(
        <Conteiner
        type='button'
        {...rest}
        >
            <p>{title}</p>
        </Conteiner>
    )
}