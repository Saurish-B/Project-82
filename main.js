var me="empty";
var lx,ly;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
colour="red";
wd=2;
canvas.addEventListener("mousedown",mouse);
function mouse(e)
{
    colour=document.getElementById("colour").value;
    wd=document.getElementById("wd").value;
    me="mousedown";
}
    canvas.addEventListener("mousemove",mv);
    function mv(e)
    {
    current_x = e.clientX-canvas.offsetLeft;
     current_y = e.clientY-canvas.offsetTop;
     if (me=="mousedown")
     
 { 
     ctx.beginPath();
     ctx.strokeStyle = colour; 
    ctx.lineWidth = wd;

    
    ctx.arc(current_x,current_y,10,0,2*Math.PI);
      ctx.stroke(); 
 }
 lx=current_x;
 ly=current_y;
}
canvas.addEventListener("mouseup",mu);
    function mu(e)
    {
        me="mouseup";
    }
    canvas.addEventListener("mouseleave",ml);
    function ml(e)
    {
        me="mouseleave";
    }
       function clear() 
       { 
           ctx.clearRect(0, 0, canvas.width, canvas.height); 
       }