"use strict";
let x, x_begin, x_end,
    step, eps, f, t, n, s;


IMask(document.getElementById('input-begin'), {
    mask: Number,
    radix: '.',
});
IMask(document.getElementById('input-end'), {
    mask: Number,
    max:100,
    radix: '.',
});
IMask(document.getElementById('input-step'), {
    mask: Number,
    radix: '.',
});

IMask(document.getElementById('input-eps'), {
    mask: Number,
    min: 0,
    max: 0.1,
    radix: '.',
});


$('#calc').click(() => {
    $('tbody').empty();
    x_begin = +$('#input-begin').val();
    x_end = +$('#input-end').val();
    step = +$('#input-step').val();
    eps = +$('#input-eps').val();
    x = x_begin;

    step != 0 && x_begin <= x_end && step <= x_end ?
     calculate() :
    $('tbody').empty().append(`
    <tr>
        <td>Введены некоректные данные</td>
    </tr>
    `);
});

let calculate = () => {
    do {
        n = 1;
        t = 1;
        s = 1;
        f = ((Math.E ** x) + (Math.E ** -x)) / 2;

        while (Math.abs(t) > eps) {
            t = (t * x * x) / (2 * n * (2 * n - 1));
            s = s + t;
            n = n + 1;
        }
        addRow();
        x = x + step;
    } while (x < x_end)
}

let addRow = () => $('tbody').append(`
    <tr>
        <td>${x.toFixed(4)}</td>
        <td>${n}</td>
        <td>${s.toFixed(8)}</td>
        <td>${f.toFixed(8)}</td>
    </tr>
    `);