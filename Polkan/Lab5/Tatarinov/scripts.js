"use strict";

$('#calc1').click(() => {
    $('#output').empty();
    let val1 = $('#val1').val();
    if ($('#val1').val() <= 3) alert('Введите данные')
    else{
    
    // Фильтруем входные данные, удаляем лишние символы 
    val1 = val1.replace(/(\d+) +-/g, '$1-'); // удаление пробел из диапазонов справа
    val1 = val1.replace(/- +(\d+)/g, '-$1'); // удаление пробела из диапазонов слева
    val1 = val1.replace(/[^0-9-]+/g, ',');   // заменяем все символы(не цифры) на запятые
    val1 = val1.replace(/(^,|,$)/g, '');     // вырезаем начальные и конечные запятые

    let arr1 = val1.split(',');
    let diapazons = [];
    let numbers = [];

    for (const key in arr1) {
        console.log(arr1);
        if (arr1[key].match(/\d-\d/)) {
            const diapozon = arr1[key].split('-');
            const start = Number.parseInt(diapozon[0]);
            const end = Number.parseInt(diapozon[1]);
            for (let index = start; index <= end; index++) {
                diapazons.push(index)
            }
        } else {
            numbers.push(Number.parseInt(arr1[key]));
        }
    }
    numbers = numbers.filter(value => !diapazons.includes(value));
    numbers = numbers.sort((val1, val2) => val1 - val2);

    $('#output').append(`
    <div class="alert " role="alert">
        Числа по возрастанию: ${numbers}
    </div>`
  )
}  
})

$('#calc2').click(() => {
    $('#output1').empty();
    let val2 = $('#val2').val();
    function removeDuplicateCharacters(string) {
        return string
          .split('')
          .filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
          })
          .join('');
      }
      $('#output1').append(`
      <div class="alert " role="alert">
          Преобразованая строка: ${removeDuplicateCharacters(val2)}
      </div>`
    )
});