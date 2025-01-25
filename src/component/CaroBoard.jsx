import { useState } from "react";
import "./CaroBoard.css";

function CaroBoard() {
    return (
        <div className="caro-board">
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
            <Cell />
        </div>
    )
}

function Cell() {
    const [ state, setState ] = useState(false);
    return (
        <div className="cell"></div>
    )
}

export default CaroBoard