const options = document.querySelectorAll('.option');
const nextButton = document.querySelector('.next-button');

let score = 0;
let questionIndex = 0;
const questions = [
  {
    image: 'pergunta1.jpg',
    question: 'Qual é a capital do Brasil?',
    options: ['São Paulo', 'Rio de Janeiro', 'Brasília', 'Belo Horizonte'],
    correctAnswer: 'Brasília'
  },
  // Adicione mais perguntas aqui...
];

loadQuestion();

function loadQuestion() {
  const currentQuestion = questions[questionIndex];
  const questionImage = document.querySelector('.question img');
  const questionText = document.querySelector('.question h2');
  const optionsList = document.querySelector('.options');

  questionImage.src = currentQuestion.image;
  questionText.textContent = currentQuestion.question;

  optionsList.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const li = document.createElement('li');
    li.classList.add('option');
    li.textContent = `${String.fromCharCode(65 + index)}) ${option}`;
    optionsList.appendChild(li);
  });

  options.forEach(option => {
    option.addEventListener('click', handleAnswerClick);
  });
}

function handleAnswerClick(event) {
  const selectedOption = event.target.textContent.substr(3);
  const correctAnswer = questions[questionIndex].correctAnswer;

  if (selectedOption === correctAnswer) {
    score += 10;
  }

  options.forEach(option => {
    option.removeEventListener('click', handleAnswerClick);
  });

  questionIndex++;

  if (questionIndex < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const container = document.querySelector('.container');
  container.innerHTML = `
    <h1>Resultado</h1>
    <p>Você fez ${score} pontos!</p>
  `;
}
