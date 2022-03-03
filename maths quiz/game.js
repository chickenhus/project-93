
player1name = localStorage.getitem("player1_name ");

player2name = localStorage.getitem("player2_name ");

player1score = 0;

player2score = 0;


document.getElementById("player1_name").innerHTML = player1name + ":";

document.getElementById("player2_name").innerHTML = player2name + ":";

document.getElementById("player1_score").innerHTML = player1score;

document.getElementById("player2_score").innerHTML = player2score;

document.getElementById("player_question").innerHTML = "Question turn: " + player1name ;

document.getElementById("player_answer").innerHTML = "answer turn: " + player2name ;



