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

    function generateBoard(board){

        $("#div-container").removeData();

        for(var i = 0;i < board.length;i++){
            for(var j = 0;j < board[i].length;j++){
                //alert(i + " " + j);
                if(board[i][j] == 0) 
                {
                    $("#div-container").append('<div></div>');
                    //$('body').append(line);
                }
                else if(board[i][j] == 1) {
                    //Top Row
                    if(i == 0){
                        var line = $('<div></div>');
                        line.addClass('topLine');
                        $("#div-container").append(line);
                    //$('body').append(line);
                    }
                    //Starting row
                    else if(i == 2){
                        //Left Line
                        if(j == 0){
                            var line = $('<div></div>');
                            line.addClass('leftLine');
                            $("#div-container").append(line);
                        }
                        //Right Line
                        if(j == 4){
                            var line = $('<div></div>');
                            line.addClass('rightLine');
                            $("#div-container").append(line);
                        }
                    }
                }
                else if(board[i][j] == 2){
                    var box = $('<div></div>');
                    box.addClass('box');
                    $("#div-container").append(box);
                    boardPosX = i;
                    boardPosY = j;
                }
            }
        }

    }
    generateBoard(board);
    
    function updateBoard(boxPosX,boxPosY,directionX,directionY, board){

        [board[boxPosX][boxPosY],board[directionX][directionY]] 
        = [board[directionX][directionY], board[boxPosX][boxPosY]];

        generateBoard(board);
        return board;
    }

    const checkWin = (boardPosX,boardPosY) => {
        if(boardPosX == 2){
            if(boardPosY == 0 || boardPosY == 4) {
                document.getElementById("div-container").innerHTML = "";
                alert("You've WON!");
            }

        }
        else if(boardPosX == 0 && boardPosY == 2) {
            document.getElementById("div-container").innerHTML = "";
            alert("You've WON!");
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