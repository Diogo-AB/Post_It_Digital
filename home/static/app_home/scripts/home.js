// ==UserScript==
// @charset UTF-8
// ==/UserScript==


document.addEventListener("DOMContentLoaded", function () {
    var diasDaSemana = ["Domingo", "Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];
    var dataAtual = new Date();
    var diaDaSemana = diasDaSemana[dataAtual.getDay()];
    document.getElementById("dataAtual").innerHTML = diaDaSemana;
});


function addPostIt(day) {
    const postItList = document.getElementById(`post-its-${day}`);

    // Sequência de classes de cards disponíveis no Bootstrap
    const cardClasses = [
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'light',
        'dark'
    ];

    // Obter o número de post-its já presentes
    const existingPostIts = postItList.getElementsByClassName('post-it').length;

    // Calcular o índice do estilo do card com base no número de post-its existentes
    const cardIndex = existingPostIts % cardClasses.length;

    // Criar o novo post-it como um elemento <div> com a classe do card correspondente ao índice
    const newPostIt = document.createElement('div');
    newPostIt.className = `post-it card text-${cardClasses[cardIndex]} bg-${cardClasses[cardIndex]} mb-3`;

    // Adicionar um cabeçalho ao post-it
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    // Adicionar um campo de entrada para o título
    const titleInput = document.createElement('input');
    titleInput.className = 'form-control'; // Remover a classe de cor do texto
    titleInput.style.color = cardClasses[cardIndex] === 'light' ? '#000' : '#fff'; // Ajustar a cor do texto com base no fundo do card
    titleInput.placeholder = 'Title';
    cardHeader.appendChild(titleInput);

    // Criar o corpo do cartão
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Adicionar um campo de entrada para o corpo
    const bodyInput = document.createElement('textarea');
    bodyInput.className = 'form-control'; // Remover a classe de cor do texto
    bodyInput.style.color = cardClasses[cardIndex] === 'light' ? '#000' : '#fff'; // Ajustar a cor do texto com base no fundo do card
    bodyInput.placeholder = 'Body';
    cardBody.appendChild(bodyInput);

    // Aninhar os elementos conforme necessário
    newPostIt.appendChild(cardHeader);
    newPostIt.appendChild(cardBody);

    // Adicionar o novo post-it à lista de post-its
    postItList.appendChild(newPostIt);
}




document.addEventListener('DOMContentLoaded', function () {
    // Adicione um ouvinte de evento ao botão
    const nextWeekButton = document.getElementById('nextWeekButton');
    nextWeekButton.addEventListener('click', loadNextWeek);
});

document.addEventListener('DOMContentLoaded', function () {
    updateDate();
});

function updateDate() {
    const currentDate = new Date();

    for (let i = 0; i < 7; i++) {
        const dayElement = document.querySelector(`.date.${getDayName(i).toLowerCase()}`);
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() + i);

        if (dayElement) {
            dayElement.textContent = formatDate(date);
        }
    }
}

function getDayName(index) {
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    return daysOfWeek[index];
}

function formatDate(date) {
    return date.toLocaleDateString('pt-BR', { day: 'numeric' });
}


// Função para carregar os dados da próxima semana

// Verifique se a variável já foi declarada antes de declará-la novamente

function formatDateString(dateString) {
    return dateString ? dateString.split('-').reverse().join('/') : '';
}

// Função para atualizar a interface com os dados da próxima semana
function updateInterface(data) {
    // Exemplo: Atualizar um elemento na interface com a data de início da semana
    const startDateElement = document.getElementById('startDate');
    if (startDateElement) {
        startDateElement.textContent = formatDateString(data.start_date);
    }

    // Adicione lógica adicional para atualizar outros elementos da interface conforme necessário
}

// Função para carregar os dados da próxima semana
function loadNextWeek() {
    // Substitua o valor da semana atual conforme necessário
    const currentWeek = 1;
    fetch(`/api/semanas/${currentWeek + 1}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Certifique-se de que data é definido antes de chamar updateInterface
            if (data) {
                updateInterface(data);
            } else {
                console.error('Erro ao carregar os dados da próxima semana: Dados indefinidos');
            }
        })
        .catch(error => {
            console.error('Erro ao carregar os dados da próxima semana:', error);
        });
}

// Adicione um ouvinte de evento ao botão
document.addEventListener('DOMContentLoaded', function () {
    const nextWeekButton = document.getElementById('nextWeekButton');
    if (nextWeekButton) {
        nextWeekButton.addEventListener('click', loadNextWeek);
    }
});
