let datos = localStorage.getItem('datos'); //load local data
if(datos){
  var arr = datos.split(',');
  console.log(arr)
}

window.onload = () => {
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);

  // Aqui debemos agregar nuestro fetch
  fetch("http://localhost:3031/api/movies")
  .then((response)=>{
    return response.json();
  })
  .then((peliculas)=>{
  //Codigo que debemos usar para mostrar los datos en el frontend
    let data = peliculas.data;

    data.forEach((movie) => {
      if(arr && arr.includes(String(movie.id))){
        const card = document.createElement("div");
        card.setAttribute("class", "card");
  
        const h1 = document.createElement("h1");
        h1.textContent = movie.title;
  
        const p = document.createElement("p");
        p.textContent = `Rating: ${movie.rating}`;
  
        const duracion = document.createElement("p");
        duracion.textContent = `Duración: ${movie.length}`;
  
        container.appendChild(card);
        card.appendChild(h1);
        card.appendChild(p);
        if (movie.genre !== null) {
          const genero = document.createElement("p");
          genero.textContent = `Genero: ${movie.genre.name}`;
          card.appendChild(genero);
        }
        card.appendChild(duracion);
      }
      if(!(arr)){
        const container = document.querySelector(".container");
        container.style.color ="red"
        container.innerHTML = "<h2> Aún no has seleccionado películas favoritas </h2>"
      }
    });
  })
}
