var questionArray =["what is the capital of Jamaica?", "Sparky is ASU's mascot", "How old am I"];
var answerArray =[["Kingston","Addis Ababa","Accra"], ["True","False"] ["23","25","32"];
var counter = 15;
var correctAnswers =["A.Kingston", "B. False", "A. 23"];
var questionCounter =0;
var selectAnswer;
var timer;
var numberofCorrectAnswers =0;
var numberofIncorrectAnswers =0;
$("body").on("click", ".answer", function(event){
	clickSound.play();
	selectedAnswer = $(this).text();
	if(selectedAnswer === correctAnswers[questionCounter]) {

		clearInterval(theClock);
		generateWin();
	}
	else {

		clearInterval(theClock);
		generateLoss();
	}
});
