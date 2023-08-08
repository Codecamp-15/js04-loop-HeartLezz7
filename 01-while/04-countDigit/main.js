let count = 0;
let num = +prompt("Input number: ");

if ( num < 0 ) num = -num;
while (num>=1) {
    console.log(num);
    count++;
    num = num/10;
}
console.log(count);
