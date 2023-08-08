let num = 1;
let c = "1";
let e = c ;
for (let i = 1 ; i < 8; i++){
   num += 1;
   e += num
   c = `${c}\n${e}`
}
console.log(c);