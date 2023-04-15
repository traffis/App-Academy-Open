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

    // Screen commands
    Screen.addCommand('up', 'move cursor up', this.cursor.up.bind(this.cursor));
    Screen.addCommand('down', 'move cursor down', this.cursor.down.bind(this.cursor));
    Screen.addCommand('left', 'move cursor left', this.cursor.left.bind(this.cursor));
    Screen.addCommand('right', 'move cursor right', this.cursor.right.bind(this.cursor));
    Screen.addCommand('space', 'place move', TTT.placeMove.bind(this));

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
      return 'T';
    }

    return (
      this.horizontalWinCheck(grid) ||
      this.verticalWinCheck(grid) ||
      this.diagonalWinCheck(grid)
    );
  }

  static horizontalWinCheck(grid) {
    const winner = grid.find(row =>
      row.every(cell => cell === row[0] && cell !== ' ')
    );

    if (winner) return winner[0];

    return false;
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
    let winner;

    // forward diagonal check
    for (let i = 1; i < grid.length; i++) {
      winner = grid[0][0];

      if (!(grid[i][i] === winner) || winner === ' ') {
        winner = '';
        break;
      }
    }

    // backward diagonal check if there is no winner from forward check
    if (!winner) {
      for (let row = 1; row < grid.length; row++) {
        const col = grid.length - row - 1;
        winner = grid[0][grid[0].length - 1];

        if (!(grid[row][col] === winner) || winner === ' ') {
          winner = '';
          break;
        }
      }
    };

    if (winner) return winner;

    return false;
  }

  static placeMove() {
    Screen.setMessage('');
    const row = this.cursor.row;
    const col = this.cursor.col;

    if (Screen.grid[row][col] === ' ') {
      Screen.setGrid(row, col, this.playerTurn);
      Screen.render();

      const winner = TTT.checkWin(Screen.grid);

      if (winner) {
        TTT.endGame(winner);
      }

      if (this.playerTurn === 'O') {
        this.playerTurn = 'X';
      } else {
        this.playerTurn = 'O';
      }
    } else {
      Screen.setMessage('This cell has already been taken. Choose another ' +
        'cell.');
      Screen.render();
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

module.exports = TTT;
