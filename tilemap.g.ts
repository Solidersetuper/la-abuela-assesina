// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100003030303030303020202020203030204020202020202040203030303030302040402030303020402030404040303030203020303030203030302030202030302030202020302030202020202030303020303040203020202030303020303030203030203030203020203030202040202030302030202030302020303030303030303020302040403030202030303010203020203030302020303020202030302020204020203030202030202020303020303020402030303020302020203030202030202020302030203020303030302020303020203020303030202020303020402030202030202020204040203020204040202020304040404040202020202`, img`
2 2 2 2 2 2 2 . . . . . 2 2 . . 
. . . . . . . . 2 2 2 2 2 2 . . 
. . 2 2 2 . . . 2 . . . 2 2 2 . 
2 . 2 2 2 . 2 2 2 . 2 . . 2 2 . 
2 . . . 2 . 2 . . . . . 2 2 2 . 
2 2 . . 2 . . . 2 2 2 . 2 2 2 . 
2 2 . 2 2 . 2 . . 2 2 . . . . . 
2 2 . 2 . . 2 2 . . 2 2 2 2 2 2 
2 2 . 2 . . . 2 2 . . 2 2 2 . . 
2 . . 2 2 2 . . 2 2 . . . 2 2 . 
. . . . . 2 2 . . 2 . . . 2 2 . 
2 2 . . . 2 2 2 . 2 . . . 2 2 . 
. 2 . . . 2 . 2 . 2 . 2 2 2 2 . 
. 2 2 . . 2 . 2 2 2 . . . 2 2 . 
. . 2 . . 2 . . . . . . . 2 . . 
. . . . . 2 . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.chestClosed,sprites.castle.tileGrass2,sprites.builtin.forestTiles0,sprites.castle.tileGrass1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
