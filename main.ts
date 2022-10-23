// Reset-Funktion
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    start = 0
    ende = 0
})
let zeit = 0
let ende = 0
let start = 0
start = 0
ende = 0
basic.forever(function () {
    while (input.pinIsPressed(TouchPin.P0)) {
        start = input.runningTime()
    }
    while (input.pinIsPressed(TouchPin.P1)) {
        ende = input.runningTime()
        basic.pause(100)
        zeit = (ende - start) / 1000
        basic.showNumber(zeit)
        start = 0
        ende = 0
    }
})
