document.addEventListener("DOMContentLoaded", () => {
    const board = document.getElementById("board");
    const pieces = {
        0: ["♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜"],
        1: ["♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟"],
        6: ["♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙"],
        7: ["♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"]
    };

    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.classList.add((row + col) % 2 === 0 ? "white" : "black");

            if (pieces[row] && pieces[row][col]) {
                cell.textContent = pieces[row][col];
            }

            board.appendChild(cell);
        }
    }
});