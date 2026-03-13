const randomNumber = Math.floor(Math.random()*20);
console.log(randomNumber);
function gameOver(){
    const heading = document.createElement("h1");
    heading.textContent="Game Over";
    document.body.innerHTML="";
    document.body.appendChild(heading);
}
function checkTheNumber(){
    const userEnteredNumber = document.getElementById("input-display");
    var score = document.getElementById("score-number");
    if(score.textContent>0){
        if(randomNumber==userEnteredNumber.value){
        const gameDecision = document.getElementById("game-decision");
        gameDecision.textContent = "You Won";
        return;
        }else if(randomNumber>userEnteredNumber.value){
            const gameDecision = document.getElementById("game-decision");
            gameDecision.textContent = "Too Less";
            score.textContent -= 20;
        }else{
            const gameDecision = document.getElementById("game-decision");
            gameDecision.textContent = "Too Large";
            score.textContent -= 20;
        }
    }
    gameOver();
}

function resetGame(){

}