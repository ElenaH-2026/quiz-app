function initQuiz(category) {
    loadQuestion(category);
    loadAnswers(category);
}  

function loadQuestion(category) {
    const questionText = document.getElementById("#QuestionText");
    questionText.textContent = category[0].question;

}

function loadAnswers(category) {
    const answerContainer = document.getElementById("#AnswerButtons");
    answerContainer.innerHTML = templateAnswerButtons(category);
}