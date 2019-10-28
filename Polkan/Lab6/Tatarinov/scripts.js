"use strict";

$('#calc1').click(()=>{
$('#output1').empty();
let n = +$('#n').val();
let v_min = +$('#v_min').val();
let v_max = +$('#v_max').val();
let arrStr = [];

v_min = Math.round(v_min)
v_max = Math.round(v_max)

for (let index = 0; index <= n; index++) {
    arrStr.push(random(v_min, v_max))
}
let min = arrMin(arrStr);
let max = arrMax(arrStr);

$('#output1').append(`
<div class="alert alert-success" role="alert">
    Целочисленный вектор: ${arrStr}
</div>
<div class="alert alert-primary" role="alert">
    min= ${min}, max= ${max}
</div>
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