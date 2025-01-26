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
            {
                on? (
                    turner.state? <img src="https://www.svgrepo.com/download/12848/x-symbol.svg" alt="" className="checker red" />
                    : <img src="https://www.svgrepo.com/download/396905/letter-o.svg" alt="" className="checker blue" />
                ) : <div></div>
            }
        </div>
    )
}

export default Cell;