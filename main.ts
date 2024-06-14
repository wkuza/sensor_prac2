basic.forever(function () {
    basic.showNumber(pins.i2cReadNumber(29, NumberFormat.Int8LE, true))
})
