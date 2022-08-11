var playArena = createMatrix(12, 20);

function createMatrix(width, height) {
    var Amatrix = [];
    for (var i = 0; i < height; i++) {
        Amatrix.push(new Array(width).fill(0));
    }

    return Amatrix;
}
