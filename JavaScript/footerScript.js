//make repeat menu
document.addEventListener("DOMContentLoaded", function (){ 
  
    var foot = document.getElementById("myfooter");
    //It helps the script dynamically find the correct path to menu.html or footer.html depending on where the current HTML file is located.
    var pathPrefix = location.pathname.includes("pages") ? "../" : "";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET","footer.html",false);
    xmlhttp.send();
    foot.innerHTML=xmlhttp.responseText;
});