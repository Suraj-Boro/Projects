alert("Welcome to Pomodoro Productivity Timer! You can also scroll down to see the Lofi player.\n\n1. Adjust the size of buttons using CTRL + '+' or CTRL + '-' keys to get correct orientation of buttons.\n\n2. Press F11 to get a more immersive experience.")

var timer;
var timer2;

var timerz1;
var timerz2;

let time = 1500000;
let time2 = 300000;

let ar1 = -1;
let ar2 = -1;

var n = 0;
var x = 0;

function worktimer(){

    document.getElementById("pause").style.visibility = "visible";
    
    document.getElementById("reset").style.visibility = "visible";

    document.getElementById("resume").style.visibility = "visible";
    
    
    document.getElementById("start").disabled = true;
    
    document.getElementById("reset").disabled = false; 

    document.getElementById("resume").disabled = true;

    let time = 1500000;

    timer = setInterval(function(){

        let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        
        let seconds = Math.floor((time % (1000 * 60)) / 1000);

        n = n+1000;

        console.log(n);

        document.getElementById("tim").innerHTML = "WORK : " + minutes + " min " + seconds + " sec";
         
        if(time==0){
            document.getElementById("pause").disabled = true;
            document.getElementById("resume").disabled = true;
        }

        else{
            document.getElementById("pause").disabled = false;
        }

        time = time - 1000;

        ar1 = time;

        if(time<0)
        {
 
          document.getElementById("tim").innerHTML = "WORK : ";

          n = 0;
          
          clearInterval(timer);
          
          resttimer();

        }
        
    
    }, 1000);

}


    function resttimer(){
  
    let time2 = 300000;

    timer2 = setInterval(function(){

        let minutes2 = Math.floor((time2 % (1000 * 60 * 60)) / (1000 * 60));

        let seconds2 = Math.floor((time2 % (1000 * 60)) / 1000);

        x = x+1000;

        console.log(x);

        document.getElementById("tim2").innerHTML = "REST : " + minutes2 + " min " + seconds2 + " sec";

        if(time2==0){
            document.getElementById("pause").disabled = true;
            document.getElementById("resume").disabled = true;
        }

        else{
            document.getElementById("pause").disabled = false;
        }

        time2 = time2 - 1000;

        ar2 = time2;

        if(time2<0)
        {
              document.getElementById("tim2").innerHTML = "REST : ";

              x = 0;
              
              clearInterval(timer2);
              
              worktimer();
 
        }
        
        
    }, 1000);

}

function reset(){
    
    document.getElementById("reset").disabled = true; 
    document.getElementById("start").disabled = false;
    
    document.getElementById("pause").disabled = true;
    document.getElementById("resume").disabled = true;

    console.log("reset");

    clearInterval(timer);
    clearInterval(timer2);

    n = 0;
    x = 0;

    clearInterval(timerz1);
    clearInterval(timerz2);
    
    document.getElementById("tim").innerHTML = "WORK : ";
    document.getElementById("tim2").innerHTML = "REST : ";

}


function pausetimer1(){

    let timez1 = 1500000 - n;

    timerz1 = setInterval(function(){

        let minutesz1 = Math.floor((timez1 % (1000 * 60 * 60)) / (1000 * 60));
        
        let secondsz1 = Math.floor((timez1 % (1000 * 60)) / 1000);

        n = n+1000;

        document.getElementById("tim").innerHTML = "WORK : " + minutesz1 + " min " + secondsz1 + " sec";
         
        timez1 = timez1 - 1000;

        if(timez1<0)
        {

          document.getElementById("tim").innerHTML = "WORK : ";

          n = 0;
   
          ar1 = -1;
          
          clearInterval(timerz1);
          
          resttimer();

        }
        
    
    }, 1000);

}


    function pausetimer2(){
        
    let timez2 = 300000 - x;

    timerz2 = setInterval(function(){

        let minutesz2 = Math.floor((timez2 % (1000 * 60 * 60)) / (1000 * 60));

        let secondsz2 = Math.floor((timez2 % (1000 * 60)) / 1000);

        x = x+1000;

        document.getElementById("tim2").innerHTML = "REST : " + minutesz2 + " min " + secondsz2 + " sec";

        timez2 = timez2 - 1000;

        if(timez2<0)
        {
              document.getElementById("tim2").innerHTML = "REST : ";

              x = 0; 

              ar2 = -1;
              
              clearInterval(timerz2);
              
              worktimer();
 
        }
        
        
    }, 1000);

}


function pause(){
    
    document.getElementById("pause").disabled = true;
    document.getElementById("resume").disabled = false;

    clearInterval(timer);
    clearInterval(timer2);

    clearInterval(timerz1);
    clearInterval(timerz2);

    console.log(ar1);
    console.log(ar2);


}


function re(){

    document.getElementById("pause").disabled = false;
    document.getElementById("resume").disabled = true;

    
    if(ar1<0){
        pausetimer2();
    }

    if(ar2<0){
        pausetimer1();
    }

}