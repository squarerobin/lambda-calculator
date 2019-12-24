import React from "react";
import {operators} from "../../../data"
import "./OperatorButton.css";

const OperatorButtons = () => {
  return (
    
    <div className="operatorButtons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className= "operatorButton">{operators[0].char}</button>
      <button className= "operatorButton">{operators[1].char}</button>
      <button className= "operatorButton">{operators[2].char}</button>
      <button className= "operatorButton">{operators[3].char}</button>
      <button className= "operatorButton">{operators[4].char}</button>
    </div>
  );
};

export default OperatorButtons;