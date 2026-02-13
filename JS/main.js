// rock, paper, scissors in javascript

// div elements
const buttonContainer = document.getElementById('buttonContainer');
const displayChoices =document.getElementById('displayChoices');
const scoreResult = document.getElementById('scoreResult');
const finalScore = document.getElementById('finalScore');
const resultDeclaration = document.getElementById('resultDeclaration');

// create buttons
const rockBtn = document.createElement('button');
rockBtn.textContent = 'Rock';
rockBtn.id = 'rock'
const paperBtn = document.createElement('button');
paperBtn.textContent = 'Paper';
paperBtn.id = 'paper'
const scissorsBtn = document.createElement('button');
scissorsBtn.textContent = 'Scissors';
scissorsBtn.id = 'scissors'

// append children to button container
buttonContainer.appendChild(rockBtn);
buttonContainer.appendChild(paperBtn);
buttonContainer.appendChild(scissorsBtn);

// create p text
const displayChoicesText = document.createElement('p');
const scoreResultText = document.createElement('p');
const finalScoreText = document.createElement('p');
const resultDeclarationText = document.createElement('p');

// append p to div containers
displayChoices.appendChild(displayChoicesText);
scoreResult.appendChild(scoreResultText);
finalScore.appendChild(finalScoreText);
resultDeclaration.appendChild(resultDeclarationText);

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

// Logic to get human choice
buttonContainer.addEventListener('click', (e) => {
    const target = e.target.closest('button');

    if (!target) return;

   const humanChoice = target.id;
   const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
})


// Declaring players scores and initializing to 0.

let humanScore = 0;
let computerScore = 0;

// Logic to play a single round

const playRound = (humanChoice, computerChoice) => {
    displayChoicesText.textContent = `Your choice: ${humanChoice} | Computer Choice: ${computerChoice}`;
    
    // compare choices

    if (humanChoice === computerChoice){
        scoreResultText.textContent = 'It\'s a tie!'
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
        scoreResultText.textContent = `You win this round: ${humanChoice} beats ${computerChoice}`;
        humanScore++;
    } else {
        scoreResultText.textContent = `Computer wins this round: ${computerChoice} beats ${humanChoice}`;
        computerScore++;
    }
    finalScoreText.textContent = `Your score: ${humanScore} | Computer score: ${computerScore}`;

    if (humanScore === 5 || computerScore === 5){
        if (humanScore === 5){
            resultDeclarationText.textContent = 'Congratulations! You\'ve won the Game';
        } else {
            resultDeclarationText.textContent = 'Computer has won the Game';
        }
                // buttons disabled

    const buttons = buttonContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = true);
    }
}

// reset button
const resetButton = document.getElementById('resetButton');
const resetBtn = document.createElement('button');
resetBtn.textContent = 'Reset';
resetButton.appendChild(resetBtn);

resetBtn.addEventListener('click', () => {
    humanScore = '';
    computerScore = '';
    resultDeclarationText.textContent = '';
    finalScoreText.textContent = '';
    scoreResultText.textContent = '';
    displayChoicesText.textContent = '';

    // buttons enabled

    const buttons = buttonContainer.querySelectorAll('button');
    buttons.forEach(btn => btn.disabled = false);

});
