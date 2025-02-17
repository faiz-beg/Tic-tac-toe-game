let boxes=document.querySelectorAll(".box");
let resetbutton=document.querySelector("#resetbutton");
let NewGamebtn=document.querySelector("#New-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turnO=true;//playerX,palyerO
  const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6], 
    [3,4,5],
    [6,7,8], 
  ];
  const resetGame=()=>{
    turnO=true;
    enableboxes();
    msgcontainer.classList.add("hide");
  };
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
       if(turnO){ //playerO
          box.innerText="O";
          turnO=false;
       
        }   else{
        box.innerText="x"; 
        turnO=true;
       }
       box.disabled=true;
       checkwinner();

    });
  });
      const disableboxes=()=>{
        for(let box of boxes){
          box.disabled=true;

        }
      };
      const enableboxes=()=>{
        for(let box of boxes){
          box.disabled=false;
          box.innerText="";

        } 
      };
  const showWinner=(Winner)=>{
      msg.innerText="Congratulations, Winner is ${winner}";
      msgcontainer.classList.remove("hide");
      disableboxes();    
  }
  const checkwinner=()=>{
      for (let pattern of winpatterns){
       
         let pos1Val = boxes[pattern[0]].innerText;
         let pos2Val = boxes[pattern[1]].innerText;
         let pos3Val = boxes[pattern[2]].innerText;
         if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
          if (pos1Val === pos2Val && pos2Val ===pos3Val){
            console.log("Winner", pos1Val);
            showWinner(pos1Val);
          }
         }
      } 
  };
  NewGamebtn.addEventListener("click", resetGame);
  resetbutton.addEventListener("click", resetGame);