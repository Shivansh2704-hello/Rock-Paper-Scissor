let choices = document.querySelectorAll(".choice");
let user_Score = document.querySelector("#user-score");
let comp_Score = document.querySelector("#comp-score");
let message = document.querySelector("#msg");

let userScore = 0;
let compScore = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", function () {
        
        let userChoice = choice.getAttribute("id");

        
        let options = ["Rock", "Paper", "Scissors"];
        let randomIndex = Math.floor(Math.random() * 3);
        let compChoice = options[randomIndex];

        
        if (userChoice === compChoice) {
            message.innerText = "It's a Draw!";
        } else if (
            (userChoice === "Rock" && compChoice === "Scissors") ||
            (userChoice === "Paper" && compChoice === "Rock") ||
            (userChoice === "Scissors" && compChoice === "Paper")
        ) {
            userScore++;
            user_Score.innerText = userScore;
            message.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        } else {
            compScore++;
            comp_Score.innerText = compScore;
            message.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        }
    });
});
