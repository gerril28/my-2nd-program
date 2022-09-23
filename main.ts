input.onButtonPressed(Button.A, function () {
    Num += 3.9
    basic.showNumber(Num)
})
input.onGesture(Gesture.TiltLeft, function () {
    Pic.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Num += 3.9
    basic.showNumber(Num)
})
input.onGesture(Gesture.TiltRight, function () {
    Pic.change(LedSpriteProperty.X, 1)
})
let Pic: game.LedSprite = null
let Num = 0
basic.showIcon(IconNames.EigthNote)
Num = 0
basic.showNumber(0)
Pic = game.createSprite(2, 2)
basic.forever(function () {
	
})
