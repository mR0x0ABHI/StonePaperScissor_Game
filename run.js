const comp = document.querySelector(".comp img");
const player = document.querySelector(".player img");
const compPoint =document.querySelector("#compPoint");
const playerPoint =document.querySelector("#playerPoint");
let msg = document.querySelector(".msg");

const option = document.querySelectorAll(".option button");

option.forEach(opt=>{
  opt.addEventListener("click",()=>{
   comp.classList.add("shakeComp");
   player.classList.add("shakeComp");

   setTimeout(()=>{
   comp.classList.remove("shakeComp");
   player.classList.remove("shakeComp");
   player.src="./"+opt.innerHTML+"Player.png";

   const choice = ["STONE","PAPER","SCISSOR"]
   let arrayNo =Math.floor(Math.random()*3);
   let compChoice = choice[arrayNo];

   comp.src="./" +compChoice+ "Computer.png";

   let userChoice = opt.innerHTML;

   let cPoint = parseInt(compPoint.innerHTML);
   let pPoint = parseInt(playerPoint.innerHTML);

   if(userChoice==="STONE"){
   if(compChoice==="PAPER"){
compPoint.innerHTML=cPoint+1;
msg.innerHTML="YOU LOST!";
   }
else if(compChoice==="SCISSOR"){
  playerPoint.innerHTML=pPoint+1;
  msg.innerHTML="YOU WON!";
}
else{
  msg.innerHTML="IT'S A DRAW!";
}
}
  else if(userChoice==="PAPER"){
   if(compChoice==="SCISSOR"){
compPoint.innerHTML=cPoint+1;
msg.innerHTML="YOU LOST!";
   }
else if(compChoice==="STONE"){
  playerPoint.innerHTML=pPoint+1;
  msg.innerHTML="YOU WON!";
}
else{
  msg.innerHTML="IT'S A DRAW!";
}
   }

  else{
      if(compChoice==="SCISSOR"){
compPoint.innerHTML=cPoint+1;
msg.innerHTML="YOU LOST!";
   }
else if(compChoice==="PAPER"){
  playerPoint.innerHTML=pPoint+1;
  msg.innerHTML="YOU WON!";
}
else{
  msg.innerHTML="IT'S A DRAW!";
}
  }

   },1000)
  
  });
})