const muds = document.querySelectorAll(".mud");
const msg = document.querySelector(".msg");
const whoSelectedWhat = document.querySelector(
    ".whoSelctedWhat"
);

const sound = new Audio();
sound.src = './tones/click.mp3';

sound.oncanplaythrough = function () {
    sound.ready = true;
};

sound.onerror = function () {
    console.log(`Sound file failed to load. ${sound.src}`);
};

function playSound() {
    if (sound && sound.ready) {
        sound.currentTime = 0;
        sound.play();
    }
}

const cpuChoices = function () {
    const choices = ["stone", "paper", "scissor"];
    const cpuChoice = Math.floor((Math.random() * 3));
    return choices[cpuChoice];
}

const checkWinner = (playerInput, cpuInput) => {

    whoSelectedWhat.innerHTML = `You selected  <b> ${playerInput} </b> Cpu selected <b> ${cpuInput} </b>`;

    if (playerInput === cpuInput) {
        msg.innerText = "Match is draw";
    }
    else {
        if (playerInput === "stone" && cpuInput === "paper") {
            msg.innerText = "Cpu Won !";
        }

        if (playerInput === "stone" && cpuInput === "scissor") {
            msg.innerText = "You Won !";
        }

        if (playerInput === "paper" && cpuInput === "stone") {
            msg.innerText = "You Won !";
        }

        if (playerInput === "paper" && cpuInput === "scissor") {
            msg.innerText = "Cpu Won !";
        }

        if (playerInput === "scissor" && cpuInput === "paper") {
            msg.innerText = "You Won !";
        }

        if (playerInput === "scissor" && cpuInput === "stone") {
            msg.innerText = "Cpu Won !";
        }
    }
}


muds.forEach(function (ele) {
    ele.addEventListener("click", function () {
        playSound();
        const playerSelected = ele.innerText.trim();
        const cpuSelected = cpuChoices();
        checkWinner(playerSelected, cpuSelected);
    });
});

