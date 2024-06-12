const board = Chessboard('board', {
    draggable: true,
    dropOffBoard: 'snapback',
    position: 'start',
    onDrop: onDrop
});

const game = new Chess();

function onDrop(source, target) {
    const move = game.move({
        from: source,
        to: target,
        promotion: 'q' // promote to a queen for simplicity
    });

    if (move === null) return 'snapback';

    // Check for game over
    if (game.game_over()) {
        alert('Game over');
    }
}
