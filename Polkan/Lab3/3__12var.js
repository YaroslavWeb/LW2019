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

    if(step == '' || step == 0 || (x_begin > x_end && step > 0) || (x_begin < x_end && step < 0) || step > x_end) errorLog.push(`Некорректное значение шага`);
    if($('#input-begin').val() == '') errorLog.push(`Некорректное начальное значение`);
    if($('#input-end').val() == '') errorLog.push(`Некорректное конечное значение`);
    if($('#input-eps').val() == '') errorLog.push(`Некорректное значение погрешности`);

    errorLog.forEach(element => {
        alert(element);
    });

    if(errorLog.length == 0){
        calculate();
        errorLog.splice(0, errorLog.length);
        
    }
});

let calculate = () => {
    if (x_end > x_begin && step < x_end) {
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
    } while (x <= x_end)
}

else if (x_begin > x_end && step < 0){
    do{
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
    }while (x >= x_end)
}
}

let addRow = () => $('tbody').append(`
    <tr>
        <td>${x.toFixed(4)}</td>
        <td>${n}</td>
        <td>${s.toFixed(8)}</td>
        <td>${f.toFixed(8)}</td>
    </tr>
    `);