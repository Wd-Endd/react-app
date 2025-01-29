import React from 'react'
import "./index.css";
import Cell from './Cell';

export default function GameBoard() {
    const cells = [];
    for (let i = 0; i < 9; i++) {
        cells.push(
            <Cell index={i}/>
        )
    }
    return (
        <div className="game-board">
            {cells}
        </div>
    )
}