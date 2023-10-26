const questions = document.querySelectorAll('.question');
const progressBar = document.getElementById('progressBar');
const nextButton = document.getElementById('nextButton');
let currentQuestionIndex = 0;
let answers = [];

function showQuestion(index) {
    questions.forEach((question, i) => {
        if (i === index) {
            question.style.display = 'block';
        } else {
            question.style.display = 'none';
        }
    });
}

function updateProgressBar() {
    const percent = (currentQuestionIndex / (questions.length)) * 100;
    progressBar.style.width = percent + '%';
}

function collectAnswer(answer) {
    answers.push(answer);
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion(currentQuestionIndex);
        updateProgressBar();
    } else {
        // Quiz is complete
        alert('Quiz complete. Answers: ' + answers.join(', '));
    }
}

questions.forEach((question, index) => {
    const choices = question.querySelectorAll('.choice');
    choices.forEach((choice) => {
        choice.addEventListener('click', () => {
            choices.forEach((c) => c.classList.remove('selected'));
            choice.classList.add('selected');
            collectAnswer(choice.textContent);
        });
    });
});

showQuestion(currentQuestionIndex);
updateProgressBar();
