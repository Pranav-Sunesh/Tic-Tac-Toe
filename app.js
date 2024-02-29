let playerx = true;
let box = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let heading = document.querySelector("h1");
let winning = [[0,1,2],
                [3,4,5],
                [6,7,8],
                [0,3,6],
                [1,4,7],
                [2,5,8],
                [0,4,8],
                [2,4,6]];
const disableButtons = () =>{
    box.forEach((boxes) =>{
        boxes.disabled = true;
    })
};
const winCondition = () =>{
    let val1,val2,val3;
    for(let cond of winning){
        val1 = box[cond[0]].innerText;
        val2 = box[cond[1]].innerText;
        val3 = box[cond[2]].innerText;
        if(val1 != "" && val2 !="" && val3 != ""){
            if(val1 == val2 && val2 == val3){
                heading.innerText = `Player ${val1} wins`;
                disableButtons();
            }
        }
    }
    
};

box.forEach((boxes)=>{
    boxes.addEventListener("click",() =>{
        if(playerx == true){
            boxes.innerText = "X";
            playerx = false;
        }
        else{
            boxes.innerText = "O";
            playerx = true;
        }
        boxes.disabled = "true";
        winCondition();
    });
});
reset.addEventListener("click",()=>{
    box.forEach((boxes)=>{
        boxes.innerText = "";
        boxes.disabled = false;
    });
    playerx = true;
    heading.innerText = "Tic Tac Toe";
});
