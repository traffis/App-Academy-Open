const Screen = require("./screen");
const Cursor = require("./cursor");

class ConnectFour {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' '],
                 [' ',' ',' ',' ',' ',' ',' ']]

    this.cursor = new Cursor(6, 7);

    // Initialize a 6x7 connect-four grid
    Screen.initialize(6, 7);
    Screen.setGridlines(true);

    // Add commands to play the game
    Screen.addCommand('left', 'move cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'move cursor right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('space', 'place move', ConnectFour.placeMove.bind(this));

    this.cursor.setBackgroundColor();
    Screen.render();
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
      return 'T'
    }

    return (
      this.horizontalWinCheck(grid) ||
      this.verticalWinCheck(grid) ||
      this.diagonalWinCheck(grid)
    );
  }

  static horizontalWinCheck(grid) {
    let count = 0;
    let winner;

    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length - 3; col++) {
        if (grid[row][col] !== ' ') {
          winner = grid[row][col];
          count++;

          for (let i = 1; i <= 3; i++) {
            if (winner === grid[row][col + i] && grid[row][col + i] !== ' ') {
              count++;
            } else {
              winner = '';
              count = 0;
              break;
            }
          }
        }

        if (count === 4) {
          return winner;
        }
      }
    }

    return false;
  }

  static verticalWinCheck(grid) {
    let count = 0;
    let winner;

    for (let col = 0; col < grid[0].length; col++) {
      for (let row = 0; row < grid.length - 3; row++) {

        if (grid[row][col] !== ' ') {
          winner = grid[row][col];
          count++;

          for (let i = 1; i <= 3; i++) {
            if (winner === grid[row + i][col] && grid[row + i][col] !== ' ') {
              count++;
            } else {
              winner = '';
              count = 0;
              break;
            }
          }
        }

        if (count === 4) {
          return winner;
        }
      }
    }

    return false;
  }

  static diagonalWinCheck(grid) {
    let count = 0;
    let winner;

    // diagonal downward win check
    for (let row = 0; row < grid.length - 3; row++) {
      for (let col = 0; col < grid[row].length - 3; col++) {
        if (grid[row][col] !== ' ') {
          winner = grid[row][col];
          count++;

          for (let i = 1; i <= 3; i++) {
            if (winner === grid[row + i][col + i] && grid[row + i][col + i] !== ' ') {
              count++;
            } else {
              winner = '';
              count = 0;
              break;
            }
          }

          if (count === 4) {
            return winner;
          }
        }
      }
    }

    // diagonal upward win check
    for (let row = grid.length - 1; row > 3; row--) {
      for (let col = 0; col < grid[row].length; col++) {
        if (grid[row][col] !== ' ') {
          winner = grid[row][col];
          count++;

          for (let i = 1; i <= 3; i++) {
            if (winner === grid[row - i][col + i] && grid[row - i][col + i] !== ' ') {
              count++;
            } else {
              winner = '';
              count = 0;
              break;
            }
          }

          if (count === 4) {
            return winner;
          }
        }
      }
    }

    return false;
  }

  static placeMove() {
    Screen.setMessage('');
    const col = this.cursor.col;
    const bottomRow = Screen.grid.length - 1;

    if (Screen.grid[0][col] !== ' ') {
      Screen.setMessage('This column is full. Please choose another column.');
      Screen.render();
    } else {
      for (let row = bottomRow; row >= 0; row--) {
        if (Screen.grid[row][col] === ' ') {
          Screen.setGrid(row, col, this.playerTurn);
          Screen.render();
          break;
        }
      }

      if (this.playerTurn === 'O') {
        this.playerTurn = 'X';
      } else {
        this.playerTurn = 'O';
      }
    }

    const winner = ConnectFour.checkWin(Screen.grid);

    if (winner) {
      ConnectFour.endGame(winner);
    }
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

module.exports = ConnectFour;
