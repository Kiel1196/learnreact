import React, { useState } from "react";

import Title from "./Title";

function Counter ( {className, data} ) {
    const [count, setCount] = useState(0);
    let classes = className;

    return (
        <div className={classes}>
            <Title titleData={data}/>
            <div className="counter">
                <div className="text-center m-auto">{count}</div>
            </div>
            <button className="btn-primary" onClick={() => setCount(count - 1)}>Decrement</button>
            <button className="btn-primary" onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Counter