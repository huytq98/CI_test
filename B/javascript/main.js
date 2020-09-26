let number = 0;
let count = 0;
const input = document.querySelector('.input').value;

function random() {
    let randomNumber = (Math.floor(Math.random() * 10 )+ 1);
    return number = randomNumber;
}
function reset(){
    count = 0;
    random();
}
function check(){
    if (input === number){
        alert("Congratulation you are the winner")
        reset();
    }else{
        count += 1;
        alert("Try again")
        if(count === 3){
            alert("Good luck next time")
            reset();
        }
    }
}
random();
console.log(number);
const roll = document.querySelector('.button');
roll.addEventListener('click', check);