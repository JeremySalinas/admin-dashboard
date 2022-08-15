
function gamePlay(userChoice){
    let botChoice=Math.floor(Math.random() * 3) + 1;
    let result = ""

    if(userChoice === "rock"){
        if(botChoice === 1){
            result = "draw"
        }else if(botChoice === 2){
            result = "lose"
        }else if(botChoice === 3){
            result = "win"
        }
    }else if(userChoice === "paper"){
        if(botChoice === 1){
            result = "win"
        }else if(botChoice === 2){
            result = "draw"
        }else if(botChoice === 3){
            result = "lose"
        }
    }else if (userChoice === "scissors"){
        if(botChoice === 1){
            result = "lose"
        }else if(botChoice === 2){
            result = "win"
        }else if(botChoice === 3){
            result = "draw"
        }
    }

    if(botChoice === 1){
        document.querySelector(".generated").style.background= 'url(img/rock.png)'
    }else if(botChoice === 2){
        document.querySelector(".generated").style.background= 'url(img/paper.png)'
    }else if(botChoice === 3){
        document.querySelector(".generated").style.background= 'url(img/scissors.png)'
    }

    document.querySelector(".generated").style.backgroundSize = 'cover'
    

    return result
}

    let gameOutcome=""
    let userScore=0
    let computScore=0
    let outcome = document.createElement('div')
    let userScoreText = document.createElement('div')
    let computScoreText = document.createElement('div')

        document.getElementById("choicesUI").addEventListener('click', e =>{

            if(gameOutcome === "Game Over"){
                console.log(gameOutcome)
            }else if(e.target.innerText === "Rock"){
                gameOutcome = gamePlay("rock")
                outcome.textContent = gameOutcome
            }else if(e.target.innerText === "Paper"){
                gameOutcome = gamePlay("paper")
                outcome.textContent = gameOutcome
            }else if (e.target.innerText === "Scissors"){
                gameOutcome = gamePlay("scissors")
                outcome.textContent = gameOutcome
            }

            if(gameOutcome === "win"){
                userScore ++
            }else if(gameOutcome ==="lose"){
                computScore ++
            }

            userScoreText.textContent = "User:"+userScore
            computScoreText.textContent = "NPC:"+computScore

            if(userScore > 4 || computScore > 4){
                if(userScore === 5){
                    outcome.textContent = "You win!"
                }else if(computScore === 5){
                    outcome.textContent = "You lose."
                }
                document.querySelector(".retry").style.visibility = 'visible'
                gameOutcome = "Game Over"
        }

        document.getElementById('outcome').appendChild(userScoreText);
        document.getElementById('outcome').appendChild(outcome);
        document.getElementById('outcome').appendChild(computScoreText);

        })