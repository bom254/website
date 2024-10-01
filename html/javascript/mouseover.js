function fun(){
    h.style.font.size="50px";
    h.style.text.transform="uppercase";
    h.style.color="white";
    h.style.text.align="centre";
}
function fun1(){
    document.getElementById("p").document.write("GUESTS");
}
function fun2(){
    document.getElementById("g").innerHTML="Enter number of guests:<input type='text' name='name'/>";
}
function fun3(){
    document.getElementsByName("d").innerHTML="Enter your Date<input type='date' name='date'";
}
var myh=document.getElementById("h");
myh.addEventListener("click",fun);
myh.addEventListener("mouseover",fun1);
myh.addEventListener("click",fun2);
myh.addEventListener("moseover",fun3);