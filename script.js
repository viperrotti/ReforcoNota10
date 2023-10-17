var button = document.querySelector('.lista')
var popup = document.querySelector('.popup-wrapper')
var agenda = new Array()

button.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (isButton) {
    popup.style.display = 'block';
    }
})

popup.addEventListener('click', event => {
    var classNameOfClickedElement = event.target.classList[0]

    if( classNameOfClickedElement === 'popup-close' || 
        classNameOfClickedElement === 'popup-link' || 
        classNameOfClickedElement === 'popup-wrapper'){
        popup.style.display = 'none';
    }
})

function Enviar() {

    var date = document.getElementById("date");
    var time = document.getElementById("appt");
    const dataCriada = new Date(date.value);
    const dataFormatada = dataCriada.toLocaleDateString('pt-BR', {timeZone: 'UTC',});

    alert('Obrigado, sua aula foi agendada para o dia ' + dataFormatada + ' às ' + time.value + 'h');
    var novoDado = dataFormatada + ' - ' + time.value
    agenda.push(novoDado)

    let agendadas = 'Próximas Aulas \n';
    for(let i = 0; i < agenda.length; i = i + 1 ) {
        agendadas += agenda[i] + '\n';
    }
    alert(agendadas)
} 




