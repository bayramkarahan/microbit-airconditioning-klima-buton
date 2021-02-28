input.onButtonPressed(Button.A, function () {
    sicaklik += 1
})
input.onButtonPressed(Button.B, function () {
    sicaklik += -1
})
let sicaklik = 24
basic.forever(function () {
    if (input.temperature() == sicaklik) {
        basic.showString("o")
    }
    if (input.temperature() < sicaklik) {
        basic.showString("i")
    }
    if (input.temperature() > sicaklik) {
        basic.showString("s")
    }
})
