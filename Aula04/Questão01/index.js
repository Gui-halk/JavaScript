function calcular(){
    let peso = document.getElementById('input-one').value
    let altura = document.getElementById('input-two').value
    if(isNaN(peso) || isNaN(altura)){
        return window.alert("Dados Invalidos")
    }
    let imc = peso / (altura/100) ** 2
    let text = ""

    if(imc < 18.5){
        text="Você está magro"
    } else if(imc < 24.9){
        text="Você está normal"
    } else if(imc < 29.9){
        text="Você está com sobrepeso"
    } else if(imc < 39.9){
        text="Você está com obesidade"
    } else if(imc > 39.9){
        text="Você está com obesidade mórbida"
    }

    document.getElementById("resultado").innerHTML = text
}