console.log("learn while loop");

console.log("starting...")
//() = parenthesis = วงเล็บ
//{} = bracket = ปีกกา
//[] = square bracket = ก้ามปู

//EX1 : examine syntax
// for (let i = 2; i <= 20; i = i + 2) {
//     console.log(i);
// }

//EX2 : FizzBuzz
// for ( let i = 1; i <= 20; i++ ){
//     if (i % 3 == 0 &&  i % 5 === 0 ) console.log(`${i}: FizzBuzz`);
//     else if (i % 5 == 0) console.log(`${i}: Buzz`);
//     else if (i % 3 == 0) console.log(`${i}: Fizz`);
//     // else console.log(`${i}: Number`);
//     else console.log(i);
// }

//EX3 : skipFizz
// for ( let i = 1; i <= 20; i++ ){
//     if (i % 3 == 0 &&  i % 5 === 0 ) console.log(`${i}: FizzBuzz`);
//     else if (i % 5 == 0) console.log(`${i}: Buzz`);
//     else if (i % 3 == 0) continue;
//     else console.log(i);
// }

//EX3B :
// for ( let i = 1; i <= 20; i++) {
//     if (i % 2 == 0) continue; // continue คือการ update และวนกลับไปเริม่ loop ใหม่ หรือการ skiploop
//     console.log("even");
// }

//EX4 : Concat string
// let str = "";

// for (let i = 1; i <= 10; i++){
//     //Guard Cross
//     if (i % 3 === 0) continue;
//     str += i; 
// }

//EX5 : remove vowel (a,e,i,o,u)
// let src = "codecamp";
// let res = '';
// for (let i = 0; i < src.length; i++ ){
//     let c = src[i];
//     let isVowel = c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' ;
//     if(isVowel) continue;
//     res = res + src[i];
// }
// console.log(res);

//ADVANCE : Nested Loop;
//Mlutiplacatiobn table

for ( let i = 1; i <= 12; i++ ) {
    // console.log(`${i}*1 = ${i*1}`);
    // console.log(`${i}*2 = ${i*2}`);
    // console.log(`${i}*3 = ${i*3}`);
    // console.log(`${i}*4 = ${i*4}`);
    // console.log(`${i}*5 = ${i*5}`);
    // console.log(`${i}*6 = ${i*6}`);
    // console.log(`${i}*7 = ${i*7}`);
    // console.log(`${i}*8 = ${i*8}`);
    // console.log(`${i}*9 = ${i*9}`);
    // console.log(`${i}*10 = ${i*10}`);
    // console.log(`${i}*11 = ${i*11}`);
    // console.log(`${i}*12 = ${i*12}`);
    console.log(`เริ่มท่องสูตรคูณแม่ ${i}`);
    for (let j = 1; j <= 12; j++) {
        console.log(`${i}*${j} = ${i*j}`);
    }
}
console.log("end...")