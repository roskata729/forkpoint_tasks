/*
    2.	Using click and custom events, create a mini-game. 
    Game should consist of 4 buttons (arrows pointing top, bottom, left right) 
    positioned at the bottom of the page. In the center of the page must be a box, 
    which position is controlled by the arrows. 
    At the top, left and right edge of the screen there must be lines, which, 
    when the box reaches them, 
    a custom event must be fired. The custom event must contain information 
    which line was reached by the box. 
    Use containers in the HTML for displaying information to the user.
*/

// 0 is empty
// 1 is target
// 2 is box

$(document).ready(function(){
    
    let board = [[0,0,1,0,0], [0,0,0,0,0], [1,0,2,0,1]];
    let boxPosX = 2;
    let boxPosY = 2;

    const addNewDivToAParent = (parentElement, childClass) => {
        let line = $('<div></div>');
        if(childClass !== null){
            line.addClass(childClass);
            $(parentElement).append(line);
        }
    }

    function generateBoard(board){

        const divContainer = $('#div-container');

        divContainer.removeData();
        

        for(let i = 0;i < board.length;i++){
            for(let j = 0;j < board[i].length;j++){
                //alert(i + " " + j);
                if(board[i][j] == 0) 
                {
                    addNewDivToAParent(divContainer);
                }
                else if(board[i][j] == 1) {
                    //Top Row
                    if(i == 0){
                        addNewDivToAParent(divContainer,'topLine');
                    }
                    //Starting row
                    else if(i == 2){
                        //Left Line
                        if(j == 0){
                            addNewDivToAParent(divContainer,'leftLine');
                        }
                        //Right Line
                        if(j == 4){
                            addNewDivToAParent(divContainer,'rightLine');
                        }
                    }
                }
                else if(board[i][j] == 2){
                    addNewDivToAParent(divContainer,'box');
                    boardPosX = i;
                    boardPosY = j;
                }
            }
        }

    }
    generateBoard(board);
    
    function updateBoard(boxPosX,boxPosY,directionX,directionY, board){

        // Swaps the given elements
        //[board[boxPosX][boxPosY],board[directionX][directionY]] 
        //= [board[directionX][directionY], board[boxPosX][boxPosY]];

        // Swaps the given elements
        let temp = board[boxPosX][boxPosY];
        board[boxPosX][boxPosY] = board[directionX][directionY];
        board[directionX][directionY] = temp;

        generateBoard(board);
        return board;
    }

    const resetBoard = () =>{
            board = [[0,0,1,0,0], [0,0,0,0,0], [1,0,2,0,1]];
            generateBoard(board);
            boxPosX = 2;
            boxPosY = 2;
    }

    const restartGame = () =>{
        setTimeout(function(){alert("You've WON!")}, 800);
        setTimeout(function(){document.getElementById("div-container").innerHTML = "";},500)
        setTimeout(function(){resetBoard();}, 2000);
    }

    const checkWin = (boardPosX,boardPosY) => {
        if(boardPosX == 2){
            if(boardPosY == 0 || boardPosY == 4) {
                restartGame();
            }
        }
        else if(boardPosX == 0 && boardPosY == 2) {
            restartGame();
        }
    }

    
    $(document).on("keydown", function(e) {
        switch(e.which){
            case 37: 
                document.getElementById("div-container").innerHTML = "";
                board = updateBoard(boxPosX,boxPosY,boxPosX,--boxPosY, board);
                checkWin(boxPosX,boxPosY);
                break;
            case 38: 
                document.getElementById("div-container").innerHTML = "";
                board = updateBoard(boxPosX,boxPosY,--boxPosX,boxPosY, board);
                checkWin(boxPosX,boxPosY);
                break;
            case 39: 
                document.getElementById("div-container").innerHTML = "";
                board = updateBoard(boxPosX,boxPosY,boxPosX,++boxPosY, board);
                checkWin(boxPosX,boxPosY);
                break;
            case 40: 
                if(boardPosX == board.length - 1){
                    alert("Invalid move.\nChoose another direction.");
                    break;
                }
                document.getElementById("div-container").innerHTML = "";
                board = updateBoard(boxPosX,boxPosY,++boxPosX,boxPosY, board);
                checkWin(boxPosX,boxPosY);
                break;
        }  
    })
})