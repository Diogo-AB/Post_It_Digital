// ==UserScript==
// @charset UTF-8
// ==/UserScript==


document.addEventListener("DOMContentLoaded", function () {
    var diasDaSemana = ["Domingo", "Segunda-feira", "Ter�a-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "S�bado"];
    var dataAtual = new Date();
    var diaDaSemana = diasDaSemana[dataAtual.getDay()];
    document.getElementById("dataAtual").innerHTML = diaDaSemana;
});


function addPostIt(day) {
    const postItList = document.getElementById(`post-its-${day}`);

    // Sequ�ncia de classes de cards dispon�veis no Bootstrap
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

    // Obter o n�mero de post-its j� presentes
    const existingPostIts = postItList.getElementsByClassName('post-it').length;

    // Calcular o �ndice do estilo do card com base no n�mero de post-its existentes
    const cardIndex = existingPostIts % cardClasses.length;

    // Criar o novo post-it como um elemento <div> com a classe do card correspondente ao �ndice
    const newPostIt = document.createElement('div');
    newPostIt.className = `post-it card text-${cardClasses[cardIndex]} bg-${cardClasses[cardIndex]} mb-3`;

    // Adicionar um cabe�alho ao post-it
    const cardHeader = document.createElement('div');
    cardHeader.className = 'card-header';

    // Adicionar um campo de entrada para o t�tulo
    const titleInput = document.createElement('input');
    titleInput.className = 'form-control'; // Remover a classe de cor do texto
    titleInput.style.color = cardClasses[cardIndex] === 'light' ? '#000' : '#fff'; // Ajustar a cor do texto com base no fundo do card
    titleInput.placeholder = 'Title';
    cardHeader.appendChild(titleInput);

    // Criar o corpo do cart�o
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // Adicionar um campo de entrada para o corpo
    const bodyInput = document.createElement('textarea');
    bodyInput.className = 'form-control'; // Remover a classe de cor do texto
    bodyInput.style.color = cardClasses[cardIndex] === 'light' ? '#000' : '#fff'; // Ajustar a cor do texto com base no fundo do card
    bodyInput.placeholder = 'Body';
    cardBody.appendChild(bodyInput);

    // Aninhar os elementos conforme necess�rio
    newPostIt.appendChild(cardHeader);
    newPostIt.appendChild(cardBody);

    // Adicionar o novo post-it � lista de post-its
    postItList.appendChild(newPostIt);
}




document.addEventListener('DOMContentLoaded', function () {
    // Adicione um ouvinte de evento ao bot�o
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
    const daysOfWeek = ['Domingo', 'Segunda-feira', 'Ter�a-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'S�bado'];
    return daysOfWeek[index];
}

function formatDate(date) {
    return date.toLocaleDateString('pt-BR', { day: 'numeric' });
}


// Fun��o para carregar os dados da pr�xima semana

// Verifique se a vari�vel j� foi declarada antes de declar�-la novamente

function formatDateString(dateString) {
    return dateString ? dateString.split('-').reverse().join('/') : '';
}

// Fun��o para atualizar a interface com os dados da pr�xima semana
function updateInterface(data) {
    // Exemplo: Atualizar um elemento na interface com a data de in�cio da semana
    const startDateElement = document.getElementById('startDate');
    if (startDateElement) {
        startDateElement.textContent = formatDateString(data.start_date);
    }

    // Adicione l�gica adicional para atualizar outros elementos da interface conforme necess�rio
}

// Fun��o para carregar os dados da pr�xima semana
function loadNextWeek() {
    // Substitua o valor da semana atual conforme necess�rio
    const currentWeek = 1;
    fetch(`/api/semanas/${currentWeek + 1}/`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro na requisi��o: ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            // Certifique-se de que data � definido antes de chamar updateInterface
            if (data) {
                updateInterface(data);
            } else {
                console.error('Erro ao carregar os dados da pr�xima semana: Dados indefinidos');
            }
        })
        .catch(error => {
            console.error('Erro ao carregar os dados da pr�xima semana:', error);
        });
}

// Adicione um ouvinte de evento ao bot�o
document.addEventListener('DOMContentLoaded', function () {
    const nextWeekButton = document.getElementById('nextWeekButton');
    if (nextWeekButton) {
        nextWeekButton.addEventListener('click', loadNextWeek);
    }
});
