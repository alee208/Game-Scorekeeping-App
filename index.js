let homeScore = 0
let guestScore = 0
let timerInterval;
let isRunning = false;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;


let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");
let millisecondsDisplay = document.getElementById("milliseconds");

let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let addMinuteButton = document.getElementById("addMinute");
let add30SecondButton = document.getElementById("add30Second)");
let addSecondButton = document.getElementById("addSecond");
let newGameButton = document.getElementById("newGame");

function formatTime() {
    // Format numbers as two digits
    minutesDisplay.textContent = String(minutes).padStart(2, '0');
    secondsDisplay.textContent = String(seconds).padStart(2, '0');
    millisecondsDisplay.textContent = String(milliseconds).padStart(2, '0');
}

function startTimer() {
    if (isRunning) return; // Prevent starting the timer if it's already running

    isRunning = true;
    timerInterval = setInterval(() => {
        if (milliseconds > 0) {
            milliseconds--; // Decrease milliseconds
        } else if (seconds > 0) {
            milliseconds = 99; // Reset milliseconds to 99
            seconds--; // Decrease seconds
        } else if (minutes > 0) {
            milliseconds = 99; // Reset milliseconds to 99
            seconds = 59; // Reset seconds to 59
            minutes--; // Decrease minutes
        } else {
            clearInterval(timerInterval); // Stop timer when reaching zero
            alert("Game Over!");
            isRunning = false; // Set the flag to false when the timer ends
        }

        formatTime();
    }, 10); // 10ms interval for milliseconds precision
}

function stopTimer() {
    clearInterval(timerInterval);
    isRunning = false;
}

function resetTimer() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    formatTime();
}

function addMinute() {
    minutes += 1;
    formatTime();
}

function add30Seconds() {
    seconds += 30;

    // If adding 30 seconds exceeds 60 seconds, convert it into minutes
    if (seconds >= 60) {
        minutes += Math.floor(seconds / 60); // Add the minutes
        seconds = seconds % 60; // Set the remaining seconds
    }

    formatTime();
}

function addSecond() {
    seconds += 1;
    
    // If seconds reach 60, convert to 1 minute
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }
    
    formatTime();
}

function newGame() {
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    formatTime();
    document.getElementById("home-score").textContent = 0;
    document.getElementById("guest-score").textContent = 0;
    homeScore = 0;
    guestScore = 0;
}





function homeAddOne() {
    homeScore += 1;
    document.getElementById("home-score").textContent = homeScore;
};


function homeAddTwo() {
    homeScore += 2;
    document.getElementById("home-score").textContent = homeScore;
};

function homeAddThree() {
    homeScore += 3;
    document.getElementById("home-score").textContent = homeScore;
}


function guestAddOne() {
    guestScore += 1;
    document.getElementById("guest-score").textContent = guestScore;
};


function guestAddTwo() {
    guestScore += 2;
    document.getElementById("guest-score").textContent = guestScore;
};

function guestAddThree() {
    guestScore += 3;
    document.getElementById("guest-score").textContent = guestScore;
}

function homeMinusOne() {
    homeScore -= 1;
    document.getElementById("home-score").textContent = homeScore;
};

function homeMinusTwo() {
    homeScore -= 2;
    document.getElementById("home-score").textContent = homeScore;
};

function homeMinusThree() {
    homeScore -= 3;
    document.getElementById("home-score").textContent = homeScore;
};

function guestMinusOne() {
    guestScore -= 1;
    document.getElementById("guest-score").textContent = guestScore;
};

function guestMinusTwo() {
    guestScore -= 2;
    document.getElementById("guest-score").textContent = guestScore;
};

function guestMinusThree() {
    guestScore -= 3;
    document.getElementById("guest-score").textContent = guestScore;
};