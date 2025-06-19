//document.addEventListener("window.onload", function (){  Original one
// changed to DOMContentLoaded 
//window.onload can only be executed once and is prone to conflicts, whereas DOMContentLoaded is more reliable and allows multiple scripts to run simultaneously.
document.addEventListener("DOMContentLoaded", function (){ 
    var menu = document.getElementById("menu");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","menu.html",false);
    xmlhttp.send();
    menu.innerHTML=xmlhttp.responseText;
});