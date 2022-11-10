function sortear(){
    let min = document.getElementById('input-one').value
    let max = document.getElementById('input-two').value
    if(isNaN(min) || isNaN(max)){
        return window.alert("Dados Invalidos")
    }

    let resultado = parseInt(Math.random() * (max - min) + min)
    document.getElementById("resultado").innerHTML = resultado
}