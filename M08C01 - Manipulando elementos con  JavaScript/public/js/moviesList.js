//micro desafio paso 2 - START
console.log("vinculation test: js/moviesList.js")

let body = document.querySelector("body")
let h1 = document.querySelector("h1")

if(confirm("¿Desea modo oscuro?")){
    body.style.backgroundColor = "#7f7f7f"
    body.classList.add("fondoMoviesList")
}

h1.innerHTML += "LISTADO DE PELÍCULAS"
h1.style.color = "white"
h1.style.backgroundColor = "teal"
h1.style.padding = "20px"

//micro desafio paso 2 - END
