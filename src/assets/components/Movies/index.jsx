import { Container, Categorize } from "./style";

import { Tag } from "../Tag";
import { Rating } from "../Rating";

export{Movies}

function Movies({data, children,...rest}){
    return(        
            <Container
                {...rest}
            >
                <h2>{data.title}</h2>

                <Rating star={data.rating}/>

                {children}

                <Categorize>
                    { data.tag?.map(tag => <Tag key={tag.id} title={tag.name}/>)}
                </Categorize> 

            </Container> 
    )
}