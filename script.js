let playgame = confirm("Shall we play Rock,Paper or scissors?");
if (playgame) {
 let playerchoice = prompt("Please enter rock, paper or scissors");
  if (playerchoice){
    let playerOne = playerchoice.trim().toLowerCase();
    if (playerOne === "rock" || playerOne === "paper" || playerOne === "scissors"){
        let computerChoice = Math.floor(Math.random()* 3+1);
        let computer = computerChoice === 1 ? "rock"
        : computerChoice === 2 ? "paper"
        : "scissors";
        let result =
        playerOne === computer ? "Tie Game"
        : (playerOne === "rock") && (computer === "paper")
        ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer Wins!`
        : (playerOne === "paper") && (computer ==="scissors")
        ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer Wins!`
        : (playerOne === "scissors") && (computer === "rock")
        ? `playerOne: ${playerOne}\ncomputer: ${computer}\ncomputer Wins!`
        : `playerOne: ${playerOne}\ncomputer: ${computer}\nplayerOne Wins!`;
        alert(result);
        let PlayAgain = confirm("Play Again?");
        PlayAgain ? location.reload()
        : alert ("Ok thanks for playing.");

     }else{
        alert("you didn't enter rock, paper or scissors.");
       }
    }else{
    alert("I guess you changed your mind");
    }
    }else{
 alert("Ok,maybe next time.");
}
    