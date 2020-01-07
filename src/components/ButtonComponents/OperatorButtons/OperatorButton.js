import React from "react";
import {operators} from "../../../data"
import "./OperatorButton.css";

const OperatorButtons = (props) => {

  
  return (
    
    <div className="operatorButtons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className= {props.styles}>{props.symbolOnButton}</button>
   {/* operators[0].char */}
    </div>
  );
};

export default OperatorButtons;