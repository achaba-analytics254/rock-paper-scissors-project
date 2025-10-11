// rock, paper, scissors in javascript

// Logic to get computer choice

const getComputerChoice = () => {
    let choices = Math.floor(Math.random() * 3)

    switch(choices){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// Logic to get human choice to lowercase (case sensitive)

const getHumanChoice = () => {
    return prompt('Enter rock, paper or scissors to play').toLowerCase()
}

// Declaring players scores and initializing to 0.

let humanScore = 0;
let computerScore = 0;

// Logic to play a single round

const playRound = (humanChoice, computerChoice) => {
    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    
    // compare choices

    if (humanChoice === computerChoice){
        console.log('It\'s a tie!');
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        console.log(`You win this round: ${humanChoice} beats ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`Computer wins this round: ${computerChoice} beats ${humanChoice}`);
        computerScore++;
    }
    console.log(`Your score: ${humanScore} | Computer score: ${computerScore}`);
}

const playGame = () => {
    // play 5 rounds
    for (let round = 0; round < 5; round++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    // Results

console.log('Results:')
    if (humanScore > computerScore){
        console.log('Congratulations! You\'ve won the game');
    } else if (computerScore > humanScore){
        console.log('Computer has won the game!');
    } else {
        console.log('It\'s a Draw!');
    }
}

playGame()