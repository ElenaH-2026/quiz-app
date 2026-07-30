function initQuiz(category) {
    loadQuestion(category, questionIndex = 1);
    loadAnswers(category, questionIndex = 1);
}  

function loadQuestion(category, questionIndex) {
    const questionText = document.getElementById("#QuestionText");
    questionText.textContent = category[questionIndex].question;

}

function loadAnswers(category, questionIndex) {
    for (let answerNr = 1; answerNr <= 4; answerNr++) {
        renderAnswerContainer(answerNr);
        renderAnswerText(category, questionIndex, answerNr);
    }
}

function renderAnswerContainer(answerNr) {
    const answerContainer = document.getElementById("#AnswerButtons");
    answerContainer.innerHTML += templateAnswerButtons(answerNr);
}

function renderAnswerText(category, questionIndex, answerNr) {
    const answerText = document.getElementById("#AnswerText-" + answerNr);
    answerText.textContent = category[questionIndex].answers["answer_"  + answerNr].answer;
}