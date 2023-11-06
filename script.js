var button = document.querySelector('.lista')
var popup = document.querySelector('.popup-wrapper')
var agenda = new Array()

function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET",url,false)
    request.send()
    return request.responseText
}

function criaCard(professor){
    let card = document.createElement("div");
    card.classList.add('card')

    let prof = document.createElement("div");
    prof.classList.add('prof')

    let imagem = document.createElement("img");
    imagem.setAttribute('src',professor.url)

    let nomeProf = document.createElement("p");
    nomeProf.innerHTML = professor.nome + ', professor(a) de ' + professor.materia

    prof.appendChild(imagem);
    prof.appendChild(nomeProf);

    let button = document.createElement("button");
    button.setAttribute('id', professor.id)
    button.innerHTML = 'Agendar Aula'

    let botao = document.createElement("div");
    botao.classList.add('botao')
    let link = document.createElement("a");
    link.setAttribute('href', "")
    botao.innerHTML = 'Conversar'

    card.appendChild(prof);
    card.appendChild(button);
    card.appendChild(botao);

    return card;
}

function main(){
    let data = fazGet("http://vps44051.publiccloud.com.br:5000/api/Professores")
    let professores = JSON.parse(data);
    let tabela = document.getElementById("professores")
    professores.forEach(element => {
        let linha = criaCard(element);
        tabela.appendChild(linha);
    });
}

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


main()

