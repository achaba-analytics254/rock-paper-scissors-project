//console.log('Hello World'); //test connection


function getComputerChoice(){
   const getChoice =  Math.floor(Math.random() * 3);

   switch(getChoice){
    case 0:
        return 'rock';
    case 1:
        return 'scissors';
    case 2:
        return 'paper';
    default:
        return null;
   }
}
console.log(getComputerChoice());

function getHumanChoice(){
    return prompt('Enter your choice').toLowerCase();
}
console.log(getHumanChoice());
