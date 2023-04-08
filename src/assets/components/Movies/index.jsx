import { Container, Categorize } from "./style";

import { Tag } from "../Tag";
import { Rating } from "../Rating";

export{Movies}

function Movies({data, children}){
    return(
        <Container >
        <h2>{data.title}</h2>
            <Rating/>
            {children}
            <Categorize>
                {data.tags.map(tag => <Tag key={tag.id} title={tag.title}/>)}
            </Categorize>
        </Container>
    )
}