const cep = document.querySelector('input-one')

cep.addEventListener('keypress' , () => {
    let cepL = cep.ariaValueMax.length
    console.log(cepL)

    if (cepL === 5) {
        cep.value += '-'
    }
})