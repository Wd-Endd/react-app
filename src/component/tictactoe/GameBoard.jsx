import Cell from "./Cell";
import "./index.css";

function GameBoard() {
    return (
        <div className="game-board">
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
};

export default GameBoard;