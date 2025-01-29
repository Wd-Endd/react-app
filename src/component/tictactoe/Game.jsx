import React, { createContext, useState } from 'react'
import GameBoard from "./GameBoard"
import ResetButton from './ResetButton'
import { gameBoard } from '../../tictactoe ';

const GameContext = createContext();

export default function Game() {
    const [board, updateBoard] = useState([...gameBoard]);
    const [winner, setWinner] = useState(null);
    // const [ticker, setTicker] = useState("X");
    return (
        <GameContext.Provider value={{
            board, updateBoard,
            winner, setWinner,
            // ticker, setTicker,
        }}>
            <div style={{
                display: "flex",
                flexDirection: "rows",
                padding: "50px",
            }}>
                <GameBoard />
                <div style={{ display: "flex", flexDirection: "column", marginLeft: "100px" }}>
                    <div style={{ height: "10px" }}></div>
                    <ResetButton />
                </div>
            </div>
        </GameContext.Provider>
    )
}

export { GameContext };