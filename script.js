document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");

function mostrar_menu(){
/*     document.getElementById("move-content").classList.toggle('move-container-all'); 
 */    document.getElementById("show-menu").classList.toggle("lateral"); 
}
 
navLinks.forEach((navLinks) => {
    navLinks.addEventListener("click",()=>{
        navBar.classList.remove("lateral");
        document.getElementById("show-menu").classList.toggle("lateral"); 

    });
});



function darkmode(){
    let darkness = document.body;
    darkness.classList.toggle("Dark");
}





