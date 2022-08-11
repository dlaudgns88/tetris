function nextdrawMatrix(matrix) {
    var i = 30;
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
                    ctx.fillRect(i, j, 13, 13);
                    i = i + line * 2 + line * 13;
                } else {

                    i = i + line * 2 + line * 13;
                }
            } else if (cnt >= matrix.length && cnt < matrix.length * 2) {
                if (cnt === matrix.length) {
                    i = 30;
                    j = 15;
                }
                // console.log("두번째줄 실행 : " + cnt)
                // console.log("메트릭스의 값 : "+matrix[x][y]);
                if (matrix[x][y] !== 0) {
                    // console.log("칠해짐");
                    ctx.fillStyle = color[matrix[x][y]];
                    ctx.fillRect(i, j, 13, 13);
                    i = i + line * 2 + line * 13;
                } else {

                    i = i + line * 2 + line * 13;
                }

            } else if (cnt >= matrix.length * 2 && cnt < matrix.length * 3) {
                if (cnt === matrix.length * 2) {
                    i = 30;
                    j = 30;
                }
                // console.log("세번째줄 실행 : " + cnt)
                // console.log("메트릭스의 값 : "+matrix[x][y]);
                if (matrix[x][y] !== 0) {
                    // console.log("칠해짐");
                    ctx.fillStyle = color[matrix[x][y]];
                    ctx.fillRect(i, j, 13, 13);
                    i = i + line * 2 + line * 13;
                } else {
                    // console.log("안칠해짐");
                    i = i + line * 2 + line * 13;
                }


            } else if (cnt >= matrix.length * 3 && cnt < matrix.length * 4) {
                if (cnt === matrix.length * 3) {
                    i = 30;
                    j = 45;
                }
                if (matrix[x][y] !== 0) {
                    // console.log("칠해짐");
                    ctx.fillStyle = color[matrix[x][y]];
                    ctx.fillRect(i, j, 13, 13);
                    i = i + line * 2 + line * 13;
                } else {
                    // console.log("안칠해짐");
                    i = i + line * 2 + line * 13;
                }
            }
            cnt++;
        }
    }

}

function nextdraw() {
    for (var x = 0; x < 6; x++) {
        for (var y = 0; y < 4; y++) {
            ctx.fillStyle = "white";
            ctx.fillRect(
                13 * x + 2 * x,
                13 * y + 2 * y,
                13, 13)
            ctx.moveTo(0, 0);
            ctx.lineTo(0, 60);
            ctx.lineTo(90, 60);
            ctx.lineTo(90, 0);
            ctx.strokeStyle = 'black';
            ctx.stroke();

        }
    }
    nextdrawMatrix(control.nextMatrix);

}
