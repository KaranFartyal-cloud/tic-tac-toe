let turnPlay = new Audio("./tic tac toe/tic tac toe/ting.mp3");
let gameover = new Audio("./tic tac toe/tic tac toe/gameover.mp3")
let turn = "X";
isGameOver = false;

let board  = ["", "" , "","", "" , "","", "" , ""];


var boxes = document.querySelectorAll(".box");
boxes.forEach((element , index) =>{
    element.addEventListener("click",() => move(index));
});

function changeTurn(turn){
    return turn == "X" ? "0" : "X";
}

function move(index) {
    if(board[index] == "" && isGameOver == false ){
        board[index] = turn;
        document.querySelectorAll(".box")[index].textContent = turn;
        turnPlay.play();

        turn = changeTurn(turn);
        let winner = checkWin();

        if(winner){
            gameover.play();
            isGameOver = true;
            document.querySelector(".info p").textContent = winner + " wins";
            document.querySelector("#status").setAttribute("src" , "./images/pikachu-fighting.gif");
        }
    }
}

function checkWin () {
    const winCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let combo of winCombinations) {
        [a , b , c] = combo;
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            return board[a];
        }
    }

    return null;
}

document.querySelector("#reset").addEventListener("click", function(){
    let arr = document.querySelectorAll(".box");
    arr.forEach((element)=>{
        element.textContent = "";
        board = ["", "", "", "", "", "", "", "", ""];
        turn = "X";
        isGameOver = false;
        document.querySelector("#status").setAttribute("src" , "");
    })
})