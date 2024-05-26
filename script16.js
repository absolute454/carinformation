function name_user(){
    //let  your_name = prompt("your name ?");
    //alert("Привет. Рад тебя приветствовать на моём портфолио. Не забудь поставить оценку по 10 бальной шкале, "+ your_name);
    document.getElementById("dialogBasket").showModal();
        
}


function search(){
    let your_name = document.getElementById("searchFied").value;
    if (your_name.length >= 2){document.getElementById("text").innerHTML = "Привет. Рад тебя приветствовать на моём портфолио. Не забудь поставить оценку по 5 бальной шкале. "+ your_name;
    document.getElementById("searchFied").style.display = "none";
    document.getElementById("ok").style.display = "none";}}


    document.getElementById("main").addEventListener("click",divDown);
    let click2 = document.getElementsByClassName("click");
    let count_cl =0;
    function divDown(){
        count_cl++;
        if(count_cl%2==0){
            document.getElementById("main").style.backgroundColor = "rgb(255,255,255)";
            click2[0].style.color = "rgb(22,22,22)";
            click2[1].style.color = "rgb(22,22,22)";
            click2[2].style.color = "rgb(22,22,22)";
            click2[3].style.color = "rgb(22,22,22)";
            click2[4].style.color = "rgb(22,22,22)";
            
            document.getElementById("main").style.transition = "5s";
            click2[0].style.transition = "5s";
            click2[1].style.transition = "5s";
            click2[2].style.transition = "5s";
            click2[3].style.transition = "5s";
            click2[4].style.transition = "5s";
            
        }
        else{
            document.getElementById("main").style.backgroundColor = "rgb(22,22,22)";
            click2[0].style.color = "rgb(255,255,255)";
            click2[1].style.color = "rgb(255,255,255)";
            click2[2].style.color = "rgb(255,255,255)";
            click2[3].style.color = "rgb(255,255,255)";
            click2[4].style.color = "rgb(255,255,255)";
            
            document.getElementById("main").style.transition = "5s";
            click2[0].style.transition = "5s";
            click2[1].style.transition = "5s";
            click2[2].style.transition = "5s";
            click2[3].style.transition = "5s";
            click2[4].style.transition = "5s";
            
        }
       
    }

   