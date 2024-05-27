document.getElementById('n1', 'n2', 'resultado').innerText = `+: ${somar} , -: ${subtrair} , *: ${multiplicar}, /: ${dividir}, resultado: ${resp}`;


let numero = ['numero1', 'numero2', 'resp'];

function somar(){
let n1 = Number(numeo1.value)
let n2 = Number(numero2.value)
let resultado = resp(n1 + n2)
 
};

function subitrair(){
let n1 = Number(numeo1.value)
let n2 = Number(numero2.value)
let resultado = resp(n1 - n2)
    
};

function multiplicar(){
let n1 = Number(numeo1.value)
let n2 = Number(numero2.value)
let resultado = resp(n1 * n2)  
};

function dividir(){
let n1 = Number(numeo1.value)
let n2 = Number(numero2.value)
let resultado =  resp(n1 / n2)   
};

function resp(resultado): `A resposta é: ${resultado} `