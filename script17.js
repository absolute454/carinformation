document.getElementById("div2").addEventListener("click",divDown);
let click2 = document.getElementsByClassName("click");
let count_cl =0;
function divDown(){
    count_cl++;
    if(count_cl%2==0){
        document.getElementById("div2").style.backgroundColor = "rgb(255,255,255)";
        click2[0].style.color = "rgb(22,22,22)";
        click2[1].style.color = "rgb(22,22,22)";
        click2[2].style.color = "rgb(22,22,22)";
        document.getElementById("div2").style.transition = "5s";
        click2[0].style.transition = "5s";
        click2[1].style.transition = "5s";
        click2[2].style.transition = "5s";
    }
    else{
        document.getElementById("div2").style.backgroundColor = "rgb(22,22,22)";
        click2[0].style.color = "rgb(255,255,255)";
        click2[1].style.color = "rgb(255,255,255)";
        click2[2].style.color = "rgb(255,255,255)";
        document.getElementById("div2").style.transition = "5s";
        click2[0].style.transition = "5s";
        click2[1].style.transition = "5s";
        click2[2].style.transition = "5s";

        
    }
   
}

function clockTimer()
{
  var date = new Date();
  
  var time = [date.getHours(),date.getMinutes(),date.getSeconds()]; // |[0] = Hours| |[1] = Minutes| |[2] = Seconds|
  var dayOfWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  var days = date.getDay();
  
  if(time[0] < 10){time[0] = "0"+ time[0];}
  if(time[1] < 10){time[1] = "0"+ time[1];}
  if(time[2] < 10){time[2] = "0"+ time[2];}
  
  var current_time = [time[0],time[1],time[2]].join(':');
  var clock = document.getElementById("clock");
  var day = document.getElementById("dayOfWeek");
  
  clock.innerHTML = current_time;
  day.innerHTML = dayOfWeek[days];
  
  
  
  setTimeout("clockTimer()", 1000);
}





    