// Changes the value of X by 1
input.onButtonPressed(Button.A, function () {
    X += 1
    basic.showNumber(X)
})
// Plugs X into different equations and classifies what kind of number it is.
input.onButtonPressed(Button.AB, function () {
    if (X > 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (X < 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . # . # .
            . # . # .
            . # . # .
            . # # # .
            `)
    }
    basic.pause(500)
    basic.clearScreen()
})
// Changes the value of X by -1
input.onButtonPressed(Button.B, function () {
    X += -1
    basic.showNumber(X)
})
// Resets the program
input.onGesture(Gesture.Shake, function () {
    X = 0
})
// Sets the program
let X = 0
X = 0
