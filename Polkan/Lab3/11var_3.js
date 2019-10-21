'use strict';


var a = document.getElementById('button');
a.onclick = function () {
    $("#output").empty();
    var x_nach = document.getElementById('x_nach');
    x_nach = x_nach.value;
    x_nach = Number(x_nach);

    var x_kon = document.getElementById('x_kon');
    x_kon = x_kon.value;
    x_kon = Number(x_kon);


    var delta_x = document.getElementById('delta_x');
    delta_x = delta_x.value;
    delta_x = Number(delta_x);


    var eps = document.getElementById('eps');
    eps = eps.value;
    eps = Number(eps);


    var a = document.getElementById('a');
    a = a.value;
    a = Number(a);
    if (x_kon > x_nach && delta_x < x_kon) {
        var x = x_nach;
        do {
            var t = 1;
            var s = 1;
            var n = 1;
            var f = Math.exp(Math.log(a) * x);
            while (Math.abs(t) > eps) {
                t = t * (x * Math.log(a)) / n;
                s = s + t;
                n = n + 1;
            }
            $("#output").append(`   x=${x}, n= ${n}, 
s = ${s.toFixed(5)}, f = ${f.toFixed(1)}<br> `);
            x = x + delta_x;
        }
        while (x <= x_kon)
    } else {
        $("#output").append('Х конечное не может быть меньше Х начального, или шаг не может быть большего Х конечного');
    }
}