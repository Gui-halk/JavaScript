function logUser() {

    try {

        console.log(user());

    } catch(e) {

        console.log(e)

    }

    
    
}

function createUser(){
    
}

function user() {

    const inputs = document.querySelectorAll('input')
    for (let i = 0; i < inputs.length; i++) inputs[i].style.border = "none"

    const playerName = document.querySelector("#playerName").value;
    if (playerName.length <= 5) throw "Mensagem de erro do Exercício";
    
    const day = Number(document.querySelector("#day").value);
    const month = Number(document.querySelector("#month").value) - 1;
    const year = Number(document.querySelector("#year").value);
    const weight = document.querySelector("#playerWeight").value;
    const height = document.querySelector("#playerHeight").value;
    const gender = document.querySelector("#gender").value;

    const user = {
        name : playerName,
        birthDate : new Date(Date.UTC(year, month, day) + 86400000),
        weight : parseFloat(weight.replace(',','.')),
        height : parseInt(height, 10),
        gender : gender
    }
    
    for (let i = 0; i < inputs.length; i++){
        if (inputs[i].value === "") {
            inputs[i].style.border = "1px solid red"
            throw "preenche quinem gente"
        }
    }

    if (validateWeight(user)) throw "Peso invalido!"
    if (validateDateInput(year, month, day)) throw "Data invalida!"
    
    return user

}

function validateWeight(user) {

    if (user.weight <= 0) return true
    
    return false

}

function validateDateInput(year, month, day) {

    // checa se data inputada é maior que data atual
    const timestamp = Date.now() + 86400000;
    const date = Date.UTC(year, month, day) + 86400000;
    if (date - timestamp > 0) return true

   // checa mes
    if (month >= 12 || month < 0 ) return true
    
    //checa dia
    let maxDays;
    switch (month+1) {
        case 1: maxDays = 31; break
        case 2: maxDays = 28; break
        case 3: maxDays = 31; break
        case 4: maxDays = 30; break
        case 5: maxDays = 31; break
        case 6: maxDays = 30; break
        case 7: maxDays = 31; break
        case 8: maxDays = 31; break
        case 9: maxDays = 30; break
        case 10: maxDays = 31; break
        case 11: maxDays = 30; break
        case 12: maxDays = 31; break
    }
    if (year % 4 === 0 && month === 2) {
        maxDays = 29;
    }
    if (day > maxDays || day < 1) return true
    
    return false
        
}