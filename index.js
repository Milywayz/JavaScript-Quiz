


let timer = 90

let timerID = setInterval(function(){

    timer -=1
    console.log(timer);

}, 1000)

// timer -=10
// clearInterval(timerID)


let questions = [{question: "What do you spawn with in a new world in Minecraft?" , answers: ["A Pickaxe" , "An Axe" , "Bread" , "Nothing"], correctAnswer: "Nothing" },
                {question: "How many hearts of damage do you take when you fall 10 blocks in Minecraft with no protection?" , answers: ["2 Full Hearts" , "1 Full Hearts and a Half" , "3 Full Hearts and a Half" , "3 Full Hearts"], correctAnswer: "3 Full Hearts and a Half" },

]

currentQuestion = 0



function renderQuestion(){

    questions[currentQuestion].question
    questions[currentQuestion].answers[0]
    questions[currentQuestion].answers[1]
    questions[currentQuestion].answers[2]
    questions[currentQuestion].answers[3]
    console.log("correct answer:" + questions[currentQuestion].correctAnswer)

}
