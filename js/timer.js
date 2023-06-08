import Sounds from "./sounds.js"

const sounds = Sounds({})

export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls
}){
    let timerTimeOut
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    
    function updateDisplay(newMinutes, newSeconds){
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        newSeconds = newSeconds === undefined ? seconds : newSeconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(newSeconds).padStart(2, "0")
    }
    
    function reset(){
        updateDisplay(minutes, seconds)
        clearTimeout(timerTimeOut)
    }

    function countdown(){
        timerTimeOut = setTimeout(function(){
            let minutes = Number(minutesDisplay.textContent)
            let seconds = Number(secondsDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0 
            
            updateDisplay(minutes, seconds)
            
            if(isFinished){
                resetControls()
                updateDisplay()
                sounds.alarmClock()
                return 
            }
            
            if(seconds <= 0 ){
            seconds = 60
            --minutes
        }

        updateDisplay(minutes, String(seconds - 1))
        
        countdown()
        }, 1000)
    }

    function updateMinutesAndSeconds (newMinutes, newSeconds){
        minutes = newMinutes
        seconds = newSeconds
    }

    function hold(){
        clearTimeout(timerTimeOut)
    }

    function addFiveMinutes(){
        let minutes = Number(minutesDisplay.textContent)

        if(minutes >= 500){
            return updateDisplay("500" , seconds)
        }


        updateDisplay(String(minutes + 5), seconds)
    }

    function removeFiveMinutes(){
        let minutes = Number(minutesDisplay.textContent)

        if(minutes <= 5){
            return updateDisplay("0" , seconds)
        }

        updateDisplay(String(minutes - 5), seconds)
    }


    return{
        updateDisplay,
        countdown,
        updateMinutesAndSeconds,
        hold,
        reset,
        addFiveMinutes,
        removeFiveMinutes,
    }
}