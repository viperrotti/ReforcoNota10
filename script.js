var button = document.querySelector('.lista')
var popup = document.querySelector('.popup-wrapper')

button.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
    popup.style.display = 'block';
    }
})

popup.addEventListener('click', event => {
    var classNameOfClickedElement = event.target.classList[0]

    if(classNameOfClickedElement === 'popup-close' || classNameOfClickedElement === 'popup-link' || classNameOfClickedElement === 'popup-wrapper'){
        popup.style.display = 'none';
    }
})

function Enviar() {

    var date = document.getElementById("date");
    var time = document.getElementById("appt");

    alert('Obrigado, sua aula foi agendada para o dia ' + date.value + ' às ' + time.value);
} 