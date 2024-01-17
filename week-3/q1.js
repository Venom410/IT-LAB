const quizData = [
  {
    question: "What is the Famous food of Italy?",
    inputType: "dropdown",
    options: ["Dosa", "Omlette", "Burger", "Pizza"],
    correctAnswer: "Pizza"
  },
  {
    question: "Select the States in India.",
    inputType: "checkbox",
    options: ["Punjab", "Hong Kong", "Delhi", "Bengal"],
    correctAnswer: ["Punjab", "Delhi"]
  },
  {
    question: "Which is not a programming language ?",
    inputType: "radiogroup",
    options: ["P++", "Python", "Zebra", "CUDA"],
    correctAnswer: "Python"
  }
];

let score = 0;

function loadQuestions() {
  const questionsContainer = document.getElementById('questions-container');

  quizData.forEach((questionData, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.innerHTML = `<p>${questionData.question}</p>`;

    const optionsContainer = document.createElement('div');
    optionsContainer.setAttribute('class', 'options-container');

    const inputType = questionData.inputType;
    const options = questionData.options;

    if (inputType === "dropdown") {
      const dropdown = document.createElement('select');
      dropdown.setAttribute('id', `dropdown${index}`);
      for (let i = 0; i < options.length; i++) {
        const option = document.createElement('option');
        option.value = options[i];
        option.textContent = options[i];
        dropdown.appendChild(option);
      }
      optionsContainer.appendChild(dropdown);
    } else if (inputType === "checkbox") {
      for (let i = 0; i < options.length; i++) {
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = options[i];
        checkbox.id = `option${index}_${i}`;
        const label = document.createElement('label');
        label.textContent = options[i];
        label.setAttribute('for', `option${index}_${i}`);
        optionsContainer.appendChild(checkbox);
        optionsContainer.appendChild(label);
      }
    } else if (inputType === "radiogroup") {
      for (let i = 0; i < options.length; i++) {
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = `options${index}`;
        radio.value = options[i];
        radio.id = `option${index}_${i}`;
        const label = document.createElement('label');
        label.textContent = options[i];
        label.setAttribute('for', `option${index}_${i}`);
        optionsContainer.appendChild(radio);
        optionsContainer.appendChild(label);
      }
    }

    questionsContainer.appendChild(questionDiv);
    questionsContainer.appendChild(optionsContainer);
  });
}

function selectOptions() {
  quizData.forEach((questionData, index) => {
    const inputType = questionData.inputType;
    let selectedOptions;

    if (inputType === "dropdown") {
      selectedOptions = document.getElementById(`dropdown${index}`).value;
    } else if (inputType === "checkbox") {
      selectedOptions = Array.from(document.querySelectorAll(`input[type="checkbox"]:checked`))
        .map(checkbox => checkbox.value);
    } else if (inputType === "radiogroup") {
      const selectedRadio = document.querySelector(`input[name="options${index}"]:checked`);
      selectedOptions = selectedRadio ? selectedRadio.value : null;
    }

    const correctAnswer = questionData.correctAnswer;

    if (Array.isArray(correctAnswer)) {

      const correct = correctAnswer.length === selectedOptions.length && correctAnswer.every(option => selectedOptions.includes(option));
      if (correct) {
        score++;
      }
    } else {
      if (selectedOptions === correctAnswer) {
        score++;
      }
    }
      if (score >= 3) {
        score=3;
      }
  });
}

function showResult() {
  const resultContainer = document.getElementById('result-container');
  resultContainer.innerHTML = `Your score: ${score} out of ${quizData.length}`;
}

function submitAnswer() {
  selectOptions();
  showResult();
}

loadQuestions();
