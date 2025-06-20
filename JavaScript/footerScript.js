//make repeat menu
document.addEventListener("DOMContentLoaded", function (){ 
  
    var foot = document.getElementById("myfooter");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","footer.html",false);
    xmlhttp.send();
    foot.innerHTML=xmlhttp.responseText;
});