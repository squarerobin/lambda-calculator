import React, { useState } from "react";



const Display = (props) => {

    const[displayState, setDisplayState] = useState()


    
      
    return <div className="display">{props.display}</div>;
}

export default Display;