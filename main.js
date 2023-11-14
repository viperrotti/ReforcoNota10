function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}

function criaLinha(aula) {
    console.log(aula)
    linha = document.createElement("tr");
    tdnomeProf = document.createElement("td");
    tdMateria = document.createElement("td");
    tdData = document.createElement("td");
    tdHora = document.createElement("td");
    tdnomeProf.innerHTML = aula.nomeProf
    tdMateria.innerHTML = aula.materia
    tdData.innerHTML = aula.data
    tdHora.innerHTML = aula.hora

    linha.appendChild(tdnomeProf);
    linha.appendChild(tdMateria);
    linha.appendChild(tdData);
    linha.appendChild(tdHora);

    return linha;
}

function main() {
    let data = fazGet("http://vps44051.publiccloud.com.br:5000/api/Agenda");
    let aulas = JSON.parse(data);
    let tabela = document.getElementById("tabela");
    aulas.forEach(element => {
        let linha = criaLinha(element);
        tabela.appendChild(linha);
    });
    // Para cada usuario
        // criar uma linha
        // adicionar na tabela
}

main()