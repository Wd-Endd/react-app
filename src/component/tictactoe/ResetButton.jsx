import React, { useContext } from 'react'
import { GameContext } from './Game'
// import { gameBoard } from '../../tictactoe '


export default function ResetButton() {
    const {
        // updateBoard, setWinner,
        state, setState,
    } = useContext(GameContext);
    return (
        <button className="reset-button" onClick={() => {
            setState({
                ...state,
                board: Array(9).fill(null),
                winner: null,
            });
        }}>
            Reset Game
        </button>
    )
}
