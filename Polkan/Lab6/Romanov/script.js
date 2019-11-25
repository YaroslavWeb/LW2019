"use strict";

$('#calc1').click(() => {
  $('#output1').empty();
  let n = +$('#n').val() - 1;
  let v_min = +$('#v_min').val();
  let v_max = +$('#v_max').val();
  let arrStr = [];
  let s_nechet = 0;
  let s_chet = 0;
  v_min = Math.round(v_min)
  v_max = Math.round(v_max)
  if (v_min > v_max) {
    alert('Минимальное не может быть больше максимального')
  }

  if (n <=0) {
    alert('Неккоректные данные')
  }
  if (n % 2 != 0 ) {
    alert ('n должно быть целым числом')
  }
  for (let index = 0; index <= n; index++) {
    arrStr.push(random(v_min, v_max))
  }
  let min = arrMin(arrStr);
  let max = arrMax(arrStr);

  //console.log(arrStr);

  arrStr.forEach(i => {
    if (Math.abs(i) % 2 == 1 && arrStr.indexOf(i) % 2 == 0) {
      s_nechet = s_nechet + i;
    } else if (Math.abs(i) % 2 == 0 && arrStr.indexOf(i) % 2 == 1) {
      s_chet = s_chet + i;
    }
    // console.log(i);
    // console.log(arrStr.indexOf(i));
  });


  $('#output1').append(`
    Целочисленный вектор: ${arrStr} <br>

    min= ${min}, max= ${max} <br>
    s_nechet = ${s_nechet}, s_chet = ${s_chet} <br>

`)

  let indexMin = arrStr.indexOf(min);
  let indexMax = arrStr.indexOf(max);

  arrStr.slice(indexMin, indexMax);

});

$('#calc2').click(() => {
  $('#output2').empty();
  $('#output3').empty();
  let n = +$('#n2').val() ;
  let m = +$('#m').val() ;
  let v_min = +$('#v_min2').val();
  let v_max = +$('#v_max2').val();
  let mas = [];
  let s_nechet = 0;
  let s_chet = 0;
  let max = 0;
  let min = 0;
  let row = 0;
  let item = 0;
  let x = 0;
  let y = 0;
  let left_top, left_bottom, right_top, right_bottom;
  v_min = Math.round(v_min)
  v_max = Math.round(v_max)
  if (v_min > v_max) {
    alert('Минимальное не может быть больше максимального')
  }

  if (n <=0) {
    alert('Неккоректные данные')
  }
  // if (n % 2 != 0 ) {
  //   alert ('n должно быть целым числом')
  // }
  if (m <=0) {
    alert('Неккоректные данные')
  }
  // if (m % 2 != 0 ) {
  //   alert ('m должно быть целым числом')
  // }
  if ($('#n2').val() == 0 || $('#m').val() == 0) {
    alert('Неккоректные данные')
  }
  for (let i = 0; i <= n-1; i++) {
    mas[i] = [];
    for (let j = 0; j <= m-1; j++) {
      mas[i][j] = random(v_min, v_max);
    }
  }
  max = mas[0][0];
  for (var i = 0; i < mas.length; i++) {
    for (var j = 0; j < mas[i].length; j++) {
      if (max < mas[i][j]) {
        max = mas[i][j]
        x = i;
        y = j;
      }

    }
  }
  try {
    left_top = mas[x - 1][y - 1];
  } catch (err) {
    left_top = undefined;
  }
  try {
    left_bottom = mas[x + 1][y - 1];
  } catch (err) {
    left_bottom =  undefined;
  }
  try {
    right_top = mas[x - 1][y + 1];
  } catch (err) {
    right_top =  undefined;
  }
  try{
    right_bottom = mas[x + 1][y + 1];
  }
 catch(err) {
  right_bottom= undefined;
 }

 $('#output2').append(`
    Массив: <br> 
`)
mas.forEach(element => {
      element.forEach(item => {
          $('#output2').append(`${item} `)
      })
      $('#output2').append(`<br>`)
});
$('#output3').append(`
left_top= ${left_top}, left_bottom= ${left_bottom} <br>
right_top= ${right_top}, right_bottom= ${right_bottom}  <br>
row_max= ${x + 1} <br>
col_max= ${y + 1}`)

  console.log('left_top= ', left_top);
  console.log('left_bottom= ', left_bottom);
  console.log('right_top= ', right_top);
  console.log('right_bottom= ', right_bottom);
  console.log('row_max= ', x + 1)
  console.log('col_max= ', y + 1)
  console.log(max);
  console.log(mas);
  //console.log(max);
})


let random = (min, max) => Math.round(Math.random() * (max - min) + min);

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