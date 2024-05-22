const questions = [
    {
        question: "Who is often referred to as the Nightingale of India?",
        options: ["Lata Mangeshkar", "shreya ghoshal", "Alka Yagnik", "Asha Bhosle"],
        correctAnswer: "Lata Mangeshkar"
    },
    {
        question: "Who composed the soundtrack for the Bollywood film Dilwale Dulhania Le Jayenge?",
        options: ["A.R. Rahman", "Jatin-Lalit ", "Anu Malik", "Pritam"],
        correctAnswer: "Jatin-Lalit"
    },
    {
        question: "which indian female singer has highest follower on instagram",
        options: ["Neha Kakkar", "palak muchhal", "Monali Thakur", "Sunidhi Chauhan "],
        correctAnswer: "Neha Kakkar"
    }
];

let score = 0;

function startQuiz() {
    for (let i = 0; i < questions.length; i++) {
        const questionObj = questions[i];
        const userAnswer = prompt(`${questionObj.question}\n${questionObj.options.join("\n")}`);
        
        if (userAnswer.toLowerCase() === questionObj.correctAnswer.toLowerCase()) {
            score++;
            alert("Correct!");
        } else {
            alert(`Incorrect! The correct answer is ${questionObj.correctAnswer}.`);
        }
    }
    alert(`Quiz completed! Your score is ${score}/${questions.length}`);
}

startQuiz();

