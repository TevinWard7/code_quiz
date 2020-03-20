$(document).ready(function () {

    // Questions
    var questions = {
    };

    var timeDiv = $("#time");
    var time = 100;

    $("#time").text(time);


    // Timer Function
    function timerFunction() {
        setInterval(function () {
            time--;
            timeDiv.text(time);
        }, 1000);
    }


    $("#startBtn").on("click", timerFunction);
});



