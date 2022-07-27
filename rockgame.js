const choices = ['rock', 'paper', 'scissors'];


 const rockPaperScissor = () => {
  let userMove = choices[Math.floor(Math.random() * choices.length)];
  let computerMove = choices[Math.floor(Math.random() * choices.length)];
    if (userMove === computerMove) {
     console.log("It's a tie");
   } else if (userMove === choices[1] && computerMove === choices[0]) {
     console.log("Paper beats rock, you lose");
   } else if (userMove === choices[2] && computerMove === choices[0]) {
    console.log("Scissors loses to rock and you lose.");
} else if (userMove === choices[0] && computerMove === choices[2]) {
  console.log("Rock beats scissors, you win.");
}
else console.log("It is not within the cards to play this game right now.")

}

rockPaperScissor()
