import React from "react";
import {specials} from "../../../data"
import "./SpecialButton.css";


const SpecialButton = (props) => {
 
  return (
    <div className="specialButtons">
      <button className={props.styles}>{props.symbolOnButton}</button>
      
    </div>
  );
};

export default SpecialButton;