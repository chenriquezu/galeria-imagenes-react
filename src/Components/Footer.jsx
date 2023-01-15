import React from "react";
import { Button } from "react-bootstrap";

const Footer = (props) =>{
    const {description} = props;
    
    return(
            <footer className="bg-dark text-white p-2, text-center">
               <Button variant="secondary">Link Para mas Información</Button>
               <p class = "text-secondary">{description}</p>
            </footer> 

    );
};
export default Footer;
