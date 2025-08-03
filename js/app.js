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
           /* cell.style.color = 'red'; */
        } 
        else if (cell === 'O') {
           /* cell.style.color = 'blue'; */
        } 
        else {
           /* cell.style.color = 'black'; */
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

    checkForWinner();

    checkForTie();

    switchPlayerTurn();

};

const placePiece = (index) => {
    board[index] = turn;
};

const checkForWinner = () => {

    board.forEach((idx) => { /* Second loop already checks if empty ('' = false) */
        if (board[idx] === ''){
            return;
        }
    });

    winningCombos.forEach(each_comp => { /* takes each array in winningCombos Obj. and assign it to A,B and C. then check if the values of A,B and C are same. */
        const [a, b, c] = each_comp;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
        }
    });
};

const checkForTie = () => {
    
    if (winner){
        return;
    }

    board.forEach((idx) => { 
        if (board[idx] === ''){
            return;
        }
    });

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