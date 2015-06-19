////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

ffunction getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.");
    return prompt();
}

function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getPlayerMove(move) {
    console.log("-> player move");
    return (move || getInput());
}

function getComputerMove(move) {
    console.log("-> got computer move");
    return (move || randomPlay());
}

function getWinner(playerMove,computerMove) {
    console.log("-> got winner");
    var winner = null;
    
    if (playerMove === computerMove) {
        winner = 'tie';
        
    } else if (playerMove === 'rock') {
        
        if (computerMove === 'paper') {
            winner = 'computer';
            
        } else {
            winner = 'player';
        }
        
    } else if (playerMove === 'paper') {
        
        if (computerMove === 'scissors') {
            winner = 'computer';
            
        } else {
            winner = 'player';
        }

    } else if (playerMove === 'scissors') {

        if (computerMove === 'rock') {
            winner = 'computer';

        } else {
            winner = 'player';

        }

    }

    console.log("-> the winner is " + winner);
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    
    while (playerWins < 5 && computerWins < 5) {
    
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        
        if (winner === "player"){
            playerWins += 1;
        }else if (winner === "computer"){
            computerWins += 1;
        }else if (winner === "tie"){
            console.log("Tie, try again.");
        }
        
        console.log("The score is " + [playerWins] +" for the player and "+[computerWins] +" for the computer" );
        
    } 
    
    console.log("Final score"+ [playerWins]+ "for the player and "+[computerWins]+ " for the computer");
        
    return [playerWins, computerWins];
    
}

playToFive();







































