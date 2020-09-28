let number = 0;
let count = 0;


function random() {
    let randomNumber = (Math.floor(Math.random() * 10 )+ 1);
    return number = randomNumber;
}

function reset(){
    count = 0;
    random();
    console.log(number);
}

function check(){
    let input = Number(document.querySelector('.input').value);
    if (input === number){
        alert("Congratulation you are the winner")
        reset();
        console.log(input)
    }else{
        count += 1;
        if(count === 3){
            alert("Good luck next time")
            reset();
        }else {
            alert("Try again")
        }
    }
}

random();
console.log(number);
const roll = document.querySelector('.button');
roll.addEventListener('click', check);