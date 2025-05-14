const firstNumQuestions = 5;
const lastQuestionId = 9;
let questionId = 0;

const quizData = [
    {
        question: "Was ist eure Hausnummer?",
        correct: 4
    },
    {
        question: "Wieviele (ganze) Monate hat Sebastian nach Isabella Geburtstag?",
        correct: 8
    },
    {
        question: "Was ist die Ziffernsumme euere Hochzeitstags?",
        correct: 14
    },
    {
        question: "Anzahl der Harry Potter Filme?",
        correct: 8
    },
    {
        question: "Am wievielten Tag im Monat hat Isabella Geburtstag?",
        correct: 15
    },
    {
        question: "Wieviele Mitglieder hat die WA-Gruppe 'Gruppe Arschlöcher Update'?",
        correct: 13
    },
    {
        question: "Wieviele Fotos von der Hochzeit sind auf dieser Website zu sehen?",
        correct: 4
    },
    {
        question: "Wieviele Fragen musstet ihr bis hierhin (exklusive dieser Frage) bereits lösen?",
        correct: 7
    },
    {
        question: "Wieviele Hochzeiten der Gruppe Arschlöcher finden 2025 statt?",
        correct: 2
    },
    {
        question: "Anzahl der Personen die bei Eurer Hochzeit das Lied 'Freindschoft' gesungen haben?",
        correct: 11
    }
];

let questionEl;
let answerEl;
let errorEl;
let okBtn;
let firstNumEl;
let secondNumEl;

$( document ).ready(function() {
    questionEl = $('#question');
    answerEl = $('#answer');
    errorEl = $('#errorElement');
    okBtn = $('#okBtn');
    firstNumEl = $('#firstBlank');
    secondNumEl = $('#secondBlank');
    okBtn.click(checkAnswer);
    answerEl.keyup(function(event) {
        if (event.keyCode === 13) {
            checkAnswer();
        }
      });
    loadQuestion();
});

function checkAnswer() {
    console.log("checkAnswer called")
    var value = answerEl.val();
    value = parseInt(value);
    if(value == quizData[questionId].correct) {
        answerEl.removeClass("error-input");
        errorEl.addClass("error-hidden");

        // show solved digit / number
        let curSpan = $(getCurSpan());
        curSpan.removeClass("active-blank");
        curSpan.text(value);

        if(questionId == lastQuestionId) {
            $("#quizSuccess").removeClass("success-hidden");
            $(".quiz-footer").addClass("custom-hidden");
            $("#question-container").addClass("custom-hidden");
        } else {
            questionId++;
            loadQuestion();

            // mark next blank as active
            curSpan = $(getCurSpan());
            curSpan.addClass("active-blank");
        }
    } else {
        // show error
        answerEl.addClass("error-input");
        errorEl.removeClass("error-hidden");
    }
}

function getCurSpan() {
    if(questionId < firstNumQuestions) {
        return firstNumEl.children("span")[questionId];
    }
    return secondNumEl.children("span")[questionId - firstNumQuestions];
}


function loadQuestion() {
    const question = quizData[questionId];
    questionEl.text(question.question)
    /*
    optionsEl.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(button, index));
        optionsEl.appendChild(button);
    });
    nextBtn.style.display = 'none';
    */
}
