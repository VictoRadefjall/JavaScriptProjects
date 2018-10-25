function schackHorse (cell) {
    var possibleCoordinates = [];
    var xCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var posX = xCoordinates.indexOf(cell[0]) + 1; //This gives the X Position
    var posY = parseInt(cell[1]); //This gives the Y Position

    //Created an array to find all possible X pos to make the knight move in a L-shape.
    var xPos = [
      posX + 2,
      posX - 2,
      posX + 1,
      posX - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })

    // Makes the same as the ARRAY above, but for Y pos instead.
    var yPos = [
      posY + 2,
      posY - 2,
      posY + 1,
      posY - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })

    //The 2 arrays makes it possible to Loop thru and finding all possible coordinates.
    //If valid then it push it to possibleCoordinates array

    //For it to be valid the X & Y arrays must achieve a valid sum of === 3.

    for (var i = 0; i < xPos.length; i++) {
        for (var j = 0; j < yPos.length; j++) {
            if (Math.abs(posX - xPos[i]) + Math.abs(posY - yPos[j]) === 3) {
                console.log('This is a valid coordinate: ',[xPos[i], yPos[j]]);
                if (!possibleCoordinates.includes([xPos[i], yPos[j]])) {
                    possibleCoordinates.push([xPos[i], yPos[j]]);
                }
            }
        }
    }
    // Logs out the possible moves and how many.
    console.log ('Possible Moves:', possibleCoordinates.length);
    return possibleCoordinates.length;
}
