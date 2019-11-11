"use strict";
//Задание 1
$('#calc1').click(() => {
  $('#output1').empty();
  if ($('#str').val() != ''){
    let str = $('#str').val();
    str = str.replace(/\([^()]*\)/g, '');
    str = str.replace(/\([^()]*\)/g, '');
    str = str.replace(/\([^()]*\)/g, '');
  
    $('#output1').append(`
  <div class="alert alert-success" role="alert">
      ${str}
  </div>
  `);
  }
  else{
    $('#output1').append(`
    <div class="alert alert-warning" role="alert">
      Введите значение.
    </div>
    `);
  }


});

//Задание 2
$('#calc2').click(() => {
  $('#output2').empty();
  if ($('#m').val() != ''){
    let sizeArray = +$('#m').val();
    let matrix = [];
    let width = sizeArray;
    let height = sizeArray;
    
    for (let i = 0; i < height; i++) {
        matrix[i] = []
        for (let j = 0; j < width; j++) {
            matrix[i][j] = random(-99, 99);
        }
    };
    let res = [];
    for (let k = 0; k < (width + height) - 1; k++) {
        let j = k < height ? 0 : k - height + 1;
        let i = k < height ? k : height - 1;
        let a = [];
        for (; matrix[i] && matrix[i][j] !== void 0; j++, i--) {
            a.push(matrix[i][j])
        }
        a = Math.max(...a)
        res.push(a);
    };
    
    console.table(matrix);
    $('#output2').append(`
    <div class="alert alert-success" role="alert">
      vector= ${res}
    </div>
    `);
    
  }
  else{
    $('#output2').append(`
    <div class="alert alert-warning" role="alert">
      Введите значение.
    </div>
    `);
  }
});

let random = (min, max) => Math.round(Math.random() * (max - min) + min);