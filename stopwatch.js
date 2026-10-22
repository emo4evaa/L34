window.onload = function () {

    let seconds = 0;
    let milliseconds = 0;

    let appendMilliseconds = document.getElementById("milliseconds");
    let appendSeconds = document.getElementById("seconds");

    let buttonStart = document.getElementById("button-start");
    let buttonStop = document.getElementById("button-stop");
    let buttonReset = document.getElementById("button-reset");

    let interval;

    buttonStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function () {
        clearInterval(interval);
    };

    buttonReset.onclick = function () {
        clearInterval(interval);

        seconds = 0;
        milliseconds = 0;

        appendSeconds.innerHTML = "00";
        appendMilliseconds.innerHTML = "00";
    };

    function startTimer() {
        milliseconds++;

        if (milliseconds < 10) {
            appendMilliseconds.innerHTML = "0" + milliseconds;
        } else {
            appendMilliseconds.innerHTML = milliseconds;
        }

        if (milliseconds > 99) {
            seconds++;
            milliseconds = 0;

            appendMilliseconds.innerHTML = "00";

            if (seconds < 10) {
                appendSeconds.innerHTML = "0" + seconds;
            } else {
                appendSeconds.innerHTML = seconds;
            }
        }
    }
};