
let startQuizB = document.querySelector("#startQuiz")
let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let timeE1 = document.querySelector("#timer");
let correctAnswer = document.querySelector("#correctAnswer")
let highScore = document.querySelector("#highScore")
let highScoreInput = document.querySelector("#highScoreInput")
// let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

// Need help to start off the quiz with only a start button with some more added text then start the quiz and timer after that
// Need help switching and adding a high score page
// Need help adding local storage when you enter high scores
// If there is time then I would want some help add css into java for all of this 


startQuizB.addEventListener("click", function(){

    quizDiv.classList.remove("hide")
    startQuizB.classList.add("hide")
    startTimer();
   

})

let timer = 90
let timerID;

function startTimer(){
    
    timeE1.textContent = timer;

    timerID = setInterval(function(){
    
        timer -=1
        timeE1.textContent = timer;

        if (timer <= 0 || currentQuestion === questions.length){
            
            clearInterval(timerID);
            endQuiz();
           
            
    
        }
        //console.log(timer);
    
    }, 1000)
}


let questions = [{question: "What do you spawn with in a new world in Minecraft?" , answers: ["A Wooden Pickaxe" , "An Stone Axe" , "1 Piece of Bread" , "Nothing"], correctAnswer: "Nothing" },
                {question: "How many hearts of damage do you take when you fall 10 blocks in Minecraft with no protection?" , answers: ["2 Full Hearts" , "1 Full Hearts and a Half" , "3 Full Hearts and a Half" , "3 Full Hearts"], correctAnswer: "3 Full Hearts and a Half" },
                {question: "What is Minecraft's rarest biome?" , answers: ["Ice Spikes Biome" , "Bamboo Jungle Biome" , "Mesa Biome" , "Mushroom Fields Biome"], correctAnswer: "Mushroom Fields Biome" },
                {question: "How long is one full day cycle in Minecraft?" , answers: ["15 Minutes" , "17 Minutes" , "19 Minutes" , "20 Minutes"], correctAnswer: "20 Minutes" },
                {question: "What are the chances in Minecraft that the end portal frame containing exactly  0 eyes." , answers: ["28%" , "35%" , "25%" , "31%"], correctAnswer: "28%" },
                {question: "How long does it take to break obsidian by hand in Minecraft?" , answers: ["300 Seconds" , "250 Seconds" , "200 Seconds" , "225 Seconds"], correctAnswer: "250 Seconds"},
                {question: "How many blocks of Diamonds would it take to build a full beacon in Minecraft" , answers: ["164 Blocks" , "168 Blocks" , "166 Blocks" , "165 Blocks"], correctAnswer: "164 Blocks" },
                {question: "What is the chance of a tamed wolf killing a wither skeleton and it dropping a wither skeleton skull in Minecraft?" , answers: ["1%" , "1.5%" , "2%" , "2.5%"], correctAnswer: "2.5" },
                {question: "How big of a nether portal do you need in Minecraft to transfer a ghast into the Over-World at minimum?" , answers: ["It's not possible" , "4x4" , "5x5" , "7x7"], correctAnswer: "5x5"},
                {question: "What item do you give frogs in Minecraft for breeding?" , answers: ["Lily Pads" , "Seeds" , "Spore Blossoms" , "Slime Balls"], correctAnswer: "Slime Balls" }

]
currentQuestion = 0
nextQuestion = 0
renderQuestion();

function renderQuestion(){
    
    question.textContent = questions[currentQuestion].question
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1];
    questionButton3.textContent = questions[currentQuestion].answers[2];
    questionButton4.textContent = questions[currentQuestion].answers[3];
    // console.log("correct answer:" + questions[currentQuestion].correctAnswer);
    
}


// Need help showing the correctAnswer if you clicked the right answer 
// Need help only removing 10sec if you click the wrong answer
quizDiv.addEventListener("click" , function(event){
    let eventEl = event.target
    
    if(eventEl.matches("button")){
        // console.log("clicked!")
        // console.log("correct answer:" +  questions[currentQuestion].correctAnswer);
        if (eventEl.innerText === questions[currentQuestion].correctAnswer){
            correctAnswer.textContent =  "Correct Answer: " + questions[currentQuestion].correctAnswer; 

        } else {
            correctAnswer.textContent =  "Wrong Answer"
            timer -= 10;

        }

        currentQuestion++
        renderQuestion();
    }
    
    
})

    function endQuiz() {
        
        localStorage.setItem("highScores" , JSON.stringify([{"initials": "dre", "score": timer}]))
        quizDiv.classList.add("hide")
        highScoreInput.classList.remove("hide")
    }







// some button that saves
