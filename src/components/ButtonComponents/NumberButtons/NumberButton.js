import React from "react";
import {numbers} from "../../../data"
import "./NumberButton.css";
import display from "../../DisplayComponents//Display"

const NumberButton = (props) => {
  const numberOnButton = props.numberOnButton
  
  
  const clickHandler = (e) => {
    display.setOutput(props.numberOnButton)


  }

  return (
    
    <div className="numberButtons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onClick= {()=>clickHandler} className= {props.styles}>{props.numberOnButton}</button>

    </div>
  );
};

export default NumberButton;