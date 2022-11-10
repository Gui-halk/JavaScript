const operadorOne = document.getElementById('operador1')
const operadorTwo = document.getElementById('operador2')
const submit = document.getElementById('submit')
const resultado = document.getElementById('resultado')



function calcular(){
    const a = parseInt(operadorOne.value)
    const b = parseInt(operadorTwo.value)
    let resultado 
    
    switch(document.getElementById('operador').value){
        case'1':
            resultado = a + b
            break
        case '2':
            resultado = a - b
            break
        case '3':
            resultado = a * b
            break
        case '4':
            resultado = a / b
            break
    }
    document.querySelector('#resultado').innerHTML = resultado
    console.log(resultado)
}