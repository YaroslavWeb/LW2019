"use strict";
//1 задание
let t, s, f, index, n;


$('#calc1').click(() => {
    $('#output').empty();
    n = +$('#input-n').val();
    if ($('#input-n').val() == '' || $('#input-n').val() == 0 || Number.isInteger(n) == false) alert(`Введены некорректные данные n`);
    else {
        if ($('#input-n').val() < 0) {
            n = Math.abs(n);
            $('#input-n').val(n);

        }
        calculate();
    }
});

let calculate = () => {
    t = 1;
    s = 0;
    f = n * (n + 1);
    index = 0;
    for (let i = 1; i <= n; i++) {
        t = 2 * i;
        s += t;
        index++;
        addRow();
    };
    $('#output').append(`<li class="list-group-item col-12 text-center">f = ${f}</li>`);

}

let addRow = () => $('#output').append(`
<ul class="list-group list-group-horizontal-md">
    <li class="list-group-item col-6 text-center">${index}</li>
    <li class="list-group-item col-6 text-center">${s}</li>
</ul>
    `);


//2 задание
let x, y, y0, i;

$('#calc2').click(() => {
    $('.output2').empty();
    x = +$('#input-x').val();
    if ($('#input-x').val() == '' || $('#input-x').val() == 0) alert(`Введены некоректные x`);
    else {
        if ($('#input-x').val() < 0) {
            x = Math.abs(x);
            $('#input-x').val(x);
        }
        calculate2();
    }
});

let calculate2 = () => {
    y = Math.sqrt(x);
    y0 = x;
    s = 0;
    s = y0 + (x / y0 - y0) / 2;
    $('.output2').append(`<li class="list-group-item col-12">yi = ${s.toFixed(2)}</li>`);
    while (s > y) {
        s = s + (x / s - s) / 2;
        $('.output2').append(`<li class="list-group-item col-12">yi = ${s.toFixed(24)}</li>`);
    }
    $('.output2').append(`<li class="list-group-item col-12">y = ${y.toFixed(24)}</li>`);
}