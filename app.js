//Variables
let currentPlayer = '';
let turns='';

const possibleWins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

let board = [];


//game play
//oh so very kludgy...but it works!

setGame();

document.querySelectorAll('.bx').forEach(bx => bx.addEventListener('click', handleCellClick));

//functions
function setGame() {
  document.getElementById('button').addEventListener('click', () => {
    document.querySelectorAll('.bx').forEach(bx => bx.innerHTML='-');
  });
  currentPlayer = 'X';
  turns=0;
  banner.innerHTML = '';
  board = ['','','','','','','','',''];
}

function handleCellClick(click) {
 let clickedBox = click.target.id;
 board[clickedBox] = currentPlayer;
 click.target.innerText = currentPlayer;
 turns++;
if (turns>=5 && calculateWinner()) {
  banner.innerHTML = `${currentPlayer} wins!`;
} else if (turns === 9) {
  banner.innerHTML = 'the game is a draw';
} else {
  changeCurrentPlayer();
}
}

function calculateWinner() {
if (board[0] === currentPlayer) {
  if (board[1] === currentPlayer && board[2] === currentPlayer) {
    return true;
  }
  if (board[3] === currentPlayer && board[6] === currentPlayer) {
    return true;
  }
  if (board[4] === currentPlayer && board[8] === currentPlayer) {
    return true;
  }
}
if (board[8] === currentPlayer) {
  if (board[2] === currentPlayer && board[5] === currentPlayer) {
    return true;
  }
  if (board[6] === currentPlayer && board[7] === currentPlayer) {
    return true;
  }
}
if (board[4] === currentPlayer) {
  if (board[1] === currentPlayer && board[7] === currentPlayer) {
    return true;
  }
  if (board[3] === currentPlayer && board[5] === currentPlayer) {
    return true;
  }
  if (board[2] === currentPlayer && board[6] === currentPlayer) {
    return true;
  }
}
}

function changeCurrentPlayer() {
  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  document.getElementById('player').innerHTML = currentPlayer;
}




