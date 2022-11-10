const submit = document.getElementById('submit')


function escrever(){
    let resultado

    switch(document.getElementById('input-one').value){
        case '1':
            resultado = "Um"
            break
        case '2':
            resultado = "Dois"
            break
        case '3':
            resultado = "Três"
            break
        case '4':
            resultado = "Quatro"
            break
        case '5':
            resultado = "Cinco"
            break
        case '6':
            resultado = "Seis"
            break
        case '7':
            resultado = "Sete"
            break
        case '8':
            resultado = "Oito"
            break
        case '9':
            resultado = "Nove"
            break
        case '10':
            resultado = "Dez"
            break
    }
    document.querySelector('#resultado').innerText = resultado
}
