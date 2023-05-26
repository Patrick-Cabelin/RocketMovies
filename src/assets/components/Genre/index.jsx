import { useState, useEffect } from "react";
import { Container } from "./style";

import {Tag} from '../Tag'
export{ Genre}

function Genre ({infoOfReview}){
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState('')
    
    function newGenre(){
        setTags(prevTag=>[...prevTag,newTag])
        setNewTag('')

    }

    useEffect(()=>{
        infoOfReview(tags)
    },[newTag])
    return(
        <Container  >
            <input type="text"
            onChange={e=>{setNewTag(e.target.value)}}
            value={newTag}
            />
           {
            tags.map(tag => {
                return(
                 <Tag key={String(tag.id)}
                title={tag} 
                />
                )
            })
           }
            
           <button
           onClick={newGenre}
           >Gênero Do filme</button>

        </Container>
    )
}
