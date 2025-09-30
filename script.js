let currentQ = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultBox = document.getElementById("result-box");
const scoreEl = document.getElementById("score");

function loadQuestion() {
    let q = quizQuestions[currentQ];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";

    q.options.forEach((opt, i) => {
        const btn = document.createElement("button");
        btn.textContent = opt;
        btn.addEventListener("click", () => selectAnswer(i));
        optionsEl.appendChild(btn);
    });

    nextBtn.style.display = "none";
}

function selectAnswer(selected) {
    if (selected === quizQuestions[currentQ].answer) {
        score++;
    }

    // Disable all buttons after selection
    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);

    nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
    currentQ++;
    if (currentQ < quizQuestions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quiz-box").classList.add("hidden");
    resultBox.classList.remove("hidden");
    scoreEl.textContent = `${score} / ${quizQuestions.length}`;
}

// Start the quiz
loadQuestion();
