"use strict";

$('#calc1').click(()=>{
$('#output1').empty();
let n = +$('#n').val()-1;
let v_min = +$('#v_min').val();
let v_max = +$('#v_max').val();
let arrStr = [];
let s_nechet = 0;
let s_chet = 0;
v_min = Math.round(v_min)
v_max = Math.round(v_max)
if ($('#n').val()==0) {
  alert ('Неккоректные данные')
}
for (let index = 0; index <= n; index++) {
    arrStr.push(random(v_min, v_max))
}
let min = arrMin(arrStr);
let max = arrMax(arrStr);

//console.log(arrStr);

arrStr.forEach(i => {
  if ( Math.abs(i) % 2 == 1 && arrStr.indexOf(i) % 2 == 0 ) {
    s_nechet = s_nechet + i;
  } else if ( Math.abs(i) % 2 == 0 && arrStr.indexOf(i) % 2 == 1) {
    s_chet = s_chet + i;
  }
  // console.log(i);
  // console.log(arrStr.indexOf(i));
});


$('#output1').append(`
    Целочисленный вектор: ${arrStr} <br>

    min= ${min}, max= ${max} <br>
    s_nechet = ${s_nechet}, s_chet = ${s_chet} <br>

`
)

let indexMin = arrStr.indexOf(min);
let indexMax = arrStr.indexOf(max);

arrStr.slice(indexMin, indexMax);

});

let random = (min, max) => Math.round(Math.random() * (max-min) + min)

let arrMin = arr => {
    return arr.reduce(function (p, v) {
      return ( p < v ? p : v );
    });
  }
  
let arrMax = arr => {
    return arr.reduce(function (p, v) {
      return ( p > v ? p : v );
    });
  }