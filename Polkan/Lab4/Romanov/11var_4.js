let s, n, f,i;
$('#calc1').click(() => {
    $('tbody').empty();
    let n = +$('#input-n').val();
    i = 0;
    t = 1;
    s = 1;
    f = n*n;
            while (Math.round(i)<=Math.abs(n)) {
                t = (2*i-1);
                s= s+t;
               i++;
               $("tbody").append(`
                     <tr>
         <td>${s.toFixed(3)}</td>
         <td>${f.toFixed(2)}</td>
                     </tr> `);

            }

})
let x, y, y0,y_i;

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
        $('.output2').append(`<li class="list-group-item col-12">yi = ${s.toFixed(12)}</li>`);
    }
    $('.output2').append(`<li class="list-group-item col-12">y = ${y.toFixed(12)}</li>`);
}
// let calculate2 = () => {
//     y = Math.sqrt(x);
//     y0 = (x+1/2);
//     s = 0;
//     s = (y0 +x / y0);
//     $('.output2').append(`<li class="list-group-item col-12">yi = ${s.toFixed(2)}</li>`);
//     while (s > y) {
//         s = (s + x / s);
//         $('.output2').append(`<li class="list-group-item col-12">yi = ${s.toFixed(24)}</li>`);
//     }
//     $('.output2').append(`<li class="list-group-item col-12">y = ${y.toFixed(24)}</li>`);
// }
//     s = 0;
//     s = y0 + (x / y0 - y0) / 2;
//     $('.output2').append(`<li class="list-group-item col-12">yi = ${s.toFixed(2)}</li>`);
//     while (s > y) {
//         s = s + (x / s - s) / 2;
//         $('.output2').append(`<li class="list-group-item col-12">yi = ${s.toFixed(24)}</li>`);
//     }
//     $('.output2').append(`<li class="list-group-item col-12">y = ${y.toFixed(24)}</li>`);
// }