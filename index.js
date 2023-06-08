import Sounds from "./js/sounds.js"
import Controls from "./js/controls.js"
import Timer from "./js/timer.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSum,
    buttonSubtraction,
    minutesDisplay,
    secondsDisplay,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace,
    buttonDarkmode,
    buttonLightmode
} from './js/elements.js'

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonDarkmode,
    buttonLightmode,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace,
    buttonStop,
    buttonSet,
    buttonSum,
    buttonSubtraction
})

const sounds = Sounds({
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset
})

// botões do cronometro

buttonPlay.onclick = () => {
    controls.play()
    timer.countdown()
}

buttonPause.onclick = () => {
    controls.pause()
    timer.hold()
}

buttonStop.onclick = () => {
    controls.reset()
    timer.reset()
}

buttonSet.onclick = () => {
    let newMinutes = controls.getMinutes()
    let newSeconds = controls.getSeconds()

    if(!newMinutes && !newSeconds){
        timer.reset()
        return
    }

    if(newMinutes <= 0 && newSeconds <= 0){
       return alert("Você não adicionou nenhuma unidade de tempo.")
    }

    timer.updateDisplay(newMinutes, newSeconds)
    timer.updateMinutesAndSeconds(newMinutes, newSeconds)
}

buttonSum.onclick = () => {
    timer.addFiveMinutes()
}

buttonSubtraction.onclick = () => {
    timer.removeFiveMinutes()
}


// botões de musica

buttonForest.onclick = () => {
    sounds.forestMusicPlay()
}

buttonRain.onclick = () => {
    sounds.rainMusicPlay()
}

buttonCoffeeShop.onclick = () => {
    sounds.coffeeShopMusicPlay()
}

buttonFireplace.onclick = () => {
    sounds.fireplaceMusicPlay()
}

// Dark Mode

buttonDarkmode.onclick = () =>{
    controls.darkMode()
}

buttonLightmode.onclick = () =>{
    controls.lightMode()
}