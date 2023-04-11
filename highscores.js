let highScores = JSON.parse(localStorage.getItem("highScores")) || []
document.getElementById("nameScore").innerHTML = localStorage.getItem("highScores");