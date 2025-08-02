/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll('.sqr');
const messageEl = document.querySelector('#message');

/*---------------------------- Variables (state) ----------------------------*/
const board = ['', '', '', '', '', '', '', '', ''];
let turn = "X";
let winner = false;
let tie = false;
/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
const init = () => {
    
    
    render();
};

const render = () => {

};

const updateBoard = () => {
    board.forEach((cell, idx) => {
        squareEls[idx].textContent = cell;
    });
};

/*----------------------------- Event Listeners -----------------------------*/



init();