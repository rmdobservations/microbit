let appel = 0
/**
 * Elke klik op A gaat appel omhoog bij 1. Op B is reset tot 0.
 */
input.onButtonPressed(Button.A, function () {
    appel += 1
    basic.showNumber(appel)
})
input.onButtonPressed(Button.B, function () {
    appel = 0
    basic.showNumber(appel)
})
basic.forever(function () {
	
})
