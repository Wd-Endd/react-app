import { useState } from "react"
import "./Toggle.css";

function Toggle() {
    // const array = useState(false);
    // console.log(array);
    const [ on, setOn ] = useState(false);
    // console.log(on);

    return (
        <div className={`toggle ${on? active}`} onClick={() => setOn(!on? true : false)}>
            <div className="spinner"></div>
        </div>
    )
}

export default Toggle;