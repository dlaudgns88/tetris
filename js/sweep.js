function sweep() {
    sweep:
    for (var y = playArena.length - 1; y > 0; y--) {
        for (var x = 0; x < playArena[y].length; x++) {
            if (playArena[y][x] === 0) {
                continue sweep;
            }
        }
        var row = playArena.splice(y, 1)[0].fill(0);
        playArena.unshift(row);
        y++;
        control.score += 1000;
        score();
    }
}