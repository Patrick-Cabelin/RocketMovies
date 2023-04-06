import { Conteiner } from './style';

function Button({title, loading = false ,icon: Icon,...rest}){
    return(
       <Conteiner
       type='button'
       disabled = {loading}
       >
        {Icon &&<Icon size={20}/>}
        {loading || title}
       </Conteiner>
    )
}

export {Button}