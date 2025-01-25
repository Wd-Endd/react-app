import { useState } from "react";
import "./index.css";

function Cell() {
    const [ on, setOn ] = useState(false);
    console.log(on);
    return (
        <div className="cell" onClick={() => { setOn(true) }}>
            { on? <div className="checker"></div> : "" }
        </div>
    )
}

export default Cell;