
class ComputerPlayer {

  static getValidMoves(grid) {
    const validMoves = [];

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === ' ') {
          validMoves.push({row: row, col: col});
        }
      }
    }
    return validMoves;
  }

  static randomMove(grid) {
    const validMoves = ComputerPlayer.getValidMoves(grid);
    const randomMove = Math.floor(Math.random() * validMoves.length);
    const move = validMoves[randomMove];

    return move;
  }

  static getWinningMoves(grid, symbol) {
    const winningMoves = [];

    winningMoves.push(...this.checkRowWin(grid, symbol));
    winningMoves.push(...this.checkColumnWin(grid, symbol));
    winningMoves.push(...this.checkDiagonalWin(grid, symbol));

    return winningMoves;
  }

  static getSmartMove(grid, symbol) {
    const winningMoves = this.getWinningMoves(grid, symbol);
    if (winningMoves.length > 0) {
      return winningMoves[0];
    }

    const blockingMoves = this.getWinningMoves(grid, 'O');
    if (blockingMoves.length > 0) {
      return blockingMoves[0];
    }

    return this.randomMove(grid);
  }

  static checkRowWin(grid, symbol) {
    const winningMoves = [];

    for (let row = 0; row < grid.length; row++) {
      let count = 0;
      let potentialWin;

      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] === symbol) {
          count++;
        } else if (grid[row][col] === ' ') {
          potentialWin = {row: row, col: col};
        } else {
          count = 0;
        }
      }

      if (count === 2) {
        winningMoves.push(potentialWin);
      }
    }
    return winningMoves;
  }

  static checkColumnWin(grid, symbol) {
    const winningMoves = [];

    for (let col = 0; col < grid[0].length; col++) {
      let count = 0;
      let potentialWin;

      for (let row = 0; row < grid.length; row++) {
        if (grid[row][col] === symbol) {
          count++;
        } else if (grid[row][col] === ' ') {
          potentialWin = {row: row, col: col};
        } else {
          count = 0;
        }
      }

      if (count === 2) {
        winningMoves.push(potentialWin);
      }
    }
    return winningMoves;
  }

  static checkDiagonalWin(grid, symbol) {
    const winningMoves = [];

    // downward diagonal check
    for (let i = 0; i < grid.length; i++) {
      let count = 0;
      let potentialWin;

      if (grid[i][i] === symbol) {
        count++;
      } else if (grid[i][i] === ' ') {
        potentialWin = {row: i, col: i};
      } else {
        count = 0;
      }

      if (count == 2) {
        winningMoves.push(potentialWin);
      }
    }

    // upward diagonal check
    for (let row = grid.length - 1; row >= 0; row--) {
      const col = grid.length - row - 1;
      let count = 0;
      let potentialWin;

      if (grid[row][col] === symbol) {
        count++;
      } else if (grid[row][col] === ' ') {
        potentialWin = {row: row, col: col};
      } else {
        count = 0;
      }

      if (count === 2) {
        winningMoves.push(potentialWin);
      }
    }
    return winningMoves;
  }

}

module.exports = ComputerPlayer;
