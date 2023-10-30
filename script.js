var choices = ["r","p","s"];
var userWin = 0;
var userLoss = 0;
var tie = 0;

while (input !== "no") {
    var userChoice = prompt("Choose between r, p and s.");
    console.log(userChoice)

    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    console.log(computerChoice);

    if (userChoice == "r" && computerChoice == "s") {
        alert("The opponent has picked " + computerChoice + ". You won!");
        userWin++;
    } else if (userChoice == "r" && computerChoice == "p") {
        alert("The opponent has picked " + computerChoice + ". You lost :(");
        userLoss++;
    } else if (userChoice == "s" && computerChoice == "r") {
        alert("The opponent has picked " + computerChoice + ". You lost :(");
        userLoss++;
    } else if (userChoice == "s" && computerChoice == "p") {
        alert("The opponent has picked " + computerChoice + ". You won!");
        userWin++;
    } else if (userChoice == "p" && computerChoice == "r") {
        alert("The opponent has picked " + computerChoice + ". You won!");
        userWin++;
    } else if (userChoice == "p" && computerChoice == "s") {
        alert("The opponent has picked " + computerChoice + ". You lost :(");
        userLoss++;
    } else if(userChoice == computerChoice) {
        alert("The opponent has picked " + computerChoice + ". Tie.");
        tie++;
    }
    alert ("You have " + userWin + " wins, " + userLoss + " losses, and " + tie + " ties.");

    var input = prompt("Would you like to play again? Pick yes or no.");
}


