let count = 0;
let num = +prompt("Input number: ");
let sum = 0;

if ( num < 0 ) num = -num;
while (num>=1) {
    // console.log(num);
    count++;
    let remainder = num%10
    num = (num-remainder)/10;
    sum += remainder;
}
console.log(count);
console.log(`summary of num is ${sum}`);