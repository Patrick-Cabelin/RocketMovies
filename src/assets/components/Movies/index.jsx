import { Container } from "./style";

import { Tag } from "../Tag";

export{Movies}

function Movies({data}){
    return(
        <Container >
          
            {console.log(data)}
            <h2>{data.title}</h2>
            {
           data.tags.map(tag => 
            <footer key={tag.id}>{tag.title}</footer>
            )}
        </Container>
    )
}