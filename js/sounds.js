export default function Sounds({
    buttonForest,
    buttonRain,
    buttonCoffeeShop,
    buttonFireplace,
}){

    const forestMusic = new Audio("./sounds/Floresta.wav")
    const rainMusic = new Audio("./sounds/Chuva.wav")
    const coffeeShopMusic = new Audio("./sounds/Cafeteria.wav")
    const fireplaceMusic = new Audio("./sounds/Lareira.wav")
    const alarmClockMusic = new Audio("./sounds/alarm-clock.mp3")

    forestMusic.loop = true
    rainMusic.loop = true
    coffeeShopMusic.loop = true
    fireplaceMusic.loop = true

    function forestMusicPlay() {
        if (buttonForest.classList.contains('select')) {
          buttonForest.classList.remove('select');
          forestMusic.pause();
        } else {
          buttonForest.classList.add('select');
          forestMusic.play();
        }
      }
    
    function rainMusicPlay(){
        if (buttonRain.classList.contains('select')) {
            buttonRain.classList.remove('select');
            rainMusic.pause();
          } else {
            buttonRain.classList.add('select');
            rainMusic.play();
          }
    }
    
    function coffeeShopMusicPlay(){
        if (buttonCoffeeShop.classList.contains('select')) {
            buttonCoffeeShop.classList.remove('select');
            coffeeShopMusic.pause();
          } else {
            buttonCoffeeShop.classList.add('select');
            coffeeShopMusic.play();
          }
    }
    
    function fireplaceMusicPlay(){
        if (buttonFireplace.classList.contains('select')) {
            buttonFireplace.classList.remove('select');
            fireplaceMusic.pause();
          } else {
            buttonFireplace.classList.add('select');
            fireplaceMusic.play();
          }
    }

    function alarmClock(){
        alarmClockMusic.play()
    }

    return{
        forestMusicPlay,
        rainMusicPlay,
        coffeeShopMusicPlay,
        fireplaceMusicPlay,
        alarmClock
    }
}
