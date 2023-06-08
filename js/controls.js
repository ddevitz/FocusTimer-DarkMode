export default function Controls ({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSum,
    buttonSubtraction,
    buttonDarkmode,
    buttonLightmode,
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace
}){

    function play(){
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
    }
    
    function pause(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }
    
    function reset(){
        buttonPlay.classList.remove('hide')
        buttonPause.classList.add('hide')
    }

    function getMinutes(){
        let newMinutes = prompt(`Digite os minutos`)
    
        if(!newMinutes){
            return 0
        }

        if(newMinutes > 500){
            alert("Você adicionou um valor inválido")
            newMinutes = prompt(`Digite os minutos novamente (máx até 500 minutos)`)
            return 0
        }

        return newMinutes
    }

    function getSeconds(){
        let newSeconds = prompt(`Digite os segundos (máx até 60 segundos)`)
    
        if(!newSeconds){
            return 0
        }

        if(newSeconds > 60){
            alert("Você adicionou um valor maior que o máximo permitido")
            return 60
        }
    
        return newSeconds
    }

    function darkMode(){
        document.body.classList.add('dark-mode')
        buttonForest.classList.add('dark-mode')
        buttonRain.classList.add('dark-mode')
        buttonCoffeeShop.classList.add('dark-mode')
        buttonFireplace.classList.add('dark-mode')
        buttonPlay.classList.add('dark-mode')
        buttonPause.classList.add('dark-mode')
        buttonStop.classList.add('dark-mode')
        buttonSet.classList.add('dark-mode')
        buttonSum.classList.add('dark-mode')
        buttonSubtraction.classList.add('dark-mode')
        buttonDarkmode.classList.add('hide')
        buttonLightmode.classList.remove('hide')
    }

    function lightMode(){
        document.body.classList.remove('dark-mode')
        buttonForest.classList.remove('dark-mode')
        buttonRain.classList.remove('dark-mode')
        buttonCoffeeShop.classList.remove('dark-mode')
        buttonFireplace.classList.remove('dark-mode')
        buttonPlay.classList.remove('dark-mode')
        buttonPause.classList.remove('dark-mode')
        buttonStop.classList.remove('dark-mode')
        buttonSet.classList.remove('dark-mode')
        buttonSum.classList.remove('dark-mode')
        buttonSubtraction.classList.remove('dark-mode')
        buttonDarkmode.classList.remove('hide')
        buttonLightmode.classList.add('hide')
    }
    
    return{
        play,
        pause,
        getMinutes,
        getSeconds,
        reset,
        darkMode,
        lightMode
    }
}