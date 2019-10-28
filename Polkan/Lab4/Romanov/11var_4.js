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

// let s , f, n, i;
//  n = -3;
// f = n*n;
// i = 0;
// s = 1;
// t = 1;
//  while (Math.round(i)<=Math.abs(n)) {
//      t = (2*i-1);
//      s= s+t;
//     i++;
//  }
// console.log(f);
// console.log(s);