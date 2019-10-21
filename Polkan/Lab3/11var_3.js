'use strict';
var a = document.getElementById('button');
  let   errorLog = [];
    $('#calc').click(() => {
        errorLog.splice(0, errorLog.length);
        $('tbody').empty();
      let  x_nach = +$('#input-x_nach').val();
       let x_kon = +$('#input-x_kon').val();
       let delta_x = +$('#input-delta_x').val();
      let eps = +$('#input-eps').val();
      let a =+$('#input-a').val(); 
      

        if(delta_x == 0) errorLog.push(`Шаг не может быть равен 0;`);
        if($('#input-delta_x').val() == 0 || (x_nach>x_kon && delta_x > 0)) errorLog.push(`некорректный шаг`);
        if($('#input-delta_x').val() >x_kon) errorLog.push(`некорректный шаг`);
        if($('#input-x_nach').val() == '') errorLog.push(`Введите начальное значение`);
        if($('#input-x_kon').val() == '') errorLog.push(`Введите конечное значение`);
        if($('#input-eps').val() == '') errorLog.push(`Введите значение погрешности`);
        if($('#input-delta_x').val() < 0 && $('#input-x_nach').val() <0 && $('#input-x_kon').val() >0 ) errorLog.push(`некорректно введены данные`);
        errorLog.forEach(element => {
            alert(element);
        });
        if(errorLog.length == 0){
            if (x_kon > x_nach && delta_x < x_kon) {
                var  x = x_nach;
                 do {
                     var t = 1;
                     var s = 1;
                     var n = 1;
                     var f = Math.exp(Math.log(a) * x);
                     while (Math.abs(t) > eps) {
                         t = t * (x * Math.log(a)) / n;
                         s = s + t;
                         n = n + 1;
                     };
                     $("tbody").append(`
                     <tr>
         <td>${x.toFixed(3)}</td>
         <td>${n}</td>
         <td>${s.toFixed(3)}</td>
         <td>${f.toFixed(3)}</td>
                     </tr> `);
                     x = x + delta_x;
                 }
                 while (x <= x_kon)
             }
         
             else if (x_nach > x_kon && delta_x < 0) {
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
                     console.log(s);
                 }
                 while (x >= x_kon)
             }
              else if (x_nach < 0 && x_kon > 0 && delta_x < 0) {
                 $("#output").append(` Неверные данные`);
             } else if (delta_x == 0) {
                 $("#output").append(` Шаг не может быть равен нулю`);
             }
            errorLog.splice(0, errorLog.length);
        }
});
