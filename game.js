let options = ["Rock" , "Paper" , "Scissors"]
let compChoice;
let userChoice;

const myHand = document.getElementById("myHand")
const compHand = document.getElementById("compHand")
const myScore = document.getElementById("user-score")
const compScore = document.getElementById("computer-score")
const rockbtn = document.getElementById("rock")
const paperbtn = document.getElementById("paper")
const scissorbtn = document.getElementById("scissor")
const winner = document.getElementById("winner")
const result = document.getElementById("result")

let ScoreUser = 0;
let ScoreComp = 0;

function randomOption(){
    return options[Math.floor(Math.random()*3)]
}




rockbtn.addEventListener("click" , ()=>{
    compChoice = randomOption()
    userChoice = "Rock"

    myHand.src = "assets/rock-hand.png"
    showCompHand(compChoice)

    if (compChoice === "Paper"){
        ScoreComp++
    }else if (compChoice === "Scissors"){
        ScoreUser++
    }
    updateScore(ScoreComp , ScoreUser)
    checkWinner()
})

paperbtn.addEventListener("click" , ()=>{
    compChoice = randomOption()
    userChoice = "Paper"

    myHand.src = "assets/paper-hand.png"
    showCompHand(compChoice)
    updateScore(ScoreComp , ScoreUser)

    if (compChoice === "Scissors"){
        ScoreComp++
    }else if (compChoice === "Rock"){
        ScoreUser++
    }

    updateScore(ScoreComp , ScoreUser)
    checkWinner()
})

scissorbtn.addEventListener("click" , ()=>{
    compChoice = randomOption()
    userChoice = "Scissors"

    myHand.src = "assets/scissors-hand.png"
    showCompHand(compChoice)

    if (compChoice === "Rock"){
        ScoreComp++
    }else if (compChoice === "Paper"){
        ScoreUser++
    }

    updateScore(ScoreComp , ScoreUser)
    checkWinner()
})




function updateScore(ScoreComp , ScoreUser){
    myScore.innerHTML = ScoreUser
    compScore.innerHTML = ScoreComp
}


function checkWinner(){
    if (ScoreUser === 5){
        winner.innerHTML = "You"
        result.style.display = "block"
        location.href = "#result"
        console.log("a")
    }else if(ScoreComp === 5){
        winner.innerHTML = "Computer"
        console.log("a")
        result.style.display = "block"
        location.href = "#result"

    }
}


function showCompHand(compChoice){
    if (compChoice === "Rock"){
        compHand.src = "./assets/rock-hand.png"
    }
    else if (compChoice === "Paper"){
        compHand.src = "./assets/paper-hand.png"
    }
    else if (compChoice === "Scissors"){
        compHand.src = "./assets/scissors-hand.png"
    }
}

const playAgain = document.getElementById("play-again")
playAgain.onclick = () =>{
    location.href = "./index.html"
}
 