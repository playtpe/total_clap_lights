input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
    basic.showString("Total")
    basic.showNumber(total * 2)
})
input.onButtonPressed(Button.A, function () {
    total = 0
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onSound(DetectedSound.Loud, function () {
    lightsOn = !(lightsOn)
    if (lightsOn) {
        if (reverse) {
            total += -1
        } else {
            total += 1
        }
        basic.showNumber(total)
    } else {
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    reverse = !(reverse)
    music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
})
let reverse = false
let lightsOn = false
let total = 0
music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
total = 0
input.setSoundThreshold(SoundThreshold.Loud, 128)
