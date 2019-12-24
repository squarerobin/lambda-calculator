import React from "react";
import {numbers} from "../../../data"
import "./NumberButton.css";

const NumberButtons = () => {
  return (
    
    <div className="numberButtons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className= "numberButton">{numbers[0]}</button>
      <button className= "numberButton">{numbers[1]}</button>
      <button className= "numberButton">{numbers[2]}</button>
      <button className= "numberButton">{numbers[3]}</button>
      <button className= "numberButton">{numbers[4]}</button>
      <button className= "numberButton">{numbers[5]}</button>
      <button className= "numberButton">{numbers[6]}</button>
      <button className= "numberButton">{numbers[7]}</button>
      <button className= "numberButton">{numbers[8]}</button>
      <button className= "numberButton zero">{numbers[9]}</button>
      <button className= "numberButton">{numbers[10]}</button>
    </div>
  );
};

export default NumberButtons;