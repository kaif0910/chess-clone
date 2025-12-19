const socket = io(); //is line ke wajah se log frontend pe connection bana paa rhe hai.
const chess =new chess();
const boardElement = document.querySelector(".chessboard");

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;


const renderBoard = () =>{
    const board = chess.board();
    boardElement.innerHTML = "";
    board.forEach((row, rowindex) => {
        
    });
};

const handleMove = () => {};

const getPieceUnicode = () => {};
