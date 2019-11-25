// // Исходные данные вашего варианта:
// // p = 83
// // q = 53
// // e = 2003
// // m = 2
// // текст = Информатика как наука изучает свойства, структуру и функции информационных систем, основы их проектирования, создания, использования и оценки, а также информационные процессы в них происходящие.

let p = prompt('Введите p',83);
let q = prompt('Введите q',53);

let n = p * q ;
console.log(n);
let k = (p-1)*(q-1); ///Ф(n) Формула Эйлера
console.log(k);


let e = prompt('Введите е',2003) // открытая экспонента, нечетное натуральное число
          // не имеет общих делителей с k

let d ;
let w =1;
while (d % 1 !=0)
{
d = (w * k+1)/e;
w++;}
console.log(d);

let text = prompt('Введите сообщение','информатика как наука изучает свойства, структуру и функции информационных систем, основы их проектирования, создания, использования и оценки, а также информационные процессы в них происходящие.');
let keys = text.match(/.{1,2}/g);
//console.log(keys);
let alphabet =  ['а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ь', 'ы', 'ъ', 'э', 'ю', 'я', ' ', ',', '.'];
let text2 = text.match(/.{1}/g);
let digit = []; //числовой для работы с шифровкой
let digit2 = []; //строчный для вывода с 0
let digit3 = []; //строчный для парного вывода
let digit4 =[]; //числовой массив для шифрования открытым ключом
let digit5 = [];// числовой массив для расшифрования закрытым ключом
let digit6 = [];//расшифрованный-числа для вывода с 0
let digit7 = [];// расшфрованный-числа для парного вывода
let digit8 = [];
text2.forEach(i => {
    alphabet.forEach(a => {
        if(i==a) {
           let ind = alphabet.indexOf(a);
           digit.push(ind);
        }
    });
});
console.log(digit);
console.log((digit[0].toString().length));
digit.forEach(i => {
    if ( i.toString().length ==1) {
        i ='0'+ i;
    }
    digit2.push(i.toString());
});
for (let index = 0; index<digit2.length; index++){
    digit3.push(`${digit2[index]}${digit2[index+1]}`);
    index++;
}
console.log(digit3);

digit3.forEach(i => {
    document.getElementById('output').innerHTML+=' ';
    document.getElementById('output').innerHTML+=i;
});

digit.forEach(i => {
    let p = powMod(i, e, n);
    digit4.push(p)
});
digit4.forEach(i => {
    document.getElementById('output2').innerHTML+=' ';
    document.getElementById('output2').innerHTML+=i;
});
digit4.forEach(i => {
    let p = powMod(i, d, n);
    digit5.push(p)
});

digit5.forEach(i => {
    if ( i.toString().length ==1) {
        i ='0'+ i;
    }
    digit6.push(i.toString());
})
for (let index = 0; index<digit6.length; index++){
    digit7.push(`${digit6[index]}${digit6[index+1]}`);
    index++;
}
digit7.forEach(i => {
    document.getElementById('output3').innerHTML+=' ';
    document.getElementById('output3').innerHTML+=i;
});
digit5.forEach(i => {
    alphabet.forEach(a => {
        if(i== alphabet.indexOf(a)) {
           let ind = a;
           digit8.push(ind);
        }
    });
});
digit8.forEach(i => {
    document.getElementById('output4').innerHTML+=i;
});
// let p = Math.pow(40**2003) % 4399;
// console.log(p)
// вычисляет (n ** p) % m
function powMod(n, p, m) {
    if (n < 1) { return 0; }
    if (m < 0) { m = 0; }
    p = Math.round(p);
    n = n % m;
    var r = 1;
    while (p >= 1) {
      if (p % 2) {
        r = (r * n) % m;
      }
      n = (n * n) % m;
      p = Math.floor(p / 2);
    }
    return r;
  }