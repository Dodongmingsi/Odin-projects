
    
let score =JSON.parse( localStorage.getItem('score'))|| //get the previous score stored or the create a default value 0's
  {
    wins:0,
    losses:0,
    ties:0
  };
  scoring();

function results(result){
   document.querySelector('.result').innerHTML=`${result}`;
}
function scoring(){
document.querySelector('.js-score').innerHTML=`WINS: ${score.wins} LOSSSES : ${score.losses} TIES : ${score.ties}`
}
function outcome(playerChoice,computerChoice){
    document.querySelector('.outcome').innerHTML =`<br>You<img src="images/${playerChoice}-emoji.png" class="move-icon">   <img src="images/${computerChoice}-emoji.png" class="move-icon"> Computer  `
}

function getComputerChoice(){
let gunting= "scissors";
let stone ="rock";
let papel ="paper";
let randomNumber= Math.floor(Math.random() * 3);
switch (randomNumber){
case 0:
    return gunting;
case 1:
    return stone;
case 2:
    return papel;
}
}

function playGround(playerChoice,computerChoice){

let result= '';
if(playerChoice=="rock" &&computerChoice=="paper"){
  score.losses++;
  result= 'YOU LOSE ';
}
else if(playerChoice=="rock" && computerChoice=="scissors"){
  score.wins++;
  result= 'YOU WIN ';
}

else if(playerChoice=="scissors" && computerChoice =="paper"){
        score.wins++;
        result= 'YOU WIN ';
  }
else if(playerChoice=="scissors" && computerChoice =="rock"){
        score.losses++;
        result= 'YOU LOSE ';
}
else if(playerChoice=="paper" && computerChoice =="rock"){
    score.wins++;
    result= 'YOU WIN ';
}
else if(playerChoice=="paper" && computerChoice =="scissors"){
    score.losses++;
    result= 'YOU LOSE ';
}
else if(playerChoice==computerChoice){
  score.ties++;
  result= 'IT IS A TIE';
    
}

localStorage.setItem('score',JSON.stringify(score)); //converts score object to a JSON file and store in the local storage in 'score'
results(result);
scoring();
outcome(playerChoice,computerChoice);

}


function rock(){

const playerChoice="rock";
const computerChoice=getComputerChoice();



playGround(playerChoice,computerChoice);
}

function paper(){

let playerChoice="paper";
let computerChoice=getComputerChoice();



playGround(playerChoice,computerChoice);
}
function scissors(){

let  playerChoice="scissors";
let  computerChoice=getComputerChoice();



playGround(playerChoice,computerChoice);
}
