radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        pins.analogWritePin(AnalogPin.P0, 0)
    } else {
        pins.analogWritePin(AnalogPin.P0, receivedNumber)
    }
})
radio.setGroup(175)
