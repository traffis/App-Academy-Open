const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static checkWin(grid) {
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    const isGridEmpty = grid.every(row => row.every(cell => cell === ' '));
    const isGridFull = grid.every(row => row.every(cell => cell !== ' '));

    if (isGridEmpty) {
      return false;
    }

    if (isGridFull) {
      return 'T';
    }

    return (
      this.horizontalWinCheck(grid) ||
      this.verticalWinCheck(grid) ||
      this.diagonalWinCheck(grid)
    );
  }

  static horizontalWinCheck(grid) {
    let winner = grid.find(row =>
      row.every(cell => cell === row[0] && cell !== ' ')
    );

    if (winner) {
      return winner[0];
    } else {
      return false;
    }
  }

  static verticalWinCheck(grid) {
    let winner;

    for (let col = 0; col < grid.length; col++) {
      let count = 1;
      winner = grid[0][col]

      for (let row = 1; row < grid[col].length; row++) {
        if (grid[row][col] === winner && grid[row][col] !== ' ') {
          count++;
        }

        if (count === grid.length) {
          return winner;
        }
      }
    }

    return false;
  }

  static diagonalWinCheck(grid) {
    let winner = '';

    // forward diagonal check
    for (let i = 0; i < grid.length; i++) {
      winner = grid[0][0];

      if (!(grid[i][i] === winner) || winner === ' ') {
        winner = '';
        break;
      }
    }

    if (winner) return winner;

    // backward diagonal check
    for (let row = 0; row < grid.length; row++) {
      let col = grid.length - row - 1;
      winner = grid[row][col];

      if (!(grid[row][col] === winner) || winner === ' ') {
        winner = '';
        break;
      }
    }

    if (winner) return winner;

    return false;
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
