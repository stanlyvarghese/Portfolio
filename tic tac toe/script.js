const board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function checkWinner() {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      gameOver = true;
      document.querySelectorAll('.cell')[a].classList.add('winner');
      document.querySelectorAll('.cell')[b].classList.add('winner');
      document.querySelectorAll('.cell')[c].classList.add('winner');
      showWinnerPrompt(board[a]);
      break;
    }
  }

  if (!board.includes('') && !gameOver) {
    gameOver = true;
    document.querySelectorAll('.cell').forEach(cell => cell.classList.add('draw'));
    showWinnerPrompt('draw');
  }
}

function showWinnerPrompt(winner) {
  const promptMessage = winner === 'draw' ? "It's a draw!" : `Player ${winner} wins!`;
  alert(promptMessage);
}

function makeMove(index) {
  if (board[index] || gameOver) return;

  board[index] = currentPlayer;
  document.querySelectorAll('.cell')[index].textContent = currentPlayer;
  document.querySelectorAll('.cell')[index].classList.add(currentPlayer);

  checkWinner();

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', function () {
  const index = Array.from(document.querySelectorAll('.cell')).indexOf(this);
  makeMove(index);
}));
