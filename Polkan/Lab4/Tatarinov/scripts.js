"use strict";
let t, s, f, i, n;

IMask(document.getElementById('input-n'), {
    mask: Number,
    min:0,
    max:999999,
    radix: '.',   
    scale:6 
});

$('#calc').click(() => {
    $('tbody').empty();
    n = +$('#input-n').val();
    x = x_begin;

    step != 0 && x_begin <= x_end ?calculate() 
    :alert(`Введены некоректные данные`);
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
    <ul class="list-group list-group-horizontal-md">
    <li class="list-group-item col-6 text-center">i</li>
    <li class="list-group-item col-6 text-center">s</li>
</ul>
    `);