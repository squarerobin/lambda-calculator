import React from "react";
import "./NumberButton.css";


/* const clickHandler = () => Display.setOutput('hello') */

const NumberButton = (props) => {
 
  
 


 
 

  
  return (
    
    <div className="numberButtons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick={(e) => props.executeOnClick()} className= {props.styles}>{props.symbolOnButton}</button>

    </div>
  );
};

export default NumberButton;