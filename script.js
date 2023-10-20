// 1. Initialize `choices` array: r, p, s. representing rock, paper, or scissors.
var choices = ["r","p","s"];
// 5. We then add to their score.

//    * If user wins, then we add one to their wins.
var userWin = 0;
//    * If user loses, then we add one to their losses.
    var userLoss = 0;
//    * If user ties, then we add one to their ties.
    var tie = 0;
// 2. Prompt user to enter "r," "p," or "s".
while (input !== "no") {
var userChoice = prompt("Choose between r, p and s.");
console.log(userChoice)
// 3. Computer chooses a **random** value in a list of "r," "p," or "s."
var computerChoice = choices[Math.floor(Math.random()*choices.length)];
console.log(computerChoice);

// 4. We determine if the user wins or not.

//    * Initialize `wins`, `losses`, `ties` variables to 0

//    * If user picks rock and if computer picks scissors, then user wins.
if (userChoice == "r" && computerChoice == "s") {
    alert("The opponent has picked " + computerChoice + ". You won!");
    userWin++;
} else if (userChoice == "r" && computerChoice == "p") {
//    * If user picks rock and if computer picks paper, then user loses.
    alert("The opponent has picked " + computerChoice + ". You lost :(");
    userLoss++;
} else if (userChoice == "s" && computerChoice == "r") {
//    * If user picks scissors and if computer picks rock, then user loses.
    alert("The opponent has picked " + computerChoice + ". You lost :(");
    userLoss++;
} else if (userChoice == "s" && computerChoice == "p") {
//    * If user picks scissors and if computer picks paper, then user wins.
    alert("The opponent has picked " + computerChoice + ". You won!");
    userWin++;
} else if (userChoice == "p" && computerChoice == "r") {
//    * If user picks paper and if computer picks rock, then user wins.
    alert("The opponent has picked " + computerChoice + ". You won!");
    userWin++;
} else if (userChoice == "p" && computerChoice == "s") {
//    * If user picks paper and if computer picks scissors, then user loses.
    alert("The opponent has picked " + computerChoice + ". You lost :(");
    userLoss++;
//    * If user picks the same as computer, then they tie.
} else if(userChoice == computerChoice) {
    alert("The opponent has picked " + computerChoice + ". Tie.");
    tie++;
}
// 5. We then add to their score.
alert ("You have " + userWin + " wins, " + userLoss + " losses, and " + tie + " ties.");
//    * If user wins, then we add one to their wins.
    
//    * If user loses, then we add one to their losses.
    
//    * If user ties, then we add one to their ties.
var input = prompt("Would you like to play again? Pick yes or no.");
}
// 6. Prompt user to play again.


