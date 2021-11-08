function night(source, dest) {
    if((source[0] + source[1] + dest[0] + dest [1]) % 2 === 0) {
        let oneMovesFirstCoord = Math.abs(source[0] - dest[0]) % 2;
        let twoMovesFirstCoord = Math.floor((source[0] - dest[0]) / 2);
        if((oneMovesFirstCoord + twoMovesFirstCoord) % 2 !== 0) {
            twoMovesFirstCoord--;
            oneMovesFirstCoord += 2;
        }
        
    }
}

// 7 -> 0
// 7 -> (2 -> 2 -> 2 -> 1 -> -2 -> 2) -> 0
// 7 -> (1 -> -1 -> 1 -> 2 -> 1 -> 1) -> 7