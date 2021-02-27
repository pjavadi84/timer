class Timer {
    constructor(durationInput, startButton, pauseButton){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        this.interval = setInterval(this.thick, 1000);
    }

    pause = () => {
        clearInterval(this.interval)
    }

    thick = () => {
        // get the value of the input, convert the string to number floated
        const timeRemaining = parseFloat(this.durationInput.value);
        this.durationInput.value = timeRemaining - 1;
    }
}


const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput,startButton, pauseButton);



