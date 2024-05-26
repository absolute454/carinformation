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