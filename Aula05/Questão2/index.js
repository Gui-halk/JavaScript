const submit = document.getElementById('submit')

function exibir() {
  let day = new Date(document.getElementById('input-one').value).getDay

  switch (new Date().getDay()) {
   case 0:
    day = "Segunda-feira";
    break;
   case 1: 
    day = "Terça-feira";
    break;
   case 2:
    day = "Quarta-feira";
    break;
   case 3:
    day = "Quinta-feira";
    break;
   case 4:
    day = "Sexta-feira";
    break;
   case 5:
    day = "Sabado";
    break;
   case 6:
    day = "Domingo";
    break;
   }
   document.querySelector('#resultado').innerText = day
  }









