input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.clearScreen()
    start = 0
    ende = 0
    music.playMelody("E G E A - - - - ", 300)
})
let zeit = 0
let ende = 0
let start = 0
start = 0
ende = 0
basic.pause(100)
servos.P2.setAngle(0)
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P0)) {
        start = input.runningTime()
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    while (input.pinIsPressed(TouchPin.P1)) {
        ende = input.runningTime()
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.pause(100)
        zeit = (ende - start) / 1000
        basic.showNumber(zeit)
        start = 0
        ende = 0
        basic.pause(200)
        servos.P2.setAngle(180)
        basic.pause(2000)
        servos.P2.setAngle(0)
    }
})
