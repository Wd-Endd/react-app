import React, { createContext, useReducer } from 'react'
import GameBoard from "./GameBoard"
import ResetButton from './ResetButton'
// import { gameBoard } from '../../tictactoe ';
import WinnerTitle from './WinnerTitle';

const GameContext = createContext();

function stateReducer(state, action) {
    switch (action.type) {
        case "updateBoard":
            return {
                ...state,
                board: action.to,
            };
        case "setWinner":
            return {
                ...state,
                winner: action.to,
            };
        case "reset":
            return {
                ...state,
                board: Array(9).fill(null),
                winner: null,
        };
        default: return state;
    }
}

export default function Game() {
    // const [board, updateBoard] = useState([...gameBoard]);
    // const [winner, setWinner] = useState(null);

    const [state, disPatch] = useReducer(stateReducer, {
        board: Array(9).fill(null),
        winner: null,
    });

    // const [state, setState] = useState({
    //     board: Array(9).fill(null),
    //     winner: null,
    // });
    // const [ticker, setTicker] = useState("X");
    return (
        <GameContext.Provider value={{
            // board, updateBoard,
            // winner, setWinner,
            // ticker, setTicker,
            state, disPatch,
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
                    <div style={{ height: "10px" }}></div>
                    <WinnerTitle />
                </div>
            </div>
        </GameContext.Provider>
    )
}

export { GameContext };