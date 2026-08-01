function initQuiz(category) {
    loadNumberOfQuestions(category);
    loadQuestionCounter(category, questionIndex = 0);
    checkNavigationState(category, questionIndex=0)
    loadQuestion(category, questionIndex = 0);
    loadAnswers(category, questionIndex = 0);
}

function loadNumberOfQuestions(category) {
    const numberOfQuestionsRef = document.getElementById("#NumberOfQuestions");
    numberOfQuestionsRef.textContent = category.length;
}

function loadQuestionCounter(category, questionIndex) {
    const questionCounterRef = document.getElementById("#QuestionCounter");
    questionCounterRef.textContent = questionIndex + 1;
}

function checkNavigationState(category, questionIndex) {
    const isFirstQuestion = questionIndex === 0;
    const isLastQuestion = questionIndex === category.length - 1;
    setNavigationState(category, 'previous', isFirstQuestion);
    setNavigationState(category, 'next', isLastQuestion);
}

function setNavigationState(category, direction, isFirstOrLastQuestion) {
    const buttonRef = document.getElementById(`#${direction}QuestionBtn`);
    buttonRef.disabled = isFirstOrLastQuestion;
    buttonRef.classList.toggle("disabled", isFirstOrLastQuestion);
    buttonRef.setAttribute("aria-disabled", String(isFirstOrLastQuestion));
}

function loadQuestion(category, questionIndex) {
    const questionTextRef = document.getElementById("#QuestionText");
    questionTextRef.textContent = category[questionIndex].question;
}

function loadAnswers(category, questionIndex) {
    for (let answerNr = 1; answerNr <= 4; answerNr++) {
        const answerTextRef = document.getElementById(`#AnswerText-${answerNr}`);
        answerTextRef.textContent = category[questionIndex].answers[`answer_${answerNr}`].answer;
    }
}

function loadPreviousOrNextQuestion(category, direction) {
    const currentQuestionIndex = parseInt(document.getElementById("#QuestionCounter").textContent) - 1;
    const newQuestionIndex = direction === "next" ? currentQuestionIndex + 1 : currentQuestionIndex - 1;
    loadQuestionCounter(category, newQuestionIndex);
    checkNavigationState(category, newQuestionIndex);
    loadQuestion(category, newQuestionIndex);
    loadAnswers(category, newQuestionIndex);
}

