var x_emUltimo, y_emUltimo;
var canvas= document.getElementById("myCanvas");
var cont= canvas.getContext("2d");
color= "purple";
var lineWidth= 3;
var width= screen.width;
var newWidth= screen.width - 70;
var newHeight= screen.height - 300;
if (width < 992){
    document.getElementById("myCanvas").width= newWidth;
    document.getElementById("myCanvas").height= newHeight;
    document.body.style.overflow= "hidden";
}
canvas.addEventListener("touchstart", touchStart);
function touchStart (e){
    color= document.getElementById("color").value;
    lineWidth= document.getElementById("line").value;
    x_emUltimo= e.touches[0].clientX - canvas.offsetLeft;
    y_emUltimo= e.touches[0].clientY - canvas.offsetTop;
}
canvas.addEventListener("touchmove", touchMove);
function touchMove (e){
    var touchPositionX= e.touch[0].clientX - canvas.offsetLeft;
    var touchPositionY= e.touch[0].clientY - canvas.offsetTop;
     cont.beginPath();
     cont.strokeStyle= color;
     cont.lineWidth= lineWidth;
     cont.moveTo (x_emUltimo, y_emUltimo);
     cont.lineTo (touchPositionX, touchPositionY);
     cont.stroke();
    x_emUltimo= touchPositionX;
    y_emUltimo= touchPositionY;
}
function clean(){
    cont.clearRect(0, 0, cont.canvas.width, cont.canvas.height);
}

