let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");


function opentab(tabname){
    for(tabdata of tablinks){
        tabdata.classList.remove("active-link");
    }
    for(contentdata of tabcontents){
        contentdata.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")

}

// ............for sidemenu...........//

var sidemenu =document.getElementById("sidemenu");
function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}