let numberOfInstrument = document.querySelectorAll('.instrument').length

const chosenButton = (key) => {

    switch (key) {
        case  "a":
            const tom1 = new Audio('/sounds/tom-1.mp3')
            tom1.play()
            break
        case  "s":
            const tom2 = new Audio('/sounds/tom-2.mp3')
            tom2.play()
            break
        case  "d":
            const tom3 = new Audio('/sounds/tom-3.mp3')
            tom3.play()
            break
        case  "f":
            const tom4 = new Audio('/sounds/tom-4.mp3')
            tom4.play()
            break
        case  "j":
            const crash = new Audio('/sounds/crash.mp3')
            crash.play()
            break
        case  "k":
            const kick = new Audio('/sounds/kick-bass.mp3')
            kick.play()
            break
        case  "l":
            const snare = new Audio('/sounds/snare.mp3')
            snare.play()
            break
        default:
            console.log(':]')
    }
}

const buttonAnimation = (currentKey) => {
    const activeButton = document.querySelector("." + currentKey)
    activeButton.classList.add('pressed')
    setTimeout(function () {
        activeButton.classList.remove('pressed')
    }, 100)
}

for (let i = 0; i < numberOfInstrument; i++) {
    document.querySelectorAll('.instrument')[i].addEventListener('click', function () {
        const button = this.innerHTML
        chosenButton(button)
        buttonAnimation(button)
    })
}

document.addEventListener('keydown', function (e) {
    console.log(e)
    chosenButton(e.key)
    buttonAnimation(e.key)
})