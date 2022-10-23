input.onPinPressed(TouchPin.P0, function () {
    start = input.runningTime()
    if (input.pinIsPressed(TouchPin.P1)) {
        ende = input.runningTime()
        basic.pause(100)
        zeit = (ende - start) / 1000
        basic.showNumber(zeit)
        _4digit.show(zeit)
    }
})
// Reset-Funktion
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    _4digit.clear()
    start = 0
    ende = 0
})
let zeit = 0
let _4digit: grove.TM1637 = null
let ende = 0
let start = 0
start = 0
ende = 0
_4digit = grove.createDisplay(DigitalPin.P0, DigitalPin.P0)
basic.forever(function () {
	
})
