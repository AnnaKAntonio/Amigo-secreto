const nomeInput = document.getElementById('nome-input');
const adicionarBtn = document.getElementById('adicionar-btn');
const sortearBtn = document.getElementById('sortear-btn');
const resultadoDiv = document.getElementById('resultado');
const listaNomes = document.getElementById('lista-nomes');

let nomes = [];

adicionarBtn.addEventListener('click', () => {
    const nome = nomeInput.value.trim();
    if (nome) {
        nomes.push(nome);
        nomeInput.value = '';
        nomeInput.classList.remove('erro');
        atualizarListaNomes(); // Atualiza a lista de nomes
    } else {
        nomeInput.classList.add('erro');
        alert('Por favor, insira um nome válido!');
    }
});

function atualizarListaNomes() {
    listaNomes.innerHTML = ''; // Limpa a lista antes de atualizar
    nomes.forEach(nome => {
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaNomes.appendChild(itemLista);
    });
}

sortearBtn.addEventListener('click', () => {
    if (nomes.length < 1) {
        alert('Adicione pelo menos um nome!');
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];

    resultadoDiv.innerHTML = `<h2>Nome Sorteado:</h2><p>${nomeSorteado}</p>`;
});
