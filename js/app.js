/*-------------------------------- Constants --------------------------------*/
const winningCombos = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
/*---------------------------- Variables (state) ----------------------------*/
const board = ['', '', '', '', '', '', '', '', ''];
let turn = "X";
let winner = false;
let tie = false;
/*------------------------ Cached Element References ------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');

console.log(squareEls);
console.log(messageEl);
/*-------------------------------- Functions --------------------------------*/
const init = () => {


    render();
};

const render = () => {

};

const updateBoard = () => {
    board.forEach((cell, idx) => {
        squareEls[idx].textContent = cell;

        if (cell === 'X') {
            square.style.color = 'red';
        } 
        else if (cell === 'O') {
            square.style.color = 'blue';
        } 
        else {
            square.style.color = 'black';
        }
    });
};

const updateMessage = () => {
    if (!winner && !tie){
        messageEl.textContent = `Player ${turn} turn`;
    }
    else if (!winner && tie){
        messageEl.textContent = `Draw`;
    }
    else{
        messageEl.textContent = `Cont. playing`;
    }
};

const handleClick = (event) => {
    const squareIndex = event.target.id;
    
    if (board[squareIndex] !== '') {
        return;
    }
    
    placePiece(squareIndex);

};

const placePiece = (index) => {
    board[index] = turn;
};

const checkForWinner = () => {
    
};

/*----------------------------- Event Listeners -----------------------------*/
squareEls.addEventListener('click', handleClick);


init();