import React, { useState } from "react";



const Display = (props) => {

    const[displayState, setDisplayState] = useState('0')
    const {output} = props

    return <div className="display">{output}</div>;
}

export default Display;