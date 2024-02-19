const Button = document.getElementById('btng');
let Count = 8;
Button.addEventListener('click',function(e){
Count--;
const ami = document.getElementById('btneight').childNodes[0].innerText = Count;
if (Count <0){
    alert('sorry bhai');
}
console.log(ami);
Button.style.backgroundColor = 'green';


})


// seat selected

//  document.getElementById('btneight').childNodes[0].innerText



