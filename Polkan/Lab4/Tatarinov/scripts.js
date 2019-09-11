"use strict";
let t, s, f, index, n; //1 задание


$('#calc1').click(() => {
    $('#output').empty();
    n = +$('#input-n').val();
    $('#input-n').val() != '' ? calculate() :
        alert(`Введены некоректные данные`);
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
    }

    $('#output').append(`
<ul class="list-group list-group-horizontal-md">
    <li class="list-group-item col-12 text-center">f = ${f}</li>
</ul>
`);
}

let addRow = () => $('#output').append(`
<ul class="list-group list-group-horizontal-md">
    <li class="list-group-item col-6 text-center">${index}</li>
    <li class="list-group-item col-6 text-center">${s}</li>
</ul>
    `);
let x, y, y0, i; //2 задание

$('#calc2').click(() => {
    $('.output2').empty();
    x = +$('#input-x').val();
    $('#input-x').val() != '' ? calculate2() 
    : alert(`Введены некоректные данные`);
});

let calculate2 = () => {
    y = Math.sqrt(x);
    y0 = x;
    s = 0;
    s = y0 + (x / y0 - y0) / 2;
    $('.output2').append(`yi = ${s.toFixed(2)} <br>`);
    while (s > y) {
        s = s + (x / s - s) / 2;
        $('.output2').append(`yi = ${s.toFixed(24)} <br>`);
    }
    $('.output2').append(`y = ${s.toFixed(24)}`);
}