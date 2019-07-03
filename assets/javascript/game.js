$( document ).ready(function(){

    //Start off by generating random number between 19 - 120
    var randomNumber = Math.floor(Math.random()* 101 + 19);


    //Appends random number amount to random-number id
    $("#randomNumber").text(randomNumber);
    
    //create variables for score, wins, losses
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    //generates 4 random numbers between 1 - 12 for the gems
    var number1 = Math.floor(Math.random()* 11 + 1);
    var number2 = Math.floor(Math.random()* 11 + 1);
    var number3 = Math.floor(Math.random()* 11 + 1);
    var number4 = Math.floor(Math.random()* 11 + 1);

    //display wins and losses to document
    $("#numberWins").text(wins);
    $("#numberLosses").text(losses);
    

    //function for winning game
    function winner () {
        alert("You won!");
        $("#numberWins").text(wins);
        wins++;
        reset();
    }

    //function for loosing game
    function loser () {
        alert("You lost :(");
        $("#numberLosses").text(losses);
        losses++;
        reset();
    }

    //reset game
    function reset() {
        userScore = 0;
        randomNumber = Math.floor(Math.random()* 101 + 19);
        $("#randomNumber").text(randomNumber);
        number1 = Math.floor(Math.random()* 11 + 1);
        number2 = Math.floor(Math.random()* 11 + 1);
        number3 = Math.floor(Math.random()* 11 + 1);
        number4 = Math.floor(Math.random()* 11 + 1);
        $('#finalScore').text(userScore);
    }

    
    //Click Events when tap jewels
    $("#crystal-one").on("click", function() {
        userScore = userScore + number1;
        console.log("New userScore = " + userScore);
        $("#finalScore").text(userScore);

        if(userScore === randomNumber) {
            winner();
        }else if (userScore > randomNumber) {
            loser();
        }
    })

    $("#crystal-two").on("click", function() {
        userScore = userScore + number2;
        console.log("New userScore = " + userScore);
        $("#finalScore").text(userScore);

        if(userScore === randomNumber) {
            winner();
        }else if (userScore > randomNumber) {
            loser();
        }
    })

    $("#crystal-three").on("click", function() {
        userScore = userScore + number3;
        console.log("New userScore = " + userScore);
        $("#finalScore").text(userScore);

        if(userScore === randomNumber) {
            winner();
        }else if (userScore > randomNumber) {
            loser();
        }
    })

    $("#crystal-four").on("click", function() {
        userScore = userScore + number4;
        console.log("New userScore = " + userScore);
        $("#finalScore").text(userScore);

        if(userScore === randomNumber) {
            winner();
        }else if (userScore > randomNumber) {
            loser();
        }
    })

})