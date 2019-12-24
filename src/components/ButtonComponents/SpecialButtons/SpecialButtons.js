import React from "react";
import {specials} from "../../../data"
import "./SpecialButton.css";


const SpecialButtons = () => {
 
  return (
    <div className="specialButtons">
      <button className="specialButton">{specials[0]}</button>
      <button className="specialButton">{specials[1]}</button>
      <button className="specialButton">{specials[2]}</button>
    </div>
  );
};

export default SpecialButtons;