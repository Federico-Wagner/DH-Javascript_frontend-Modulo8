function miCalificacion(id, calif) {
  if(datos !== null) {
    let arr = datos.split(',');
    if(arr.includes(String(id))){
      arr = remove(arr, String(id));
      localStorage.setItem('datos', arr); //save removed
    }else{
      arr.push(id);
      localStorage.setItem('datos', arr); //save added
    }
  } else {
    localStorage.setItem('datos', id); //first add
  }
  location.reload(); //reload page to show changes
}

  function remove(arr, value) { 
      return arr.filter(function(ele){ 
          return ele != value; 
      })
  }
  function distinct(arr){
    output = []
    for (value of arr){
        if (!output.includes(value)){
            output.push(value)
        }
    }
    return output
  }
function createHTML(id){
  return `<div onclick="miCalificacion(${id},1)">` +
    `<i class="fa-solid fa-star"></i>` +
    `</div>`
}

let datos = localStorage.getItem('datos'); //load local data
if(datos){
  var arr = datos.split(',');
  arr = distinct(arr) //eliminates posible duplicated values
  console.log(arr)
  localStorage.setItem('datos', arr); //save cleaned data

  const link = document.getElementById("favoritas");
  link.innerHTML = '<a href="favoritas.html">Mis Películas Favoritas</a>';
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
      let data = peliculas.data;
    //Codigo que debemos usar para mostrar los datos en el frontend
    data.forEach((movie) => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");

      const h1 = document.createElement("h1");
      h1.textContent = movie.title;

      const estrellita = document.createElement("p");
      estrellita.innerHTML = createHTML(movie.id)
      if(arr && arr.includes(String(movie.id))){
        estrellita.style.color = "yellow"
      }else{
        estrellita.style.color = "red"
      }
    
      const p = document.createElement("p");
      p.textContent = `Rating: ${movie.rating}`;

      const duracion = document.createElement("p");
      duracion.textContent = `Duración: ${movie.length}`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(estrellita)
      card.appendChild(p);
      if (movie.genre !== null) {
        const genero = document.createElement("p");
        genero.textContent = `Genero: ${movie.genre.name}`;
        card.appendChild(genero);
      }
      card.appendChild(duracion);
    });
  })
};
