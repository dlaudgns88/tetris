var strArray = ['T', 'O', 'S', 'Z', 'I', 'L', 'J'];

function randomPiece() {
    var randomValue = strArray[Math.floor(Math.random() * strArray.length)];
    // createPieceCnt = 1;


    // console.table(createPiece(randomValue));

    return randomValue;

}

function createPiece(randomValue) {
    if (randomValue === 'T') {
        return [
            [0, 0, 0],
            [1, 1, 1],
            [0, 1, 0],
        ];
    } else if (randomValue === 'O') {
        return [
            [2, 2],
            [2, 2],
        ]
    } else if (randomValue === 'S') {
        return [
            [0, 0, 0],
            [0, 3, 3],
            [3, 3, 0],
        ]
    } else if (randomValue === 'Z') {
        return [
            [0, 0, 0],
            [4, 4, 0],
            [0, 4, 4],
        ]
    } else if (randomValue === 'I') {
        return [
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
            [0, 5, 0, 0],
        ]
    } else if (randomValue === 'L') {
        return [

            [6, 0, 0],
            [6, 0, 0],
            [6, 6, 0],
        ]
    } else if (randomValue === 'J') {
        return [

            [0, 7, 0],
            [0, 7, 0],
            [7, 7, 0],
        ]
    }
}