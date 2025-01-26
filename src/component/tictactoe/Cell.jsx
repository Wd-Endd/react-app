import { useState } from "react";
import "./index.css";
import { turner } from "../../tictactoe ";

function Cell() {
    const [ on, setOn ] = useState(false);
    console.log(on);
    return (
        <div className="cell" onClick={!on? () => {
            setOn(true);
            turner.toggleState();
        } : () => { console.log("Cannot tick again.")} }>
            { on? <div className={
                `checker ${turner? "red" : "blue"}`
            }></div> : "" }
        </div>
    )
}

export default Cell;