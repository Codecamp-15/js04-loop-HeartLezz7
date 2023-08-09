let str = '';
let c = '';
for (let i = 0 ; i < 4; i++){
   str += '*';
   c = `${c}${str}\n`;
}
console.log(c);
// c1 = *\n
// c2 = c1**\n
// c3 = c2***\n
// c4 = c3****\n

//Second way
//STAR PATTERN
//FOR LOOP
//PATTERN RECOGNIZE

// for (let i = 0 ; i < 4; i++){
//    let star = '';
//    for (let j = 0 ; j <= i; j++){
//       star += '*';
//    }
//    console.log(star);
// }

//Thirdway
// let str = '';
// for (let i = 0 ; i < 4; i++){
//    for (let j = 0 ; j <= 4; j++){
//       if (j<=i)str += '*';
//    }
//    str += '\n';
// }
// console.log(str);