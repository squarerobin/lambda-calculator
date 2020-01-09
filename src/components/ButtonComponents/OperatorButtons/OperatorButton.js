import React from "react";
import "./OperatorButton.css";

const OperatorButtons = (props) => {

  const {styles} = props
  const {symbolOnButton} = props
  return (
    
    <div className="operatorButtons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className= {styles}>{symbolOnButton}</button>
    </div>
  );
};

export default OperatorButtons;