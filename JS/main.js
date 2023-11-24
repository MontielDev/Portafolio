let menuVisible = false;
// Function hide-show nav
function mostrarOcultarMenu(){
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    }
    else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Function hide nav
function seleccionar() {
    
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Function animation % skills
function efectSkills(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("nodejs");
        habilidades[4].classList.add("mysql");
        habilidades[5].classList.add("communication");
        habilidades[6].classList.add("creativity");
        habilidades[7].classList.add("teamwork");
        habilidades[8].classList.add("proyect");
        habilidades[9].classList.add("dedication");
        habilidades[10].classList.add("english");
    }
}



// scrolling for animation bar skills
window.onscroll = function(){
    efectSkills();
}



// soft deployment

$(document).ready(function(){
    let despliegue_a = $(".desplazar");

    despliegue_a.click(function(e){
        e.preventDefault();
        $("body, html").animate(
            {
                scrollTop: $(this.hash).offset().top,
            }, 1000
        );
    })
})

// Input Number, remove negative:

function evitarNegativo(e) {
    if (e.key === "-")
    e.preventDefault();
}