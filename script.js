var ms = 0 , s = 0 , m=0;
var timer;
var stopwatchElem = document.querySelector('.stopwatch');
function start(){
    timer = setInterval(run,10);
}
function run(){
    stopwatchElem.textContent = m +":"+ s + ":" + ms;
    ms++;
    if(ms==100){
        ms=0;
        s++;
    }
    if(s==60){
        s=0;
        m++;
    }

    function stop(){
        clearInterval(timer);
        ms=0;
        s=0;
        m=0;
    }

    function restart(){
        stop();
        start();
    }
}