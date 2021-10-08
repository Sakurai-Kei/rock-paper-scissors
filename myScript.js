let playerSelection;
let computerSelection;
let result;
let playerScore=0;
let computerScore=0;

function computerPlay() { 
    let computerRNG = Math.floor(Math.random()*(4-1)+1);

    if(computerRNG == 1){
        computerSelection = "rock";
    }
    else if(computerRNG == 2){
        computerSelection = "paper";
    }
    else{
        computerSelection = "scissors"; 
    }
    /*console.log(computerRNG);
    console.log(computerSelection);*/
    return computerSelection;
}

function gameStart(playerSelection,computerSelection) { 

    if(playerSelection === "rock"){
        if(computerSelection === "rock"){
            result = `A Draw. You choose ${playerSelection}
                            and Computer choose ${computerSelection}`;              
        }
        else if(computerSelection === "paper"){
            result = `You Lose. You choose ${playerSelection}
                             and Computer choose ${computerSelection}`;
            computerScore++;                 
        }
        else{
            result = `You Win. You choose ${playerSelection}
                            and Computer choose ${computerSelection}`;
            playerScore++;                
        }
    }
    else if(playerSelection === "paper"){
        if(computerSelection === "rock"){
            result = `You Win. You choose ${playerSelection}
                            and Computer choose ${computerSelection}`;
            playerScore++;
        }
        else if(computerSelection === "paper"){
            result = `A Draw. You choose ${playerSelection}
                             and Computer choose ${computerSelection}`;
        }
        else{
            result = `You Lose. You choose ${playerSelection}
                            and Computer choose ${computerSelection}`;
            computerScore++;
        }
        return result;
    }
    else if(playerSelection === "scissors"){
        if(computerSelection === "rock"){
            result = `You Lose. You choose ${playerSelection}
                            and Computer choose ${computerSelection}`;
            computerScore++;
        }
        else if(computerSelection === "paper"){
            result = `You Win. You choose ${playerSelection}
                             and Computer choose ${computerSelection}`;
            playerScore++;
        }
        else{
            result = `A Draw. You choose ${playerSelection}
                            and Computer choose ${computerSelection}`;
        }
        return result;
    }
    else{
        result = `Wrong input. You entered ${playerSelection}`;
    }
    return result;

}

function updateScore(){
    playerScoreText.textContent = `Player: ${playerScore}`;
    computerScoreText.textContent = `Computer: ${computerScore}`;
}

function winCondition(){
    if(playerScore === 5){
        alert('Player Wins 5 rounds!');
        playerScore=0;
        computerScore=0;
        updateScore();
    }
    else if(computerScore === 5){
        alert('Computer Wins 5 rounds!');
        playerScore=0;
        computerScore=0;
        updateScore();
    }
}

const buttons = document.querySelectorAll('.playerInput');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerSelection = button.id;
    })
});

const playerScoreText = document.querySelector('.playerScore');

const computerScoreText = document.querySelector('.computerScore');

const start = document.getElementById('gameStart');
start.addEventListener('click', () =>{
    computerPlay();
    gameStart(playerSelection,computerSelection);
    alert(result);
    updateScore();
    winCondition();
});