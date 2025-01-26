import React from "react";
import Cell from "./Cell";
import "./index.css";

function GameBoard() {
    return (
        <div className="game-board">
            {[...Array(9)].map((_, i) => (
                <Cell index={i} />
            ))}
        </div>
    );
}

export default GameBoard;