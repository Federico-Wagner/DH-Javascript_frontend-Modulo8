window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener("mouseover", function(event){
        titulo.style.color = "blue"
    })

    let letra = document.querySelector("body")

    let estadoSecreto = 0
    let palabra = "secreto"
    letra.addEventListener("keypress", function(event){
        if(palabra[estadoSecreto]== event.key){
            estadoSecreto += 1
        }else{
            estadoSecreto = 0
        }
        if(estadoSecreto == 7){
            alert("SECRETO MAGICO")
            estadoSecreto = 0
        }
    })
}