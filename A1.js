function findOppositeNumber(n, inputNumber){
    if(n%2 === 0 && 4 <= n <= 20 && 0 <= inputNumber <= n-1 ){
        let number = ((n + inputNumber * 2)/2) % n;
            return number
    }else {
        console.log("Không tìm được số phù hợp")
    }
}

console.log(findOppositeNumber(10, 2))
console.log(findOppositeNumber(10, 6))