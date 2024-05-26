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

let massimg = ["pngegg.png","pngwing.com(2.2).png","pngwing.com(1.1).png","pngwing.com (1).png","pngwing.com(1.1.1.1.1).png","pngwing.com(54).png","pngwing.com (!!).png",""]

let img = document.getElementsByClassName("text1");
for(let i=0; i<img.length; i++){
    img[i].addEventListener("mouseover", function(){
        document.getElementById("img1").src= massimg[i];
    })
    img[i].addEventListener("mouseout", function(){
        document.getElementById("img1").src= "";
    })
}

