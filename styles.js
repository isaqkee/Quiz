const options = document.querySelectorAll('.option');
const scoreDisplay = document.getElementById('score');
const questionImage = document.getElementById('question-image');
const questionText = document.getElementById('question-text');

let score = 0;
let chances = 2;
let currentQuestion = 0;

options.forEach(option => {
    option.addEventListener('click', checkAnswer);
});

const questions = [
    {
        question: 'Quais o menor e o maior país do mundo?',
        image: 'img/mapa-mundi.jpg',
        options: ['Vaticano e Rússia', ' Nauru e China', ' Nauru e China', 'São Marino e Índia'],
        answer: 'Vaticano e Rússia'
    },
    {
        image: 'img/tabela-periodica.jpg',
        question: 'Atualmente, quantos elementos químicos a tabela periódica possui?',
        options: ['113', '109', '108', '118'],
        answer: '118'
    },
    {
        image: 'img/sol.jpg',
        question: 'Quanto tempo a luz do Sol demora para chegar à Terra?',
        options: ['8 minutos', '12 minutos', '12 segundos', '4 minutos'],
        answer: '8 minutos'
    },
    {
        image: 'img/astronomia.jpg',
        question: 'Júpiter e Plutão são os correlatos romanos de quais deuses gregos?',
        options: ['Ares e Hermes', 'Cronos e Apolo', 'Zeus e Hades', 'Zeus e Ares'],
        answer: 'Zeus e Hades'
    },
    {
        image: 'img/animais.jpg',
        question: 'Qual o maior animal terrestre?',
        options: ['Lula Terrestre', 'Hipopótamo', 'Elefante africano', 'Baleia Azul'],
        answer: 'Elefante africano'
    }
];

function checkAnswer(event) {
    const selectedOption = event.target;
    
    if (selectedOption.textContent === questions[currentQuestion].answer) {
        score += 10;
        scoreDisplay.textContent = score;
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            loadQuestion(currentQuestion);
        } else {
            alert('Parabéns! Já pode estudar no Sesi!!!');
        }
    } else {
        chances--;
        if (chances === 0) {
            alert('Volta pra escola agora.');
            resetQuiz();
        } else {
            alert('Vou ser humilde vai, Mais uma CHANCE!.');
        }
    }
}

function loadQuestion(questionIndex) {
    const currentQuestionData = questions[questionIndex];
    
    questionImage.src = currentQuestionData.image;
    questionText.textContent = currentQuestionData.question;
    
    options.forEach((option, index) => {
        option.textContent = currentQuestionData.options[index];
    });
}

function resetQuiz() {
    score = 0;
    chances = 2;
    currentQuestion = 0;
    scoreDisplay.textContent = score;
    loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);