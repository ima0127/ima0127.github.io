document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

function mostrar_menu(){
   document.getElementById("show-menu").classList.toggle("lateral"); 
}
 
navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click",()=>{
        navBar.classList.remove("lateral");
        document.getElementById("show-menu").classList.toggle("lateral"); 

    });
});


const buttonDark = document.querySelector("[data-dark-mode]")


buttonDark.addEventListener("click" ,darkmode);
function darkmode(){
    let darkness = document.body;
    darkness.classList.toggle("Dark");

    if(document.body.classList.contains("Dark")){
        localStorage.setItem("darkMode", "enable");
        //almacenar datos si el modo oscuro esta activado
    }else{
        localStorage.getItem("darkMode", "disabled"); 
        localStorage.removeItem('darkMode');
        localStorage.clear(); //La sintaxis para eliminar todos los artículos de LocalStorage
        //almacenar estos datos si el modo oscuro esta desactivado
    }
    
}

if(localStorage.getItem("darkMode") == "enable"){
    let darkness = document.body;
    darkness.classList.toggle("Dark");
}    






