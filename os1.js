var tablink = document.getElementsByClassName("tab-link");
var tabcontent = document.getElementsByClassName("tab-contents");

function operation(tabname){
    for(link of tablink){
        link.classList.remove("active-link");
    }

    for(content of tabcontent){
        content.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
