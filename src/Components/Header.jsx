import React from "react";

const Header = (props) =>{
    const {subtitle, subtitle1, foto} = props;
    return (
      <> 
         <img src = {foto} alt = "titulo"/>
         <hr></hr>
         <h5><p>{subtitle} {subtitle1}</p></h5> 
      </>
    );
};

export default Header;
