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

function gameStart() {

}