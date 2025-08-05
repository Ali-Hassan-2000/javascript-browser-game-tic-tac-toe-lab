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
const resetBtnEl = document.querySelector('#reset');
/*-------------------------------- Functions --------------------------------*/
const init = () => {

    board.fill(''); // Clear the board
    turn = "X";
    winner = false;
    tie = false;
    
    messageEl.style.display = 'block'; // Show the message element
    render();
};

const render = () => {
    updateBoard();
    updateMessage();
};

const updateBoard = () => {
    board.forEach((cell, idx) => {
        squareEls[idx].textContent = cell;

        if (cell === 'X') {
           squareEls[idx].style.color = 'red';
        } 
        else if (cell === 'O') {
           squareEls[idx].style.color = 'blue';
        } 
        else {
           squareEls[idx].style.color = 'black';
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
        messageEl.textContent = `Player ${turn} wins!`;
    }
};

const handleClick = (event) => {
    const squareIndex = event.target.id;
    
    if (board[squareIndex] !== '' || winner || tie ) {
        return; /* if the square i filled then do nothing. (also the game will if there is a winner or tie)*/
    }
    
    placePiece(squareIndex);

    checkForWinner();

    checkForTie();

    switchPlayerTurn();

    render();
};

const placePiece = (index) => {
    board[index] = turn;
};

const checkForWinner = () => {

    /* Second loop already checks if empty ('' = false) 
    
       for(let i = 0; i < board.length ;i++){
        if (board[i] === ''){
            return;
        }
    }
    */

    /* takes each array in winningCombos Obj. and assign it to A,B and C. then check if the values of A,B and C are same. */

    for(let i = 0 ; i < winningCombos.length ; i++){

         const [a, b, c] = winningCombos[i];

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
            return;
        }
    }
};

const checkForTie = () => {
    
    if (winner){
        return;
    }

    for(let i = 0; i < board.length ;i++){
        if (board[i] === ''){
            return;
        }
    }

    /* forEach loop does not exit the function and stop the iteration in (return; , so I will use forloop)

    board.forEach((idx) => { 
        if (board[idx] === ''){
            return;
        }
    });
    */
    tie = true;
};

const switchPlayerTurn = () => {

    if (winner){
        return;
    }
    else{
        turn = turn === "X" ? "O" : "X";
    }
};

/*----------------------------- Event Listeners -----------------------------*/
squareEls.forEach((square) => { /* we have 9 .sqr from qeuery selector all */
    square.addEventListener('click', handleClick);
});

resetBtnEl.addEventListener('click', init);

init();