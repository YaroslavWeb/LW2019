"use strict";
let x, x_begin, x_end,
    step, eps, f, t, n, s,
    errorLog = [];


$('#calc').click(() => {
    errorLog.splice(0, errorLog.length);
    $('tbody').empty();
    x_begin = +$('#input-begin').val();
    x_end = +$('#input-end').val();
    step = +$('#input-step').val();
    eps = +$('#input-eps').val();
    x = x_begin;

    if(step == 0) errorLog.push(`Шаг не может быть равен 0;`);
    if($('#input-step').val() == '') errorLog.push(`Введите значение шага`);
    if($('#input-begin').val() == '') errorLog.push(`Введите начальное значение`);
    if($('#input-end').val() == '') errorLog.push(`Введите конечное значение`);
    if($('#input-eps').val() == '') errorLog.push(`Введите значение погрешности`);

    errorLog.forEach(element => {
        alert(element);
    });

    if(errorLog.length == 0){
        calculate();
        errorLog.splice(0, errorLog.length);
    }
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