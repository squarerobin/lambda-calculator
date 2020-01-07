import React from "react";
import {numbers} from "../../../data"
import "./NumberButton.css";
import Display from "../../DisplayComponents/Display"


/* const clickHandler = () => Display.setOutput('hello') */

const NumberButton = (props) => {
  const numberOnButton = props.numberOnButton
  
  return (
    
    <div className="numberButtons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className= {props.styles}>{numberOnButton}</button>
{/* TODO onClick= {()=>clickHandler()}   */}
    </div>
  );
};

export default NumberButton;