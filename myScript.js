const playerSelection = "Rock";
const computerSelection = computerPlay();
let result;

console.log(gameStart(playerSelection,computerSelection))

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
    console.log(computerRNG);
    console.log(computerSelection);
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
        result = `Please enter the correct input. You entered ${playerSelection}`;
    }
    return result;
}

