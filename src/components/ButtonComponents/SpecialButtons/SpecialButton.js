import React from "react";
import {specials} from "../../../data"
import "./SpecialButton.css";


const SpecialButton = (props) => {

  const {styles} = props
  const {symbolOnButton} = props

 
  return (
    <div className="specialButtons">
      <button className={styles}>{symbolOnButton}</button>
      
    </div>
  );
};

export default SpecialButton;