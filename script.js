window.addEventListener("DOMContentLoaded", function () {
    const weapon = ["rock", "paper", "scissors"];
    let playerSelection = "Rock";
    const computerSelection = computerPlay();



    function computerPlay() {
        let randValue = Math.floor(Math.random() * 3);
        return weapon[randValue];
    }

    function trueValue(value) {
        
        let valueLowerCase = value.toLowerCase();
        if (valueLowerCase == weapon[0] || valueLowerCase == weapon[1] || valueLowerCase == weapon[2]) {
            return  valueLowerCase;
        } else {
            console.log(`${value} is wrong`)
        }
    }

    playerSelection = trueValue(playerSelection);

    console.log(playerSelection)
    console.log(computerSelection)

    function playRound(playerSelection, computerSelection) {
        let result;       


        if (playerSelection == computerSelection) {
            result = "Ничья";
        }  if (playerSelection == weapon[0]) {
            if (computerSelection == weapon[1]) {
                result = "Комп выиграл";
            } else if (computerSelection == weapon[2]) {
                result = "Вы выиграли";
            }
        } else if (playerSelection == weapon[1]) {
            if (computerSelection == weapon[0]) {
                result = "Вы выиграли";
            } else if (computerSelection == weapon[2]) {
                result = "Комп выиграл";
            }
        } else if (playerSelection == weapon[2]) {
            if (computerSelection == weapon[0]) {
                result = "Комп выиграл";
            } else if (computerSelection == weapon[1]) {
                result = "Вы выиграли";
            }
        }
        return result;
    }

    console.log(playRound(playerSelection, computerSelection));

})
