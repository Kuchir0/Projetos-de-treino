// Seleciona o botão e o contador
const button = document.getElementById('clickButton');
const counter = document.getElementById('counter');

let count = 0;

// Evento de clique ao botão
button.addEventListener('click', () => {
    count++; // aumenta o contador
    counter.textContent = count; // Atualiza o texto do contador
});
