document.getElementById("icon-menu").addEventListener("click", mostrar_menu);
let navBar = document.getElementById("nav-bar");
let navLinks = navBar.querySelectorAll("li");
console.log("hola como estas");

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

const buttonDark = document.querySelector(".btn-dark").addEventListener("click", darkMode);

function darkMode(){
    let darkness = document.body;
    darkness.classList.toggle('Dark');

    if(document.body.classList.contains('Dark')){
        localStorage.setItem('darkMode', 'enabled');
    }
    else{
        localStorage.setItem('darkMode', 'disabled');
        localStorage.removeItem('darkMode');
        localStorage.clear()
    }
}

if(localStorage.getItem('darkMode') == 'enabled'){
    document.body.classList.toggle('Dark');
}





