import React, { useState } from 'react'
import "./index.css";
import Cell from './Cell';
import { gameBoard } from '../../tictactoe ';

export default function GameBoard() {
    const [board, updateBoard] = useState([...gameBoard])
    // function update() {
    //     updateBoard([...gameBoard]);
    //     console.log(
    //         board[0], board[1], board[2], "\n",
    //         board[3], board[4], board[5], "\n",
    //         board[6], board[7], board[8],
    // )};
    const cells = [];
    for (let i = 0; i < 9; i++) {
        cells.push(
            <Cell index={i} board={board} updateBoard={updateBoard}/>
        )
    }
    return (
        <div className="game-board">
            {cells}
        </div>
    )
}
