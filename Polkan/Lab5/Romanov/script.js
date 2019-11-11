$('#calc1').click(() => {
    $('.output').empty();
    let val1 = $('#val1').val();
    if ($('#val1').val() == '') alert('Введите данные')
    else {
        const fn = str => {
            let words = str.split(/\s+/).sort((a,b)=> a.length - b.length);
            let word = words[0];
            for(let a of words){
                a = [...a];
                let temp = "";
              for(b of word){
                if(b == a.shift()) temp += b;
                else break;
              }
               if(temp) word = temp;
               else return 0
            }
            return word.length + 1
        }
        //console.log(fn(val1))
        $('.output').append(`${fn(val1)}`);

    }
});


 let words = [];
let items ;
let str;
$('#calc2').click(() => {

    $('.output1').empty();
    let val2 = $('#val2').val();
    if ($('#val2').val() == '') alert('Введите данные')
    else {
        words = val2.split(' ');
        words.sort((a, b)=>{
            if(a.length < b.length) return -1;
if(a.length >= b.length) return 1
            })
            words.forEach(i => {
                     items = [...words];
            });
str = items.join(' ');
    }
console.log(items);
$('.output1').append(`${str}`);

});























//         for (let i = 0; i < words.length; i++) {
//             for (let j = 0; j < words[i].length; j++) {
//                 matrix[i] = words[i].split('');
//             }
//       }
//       console.log(matrix[0][0]);
//       for (let word in matrix) {
//           for (let symbol in matrix[word]) {
//               if (matrix[word][symbol]==matrix[++word][symbol]){
//                   if (res.includes(matrix[word][symbol])!=true){
//                       console.log(res);
//                       res.push(matrix[word][symbol])
//                   }

//           }


//       }
//     }
// };
// console.table(matrix);
// console.log(res);
// });