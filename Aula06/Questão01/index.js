const select = document.querySelector('select')
const resultado = document.querySelector('resultado')

select.addEventListener('change', function (event){
    resultado.src = `./img/${event.target.value}.png`

    if(event.target.value == "select") {
        resultado.src = "";
    }
})