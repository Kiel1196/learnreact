import React, { useState } from "react";

import Title from "./Title";
import Clicked from "./functions/Clicked";

function TitleChanger ( {className, data} ) {
    const [title, setTitle] = useState(data);
    let clickData = 'Title Changed',
        beforeClick = 'Belajar React !',
        clickMe = 'Halo, belajar import-export data dan function',
        classes = className
        ;

    return (
        <div className={classes}>
            <Title titleData={title}/>
            <button className="btn-primary" onClick={() => setTitle(beforeClick)}>Previous Title</button>
            <button className="btn-primary" onClick={() => setTitle(clickData)}>Set New Title</button>
            <button className="btn-primary" onClick={() => Clicked(clickMe)}>Click Me!!</button>
        </div>
    );
}

export default TitleChanger