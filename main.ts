let start = 0
let ende = 0
input.onPinPressed(TouchPin.P0, function () {
    start = input.runningTime()
})
input.onPinPressed(TouchPin.P1, function () {
    ende = input.runningTime()
})
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.pause(100)
        basic.showNumber(ende - start)
    }
})
