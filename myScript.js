let playerSelection;
let computerSelection;
let result;
let playerScore=0;
let computerScore=0;

function computerPlay() {
    let computerSelection;
    let computerRNG = Math.floor(Math.random()*(4-1)+1);

    if(computerRNG == 1){
        computerSelection = "Rock";
    }
    else if(computerRNG == 2){
        computerSelection = "Paper";
    }
    else{
        computerSelection = "Scissors"; 
    }
    /*console.log(computerRNG);
    console.log(computerSelection);*/
    return computerSelection;
}

function gameStart(playerSelection,computerSelection) {
    let playerSelectionCap = playerSelection.toUpperCase();
    let computerSelectionCap = computerSelection.toUpperCase();

    if(playerSelectionCap === "ROCK"){
        if(computerSelectionCap === "ROCK"){
            result = `A Draw. You choose ${playerSelectionCap}
                            and Computer choose ${computerSelectionCap}`;              
        }
        else if(computerSelectionCap === "PAPER"){
            result = `You Lose. You choose ${playerSelectionCap}
                             and Computer choose ${computerSelectionCap}`;
        }
        else{
            result = `You Win. You choose ${playerSelectionCap}
                            and Computer choose ${computerSelectionCap}`;
        }
    }
    else if(playerSelectionCap === "PAPER"){
        if(computerSelectionCap === "ROCK"){
            result = `You Win. You choose ${playerSelectionCap}
                            and Computer choose ${computerSelectionCap}`;
        }
        else if(computerSelectionCap === "Paper"){
            result = `A Draw. You choose ${playerSelectionCap}
                             and Computer choose ${computerSelectionCap}`;
        }
        else{
            result = `You Lose. You choose ${playerSelectionCap}
                            and Computer choose ${computerSelectionCap}`;
        }
        return result;
    }
    else if(playerSelectionCap === "SCISSORS"){
        if(computerSelectionCap === "ROCK"){
            result = `You Lose. You choose ${playerSelectionCap}
                            and Computer choose ${computerSelectionCap}`;
        }
        else if(computerSelectionCap === "Paper"){
            result = `You Win. You choose ${playerSelectionCap}
                             and Computer choose ${computerSelectionCap}`;
        }
        else{
            result = `A Draw. You choose ${playerSelectionCap}
                            and Computer choose ${computerSelectionCap}`;
        }
        return result;
    }
    else{
        result = `Wrong input. You entered ${playerSelection}`;
    }
    return result;
}

function gameLoop(){
    let round = 1;
    let playerWinCheck;
    let drawCheck;
    let wrongCheck;
    for(round == 1; round <=5; round++){
        computerSelection = computerPlay();
        for(let keepGoing = true; keepGoing == true;){
            playerSelection = prompt("Rock, Paper, or Scissors?");
            console.log(gameStart(playerSelection,computerSelection));
            wrongCheck = result.search("Wrong");
            if(wrongCheck === -1){
                keepGoing = false;
            }
        }
        console.log(gameStart(playerSelection,computerSelection));
        playerWinCheck = result.search("Win");
        if(playerWinCheck === -1){
            drawCheck = result.search("Draw");
            if(drawCheck === -1){
                wrongCheck = result.search("Wrong");
                if(wrongCheck === -1){
                    computerScore++;
                }
            }
        }
        else{
            playerScore++;
        }
    }
    console.log(`You win ${playerScore} out of 5 round against the computer`);
    if(playerScore > computerScore){
        playerScore=0;
        computerScore=0;
        return console.log(`Congratulation, you win the Game!`)
    }
    else if(computerScore > playerScore){
        playerScore=0;
        computerScore=0;
        return console.log(`Unfortunately, you lost the Game!`)
    }
    else{
        playerScore=0;
        computerScore=0;
        return console.log(`The Game ended in a draw as both you and the computer won the same number of round`);
    }
}