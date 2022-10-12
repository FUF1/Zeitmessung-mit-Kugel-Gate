input.onPinPressed(TouchPin.P0, function () {
    start = input.runningTime()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    start = 0
    ende = 0
})
input.onPinPressed(TouchPin.P1, function () {
    ende = input.runningTime()
})
let ende = 0
let start = 0
start = 0
ende = 0
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P1)) {
        basic.pause(100)
        basic.showNumber((ende - start) / 1000)
    }
})
