let number = Math.round(Math.random()*1000);
let form = document.querySelector('.form');
let ver = 0;
function restart() {
    alert('Do you want play again?')
    return location.reload();
}
form.addEventListener('submit',function step(step){
    step.preventDefault();
    let inputValue = document.querySelector('.input').value;
    ver = ver + 1;
    if(ver == 10){
        alert('You lose. Do you want play again?')
        return location.reload();
    }else{

    if(inputValue < number){
        document.querySelector('.demo').innerHTML = 'Answer:' + ' ' + inputValue + ' ' + 'is less than my number';
        document.querySelector('.demo').style.color = 'red';
    }else if(inputValue > number){
        document.querySelector('.demo').innerHTML = 'Answer:' + ' ' + inputValue + ' ' + 'is more than my number';
        document.querySelector('.demo').style.color = 'red';
    }else{
        document.querySelector('.demo').innerHTML = 'Answer: You Are winner, you find the answer in 10 attempts';
        document.querySelector('.demo').style.color = 'green';
        document.querySelector('input').style.display = 'none';   
        setTimeout(restart,15000)
    }
    }
    document.querySelector('.input').value = '';
})
console.log(number);
