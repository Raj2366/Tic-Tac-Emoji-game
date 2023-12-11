var boxElements = document.querySelectorAll(".box");
const playerO = document.querySelector(".players .playerO");
const playerX = document.querySelector(".players .playerX");
const result= document.querySelector(".result");
const result_text= document.querySelector(".result h1");
const reset= document.querySelector(".result button");
const WINNING_CONDITIONS = [
    [0,1,2,3,4],              [36,37,38,39,40],             [72,73,74,75,76],                 [3,12,21,30,39],            [7,16,25,34,43],          [0,10,20,30,40],
    [1,2,3,4,5],              [37,38,39,40,41],             [73,74,75,76,77],                 [12,21,30,39,48],           [16,25,34,43,52],         [10,20,30,40,50],
    [2,3,4,5,6],              [38,39,40,41,42],             [74,75,76,77,78],                 [21,30,39,48,57],           [25,34,43,52,61],         [20,30,40,50,60],
    [3,4,5,6,7],              [39,40,41,42,43],             [75,76,77,78,79],                 [30,39,48,57,66],           [34,43,52,61,70],         [30,40,50,60,70],
    [4,5,6,7,8],              [40,41,42,43,44],             [76,77,78,79,80],                 [39,48,57,66,75],           [43,52,61,70,79],         [40,50,60,70,80],
    [9,10,11,12,13],          [45,46,47,48,49],             [0,9,18,27,36],                   [4,13,22,31,40],            [8,17,26,35,44],          [1,11,21,31,41],
    [10,11,12,13,14],         [46,47,48,49,50],             [9,18,27,36,45],                  [13,22,31,40,49],           [17,26,35,44,53],         [11,21,31,41,51],
    [11,12,13,14,15],         [47,48,49,50,51],             [18,27,36,45,54],                 [22,31,40,49,58],           [26,35,44,53,62],         [21,31,41,51,61],
    [12,13,14,15,16],         [48,49,50,51,52],             [27,36,45,54,63],                 [31,40,49,58,67],           [35,44,53,62,71],         [31,41,51,61,71],
    [13,14,15,16,17],         [49,50,51,52,53],             [36,45,54,63,72],                 [40,49,58,67,76],           [44,53,62,71,80],         [2,12,22,32,42],       
    [18,19,20,21,22],         [54,55,56,57,58],             [1,10,19,28,37],                  [5,14,23,32,41],            [36,46,56,66,76],         [12,22,32,42,52],
    [19,20,21,22,23],         [55,56,57,58,59],             [10,19,28,37,46],                 [14,23,32,41,50],           [27,37,47,57,67],         [22,32,42,52,62],
    [20,21,22,23,24],         [56,57,58,59,60],             [19,28,37,46,55],                 [23,32,41,50,59],           [37,47,57,67,77],         [3,13,23,33,43],
    [21,22,23,24,25],         [57,58,59,60,61],             [28,37,46,55,64],                 [32,41,50,59,68],           [18,28,38,48,58],         [13,23,33,43,53],
    [22,23,24,25,26],         [58,59,60,61,62],             [37,46,55,64,73],                 [41,50,59,68,77],           [28,38,48,58,68],         [4,14,24,34,44],
    [27,28,29,30,31],         [63,64,65,66,67],             [2,11,20,29,38],                  [6,15,24,33,42],            [38,48,58,68,78],         [4,12,20,28,36],
    [28,29,30,31,32],         [64,65,66,67,68],             [11,20,29,38,47],                 [15,24,33,42,51],           [9,19,29,39,49],          [5,13,21,29,37],
    [29,30,31,32,33],         [65,66,67,68,69],             [20,29,38,47,56],                 [24,33,42,51,60],           [19,29,39,49,59],         [13,21,29,37,45],
    [30,31,32,33,34],         [66,67,68,69,70],             [29,38,47,56,65],                 [33,42,51,60,69],           [29,39,49,59,69],         [6,14,22,30,38],
    [31,32,33,34,35],         [67,68,69,70,71],             [38,47,56,65,74],                 [42,51,60,69,78],           [39,49,59,69,79],         [14,22,30,38,46],
    [22,30,38,46,54],         [7,15,23,31,39],              [15,23,31,39,47],                 [23,31,39,47,55],           [31,39,47,55,63],         [8,16,24,32,40],
    [16,24,32,40,48],         [24,32,40,48,56],             [32,40,48,56,64],                 [40,48,56,64,72],           [17,25,33,41,49],         [25,33,41,49,57],
    [33,41,49,57,65],         [41,49,57,65,73],             [26,34,42,50,58],                 [34,42,50,58,66],           [42,50,58,66,74],         [35,43,51,59,67],
    [43,51,59,67,75],         [44,52,60,68,76],
]
alert("select the emoji by click the [window button + semicolon(;)]");
var a= prompt("select the emoji for player1");
var b= prompt("select the emoji for player2");
alert("To win this game you have to fill 5 continuous boxes with same em🤪ji");

const player1 = a;
const player2 = b;
let toggleTurn = true;
boxElements.forEach(box=>{
    box.onclick=()=>{
        let currentPlayer = toggleTurn ? player1 : player2;
        
        box.classList.add("disabled");
        box.innerHTML = currentPlayer;
        addInbox(box, currentPlayer);
        if(winnerCheck(currentPlayer)){
            //console.log(currentPlayer+ "WINNER");
            addInactive();
            result.classList.remove("inactive");
            result_text.innerText= " Congratulation 🎉"  +    currentPlayer   + " Win the Game  ";
        }

        else if(isDraw()){
            //console.log("Draw the Game");
            addInactive();
            result_text.innerText="Draw the Game";
        }
        else
        {
            swapPlayer();
        }
    }
});

function winnerCheck(currentPlayer){
    return WINNING_CONDITIONS.some(condition=>{
        //console.log(condition);
        return condition.every(index=>{
            //console.log(index);
            //console.log(boxElements[index].classList.contains(currentPlayer));
            return boxElements[index].classList.contains(currentPlayer);
        });

    })
}

function isDraw(){
    return[...boxElements].every(box=>{
        return box.classList.contains(player2)||box.classList.contains(player1);
    })
}

function swapPlayer(){

    toggleTurn = !toggleTurn;
    if(toggleTurn){
        playerO.classList.add("active");
        playerX.classList.remove("active");
    }
    else{
        playerX.classList.add("active");
        playerO.classList.remove("active");
    }

}

function addInbox(box, currentPlayer){
    box.innerHTML = currentPlayer;
    box.classList.add(currentPlayer);
}
function addInactive(){
    result.classList.remove("inactive");
}
reset.onclick=()=>{
    location.reload();
}