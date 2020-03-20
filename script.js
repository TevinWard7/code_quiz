$(document).ready(function () {

    // Timer Variables
    var timeDiv = $("#time");
    var time = 100;


    // Timer Function
    function timerFunction() {
        setInterval(function () {
            time--;
            timeDiv.text(time);
        }, 1000);

        if (time === 0) {
            return;
        }
    };


    // On click
    $("#startBtn").on("click", timerFunction);
});



