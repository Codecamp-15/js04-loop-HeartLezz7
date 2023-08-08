let income = 100000 ; 
let x = 0;
for (let i = 1; i <= 10; i++ ){
    x = (income*(2.5/100));
    income += x;
}
console.log (`Your Money is ${income.toFixed(2)}`);