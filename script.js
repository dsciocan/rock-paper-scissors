// Create variables for three different options: R, P and S
var choices = [
    'R', 
    'P', 
    'S'
];

// Create variables for wins, loses, or ties
var wins = 0;
var loses = 0;
var ties = 0;


for (var i = 0; i < 10; i++) {
// Prompt user to choose between R, P and S
    var userChoice = prompt('Please choose between "R", "P", and "S" (use capital letters).');
    
    // Create a variable for random computer selection between R, P and S
    var computerChoice = choices[Math.floor(Math.random()*choices.length)];
    
        // If else statements for different options
        // Alert user of the computer/opponent choice and of the result: "You won/lost or Tie"
        if (userChoice === "R" && computerChoice === "R") {
            alert("Your opponent chose " + computerChoice + ". Tie.");
            ties++;
        } else if (userChoice === "R" && computerChoice === "P") {
            alert("Your opponent chose " + computerChoice + ". YOU LOST :(");
            loses++;
        } else if (userChoice === "R" && computerChoice === "S") {
            alert("Your opponent chose " + computerChoice + ". YOU WON! :)");
            wins++;
        } else if (userChoice === "P" && computerChoice === "P") {
            alert("Your opponent chose " + computerChoice + ". Tie.");
            ties++;
        } else if (userChoice === "P" && computerChoice === "R") {
            alert("Your opponent chose " + computerChoice + ". YOU WON! :)");
            wins++;
        } else if (userChoice === "P" && computerChoice === "S") {
            alert("Your opponent chose " + computerChoice + ". YOU LOST :(");
            loses++;
        } else if (userChoice === "S" && computerChoice === "S") {
            alert("Your opponent chose " + computerChoice + ". Tie.");
            ties++;
        } else if (userChoice === "S" && computerChoice === "P") {
            alert("Your opponent chose " + computerChoice + ". YOU WON! :)");
            wins++;
        } else if (userChoice === "S" && computerChoice === "R") {
            alert("Your opponent chose " + computerChoice + ". YOU LOST :(");
            loses++;
        // If different choice alert: "WRONG CHOICE. GAME OVER :("
        } else {
            alert('WRONG CHOICE. GAME OVER :(');
        } 
    }

// Alert user of total wins, ties and loses after 10 rounds
alert("You won " + wins + " times, lost " + loses + " times and tied " + ties + " times. Refresh the page to play again");
