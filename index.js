

let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let timeE1 = document.querySelector("#timer");
let scoreBoard = document.querySelector("#score");
// let highScores = JSON.parse(localStorage.getItem("highScores")) || [];


let scores = []
let timer = 10
scoreBoard.textContent = score


let timerID = setInterval(function(){

    timeE1.textContent = timer 
    timer -=1
    if (timer === 0){
        timeE1.textContent = "";
        clearInterval(timerID);

    }
    console.log(timer);

}, 1000)

// timer -=10
// clearInterval(timerID)


let questions = [{question: "What do you spawn with in a new world in Minecraft?" , answers: ["A Pickaxe" , "An Axe" , "Bread" , "Nothing"], correctAnswer: "Nothing" },
                {question: "How many hearts of damage do you take when you fall 10 blocks in Minecraft with no protection?" , answers: ["2 Full Hearts" , "1 Full Hearts and a Half" , "3 Full Hearts and a Half" , "3 Full Hearts"], correctAnswer: "3 Full Hearts and a Half" },
                {question: "What is Minecraft's rarest biome?" , answers: ["Ice Spikes Biome" , "Bamboo Jungle Biome" , "Mesa Biome" , "Mushroom Fields Biome"], correctAnswer: "Mushroom Fields Biome" },
                {question: "How long is one Minecraft day in real time?" , answers: ["15 Minutes" , "17 Minutes" , "19 Minutes" , "20 Minutes"], correctAnswer: "17 Minutes" },

]

currentQuestion = 0
renderQuestion();

function renderQuestion(){

    question.textContent = questions[currentQuestion].question
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1]
    questionButton3.textContent = questions[currentQuestion].answers[2]
    questionButton4.textContent = questions[currentQuestion].answers[3]
    console.log("correct answer:" + questions[currentQuestion].correctAnswer)

}


quizDiv.addEventListener("click" , function(event){

    if(event.target.matches("button")){
        console.log("clicked!")
        console.log("value:" +event.target.innerText);
        console.log("correct answer:" +  questions[currentQuestion].correctAnswer);
        currentQuestion++
        renderQuestion();


    }

})




// some button that saves

// localStorage.setItem("highScores" , JSON.stringify([{"initials": "dre", "score": 80}]))