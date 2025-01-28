import React from 'react';
import { endGame } from '../../tictactoe ';

export default function GameOver() {
    // Kiểm tra nếu endGame[0] là true, thì hiển thị 'Game Over'
    return endGame[0] ? (
        <div className="game-over">Game Over</div>
    ) : null; // Trả về null nếu không phải là game over
}