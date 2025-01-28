import { useState } from "react";
import "./index.css";
import { board, endGame, turner, winCalc } from "../../tictactoe ";

function Cell(props) {
    const index = props.index || 0;
    const [ on, setOn ] = useState(false);
    console.log(on);

    function tick(state) {
        board[index] = state;
        console.log(
            board[0], board[1], board[2], "\n",
            board[3], board[4], board[5], "\n",
            board[6], board[7], board[8],
        )
        if (winCalc(board)) {
            endGame[1]();
            console.log(`"${winCalc(board)}" has won!`);
        };
    }

    function handleClick() {
        if (endGame[0]) {
            console.log("Game Over, please reset game");
            return;
        }

        if (on) {
            console.log("Cannot tick again, please tick another cell");
            return;
        }

        turner.toggleState();
        tick(turner.state);
    }

    return (
        <div className="cell" onClick={handleClick}>
            {
                if (board[index]) {
                    if (board[index] === "X") {
                        return (
                            <img src="https://www.svgrepo.com/download/12848/x-symbol.svg" alt="" className="checker red" />
                        )
                    } else if (board[index] === "X"){
                        return (
                            <img src="https://www.svgrepo.com/download/396905/letter-o.svg" alt="" className="checker blue" />
                        )
                    }
                }
            }
        </div>
    )
}

export default Cell;
