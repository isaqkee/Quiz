const question = [
    {
      options: ['a) Vaticano e Rússia', 'b) Nauru e China', 'c) Mônaco e Canadá', 'd) Malta e Estados Unidos', 'e) São Marino e Índia'],
      correctAnswer: 0
      
    },
    {
      correctAnswer: 3,
      options: ['a) 113', 'b) 109', 'c) 108', 'd) 118', 'e) 92']
    },
    {
      correctAnswer: 4,
      options: ['a) 12 minutos', 'b) 1 hora', 'c) 12 horas', 'd) 8 minutos', 'e) 12 segundos']
    },
    {
      correctAnswer: 0,
      options: ['a) Terra, Vênus, Saturno, Urano, Júpiter, Marte, Netuno, Mercúrio', 'b) Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Terra, Urano, Vênus', 'c) Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Terra, Urano, Vênus', 'd) Júpiter, Marte, Mercúrio, Netuno, Plutão, Saturno, Sol, Terra, Urano, Vênus', 'e) Terra, Vênus, Saturno, Júpiter, Marte, Netuno, Mercúrio']
    }
  ];
  
  const optionsButtons = document.querySelectorAll('.opcoes');
  const nextButton = document.querySelector('.next-button');
  
  let currentQuestionIndex = 0;
  let answered = false;
  
  optionsButtons.forEach(button => {
    button.addEventListener('click', () => handleAnswer(button));
  });
  
  nextButton.addEventListener('click', () => showNextQuestion());
  
  function handleAnswer(selectedOption) {
    if (answered) return;
    answered = true;
  
    optionsButtons.forEach(button => {
      button.classList.add('incorrect');
      if (button.textContent === questions[currentQuestionIndex].correctAnswer) {
        button.classList.remove('incorrect');
        button.classList.add('correct');
      }
    });
  
    selectedOption.classList.add('selected');
  
    nextButton.disabled = false;
  }
  
  function showNextQuestion() {
    answered = false;
    nextButton.disabled = true;
    optionsButtons.forEach(button => {
      button.classList.remove('incorrect', 'correct', 'selected');
    });
  
    currentQuestionIndex++;
  
    if (currentQuestionIndex < questions.length) {
      loadQuestion(currentQuestionIndex);
    } else {
      showResult();
    }
  }
  
  function loadQuestion(index) {
    const currentQuestion = questions[index];
    const options = currentQuestion.options;
  
    optionsButtons.forEach((button, i) => {
      button.textContent = options[i];
    });
  
    nextButton.disabled = true;
  }
  
  function showResult() {
    const container = document.querySelector('.container');
    container.innerHTML = `
      <h1>Resultado</h1>
      <p>Seu resultado foi: ${calculateScore()} pontos!</p>
    `;
  }
  
  function calculateScore() {
    let score = 0;
    optionsButtons.forEach(button => {
      if (button.classList.contains('correct')) {
        score += 10;
      }
    });
    return score;
  }
  
  loadQuestion(currentQuestionIndex);
  
