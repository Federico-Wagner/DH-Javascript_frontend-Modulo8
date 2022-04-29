window.onload = () => {
    let editarBTN = document.querySelector(".botonModificar")
    let crearBTN = document.querySelector(".botonAgregar")
    let borrarBTN = document.querySelector(".botonBorrar")

    let title = document.querySelector("#title")
    let rating = document.querySelector("#rating")
    let awards = document.querySelector("#awards")
    let release_date = document.querySelector("#release_date")
    let length = document.querySelector("#length")

    fetch("http://localhost:3031/api/movies/6")
        .then((response)=>{
            return response.json();
        })
        .then((pelicula)=>{
            var data = pelicula.data;
            const date = new Date(data.release_date)
            dateFormated = date.getFullYear()+"-"+("0" + date.getMonth()).slice(-2)+"-"+("0" + date.getDay()).slice(-2)

            title.value = data.title
            rating.value = data.rating
            awards.value = data.awards
            release_date.value = dateFormated
            length.value = data.length
        })
        .catch((error) =>{
            console.log(error)
        })

    editarBTN.addEventListener("click", (event)=>{
        const date = new Date(release_date.value)
            dateFormated = date.getFullYear()+"-"+date.getMonth()+"-"+("0" + date.getDay()).slice(-2)
        var data ={
            title : title.value,
            rating : rating.value,
            awards : awards.value,
            release_date : dateFormated,
            length : length.value
        }
        let settings = {
            method: "PUT",
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        fetch("http://localhost:3031/api/movies/update/6", settings)
    })

    crearBTN.addEventListener("click", (event)=>{
        var data ={
            title : title.value,
            rating : rating.value,
            awards : awards.value,
            release_date : release_date.value,
            length : length.value
        }
        let settings = {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                'Content-Type': 'application/json'
            }
        }
        fetch("http://localhost:3031/api/movies/create", settings)
    })

    borrarBTN.addEventListener("click", (event)=>{
        let settings = {
            method: "DELETE",
            headers:{
                'Content-Type': 'application/json'
            }
        }
        fetch("http://localhost:3031/api/movies/delete/71", settings)
    })
}
