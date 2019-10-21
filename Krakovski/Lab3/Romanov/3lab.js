// Исходные данные вашего варианта:
// a = 133
// p = 4959
// Результаты лабораторной работы: 
// Формирование секретного ключа.
// Отправитель сформировал пару чисел (Xо,Yо) : (3484,2698)
// Получатель сформировал пару чисел (Xп,Yп) : (3071,418)
// Общий секретный ключ(hex) Kо=Kп=K : 4351 (10FF)

let a_input = prompt('Введите а', 133);
let p_input = prompt('Введите p', 4959);
console.log('Исходные данные 13 варианта:');
console.log('a=' + BigInt(a_input));
console.log('p=' + BigInt(p_input));
let X0_secret = prompt('Отправитель должен сформировать себе секретное число:', 3484);
console.log('Значение секретного ключа отправителя:' + X0_secret);

let Y0_secret = BigInt(a_input) ** BigInt(X0_secret) % BigInt(p_input);
console.log('Значение Y0=' + Y0_secret);

let Xp_secret = prompt('Получатель должен сформировать себе секретное число:', 3071);
console.log('Значение секретного ключа получателя:' + Xp_secret);

let Yp_secret = BigInt(a_input) ** BigInt(Xp_secret) % BigInt(p_input);
console.log('Значение Yп=' + Yp_secret);

let common_key = BigInt(Yp_secret)**BigInt(X0_secret) % BigInt(p_input);
console.log('Значение общего секретного ключа:'+common_key);