//1. game logic.
//2. computer choice
//2. buttons.
//3. interactive scoreboard

let playerscore=0;
let computerscore=0;

function game(computerchoice,playerchoice){
    if(playerchoice===computerchoice){
        return "Tie round";
    }
    else if(playerchoice==="rock" && computerchoice==="scissors" || playerchoice==="paper" && computerchoice==="rock" || playerchoice==="scissors" && computerchoice==="paper"){
        playerscore++;
        return "Player won the round";
    }
    else{
        computerscore++;
        return "Computer won the round";
    }
}

function getComputerChoice(){
    let computerchoice=Math.floor(Math.random()*3+1);
    if(computerchoice==1){
        return computerchoice="rock";
    }
    else if (computerchoice==2){
       return computerchoice="paper";
    }
    else{
        return computerchoice="scissors";
    }
}

function scoreUpdater(result){
    const playerScoreElem=document.querySelector('.playerscore h2');
    playerScoreElem.textContent=`Player score: ${playerscore}`;
    const computerScoreElem=document.querySelector('.computerscore h2');
    computerScoreElem.textContent=`Computer score: ${computerscore}`;

    const roundScoreElem=document.querySelector('.round h3');
    roundScoreElem.textContent=`Round winner: ${result}`;

    if (playerscore==5){
        roundScoreElem.textContent="The player won the game!";
        playerScoreElem.textContent=" ";
        computerScoreElem.textContent= " ";
        playerscore=0;
        computerscore=0;
        const replay=document.createElement()
       
    }
    else if(computerscore==5){
        roundScoreElem.textContent="The computer won the game!";
        playerScoreElem.textContent=" ";
        computerScoreElem.textContent= " ";
        computerscore=0;
        playerscore=0;   
    }
}

const rockbtn=document.querySelector("#rockbtn");
rockbtn.addEventListener("click", ()=> {
    playerchoice="rock";
    let computerchoice=getComputerChoice();
    let result=game(computerchoice,playerchoice);
    scoreUpdater(result);
});
const paperbtn=document.querySelector('#paperbtn');
paperbtn.addEventListener("click",()=>{
    playerchoice="paper";
    let computerchoice=getComputerChoice();
    let result=game(computerchoice,playerchoice);
    scoreUpdater(result);
});
const scissorsbtn=document.querySelector("#scissorsbtn");
scissorsbtn.addEventListener("click",()=> {
    playerchoice="scissors";
    let computerchoice=getComputerChoice();
    let result=game(computerchoice,playerchoice);
    scoreUpdater(result);
});

