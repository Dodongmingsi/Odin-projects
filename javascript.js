
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
    let playerWin=true;

    if(playerChoice=="rock" &&computerChoice=="paper"){
        alert("Computer wins Paper  Beats Rocks");
        playerWin=false;
    }
    else if(playerChoice=="rock" && computerChoice=="scissors"){
        alert("Player Wins Rocks Beats Scissors");
    
    }

    else if(playerChoice=="scissors" && computerChoice =="paper")
        alert("Player Wins Scissors beats Paper");
    else if(playerChoice=="scissors" && computerChoice =="rock"){
       alert("Computer Wins Rocks beats Scissors");
        playerWin=false;
    }
    else if(playerChoice=="paper" && computerChoice =="rock")
        alert("Player Wins Paper beats Rock");
    else if(playerChoice=="paper" && computerChoice =="scissors"){
        alert("Computer Wins Scissors beats Paper");
        playerWin=false;
    }
    else if(playerChoice==computerChoice)
        alert("It is a tie");

    if(playerWin==true)
        playerwins++;
    else if(playerWin==false)
        compwins++;
    
    alert("score: Player ="+ playerwins +" Computer = "+compwins);
    
}
let playerwins=0;
let compwins=0;

function rock(){

    playerChoice="rock";
    computerChoice=getComputerChoice();



    playGround(playerChoice,computerChoice);
}

function paper(){

    playerChoice="paper";
    computerChoice=getComputerChoice();



    playGround(playerChoice,computerChoice);
}
function scissors(){

    playerChoice="scissors";
    computerChoice=getComputerChoice();



    playGround(playerChoice,computerChoice);
}