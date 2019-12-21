import React from "react";
import {data} from "../../../data"

const NumberButton = () => {
  return (
    <div>
      {/* Display a button element rendering the data beng passed down from the parent container on props */}
  <button className="button numberButton"></button>
    </div>
  );
};

export default NumberButton;