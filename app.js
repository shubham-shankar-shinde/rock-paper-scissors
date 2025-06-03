 let userscore = 0;
 let compscore = 0;
 const choices = document.querySelectorAll(".choice");
 const msg = document.querySelector("#msg");
const userscorech=document.querySelector("#you");
const compscorech=document.querySelector("#computer");
const gencompchoice = ()=>{
let options = ["rock","paper","scissors"];
const randidx = Math.floor(Math.random()*3);
return options[randidx];
};
const drawgame =()=>{
    msg.innerText="Game was draw ! Try again ";
    msg.style.backgroundColor="blue";


};
const showwinner = (userwin,userchoice,compchoice)=>{
if(userwin){
  userscore++;
  userscorech.innerText= userscore;
msg.innerText=`you are win! your ${userchoice} beats ${compchoice}`;
msg.style.backgroundColor="green";


}else{
     compscore++;
     compscorech.innerText= compscore;
    msg.innerText=`you are lost! ${compchoice} beats yours ${userchoice}`;
    msg.style.backgroundColor="red";
}

};

const playgame = (userchoice)=>{
const compchoice = gencompchoice();
if (userchoice===compchoice){
     drawgame();
}else{
    let userwin = true;
if (userchoice === "rock"){
userwin =compchoice === "paper"?false:true; 
}
else if(userchoice==="paper"){
    userwin=compchoice==="scissors"?false:true;
}else{
    userwin= compchoice==="rock"?false:true;
}
showwinner(userwin,userchoice,compchoice);    
}
}
 choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
 let userchoice = choice.getAttribute("id");
playgame(userchoice);

});
});