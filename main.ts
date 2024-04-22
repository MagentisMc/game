input.onButtonPressed(Button.A, function () {
    Thing.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Thing.change(LedSpriteProperty.X, 1)
})
let sprite: game.LedSprite = null
let Thing: game.LedSprite = null
let Level = 0
Thing = game.createSprite(2, 4)
basic.forever(function () {
    Level += 1
    basic.showString("Level " + Level)
    for (let index = 0; index < 5; index++) {
        sprite = game.createSprite(randint(0, 4), 0)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        basic.pause(500)
        sprite.change(LedSpriteProperty.Y, 1)
        if (sprite.isTouching(Thing)) {
            sprite.delete()
        } else {
            sprite.delete()
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            game.pause()
        }
    }
})
