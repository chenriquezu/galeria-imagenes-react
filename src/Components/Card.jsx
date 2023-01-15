import React from "react";

import {Card as BCard} from 'react-bootstrap';

const Card=(props) =>{
    const {title, description, foto} = props;
    
    return(
           <BCard style = {{ width: '18rem',border:'1px solid'}} 
                           className="bg-primary">
           <BCard.Img variant="top" src = {foto} style ={{ width : '100%'}}/>
           <BCard.Body>
                <BCard.Title>{title}</BCard.Title>
                <BCard.Text>{description}</BCard.Text>
           </BCard.Body>
           </BCard>
       );
};

export default Card;
