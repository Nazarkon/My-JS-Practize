const FNumber = document.getElementById('first_number');
const SNumber = document.getElementById('second_number');
const multiplybtn = document.getElementById('button_multp');
const devidebtn = document.getElementById('button_devide');
const resultField = document.getElementById('result');

multiplybtn.addEventListener('click', function(){
    const result = +FNumber.value * +SNumber.value
    console.log(result);
    resultField.innerHTML =`${result}`;
})

devidebtn.addEventListener('click', function(){
    const result = +FNumber.value / +SNumber.value
    console.log(result);
    resultField.innerHTML =`${result}`;
})

console.log(document.URL)