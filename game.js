function GetComputerChoice()
{
    let value;
    let x = Math.floor(Math.random()*3+1)
    if(x==1){
        value="rock"
    }
    else if(x==2){
        value="paper"
    }
    else{
        value="scissors"
    }
    
    return value;
}


let playerscore=0;
let computerscore=0;

const result=document.querySelector('.result');
const playerscoredisplay=document.querySelector('.pscore');
const computerscoredisplay=document.querySelector('.cscore');

const game=function(PlayerChoice,computerchoice){
    
        if(PlayerChoice==="rock" && computerchoice==="scissors" || PlayerChoice==="scissors" && computerchoice==="paper"|| PlayerChoice==="paper"&& computerchoice==="rock"){
            
            playerscore++
            playerscoredisplay.textContent=playerscore;
            result.textContent="The player won the round";
        }
        else if(PlayerChoice===computerchoice){
            result.textContent="Tie round";
        }
       
        else{
           computerscore++
           result.textContent="The computer has won the round";
           computerscoredisplay.textContent=computerscore;
        }
    
    
}
const checkWinner = function() {
    if (playerscore === 5 || computerscore ===5) {
        if (playerscore === 5) {
            result.textContent = "Player wins the game!";
        } else {
            result.textContent = "Computer wins the game!";
        }
        setTimeout(() => {
            // Reset scores
            playerscore = 0;
            computerscore = 0;
            playerscoredisplay.textContent = playerscore;
            computerscoredisplay.textContent = computerscore;
        }, 2000); // Delay reset for 2 seconds to display winner
    }
}

const rock =document.querySelector('.BtnRock');
rock.addEventListener('click', ()=> {game('rock',GetComputerChoice())
checkWinner()});

const paper=document.querySelector('.BtnPaper');
paper.addEventListener('click',()=> {game('paper',GetComputerChoice())
checkWinner()});
const scissors=document.querySelector('.BtnScissors');
scissors.addEventListener('click',()=> {game('scissors',GetComputerChoice())
checkWinner()});







