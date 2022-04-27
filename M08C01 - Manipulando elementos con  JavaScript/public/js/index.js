console.log("estoy")

//micro desafio paso 1 - START
let body = document.querySelector("body")
let main = document.querySelector("main")
let h2 = document.querySelector("h2")
let a = document.querySelector("a")
let p = document.querySelectorAll("p")

let input = prompt("Ingrese su nombre")
console.log(input)

if (input == "" || input == null ){
    h2.innerHTML += "invitado"
}else {
    h2.innerHTML += input
}

h2.style.textTransform = "uppercase"
a.style.color = "#E51B3E"

if( confirm("¿Desea colocar un fondo de pantalla?")){
    body.classList.add("fondo") 
}

for( let i=0; i< p.length; i +=1 ){
    if(i%2==0){
        p[i].classList.add("destacadoPar")
    }else{
        p[i].classList.add("destacadoImpar")
    }
} 

main.style.display = "block"

//micro desafio paso 1 - END
