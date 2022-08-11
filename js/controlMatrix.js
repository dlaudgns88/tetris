
var createPieceCnt = 0;


// ctx.scale (30,29);


var control = {
    position: { x: 120, y: 0 },
    matrix: null,
    nextMatrix: createPiece(randomPiece()),
    score: 0,
    
}
function arenaCheck()   {
    for(var y = 0; y < 1; y++)  {
        for(var x = 0; x < playArena[y].length; x++)    {
            if(playArena[0][x] !== 0) {
                return 1;
            }
        }
    }
    return -1;
}

function locationcheck(control)    {
    let checkcnt = 0;
    control.position.x = 120;
   
   
    for(var x = 0; x < 1; x++)  {
        for(var y = 0; y < control.matrix[x].length; y++)   {
            if(control.matrix[0][y] === 0)  {
                checkcnt++;
            }
          
        }
    }
    // console.log("증가한횟수:" +checkcnt);
    // console.log("메트릭스 길이:"+control.matrix.length);
    if(checkcnt === control.matrix.length)    {
        control.position.y = -30;
    }else {
        control.position.y = 0;
    }
    
}

function drop() {
    //console.log("함수 호출 확인");
    control.position.y += 30;

    if (collide(playArena, control)) {
        var k = control.nextMatrix;
        control.position.y -= 30;
        merge(playArena, control);    
        control.matrix = k;
        //position: { x: 120, y: -30 },
        createPieceCnt = 0;
        locationcheck(control);
        
        
        sweep();
    }
    dropCounter = 0;

}

function merge(playArena, control) {

    for (var y = 0; y < control.matrix.length; y++) {
        for (var x = 0; x < control.matrix[y].length; x++) {
            if (control.matrix[y][x] !== 0) {
                // console.log("채움")
                //console.log( y+(control.position.y)/30);
                // console.log(matrix[y][x]);
                // for(var i = 0; i < playArena.length; i++)   {
                //     for(var j = 0; playArena[i].length; j++)    {

                //     }
                // }
                
                playArena[y + (control.position.y) / 30][x + (control.position.x) / 30] = control.matrix[y][x];

            } else {

            }
        }

    }
}

function collide(playArena, control) {
    // console.log("함수호출 확인")
    for (var y = 0; y < control.matrix.length; y++) {
        for (var x = 0; x < control.matrix[y].length; x++) {

            if (control.matrix[y][x] !== 0 &&
                (playArena[y + (control.position.y) / 30] && playArena[y + (control.position.y) / 30][x + (control.position.x) / 30]) !== 0) {

                // console.log("충돌체크")
                return true;
            }


        }
    }
    return false;
}

function moveMatrix(direction) {
    control.position.x += direction;
    if (collide(playArena, control)) {
        control.position.x -= direction;
    }
}

function down(direction) {
    control.position.y += direction;
    if (collide(playArena, control)) {
        control.position.y -= direction;
        dropCounter = 1001;
    }

}

function fall() {
    for (var y = 0; y < playArena.length - 1; y++) {
        for (var x = 0; x < playArena[y].length; x++) {
            if (playArena[y][x] === 0) {
                control.position.y += 30;
                if (collide(playArena, control)) {
                    control.position.y -= 30;
                    dropCounter = 1001;
                }
            }
        }
    }

}


function rotate(matrix, direction) {
    if (direction === 1) {
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < i; j++) {
                var temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
        // matrix.reverse();
        // console.log(matrix.length);
        if (matrix.length === 2 || matrix.length === 3) {
            for (var i = 0; i < 1; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    var temp = matrix[i][j]
                    matrix[i][j] = matrix[matrix.length - 1][j];
                    matrix[matrix.length - 1][j] = temp;
                }
            }
        } else if (matrix.length === 4) {
            for (var i = 0; i < 1; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    var temp = matrix[i][j];
                    var temp2 = matrix[i + 1][j];
                    matrix[i][j] = matrix[matrix.length - 1][j];
                    matrix[matrix.length - 1][j] = temp;
                    matrix[i + 1][j] = matrix[matrix.length - 2][j];
                    matrix[matrix.length - 2][j] = temp2;

                }
            }
        }
    } else if (direction === -1) {
        if (matrix.length === 2 || matrix.length === 3) {
            for (var i = 0; i < 1; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    var temp = matrix[i][j]
                    matrix[i][j] = matrix[matrix.length - 1][j];
                    matrix[matrix.length - 1][j] = temp;
                }
            }
        } else if (matrix.length === 4) {
            for (var i = 0; i < 1; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    var temp = matrix[i][j];
                    var temp2 = matrix[i + 1][j];
                    matrix[i][j] = matrix[matrix.length - 1][j];
                    matrix[matrix.length - 1][j] = temp;
                    matrix[i + 1][j] = matrix[matrix.length - 2][j];
                    matrix[matrix.length - 2][j] = temp2;

                }
            }
        }
        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < i; j++) {
                var temp = matrix[i][j];
                matrix[i][j] = matrix[j][i];
                matrix[j][i] = temp;
            }
        }
    }


}

function rotateMatrix(direction) {
    let pos = control.position.x;
    let offset = 30;
    rotate(control.matrix, direction);
    while (collide(playArena, control)) {
        if (control.position.x < 120) {
            control.position.x += offset;
        } else {
            control.position.x -= offset;
        }
        if (control.position.y < 120) {
            control.position.y += offset;
        }
    }


}
var dropInterval = 1000;
var dropCounter = 0;
var lasttime = 0;

function update(time = 0) {
    // console.log(time);
    var deltatime = time - lasttime;
    lasttime = time;
    dropCounter += deltatime;


    if (dropCounter > dropInterval) {
        drop();
    }
    if(arenaCheck() === -1) {
        draw(12, 20);
    }
    
    if (createPieceCnt === 0) {
        // console.log('check')
        control.nextMatrix = createPiece(randomPiece());
        createPieceCnt++;
    }
    nextdraw();
    scoreDraw();
    console.log(arenaCheck());
    if(arenaCheck() === -1) {
        requestAnimationFrame(update);   
    }else {
        alert("게임종료");
    }

}


