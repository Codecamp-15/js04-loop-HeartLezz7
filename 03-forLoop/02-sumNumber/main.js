let sum = 0;
for (i = 1; i <= 100; i++) {
    sum += i;
}
console.log(`summary is ${sum}`);

let sumEven = 0;
let sumOdd = 0;
for (i = 1; i <= 100; i++) {
    if(i % 2 === 0)sumEven += i;
    else sumOdd +=i
}
console.log(`summary of Even number is ${sumEven}`);
console.log(`summary of Odd number is ${sumOdd}`);


let sum2 = 0;
let sum3 = 0;
for (i = 2; i <= 100; i++ ) {
    if(i % 3 === 0){
        let x = i**2;
        sum2 += x;
    }else if(i % 2 === 0){
        let y = i**2;
        sum3 += y;
    }
}
console.log(`summary of 2 square number is ${sum2}`);
console.log(`summary of 3 square  number is ${sum3}`);
console.log(`summary  is ${sum2-sum3}`);

