const input = document.getElementById('input-one');
const resultado = document.getElementById('resultado');

function arredondarPraCima(){

    let num = input.value

    if (isNaN(num)) return alert("Dados Invalidos") 

    return resultado.innerText = Math.ceil(num)    
}

function arredondarPraBaixo(){

    let num = input.value

    if (isNaN(num)) return alert("Dados Invalidos")
    
    return resultado.innerText = Math.floor(num)
}