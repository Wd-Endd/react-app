import React, { useContext } from 'react';
import "./index.css";
import { GameContext } from './Game';
import { ticker, toggleTicker, winCalc } from '../../tictactoe ';

export default function Cell(props) {
    const index = props.index;
    const {
        board, updateBoard,
        winner, setWinner
    } = useContext(GameContext);

    return (
        <div className="cell" onClick={() => {
            if (winner) { console.log("Game Over, reset game to continue play"); return}
            if (board[index]) { console.log("ticked, cannot tick again"); return }
            const newBoard = [...board];
            newBoard[index] = ticker;
            // console.log(
            //     gameBoard[0], gameBoard[1], gameBoard[2], "\n",
            //     gameBoard[3], gameBoard[4], gameBoard[5], "\n",
            //     gameBoard[6], gameBoard[7], gameBoard[8],
            // );
            updateBoard(newBoard);
            console.log(
                newBoard[0], newBoard[1], newBoard[2], "\n",
                newBoard[3], newBoard[4], newBoard[5], "\n",
                newBoard[6], newBoard[7], newBoard[8],
            )

            toggleTicker();
            console.log(`This time to tick ${ticker}`);
            setWinner(winCalc(newBoard));
        }}>
            {
                board[index]? board[index] :
                null
            }
        </div>
    );
}