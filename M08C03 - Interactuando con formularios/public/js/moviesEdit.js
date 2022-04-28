window.onload = function(){
    let formulario = document.querySelector('.formulario');
//------DESDE AQUÍ CONTINÚE CON LAS VALIDACIONES DEL FORMULARIO //
//-------------------DE REGISTRO DE EDICION DE PELÍCULAS------------------//
    console.log("add validation link working!")
    errors = []

    let title = document.querySelector('#title')
    let rating = document.querySelector('#rating')
    let awards = document.querySelector('#awards')
    let release_date = document.querySelector('#release_date')
    let length = document.querySelector('#length')
    let genre_id = document.querySelector('#genre_id')
    let errores = document.querySelector(".errores")


    function distinct(arr){
        output = []
        for (value of arr){
            if (!output.includes(value)){
                output.push(value)
            }
        }
        return output
    }
    function remove(arr, value) { 
        arr = distinct(arr) //eliminates duplicated values
        errors = arr.filter(function(ele){ 
            return ele != value; 
        });
        console.log(errors)
    }
    function pushAndClean(value){
        errors.push(value)
        errors = distinct(errors) //eliminates duplicated values
    }

    title.addEventListener("input",function(event){
        if(title.value.length == 0 ){
            title.classList.add("is-invalid")
            title.classList.remove("is-valid")
            pushAndClean("El titulo es invalido")
        }else{
            title.classList.remove("is-invalid")
            title.classList.add("is-valid")
            remove(errors, "El titulo es invalido")
        }
    })
    rating.addEventListener("input",function(event){
        if(rating.value.length == 0 || rating.value < 0 || rating.value > 10){
            rating.classList.add("is-invalid")
            rating.classList.remove("is-valid")
            pushAndClean("El rating es invalido")
        }else{
            rating.classList.remove("is-invalid")
            rating.classList.add("is-valid")
            remove(errors, "El rating es invalido")
        }
    })
    awards.addEventListener("input",function(event){
        if(awards.value.length == 0 || awards.value < 0 || awards.value > 10){
            awards.classList.add("is-invalid")
            awards.classList.remove("is-valid")
            pushAndClean("Los premios son invalidos")
        }else{
            awards.classList.remove("is-invalid")
            awards.classList.add("is-valid")
            remove(errors, "Los premios son invalidos")
        }
    })
    release_date.addEventListener("input",function(event){
        if(release_date.value.length == 0 ){
            release_date.classList.add("is-invalid")
            release_date.classList.remove("is-valid")
            pushAndClean("La fecha d elanzamiento es invalida")
        }else{
            release_date.classList.remove("is-invalid")
            release_date.classList.add("is-valid")
            remove(errors, "La fecha d elanzamiento es invalida")
        }
    })
    length.addEventListener("input",function(event){
        if(length.value.length == 0 || length.value < 60 || length.value > 360){
            length.classList.add("is-invalid")
            length.classList.remove("is-valid")
            pushAndClean("La duracion es es invalida")
        }else{
            length.classList.remove("is-invalid")
            length.classList.add("is-valid")
            remove(errors, "La duracion es es invalida")
        }
    })
    genre_id.addEventListener("input",function(event){
        if(genre_id.value.length == 0 ){
            genre_id.classList.add("is-invalid")
            genre_id.classList.remove("is-valid")
            pushAndClean("Genero no ingresado")
        }else{
            genre_id.classList.remove("is-invalid")
            genre_id.classList.add("is-valid")
            remove(errors, "Genero no ingresado")
        }
    })

    formulario.addEventListener("submit", function(event){
        if((
            title.classList.contains("is-invalid") ||
            rating.classList.contains("is-invalid") ||
            awards.classList.contains("is-invalid") ||
            release_date.classList.contains("is-invalid") ||
            length.classList.contains("is-invalid") ||
            genre_id.classList.contains("is-invalid"))
            ){
                //INVALID
                event.preventDefault()
                if(errors.length != 0){
                    errores.innerHTML = ""
                    for (error of errors){
                        errores.innerHTML += "<li>" + error + "</li>"
                    }
                }
                errores.classList.add("alert-warning")
                alert("Los datos ingresados son erroneos")
            }else{
                //VALID
                alert("La película se guardó satisfactoriamente")
            }
    })

}