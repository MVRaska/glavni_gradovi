let question1 = {
    text: 'What is the capital of Cyprus?',
    answers: ['Limassol', 'Paphos', 'Larnaca', 'Nicosia'],
    correctAnswerIndex: 3
};

let question2 = {
    text: 'What is the capital of Liechtenstein?',
    answers: ['Vaduz', 'Schaan', 'Triesen', 'Balzers'],
    correctAnswerIndex: 0
};

let question3 = {
    text: 'What is the capital of Mongolia?',
    answers: ['Moron', 'Erdenet', 'Darkhan', 'Ulaanbaatar'],
    correctAnswerIndex: 3
};

let question4 = {
    text: 'What is the capital of Papua New Guinea?',
    answers: ['Lae', 'Port Moresby', 'Arawa', 'Mount Hagen'],
    correctAnswerIndex: 1
};

let question5 = {
    text: 'What is the capital of Australia?',
    answers: ['Melbourne', 'Brisbane', 'Perth', 'Canberra'],
    correctAnswerIndex: 3
};

let question6 = {
    text: 'What is the capital of Tanzania?',
    answers: ['Tabora', 'Singida', 'Dodoma', 'Dar es Salaam'],
    correctAnswerIndex: 2
};

let question7 = {
    text: 'What is the capital of Canada?',
    answers: ['Toronto', 'Montreal', 'Edmonton', 'Ottawa'],
    correctAnswerIndex: 3
};

let question8 = {
    text: 'What is the capital of Lebanon?',
    answers: ['Tripoli', 'Beirut', 'Sidon', 'Tyre'],
    correctAnswerIndex: 1
};

let question9 = {
    text: 'What is the capital of Morocco?',
    answers: ['Casablanca', 'Meknes', 'Rabat', 'Marrakesh'],
    correctAnswerIndex: 2
};

let question10 = {
    text: 'What is the capital of Uruguay?',
    answers: ['Montevideo', 'Salto', 'Ciudad de la Costa', 'Paysandú'],
    correctAnswerIndex: 0
};

let question11 = {
    text: 'What is the capital of Turkey?',
    answers: ['Antalya', 'Istanbul', 'Ankara', 'Izmir'],
    correctAnswerIndex: 2
};

let question12 = {
    text: 'What is the capital of India?',
    answers: ['Mumbai', 'New Delhi', 'Kolkata', 'Chennai'],
    correctAnswerIndex: 1
};

let question13 = {
    text: 'What is the capital of Brazil?',
    answers: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
    correctAnswerIndex: 1
};

let question14 = {
    text: 'What is the capital of Switzerland?',
    answers: ['Zurich', 'Geneva', 'Bern', 'Basel'],
    correctAnswerIndex: 2
};

let question15 = {
    text: 'What is the capital of Israel?',
    answers: ['Tel Aviv', 'Haifa', 'Jerusalem', 'Holon'],
    correctAnswerIndex: 0
};

let questions = [
    question1, question2, question3, question4, question5,
    question6, question7, question8, question9, question10,
    question11, question12, question13, question14, question15
];

let mixedQuestions = [];

for (let i = questions.length - 1; i >= 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    mixedQuestions[i] = questions[randomIndex];
    questions[randomIndex] = questions[i];
}

let divForm = document.getElementById('form');
let form = document.createElement('form');
divForm.appendChild(form);

for (let i = 0; i < 5; i++) {
    let section = document.createElement('section');
    form.append(section);

    let label = document.createElement('label');
    label.innerHTML = `${i + 1}.  ${mixedQuestions[i].text} <br>`;
    section.append(label);

    for (let j = 0; j < mixedQuestions[i].answers.length; j++) {
        let radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = (i + 1);
        radioBtn.value = false;
        if (j === mixedQuestions[i].correctAnswerIndex) {
            radioBtn.value = true;
        }
        if (j === 0) {
            radioBtn.setAttribute('checked', 'true');
        }
        section.append(radioBtn);

        let span = document.createElement('span');
        span.innerHTML = ` ${mixedQuestions[i].answers[j]}<br>`;
        section.append(span);
    }
}

let btnSubmitAnswers = document.createElement('input');
btnSubmitAnswers.type = 'submit';
btnSubmitAnswers.value = 'Submit Answers';

let btnNewQuestions = document.createElement('input');
btnNewQuestions.type = 'submit';
btnNewQuestions.value = 'New Questions';
btnNewQuestions.style.marginLeft = '20px';

form.append(btnSubmitAnswers, btnNewQuestions);

let output = document.getElementById('output');

btnSubmitAnswers.addEventListener('click', (e) => {
    e.preventDefault();

    output.innerHTML = '';

    for (let i = 0; i < 5; i++) {
        let radioBtns = form.querySelectorAll(`input[name="${i + 1}"]`);
        let correct = false;

        for (let j = 0; j < mixedQuestions[i].answers.length; j++) {
            if (radioBtns[j].checked && radioBtns[j].value === 'true') {
                correct = true;
            }
            radioBtns[j].disabled = true;
        }

        if (correct) {
            output.innerHTML += `<p style='color: green;'>You answered question ${i + 1} correctly.</p>`;
        } else {
            output.innerHTML += `<p style='color: red;'>You answered question ${i + 1} incorrectly.</p>`;
        }
    }

    btnSubmitAnswers.disabled = true;
});

btnNewQuestions.addEventListener('click', () => {
    output.innerHTML = '';
});
