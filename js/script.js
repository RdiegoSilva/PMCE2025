// Função para atualizar a data e hora no cabeçalho
function updateDateTime() {
    const dateTimeElement = document.getElementById('dateTime');
    const dateElement = document.getElementById('date');
    const timeElement = document.getElementById('time');

    const now = new Date();

    // Data no formato dd/mm/aaaa
    const date = now.toLocaleDateString('pt-BR');

    // Hora no formato HH:MM:SS
    const time = now.toLocaleTimeString('pt-BR');

    dateElement.textContent = date;
    timeElement.textContent = time;
}

// Atualiza a data e hora a cada segundo
setInterval(updateDateTime, 1000);

// Executa imediatamente ao carregar a página
updateDateTime();

// DIAS
// Matérias de estudo por dia da semana
const schedule = {
    'Segunda': {
        morning: 'Língua Portuguesa / Interpretação de Texto',
        afternoon: 'Raciocínio Lógico'
    },
    'Terça': {
        morning: 'Atualidades / História do Ceará',
        afternoon: 'Noções de Administração Pública / Ética no Serviço Público'
    },
    'Quarta': {
        morning: 'Noções de Direito Constitucional',
        afternoon: 'Noções de Direitos Humanos'
    },
    'Quinta': {
        morning: 'Noções de Direito Penal Militar / Processo Penal Militar',
        afternoon: 'Noções de Direito Penal'
    },
    'Sexta': {
        morning: 'Noções de Criminologia',
        afternoon: 'Segurança Pública'
    },
    'Sábado': {
        morning: 'Simulado (todas as disciplinas)',
        afternoon: 'Descanso ou Revisão leve'
    },
    'Domingo': {
        morning: 'Descanso ou Leitura de Atualidades',
        afternoon: 'Estudo em grupo ou Revisão leve'
    }
};

// Função para obter o dia da semana atual
function getTodaySchedule() {
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const today = new Date().getDay();
    console.log(`Hoje é: ${days[today]}`);
    return days[today];
}

// Atualizar as matérias do dia na página
function updateDailyStudy() {
    console.log('Atualizando matérias do dia...');
    const today = getTodaySchedule();
    const scheduleToday = schedule[today];
    console.log(`Matérias de hoje:`, scheduleToday);

    if (scheduleToday) {
        const morningElement = document.getElementById('morningStudy');
        const afternoonElement = document.getElementById('afternoonStudy');

        if (morningElement && afternoonElement) {
            morningElement.textContent = scheduleToday.morning;
            afternoonElement.textContent = scheduleToday.afternoon;
            console.log('Matérias atualizadas com sucesso!');
        } else {
            console.error('Erro: Os elementos com IDs morningStudy e afternoonStudy não foram encontrados.');
        }
    } else {
        console.error('Erro: Não foi possível carregar o cronograma do dia.');
    }
}

// Executar ao carregar a página
window.addEventListener('DOMContentLoaded', updateDailyStudy);
