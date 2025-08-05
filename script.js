let start = document.getElementById("start")
let stopr = document.getElementById("stop")
let reset = document.getElementById("reset")
let hours = document.getElementById("hours")
let min = document.getElementById("min")
let sec = document.getElementById("sec")
let time=null;
start.addEventListener("click",()=>{
     time=setInterval(()=>{
        sec.innerText++;
        if(sec.innerText==="60"){
            sec.innerText=0;
            min.innerText++;
        }

            if(min.innerText==="60"){
            min.innerText=0;
            hours.innerText++;
        }
                 if(hours.innerText==="12"){
                    hours.innerText=1;
                    
        }
    },1000)
})

stopr.addEventListener("click",()=>{
    clearInterval(time)
    time=null
})

reset.addEventListener("click",()=>{
   min.innerText="00"
     sec.innerText="00"
      hours.innerText="00" 
})
