$(document).ready(function(){
//var farm
var trivia = [{
	question: "Which POS city does not exist?",
	wrong: ["Shit","Poo","Poop"],
	correct: "Dung",
	explain: ["There are at least three villages in Iran with this name: one in Kermanshah Province, one in Mazandaran Province, and one in Zanjan Province.", "A town in Himachal Pradesh, India.", "A town in Yucatan, Mexico, Next to Ekpedz, Mexico."]
},
{
	question: "Which murder town is fake?",
	wrong: ["Slaughter","Kill","Cut and Shoot"],
	correct: "Knife",
	explain: ["Renamed Auburn, Washington", "A village in County Kildare, Ireland.", "A town in Texas northeast of Conroe, Texas, On Texas Route 105."]
},
{
	question: "Which place is so dumb it was never made.",
	wrong: ["Stupid Lake","Idiotville","Moron"],
	correct: "Dumb",
	explain: ["A lake in Manitoba, Canada", "A ghost town in Oregon.", "An Argentine city."]
},
{
	question: "What area do you need to smoke to actually find?",
	wrong: ["Bong County","Ganja","Weed"],
	correct: "Marijuana",
	explain: ["A county in Liberia, named for its Mount Bong.", "A city in Azerbaijan.", "Town in Siskiyou County, California"]
},
{
	question: "Which Boring is too boring to be real?",
	wrong: ["Boring, Maryland","Boring, Oregon","Boring, Tennessee"],
	correct: "Boring, Nebraska",
	explain: ["Named for a former postmaster David Boring, whose profession suited the family name.", "Twinned with Dull, Scotland.", "Well-named: as of May 2017, the length of its Wikipedia entry is 1,338 characters (compared to 60,544 on this page)."]
},
{
	question: "Which Mount could use some levity and become a place?",
	wrong: ["Mount Disappointment","Mount Despair","Mount Terror"],
	correct: "Mount Doom",
	explain: ["A rather uninspiring hill on the edge of Melbourne.", "Amazingly, there are three different mountains with this name, two in the USA and one in Australia.", "Names of two mountains, one in Antarctica, the other in Washington. Great places for a family picnic."]
}
,
{
	question: "Which name is just me hitting keys on the keyboard",
	wrong: ["Lake Chargoggagoggmanchauggagoggchaubunagungamaugg","Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch","El Pueblo de Nuestra Señora la Reina de los Ángeles de Porciúncula"],
	correct: "Gcwjogheshdfkjhgakhlkda",
	explain: ["The longest place name in the United States and 6th longest in the world.", "The longest officially recognised place name in the United Kingdom. It is found in Wales near the Isle of Anglesey and is situated near the A5", "The original name of Los Angeles. The name means The Town of Our Lady the Queen of the Angels of Porziuncola."]
}
];

var questCount = 0;//counts which question user is on
var correctAnswer//this needs to be global for the check function
var timer//this needs to be able to cancel timer from other functions
var won = 0;
var lost = 0;
var stopTimer
var stopTimerOn

$("#start").on("click", start)

function start(){
	$("#start").css("visibility", "hidden")
	showQuestion()
}

//lowers question
function showQuestion(){

	$(".buts").css("color", "black");
	$(".buts").css("font-weight", "normal");

	if (questCount >= trivia.length){
		end();
	} else if (questCount < trivia.length){

		$("#displayQuestion").text(trivia[questCount].question);

		correctAnswer = Math.floor(Math.random()*4);
		var wrongAnswer = 0;
		$("#but"+correctAnswer).text(trivia[questCount].correct);

		for(i=0;i<4;i++){
			if(i != correctAnswer){
				$("#but"+i).text(trivia[questCount].wrong[wrongAnswer]);
				wrongAnswer++;
			} else if (i==correctAnswer){
				i++;
				$("#but"+i).text(trivia[questCount].wrong[wrongAnswer]);
				wrongAnswer++;
			}//end of if/else
		}//end for loop

		$("#but0").on("click", checkAnswer)
		$("#but1").on("click", checkAnswer)
		$("#but2").on("click", checkAnswer)
		$("#but3").on("click", checkAnswer)

		$("#questionCard").css("height", "600px");

		stopTimer = setTimeout(showTimer, 8000);
		stopTimerOn = setTimeout(timerOn, 10000);

		$("#timer").empty()
		for(i=0;i<20;i++){
			$("#timer").append("<td class=timerDots id=cd"+i+"></td>")
		};//end for loop
	}//end check if all questions asked

}//end of function

//lowers timer
function showTimer (){
	$("#timerContainer").css("height", "130px");
}

//raise question and timer
function hideItems (){
	$("#questionCard").css("height", "10px");
	$("#timerContainer").css("height", "10px");
	var next = setTimeout(showQuestion, 2000);
}

//turns the timer on
function timerOn() {

	var arrayColor = 	["#FF0000", "#FF2300", "#FF4600", "#FF5700",
						"#FF7B00", "#FF9E00", "#FFC100", "#FFD300",
						"#FFE400", "#FFF600", "#F7FF00", "#E5FF00",
						"#D4FF00", "#B0FF00", "#9FFF00", "#7CFF00",
						"#6AFF00", "#47FF00", "#35FF00"];
	var acIx = 18;

	var kill = 19;

	timer = setInterval(destroy, 1000)

	function destroy(){
		if (kill <= -1){

			$("#timer").text("Time's up!");
			checkAnswer()

		} else {

			$("#cd"+kill).remove();
			$(".timerDots").css("background-color", arrayColor[acIx])
			acIx--;
			kill--;

		}
	}//end of destroy function
}//end of Timer On

//check answer function
function checkAnswer(){
	var guess=$(this).attr("aaa")

	$("#but0").off()
	$("#but1").off()
	$("#but2").off()
	$("#but3").off()

	console.log(guess)
	if(guess == correctAnswer){
		$("#but"+guess).css("color", "green");
		$("#but"+guess).css("font-weight", "bold");
		$("#displayQuestion").text("Correct!")
		win();
	} else if (guess != correctAnswer){
		$("#but"+guess).css("color", "red");
		$("#but"+guess).css("font-weight", "bold");
		// $("#but"+correctAnswer).css("color", "green");
		// $("#but"+correctAnswer).css("font-weight", "bold");
		$("#displayQuestion").text(trivia[questCount].explain[guess])
		console.log(trivia[questCount].explain[guess])
		loss();
	};
}//end of check function

function win(){
	clearInterval(timer);
	clearTimeout(stopTimer);
	clearTimeout(stopTimerOn);
	var wait = setTimeout(hideItems,1000);
	questCount++;
	won++;
}

function loss(){
	clearInterval(timer);
	clearTimeout(stopTimer);
	clearTimeout(stopTimerOn);

	var wait = setTimeout(hideItems,5000);
	questCount++;
	lost++;
}

function end(){
	clearInterval(timer);
	clearTimeout(stopTimer);
	clearTimeout(stopTimerOn);

	$("#displayQuestion").text("Results");
	$("#questDiv").append("<p>Correct = "+won+"</p>");
	$("#questDiv").append("<p>Wrong = "+lost+"</p>");

	$(".buts").remove();

	$("#questionCard").css("height", "600px");

}



})//end of document ready