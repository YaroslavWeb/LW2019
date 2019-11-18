"use strict";
//Задание 1
$('#calc1').click(() => {
  $('#output1').empty();
  let n = +$('#n').val();
  n--;
  let v_min = +$('#v_min').val();
  let v_max = +$('#v_max').val();
  let arrStr = [];
  if(n<2){
    $('#output1').append(`
    <div class="alert alert-warning" role="alert">
      Длина вектора должна быть больше 3
    </div>
    `);
  }
  else{
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
  `);
    let indexMin = arrStr.indexOf(min);
    let indexMax = arrStr.indexOf(max);
    let temp = indexMin;
    if (indexMin > indexMax) {
      indexMin = indexMax;
      indexMax = temp;
    }
  
    let arrSlice = arrStr.slice(indexMin + 1, indexMax);
  
    $('#output1').append(`
  <div class="alert alert-primary" role="alert">
      Числа в диапазоне: ${arrSlice}
  </div>
  `);
  
    let arrNeg = [];
    let arrPos = [];
    for (const key in arrSlice) {
      if (arrSlice[key] < 0) arrNeg.push(arrSlice[key]);
      else arrPos.push(arrSlice[key]);
    }
  
    $('#output1').append(`
  <div class="alert alert-primary" role="alert">
       ${arrPos} | ${arrNeg}
  </div>
  `);
    let posSum = 0;
    for (const key in arrPos) {
      posSum += arrPos[key];
    }
    let negSum = 0;
    for (const key in arrNeg) {
      negSum += arrNeg[key];
    }
  
    let sr_pos = posSum / arrPos.length
    let sr_neg = negSum / arrNeg.length
  
    $('#output1').append(`
  <div class="alert alert-success" role="alert">
       Среднее положительное: ${sr_pos} <br>
       Среднее отрицательное: ${sr_neg} <br>
  </div>
  `);
  
  }
  
});

let random = (min, max) => Math.round(Math.random() * (max - min) + min)

let arrMin = arr => {
  return arr.reduce(function (p, v) {
    return (p < v ? p : v);
  });
}

let arrMax = arr => {
  return arr.reduce(function (p, v) {
    return (p > v ? p : v);
  });
}

//Задание 2
$('#calc2').click(() => {
  $('#output2').empty();
  let w = +$('#w').val();
  let h = +$('#h').val();
  let min = +$('#min').val();
  let max = +$('#max').val();

  let mas = [];
  for (let i = 0; i < w; i++) {
    mas[i]=[];
    for (let j = 0; j < h; j++) {
      mas[i][j] = random(min, max);
    }    
  }
  console.table(mas);
  let minElem = max;

  mas.forEach(row => {
    row.forEach(item =>{
      if(item < minElem) minElem = item;
    });
  });
  
  let counter = 0;

  mas.forEach(row =>{
    row.forEach(item =>{
      if(item == minElem) counter++;
    });
  });

  $('#output2').append(`
  <div class="alert alert-success" role="alert">
       Минимальное число: ${minElem} <br>
       Кол-во минимальных чисел: ${counter} <br>
  </div>
  `);
});
