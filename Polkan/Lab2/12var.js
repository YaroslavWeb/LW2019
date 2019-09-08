"use strict";
let y_razrez,
    s_left,
    s_right,
    x, y1, y2,
    alpha1, alpha2,
    seg1, seg2,
    st1, st2,
    s1, s2;

let numberMask = IMask(
    document.getElementById('input-mask'), {
        mask: Number,
        min: -1,
        max: 1,
        radix: '.',
        scale: 10
    });

$('#calc').click(() => {
    x = +$('.form-control').val();
    x > 1 || x < -1 ?
        $('.output').empty().append(`Вы ввели неправильное число`) :
        calculate();
});

let calculate = () => {
    if (x > 0 && x <= 1) {
        //Вычисление разреза
        y1 = Math.sqrt(1 - x ** 2);
        y2 = Math.sqrt(0.25 - (0.5 - x) * (0.5 - x));
        y_razrez = y1 - y2;
        //Вычисление площади
        alpha1 = Math.atan(y1 / x);
        seg1 = 0.5 * (alpha1 - Math.sin(alpha1));
        st1 = (y1 * (1.0 - x)) / 2.0;
        s1 = seg1 + st1;
        alpha2 = Math.atan(y2 / x);
        seg2 = 0.5 * (alpha2 - Math.sin(alpha2));
        st2 = (y1 * (1 - x)) / 2;
        s2 = seg2 - st2;
        s_right = s1 + s2;
        s_left = ((Math.PI) / 5) + (Math.PI * 0.25) - s_right;
    };
    if (x < 0 && x >= -1) {
        //Вычисление разреза
        y1 = Math.sqrt(1 - x ** 2);
        y2 = Math.sqrt(0.25 - (0.5 - Math.abs(x)) * (0.5 - Math.abs(x)));
        y_razrez = y1 + y2;
        //Вычисление площади
        alpha1 = Math.atan(y1 / Math.abs(x));
        seg1 = 0.5 * (alpha1 - Math.sin(alpha1));
        st1 = (y1 * (1.0 - Math.abs(x))) / 2.0;
        s1 = seg1 + st1;
        alpha2 = Math.atan(y2 / Math.abs(x));
        seg2 = 0.5 * (alpha2 - Math.sin(alpha2));
        st2 = (y1 * (1 - Math.abs(x))) / 2;
        s2 = seg2 + st2;
        s_left = s1 + s2;
        s_right = ((Math.PI) / 3) + (Math.PI * 0.25) - s_left;
    };
    if (x == 0) {
        y1 = 1;
        y2 = 0;
        y_razrez = 1;
        s_left = Math.PI / 3;
        s_right = Math.PI / 5 ;
    };

    $('.output').empty().append(`
        y_разрез = ${y_razrez.toFixed(4)}|
        s_левая = ${s_left.toFixed(4)}|
        s_правая = ${s_right.toFixed(4)}
    `);
}