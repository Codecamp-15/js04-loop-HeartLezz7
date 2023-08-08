console.log("learn while loop");

//ประเภทของ loop
//-Condition Loop ตัดสินใจว่าจะรันต่อไหม จาก Boolean
//-Counting Loop "----------------" จาก number
//-List Loop     "----------------" จากจำนวนสิ่่งของ
console.log("starting...")

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//     i++;
// }

//การใช้ i++ จะทำให้เกิดการlog ที่ผิดได้ไม่ควรใช้้แบบนี้ แก้โดยให้ condition เป็น ++i และ let i = 0
// while (i++ <= 10) { //i = 1
//     console.log(i); // i = 2 
//     i++;
// }
let i = 0
while (++i <= 20) {
    if (i%3 == 0 && i%5==0) {
        console.log(`${i}:FizzBuss`)
    }else if (i%3 == 0) {
        console.log(`${i}Fizz`)
    }else if (i%5 == 0) {
        console.log(`${i}:Buzz`)
    }else {
        console.log(`${i}:number`)
    }
} 

console.log("end...")