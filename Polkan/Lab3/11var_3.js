'use strict';

var a = document.getElementById('button');
a.onclick = function () {
    var x_nach = document.getElementsByName('x_nach')[0];
     x_nach = x_nach.value;
    x_nach = Number(x_nach);
alert(x_nach);
}
