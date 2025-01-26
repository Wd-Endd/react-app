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

    return (
        <div className="cell" onClick={!winCalc(board)? ( !endGame[0]? () => {
            setOn(true);
            turner.toggleState();
            tick(turner.state);
        } : () => { console.log("Cannot tick again.")} )
        : console.log("Cannot tick when won, please reset game")}>
            {
                on? (
                    turner.state === "X"? <img src="https://www.svgrepo.com/download/12848/x-symbol.svg" alt="" className="checker red" />
                    : <img src="https://www.svgrepo.com/download/396905/letter-o.svg" alt="" className="checker blue" />
                ) : <div></div>
            }
        </div>
    )
}

export default Cell;