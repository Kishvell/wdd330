const quizData = {
    "quiz": [
        {
            "question": "What is the primary purpose of the W01 Activity: Team Project Setup?",
            "options": [
                "To complete the entire project individually",
                "To set up the team project asynchronously using the required tools and technology",
                "To submit the final project for grading",
                "To create a new project unrelated to the course"
            ],
            "answer": [1],
            "explanation": "The purpose of the W01 Activity is to set up the team project asynchronously using the required course tools and technology."
        },
        {
            "question": "What is the name of the course's learning project mentioned in the W01 Activity?",
            "options": [
                "Sleep Outside",
                "Team Collaboration",
                "Outdoor Adventures",
                "Project Setup"
            ],
            "answer": [0],
            "explanation": "The course's learning project is called 'Sleep Outside,' as mentioned in the instructions."
        }
    ]
};

document.addEventListener("DOMContentLoaded", () => {
    const quizContainer = document.getElementById("quiz");

    quizData.quiz.forEach((item, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `<p>${index + 1}. ${item.question}</p>`;
        item.options.forEach((option, i) => {
            questionDiv.innerHTML += `
                <input type="radio" name="q${index}" value="${i}"> ${option} <br>
            `;
        });
        quizContainer.appendChild(questionDiv);
    });
});

function submitQuiz() {
    let score = 0;
    quizData.quiz.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`);
        if (selected && parseInt(selected.value) === item.answer[0]) {
            score++;
        }
    });

    document.getElementById("result").innerText = `Your score: ${score}/${quizData.quiz.length}`;
}
