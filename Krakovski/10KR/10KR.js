let num1 = (0xB7);
let num2 = (0xC5); //11000101
let num3 = (0xD1);
let num4 = (0x9F);

console.log(`num1:${num1.toString(10)}
num2:${num2.toString(10)}
num3:${num3.toString(10)}
num4:${num4.toString(10)}`);
let sum1 = (num1+num2+num3+num4);
console.log(`Контрольная сумма отправителя:${sum1.toString(2)}`);

let num5 = (0xB6); //изменили 1 бит
let num6 = (0b11000110)
let sum2 = (num5+num2+num3+num4);
console.log(`Контрольная сумма получателя: ${sum2.toString(2)}`);

let sum3 = (num5+num6+num3+num4);
console.log(`Контрольная сумма получателя2:${sum3.toString(2)}`);
