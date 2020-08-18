score = 0;
incorrect = 0;
unanswered = 0;

function hideStart() {
    $(this).hide();
}

$('.clickMe').on('click', hideStart); // when User clicks on the 'Start' button
// the timer begins countdown and the 'Start' button gets hidden

function addScore() {

    var question1 = document.quiz.q1.value;
    var question2 = document.quiz.q2.value;
    var question3 = document.quiz.q3.value;
    var question4 = document.quiz.q4.value;
    var question5 = document.quiz.q5.value;
    var question6 = document.quiz.q6.value;
    var question7 = document.quiz.q7.value;
    var question8 = document.quiz.q8.value;

    if (question1 == "True") {
	    score++;
    } else if (question1 == false) {
        unanswered++;
      } else (incorrect--)

    if (question2 == "True") {
	    score++;
    } else if (question2 == false) {
        unanswered++;
      } else (incorrect--)

    if (question3 == "grand_old_party") {
	    score++;
    } else if (question3 == false) {
        unanswered++;
      } else (incorrect--)

    if (question4 == "435") {
	    score++;
    } else if (question4 == false) {
        unanswered++;
      } else (incorrect--)

    if (question5 == "100") {
	    score++;
    } else if (question5 == false) {
        unanswered++;
      } else (incorrect--)

    if (question6 == "BallotPedia") {
	    score++;
    } else if (question6 == false) {
        unanswered++;
      } else (incorrect--)

    if (question7 == "True") {
	    score++;
    } else if (question7 == false) {
        unanswered++;
      } else (incorrect--)

      if (question8 == "vote.gov" || question8 == "registertovote.ca.gov") {
        score++;
    } else if (question8 == false) {
        unanswered++;
      } else (incorrect--)

    document.write("<h1>All Done!</h1>");
    document.write("<p>Correct Answers: " + score + "</p>");
    document.write("<p>Incorrect Answers: " + incorrect + "</p>");
    document.write("<p>Unanswered: " + unanswered + "</p>");

    // code below is for when the User selects the 'Done' button at the bottom of the page
    // it clears the timer, resets the seconds to = 0, 
    $('#done').on('click', function(){
        clearInterval(timer);
        seconds = 0;
        $('#countdown').text(seconds);
    });
}

// code for the countdown timer below. Timer seconds starts at 10 for testing.
    var seconds = 20;
    var timer;
        // div id 'countdown' prints to screen the number in the variable named seconds.
		$('#countdown').text(seconds);

		function startTimer(){
			seconds--;
            $('#countdown').text(seconds);
            if (seconds < 0) {
                clearInterval(timer);
                //alert("Time's up!");
                seconds = 20;
			    $('#countdown').text(seconds);
                addScore();
            }
		}

		$('#start').on('click', function(){
			timer = setInterval(startTimer, 1000);
		});

        // added this stop button for testing.
		$('#stop').on('click', function(){
			clearInterval(timer);
			seconds = 20;
            $('#countdown').text(seconds);
            alert("Calculating your score... please press on OK for your score...");
        // add the addScore(); function here
            addScore();
        });
        
       
       
            
        