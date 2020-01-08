import React from "react";
import "./NumberButton.css";


/* const clickHandler = () => Display.setOutput('hello') */

const NumberButton = (props) => {
  const {styles} = props
  const {numberOnButton} = props
  
  return (
    
    <div className="numberButtons">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className= {styles}>{numberOnButton}</button>
{/* TODO onClick= {()=>clickHandler()}   */}
    </div>
  );
};

export default NumberButton;