function makebubble(){
var clutter = "";


for(var i=1; i<=160; i++){
  var rn=  Math.floor(Math.random()*10)
    clutter += `<div class="bubble">${rn}</div>`

}
document.querySelector("#pbtm").innerHTML= clutter;
}
var timer = 60;
var score = 0; 
var hitrn = 0;

function runtimer() {
  var timerint =setInterval(function () { 
    if(timer>0){
    timer--;
    document.querySelector("#timervalue").textContent= timer;
    }
    else{
      clearInterval(timerint);
      document.querySelector("#pbtm").innerHTML= `<h1> Game over </h2>`;
    }
  },1000);
}
function getnewhit(){
   hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;

}
function newscore(){
  score +=10;
  document.querySelector("#scoreval").textContent = score;
}
document.querySelector("#pbtm").
addEventListener("click",function(details){
   var clickednum = Number(details.target.textContent);
   if(clickednum == hitrn) {
    newscore();
    getnewhit();
    makebubble();
   }

});


runtimer();
makebubble();
getnewhit();

