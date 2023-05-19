// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "ewer":
            case "level1":return tiles.createTilemap(hex`1000100000000000020202020000000000000000040400000000000000000404040404040000000000000000000404000000000000000000000000000404000000000000000000000000000004000000000000000404040000000404040000000000000000000000000404000000000000000000000000000404000000000000000004040000000404000000000000000000000000000404000000000000000000000000000404000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000030303030403030303030303030303030101020202020202020202020101010101010101010101010101010101010101`, img`
2 . . . . . . . . . . . . . . 2 
2 2 . . . . . . . . 2 2 2 2 2 2 
2 . . . . . . . . 2 2 . . . . 2 
2 . . . . . . . 2 2 . . . . . 2 
2 . . . . . . . 2 . . . . . . 2 
2 2 2 . . . 2 2 2 . . . . . . 2 
2 . . . . 2 2 . . . . . . . . 2 
2 . . . 2 2 . . . . . . . . 2 2 
2 . . 2 2 . . . . . . . . . . 2 
2 . 2 2 . . . . . . . . . . . 2 
2 2 2 . . . . . . . . . . . . 2 
2 2 . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.collectibleRedCrystal,sprites.castle.tilePath7,sprites.dungeon.doorLockedWest], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "myTile":
            case "tile1":return tile1;
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
