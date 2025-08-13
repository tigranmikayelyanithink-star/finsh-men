scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field0, function (sprite, location) {
    info.startCountdown(20)
    tiles.setCurrentTilemap(tilemap`level6`)
    tiles.placeOnTile(Men, tiles.getTileLocation(15, 15))
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scale(Men)
})
info.onCountdownEnd(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    info.startCountdown(30)
    tiles.setCurrentTilemap(tilemap`level5`)
    tiles.placeOnTile(Men, tiles.getTileLocation(0, 99))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    info.startCountdown(20)
    tiles.placeOnTile(Men, tiles.getTileLocation(0, 15))
    tiles.setCurrentTilemap(tilemap`level3`)
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileDarkGrass2, function (sprite, location) {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
function scale (Sprite2: Sprite) {
    for (let index = 0; index < 4; index++) {
        Sprite2.changeScale(0.25, ScaleAnchor.Middle)
        pause(100)
    }
    pause(100)
    for (let index = 0; index < 4; index++) {
        Sprite2.changeScale(-0.25, ScaleAnchor.Middle)
        pause(100)
    }
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleRedCrystal, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestOpen, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level4`)
    tiles.placeOnTile(Men, tiles.getTileLocation(0, 15))
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    info.startCountdown(20)
    tiles.setCurrentTilemap(tilemap`level2`)
    tiles.placeOnTile(Men, tiles.getTileLocation(3, 18))
})
let Men: Sprite = null
info.setLife(3)
let Banali = 0
info.startCountdown(10)
tiles.setCurrentTilemap(tilemap`level1`)
Men = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Men, 200, 200)
scene.cameraFollowSprite(Men)
tiles.placeOnTile(Men, tiles.getTileLocation(1, 1))
