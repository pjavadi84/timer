class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks){
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks){
            this.onStart = callbacks.onStart
            this.onTick = callbacks.onTick
            this.onComplete = callbacks.onComplete
        }

        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    }

    start = () => {
        if(this.onStart){
            this.onStart(this.timeRemaining);
        }
        this.tick()
        this.interval = setInterval(this.tick, 20);
    }

    pause = () => {
        clearInterval(this.interval)
    }

    tick = () => {
        if(this.timeRemaining <= 0){
            this.pause()
            if(this.onComplete){
                this.onComplete();
            }
        } else {
            // Hide the complexity of the how the thick works and time remained inside the getter and setter function upon invokation
            this.timeRemaining -= .02;
            if(this.onTick){
                this.onTick(this.timeRemaining);
            }
        }
        
    }

    // get cause the function to immediately invoked as soon as it is being called
    get timeRemaining(){
        // this is how we get the time remaining value
        return parseFloat(this.durationInput.value);
    }

    set timeRemaining(time){
        // this is how to set the time value 
        this.durationInput.value = time.toFixed(2);
    }
}
