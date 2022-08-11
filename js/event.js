
document.addEventListener('keydown', event => {
    // console.log(event);
    if (event.keyCode === 37) {
        // 왼쪽이동 
        moveMatrix(-(blockSize + borderWidth));

    } else if (event.keyCode === 39) {
        // 오른쪽이동 
        moveMatrix((blockSize + borderWidth));

    } else if (event.keyCode === 40) {
        // 아래로이동
        down((blockSize + borderWidth));

    } else if (event.keyCode === 81) {
        // 방향 전환
        rotateMatrix(1);

    } else if (event.keyCode === 87) {
        //방향 전환
        rotateMatrix(-1);


    } else if (event.keyCode === 32) {
        //하강
        fall();
    }
});

$('#left').click(function () {
    moveMatrix(-30);
})
$('#right').click(function () {
    moveMatrix(30);
})
$('#rotate').click(function () {
    rotateMatrix(-1);
})
$('#down').click(function () {
    fall();
});