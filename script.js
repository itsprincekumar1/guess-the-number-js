const min = 1;
const max = 20;

let number = Math.floor(Math.random()*(max-min)+min);
let running = true;
let attempt = 0;
let guess;

while(running){
    guess = window.prompt(`Enter a number between ${min}-${max}.`);
    if(isNaN(guess) || guess<min ||guess>max){
        window.alert("Enter a valid number");
    }else if(guess<number){
        attempt++;
        window.alert("Too low, try a higher number.");
    }else if(guess>number){
        attempt++;
        window.alert("Too high, try a lower number.");
    }else{
        attempt++;
        window.alert(`CORRECT! You took ${attempt} attempts to guess ${number}`);
        running=false;
    }
}