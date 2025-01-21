let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newgamebtn=document.querySelector(".newbtn");
let msgcontainer=document.querySelector(".msgcontainer");
let msg=document.querySelector("#msg");

let turnO=true;

const winpattern=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

const resetgame=() =>{
    turnO=true;
    enablebox();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click",()=>{
       
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.desabled=true;
        checkWinner();
    });
});

const disablebox=() => {
    for(let box of boxes){
        box.disabled=true;
    }
};

const enablebox=() => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showwinner=(Winner) =>{
    msg.innerText=`Congrats,Winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disablebox();
}
const checkWinner=() => {
    for(let pattern of winpattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;

        if(pos1val !=""&& pos2val !=""&& pos3val !=""){
            if(pos1val===pos2val && pos2val===pos3val){
                
                showwinner(pos1val);
            }       
         }

    }
};
newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);



