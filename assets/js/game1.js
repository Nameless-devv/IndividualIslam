const operations = ['+', '-', '*', '/'];
const numberOfQuestions = 1; // Umumiy savollar soni
let totalScore = 0; // Umumiy to'g'ri javoblar soni
let currentScore = 0; // Hozirgi savol uchun to'g'ri javoblar soni
let answers = [];

function generateRandomQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operation = operations[Math.floor(Math.random() * operations.length)];

    let question, answer;

    switch (operation) {
        case '+':
            question = `${num1} + ${num2}`;
            answer = num1 + num2;
            break;
        case '-':
            question = `${num1} - ${num2}`;
            answer = num1 - num2;
            break;
        case '*':
            question = `${num1} * ${num2}`;
            answer = num1 * num2;
            break;
        case '/':
            question = `${num1 * num2} / ${num2}`;
            answer = num1;
            break;
    }

    return { question, answer };
}

function displayQuestions() {
    const questionsDiv = document.getElementById("questions");
    questionsDiv.innerHTML = '';

    answers = []; // Oldingi javoblarni tozalash

    for (let i = 0; i < numberOfQuestions; i++) {
        const { question, answer } = generateRandomQuestion();
        answers.push(answer);

        const questionRow = document.createElement("div");
        questionRow.classList.add("question-row");

        const square = document.createElement("div");
        square.classList.add("square");
        square.innerHTML = `<span>${question} = </span>`;

        const input = document.createElement("input");
        input.type = "number";
        input.classList.add("answer-input");

        questionRow.appendChild(square);
        questionRow.appendChild(input);
        questionsDiv.appendChild(questionRow);
    }
}

document.getElementById("submit").addEventListener("click", function() {
    const inputs = document.querySelectorAll('.answer-input');
    currentScore = 0; // Hozirgi savol uchun ballni tozalash

    inputs.forEach((input, index) => {
        if (parseInt(input.value) === answers[index]) {
            currentScore++;
            input.parentElement.style.backgroundColor = "#c8e6c9"; // To'g'ri javob
        } else {
            input.parentElement.style.backgroundColor = "#ffcdd2"; // Noto'g'ri javob
        }
    });

    totalScore += currentScore; // Umumiy to'g'ri javoblar sonini yangilash
    document.getElementById("score").innerText = `To'g'ri javoblar: ${totalScore}`;
    document.getElementById("submit").style.display = "none"; // "Natijalarni ko'rsatish" tugmasini yashirish
    document.getElementById("next").style.display = "block"; // "Keyingi savol" tugmasini ko'rsatish

});

document.getElementById("next").addEventListener("click", function() {
    displayQuestions(); // Yangi savollarni ko'rsatish
    document.getElementById("score").innerText = ""; // Ballni tozalash
    document.getElementById("next").style.display = "none"; // "Keyingi savol" tugmasini yashirish
    document.getElementById("submit").style.display = "block"; // "Natijalarni ko'rsatish" tugmasini qayta ko'rsatish
});

// Fon musiqasini boshlash
document.getElementById("background-music").play();

displayQuestions();