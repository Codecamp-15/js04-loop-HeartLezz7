let star = '*';
let c = '*';
for (let i = 0 ; i < 4; i++){
   star += '*';
   c = `${c}\n${star}`
}
console.log(c);

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