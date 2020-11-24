input.onGesture(Gesture.Shake, function () {
    basic.showNumber(randint(1, 6))
    if (randint(1, 6) >= 3) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.clearScreen()
})
