export const gameBoard = [
    null, null, null,
    null, null, null,
    null, null, null,
];

export let ticker = "X";
export function toggleTicker () {
    ticker = ticker === "X"? "O" : "X"
}

export function winCalc(board) {
    const winCond = [
        [ 0, 1, 2 ],
        [ 3, 4, 5 ],
        [ 6, 7, 8 ],

        [ 0, 3, 6 ],
        [ 1, 4, 7 ],
        [ 2, 5, 8 ],

        [ 0, 4, 8 ],
        [ 2, 4, 6 ],
    ];

    for (const [a, b, c] of winCond) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            console.log(`${board[a]} has come!`);
            return board[a];
        }
    }
    return;
}