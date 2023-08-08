let income = 100000 ; 
let interest = 0;
for (let i = 1; i <= 10; i++ ){
    // interest = (income*(2.5/100));
    // income += interest;
    income = income*(1+(2.5/100));
}
console.log (`Your Money is ${income.toFixed(2)}`);