import React, { useState } from "react";

import Title from "./Title";
import Typed from "./functions/Typed";

function LearnInput ( {className, data} ) {
    const [input, setInput] = useState('');

    let classes = className
        ;

    return (
        <div className={classes}>
            <Title titleData={data}/>
            <div className="flex">
                <div className="m-2">
                    <span>User Input : </span>
                </div>
                <div className="m-2">
                    <span>{input}</span>
                </div>
            </div>
            <form>
                <div className="inputWrapper">
                    <label className='labelStyle' htmlFor='inputCol'>Input</label>
                    <input type='text' id='inputCol' className="inputStyle" onChange={event => setInput( event.target.value )}></input>
                </div>
            </form>
        </div>
    );
}

export default LearnInput