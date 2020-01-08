import React, {useState} from "react"

import {numbers} from "../../../data"
import NumberButton from "./NumberButton"
import "../NumberButtons/NumberButton.css"

import Display from "../../DisplayComponents/Display"



//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data too from the provided data file


const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);

  

  return (
    <div className={'numberButtons'}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
       
      {
      
        
     
        numbers.map((number,index) => {
          

          return number === '0' ? <NumberButton key={index} styles={'numberButton zero'} symbolOnButton={number} /> : <NumberButton key={index} styles={'numberButton'} symbolOnButton={number} />;

        })
      }
      
    
      
      

     

    </div>
  );
};

export default Numbers