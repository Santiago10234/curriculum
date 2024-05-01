// let imagen = document.getElementById("imagen").onclick = function () {
//     correr();
// };

// function correr(){
//     alert("Salgo a correr todos los dias por lo menos 30 min.")
// }

// let imagen2 = document.getElementById("imagen2").onclick = function () {
//     viajar();
// };

// function viajar(){
//     alert("Me encanta viajar y conocer lugares nuevos.")
// }

// let imagen3 = document.getElementById("imagen3").onclick = function () {
//     tv();
// };

// function tv(){
//     alert("Me fascina ver peliculas, mi categoria favorita es la comedia.")
// }

// let imagen4 = document.getElementById("imagen4").onclick = function () {
//     musica();
// };

// function musica(){
//     alert("Me gusta todo tipo de musica, pero de preferencia hip hop.")
// }

let div = document.getElementById("div")
let div2 = document.getElementById("div2")
let div3 = document.getElementById("div3")
let div4 = document.getElementById("div4")
let img1 = document.getElementById("imagen")
let img2 = document.getElementById("imagen2")
let img3 = document.getElementById("imagen3")
let img4 = document.getElementById("imagen4")



img1.addEventListener("click",()=>{
    div.classList.toggle("hidden")
})

img2.addEventListener("click",()=>{
    div2.classList.toggle("hidden")
})

img3.addEventListener("click",()=>{
    div3.classList.toggle("hidden")
})

img4.addEventListener("click",()=>{
    div4.classList.toggle("hidden")
})
