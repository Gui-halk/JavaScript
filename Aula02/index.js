const inputOne = document.getElementById('input-one')
const inputTwo = document.getElementById('input-two')
const submit = document.querySelector('button')


submit.addEventListener('click', event =>{
    event.preventDefault()

    const a = inputOne.value.length
    const b = inputTwo.value.length
    
    console.log((a > b)? 'maior': (a < b)? 'menor': 'igual')

})