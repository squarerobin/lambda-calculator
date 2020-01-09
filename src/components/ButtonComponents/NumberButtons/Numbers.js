import React, {useState} from "react"

import {numbers} from "../../../data"
import NumberButton from "./NumberButton"
import App from "../../../App"

import "../NumberButtons/NumberButton.css"




//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/
//Import your array data too from the provided data file


const Numbers = (props) => {

  
  // STEP 2 - add the imported data to state
  const [numbersState, setNumbersState] = useState()
  const {numberState, setNumberState} = useState()
 
  let [currentClass, setCurrentClass] = useState();

  return (

  
    <div className={'numberButtons'}>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
      it any props needed by the child component*/}
       
      {
      
     
        numbers.map((number,index) => {
          
         //props.setNumberState(number)


         /* 

         if(number === '1'){
          setCurrentClass('one')
         }else if (number === '2'){
          setCurrentClass('two')

         }else if (number === '3'){
          setCurrentClass('three')

         }else if (number === '4'){
          setCurrentClass('four')

         }else if (number === '5'){
          setCurrentClass('five')

         }else if (number === '6'){
          setCurrentClass('six')

         }else if (number === '7'){
          setCurrentClass('seven')
         }else if (number === '8'){
          setCurrentClass('eight')
         }else if (number === '9'){
          setCurrentClass('nine')
         }else if (number === '0'){
          setCurrentClass('zero')
         } */

          return number === '0' ? 
          <NumberButton key={index} class={currentClass} executeOnClick={(e) =>props.update()}  styles={'numberButton zero'} symbolOnButton={number} /> :
          <NumberButton key={index} class={currentClass} executeOnClick={(e)=>props.update()} styles={'numberButton'} symbolOnButton={number} />;

        })
      }
      
    
      
      

     

    </div>
  );
};

export default Numbers