
let timer;
let ele = document.getElementById('timer');

(function(){
    let segundos = 0;
    timer = setInterval(() =>{
        ele.innerHTML = '01:00' -sec;
        sec--;
    }, 1000)
});