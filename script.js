const min = 1;
const max = 20;

let number = Math.floor(Math.random()*(max-min)+min);
let attempt = 5;
let guess;

const submit = document.getElementById("user-submit");
const resetbtn = document.getElementById("reset-btn");
let lifes = document.getElementById("lifes-left").textContent;
document.getElementById("lifes-left").textContent = lifes.repeat(attempt);

submit.onclick = function(){
    guess = document.getElementById("user-input").value;
    if(isNaN(guess) || guess<min ||guess>max){
        document.getElementById("result").textContent = "Enter a valid number."
    }else if(guess<number){
        attempt--;
        document.getElementById("lifes-left").textContent = lifes.repeat(attempt);
        document.getElementById("result").textContent = "Too Low, try a higher number.";
    }else if(guess>number){
        attempt--;
        document.getElementById("lifes-left").textContent = lifes.repeat(attempt);
        document.getElementById("result").textContent = "Too High, try a lower number.";
    }else{
        document.getElementById("result").textContent = `CORRECT! Your score is ${attempt*100}/500.`;
    }
    if(attempt==0){
        document.getElementById("result").textContent = "GAME OVER YOU LOSE";
        return;
    }
}

resetbtn.onclick = function(){
    number = Math.floor(Math.random()*(max-min)+min);
    console.log(number);
    document.getElementById("result").textContent = "Enter your number.";
    attempt = 5;
    document.getElementById("user-input").value = "";
    document.getElementById("lifes-left").textContent = lifes.repeat(attempt);
}