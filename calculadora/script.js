var n1 = document.getElementById('numero1')
var n2 = document.getElementById('numero2')
var resultado = document.getElementById('resultado')

function somar(){
    resultado.innerHTML = parseInt(n1.value) + parseInt(n2.value)
}
function subtrair(){
    resultado.innerHTML = parseInt(n1.value) - parseInt(n2.value)
}
function multiplicar(){
    resultado.innerHTML = parseInt(n1.value) * parseInt(n2.value)
}
function dividir(){
    resultado.innerHTML = parseInt(n1.value) / parseInt(n2.value)
}