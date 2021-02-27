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
        // Hide the complexity of the how the thick works and time remained inside the getter and setter function upon invokation
        this.timeRemaining -= 1;
    }

    // get cause the function to immediately invoked as soon as it is being called
    get timeRemaining(){
        // this is how we get the time remaining value
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        // this is how to set the time value 
        this.durationInput.value = time;
    }
}


const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput,startButton, pauseButton);



