

let a_input = prompt('Введите а', 481);
let p_input = prompt('Введите p', 6431);
document.write('Исходные данные 13 варианта:');
document.write('a=' + BigInt(a_input));
document.write('p=' + BigInt(p_input) + '<br>');
let X0_secret = prompt('Отправитель должен сформировать себе секретное число:', 3484);
document.write('Значение секретного ключа отправителя:' + X0_secret + '<br>');

let Y0_public = BigInt(a_input) ** BigInt(X0_secret) % BigInt(p_input);
document.write('Значение Y0=' + Y0_secret + '<br>');

let Xp_secret = prompt('Получатель должен сформировать себе секретное число:', 3071);
document.write('Значение секретного ключа получателя:' + Xp_secret + '<br>');

let Yp_public = BigInt(a_input) ** BigInt(Xp_secret) % BigInt(p_input);
document.write('Значение Yп=' + Yp_secret + '<br>');

let common_key = BigInt(Yp_secret)**BigInt(X0_secret) % BigInt(p_input);
document.write('Значение общего секретного ключа:'+common_key + '<br>');