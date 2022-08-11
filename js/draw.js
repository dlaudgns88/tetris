var borderWidth = 5;
var blockSize = 25;
var color = [
    null,
    'red',
    'blue',
    'green',
    'gold',
    'aqua',
    'violet',
    'pink',

]

function draw(width, height) {
    if (control.matrix === null) {
        control.matrix = createPiece(randomPiece());
        createPieceCnt++;
        // console.log(createPieceCnt);


    } else {
        for (var x = 0; x < width; x++) {
            for (var y = 0; y < height; y++) {
                ctx.fillStyle = "white";
                ctx.fillRect(
                    borderWidth * x + blockSize * x,
                    borderWidth * y + blockSize * y,
                    blockSize,
                    blockSize
                )
            }

            // drawMatrix(playArena,{x : 0, y : 0});
            drawGround(playArena, control);
            drawMatrix(control.matrix, control.position);
        }
    }

}

function drawGround(playArena, control) {
    for (var y = 0; y < playArena.length; y++) {
        for (var x = 0; x < playArena[y].length; x++) {
            if (playArena[y][x] !== 0) {

                ctx.fillStyle = color[playArena[y][x]];
                ctx.fillRect(borderWidth * x + blockSize * x,
                    borderWidth * y + blockSize * y,
                    blockSize, blockSize);
            }
        }
    }
}





function drawMatrix(matrix, offset) {
     
    //console.log("체크")   ok
    var i = 0;
    var j = 0;
    var line = 1;
    var cnt = 0;
    for (var x = 0; x < matrix.length; x++) {
        for (var y = 0; y < matrix[x].length; y++) {
            if (cnt < matrix.length) {
                // console.log("첫줄실행 : " + cnt);
                // console.log("메트릭스의 값 : "+matrix[x][y]);
                if (matrix[x][y] !== 0) {
                    // console.log("칠해짐");
                    // console.log(matrix[x][y]);
                    ctx.fillStyle = color[matrix[x][y]];
                    ctx.fillRect(i + offset.x, j + offset.y, blockSize, blockSize);
                    i = i + line * borderWidth + line * blockSize;
                } else {

                    i = i + line * borderWidth + line * blockSize;
                }
            } else if (cnt >= matrix.length && cnt < matrix.length * 2) {
                if (cnt === matrix.length) {
                    i = 0;
                    j = 30;
                }
                // console.log("두번째줄 실행 : " + cnt)
                // console.log("메트릭스의 값 : "+matrix[x][y]);
                if (matrix[x][y] !== 0) {
                    // console.log("칠해짐");
                    ctx.fillStyle = color[matrix[x][y]];
                    ctx.fillRect(i + offset.x, j + offset.y, blockSize, blockSize);
                    i = i + line * borderWidth + line * blockSize;
                } else {

                    i = i + line * borderWidth + line * blockSize;
                }

            } else if (cnt >= matrix.length * 2 && cnt < matrix.length * 3) {
                if (cnt === matrix.length * 2) {
                    i = 0;
                    j = 60;
                }
                // console.log("세번째줄 실행 : " + cnt)
                // console.log("메트릭스의 값 : "+matrix[x][y]);
                if (matrix[x][y] !== 0) {
                    // console.log("칠해짐");
                    ctx.fillStyle = color[matrix[x][y]];
                    ctx.fillRect(i + offset.x, j + offset.y, blockSize, blockSize);
                    i = i + line * borderWidth + line * blockSize;
                } else {
                    // console.log("안칠해짐");
                    i = i + line * borderWidth + line * blockSize;
                }


            } else if (cnt >= matrix.length * 3 && cnt < matrix.length * 4) {
                if (cnt === matrix.length * 3) {
                    i = 0;
                    j = 90;
                }
                if (matrix[x][y] !== 0) {
                    // console.log("칠해짐");
                    ctx.fillStyle = color[matrix[x][y]];
                    ctx.fillRect(i + offset.x, j + offset.y, blockSize, blockSize);
                    i = i + line * borderWidth + line * blockSize;
                } else {
                    // console.log("안칠해짐");
                    i = i + line * borderWidth + line * blockSize;
                }
            }
            cnt++;


            // if(matrix[x][y] !== 0)  {
            //     //console.log("통과체크 ")  ok
            //     if(cnt < matrix.length) {
            //         ctx.fillStyle="red";
            //         ctx.fillRect(i, j, blockSize, blockSize);
            //         i= i+blockSize*x+borderWidth*x

            //     }
            //     cnt++;
            //     console.log(cnt);

            // }


        }
    }
}