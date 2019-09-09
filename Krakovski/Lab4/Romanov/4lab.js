var n = 3000 //счётчик, необходимо изменить на 3000
var a = 630360016;
var m = 2147483647;
var arr = [];
for (var c=0; c<n; c++) {

    arr.push(Math.round(Math.random()*(m-1)));
    //document.write('<br>'+arr[c]);
}
var i = Math.round((Math.random()*n));
var k = arr[i];
var result = arr.reduce(function(sum, current) {

    var g = (sum + current);
    return (g/m);
  }, 0);
  
  $(".row").append(`i=${i} <br> k=${k} <br> X = ${result}`); 