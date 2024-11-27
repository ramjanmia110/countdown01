let day =document.getElementById("days");
let hour =document.getElementById("hours");
let minute =document.getElementById("minit");
let second =document.getElementById("seconds");


function timer(){
    let days = new Date();
    day.innerText =days.getDate();
    hour.innerText =days.getHours();
    minute.innerText =days.getMinutes();
    second.innerText =days.getSeconds();
        

        if(second.innerText < 10){
            second.innerText= "0" + second.innerText;

        }else if(minute.innerText < 10){
            minute.innerText = "0" +  minute.innerText;
        }else if(hour.innerText < 10){
            hour.innerText ="0" + hour.innerText;
        }else if(day.innerText < 10){
            hour.innerText ="0" + hour.innerText;
        }
       
    
}

setInterval(timer,1000)