function score()    {
    ctx.fillStyle = 'black';
    ctx.font = '15px serif';
    ctx.fillText('score : '+control.score, 260, 20);
}
function scoreDraw() {
    ctx.moveTo(250,0);
    ctx.lineTo(250,30);
    ctx.lineTo(355, 30);
    ctx.strokeStyle = 'black';
    ctx.stroke();

    score();
}