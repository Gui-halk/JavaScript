const resultado = document.getElementById('resultado')

function exibir(){
    let imagem
    
    switch(document.getElementById('select').value){
        case '1':
            imagem = 'url(./img/mouse.jpg)'
            break
        case '2':
            imagem = 'url(./img/teclado.webp)'
            break
        case '3':
            imagem = 'url(./img/headset.jfif)'
            break
        case '4':
            imagem = 'url(./img/mousepad.jpg)'
            break
        case '5':
            imagem = 'url(./img/monitor.webp)'
            break
    }
    resultado.style.backgroundImage = imagem
    resultado.style.display = 'block'
}