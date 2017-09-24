# Phaser Asset Loader

## Code   

    class BootState extends Phaser.State {
    
        preload() {
            this.game.load.json("assets", "data/assets.json");
        }
    
        create() {
            this.game.state.start("load");
        }
    }
    
    
    class LoadState extends Phaser.State {
    
        preload() {
            new AssetLoader(this.game, this.game.cache.getJSON("assets"));
    
            this.game.load.onLoadComplete.add(this.onLoadComplete, this);
        }
    
        onLoadComplete() {
            this.game.load.onLoadComplete.remove(this.onLoadComplete, this);
    
            this.game.state.start("play");
        }
    }

## JSON

#### [baseURL](http://phaser.io/docs/2.6.2/Phaser.Loader.html#baseURL) - string
    "baseURL": "absolute/path"
    
#### [crossOrigin](http://phaser.io/docs/2.6.2/Phaser.Loader.html#crossOrigin) - string | boolean
    "crossOrigin": "anonymous"
    --
    "crossOrigin": true

#### [enableParallel](http://phaser.io/docs/2.6.2/Phaser.Loader.html#enableParallel) - boolean
    "enableParallel": false //defaults to true
    
#### [path](http://phaser.io/docs/2.6.2/Phaser.Loader.html#path) - string
    "path": "relative/path"

#### [resetLocked](http://phaser.io/docs/2.6.2/Phaser.Loader.html#resetLocked) - boolean
    "enableParallel": true //defaults to false

#### [atlas](http://phaser.io/docs/2.6.2/Phaser.Loader.html#atlas)
    "atlas": "atlasTest"
    ---
    "atlas": ["atlasTest", "atlasTest2"]
    ---
    "atlas": {
        "atlasTest": {
            "textureURL": "assets/sprites/atlasTest.png",
            "atlasURL": "assets/sprites/atlasTest.json",
            "format": todo //defaults to Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY
        }
    }
    ---
    "atlas": {
        "atlasTest": {
            "textureURL": "assets/sprites/atlasTest.png",
            "atlasData": {
                // json data obj
            }
        }
    }
#### [atlasJSONArray](http://phaser.io/docs/2.6.2/Phaser.Loader.html#atlasJSONArray)

#### [atlasJSONHash](http://phaser.io/docs/2.6.2/Phaser.Loader.html#atlasJSONHash)
Same as atlasJSONArray

#### [atlasXML](http://phaser.io/docs/2.6.2/Phaser.Loader.html#atlasXML)
#### [audio](http://phaser.io/docs/2.6.2/Phaser.Loader.html#audio)
#### [audioSprite](http://phaser.io/docs/2.6.2/Phaser.Loader.html#audioSprite)
#### [binary](http://phaser.io/docs/2.6.2/Phaser.Loader.html#binary)
#### [bitmapFont](http://phaser.io/docs/2.6.2/Phaser.Loader.html#bitmapFont)
#### [image](http://phaser.io/docs/2.6.2/Phaser.Loader.html#image)
#### [images](http://phaser.io/docs/2.6.2/Phaser.Loader.html#images)
#### [json](http://phaser.io/docs/2.6.2/Phaser.Loader.html#json)
#### [pack](http://phaser.io/docs/2.6.2/Phaser.Loader.html#pack)
#### [physics](http://phaser.io/docs/2.6.2/Phaser.Loader.html#physics)
#### [script](http://phaser.io/docs/2.6.2/Phaser.Loader.html#script)
#### [shader](http://phaser.io/docs/2.6.2/Phaser.Loader.html#shader)
#### [spritesheet](http://phaser.io/docs/2.6.2/Phaser.Loader.html#spritesheet)
#### [text](http://phaser.io/docs/2.6.2/Phaser.Loader.html#text)
#### [tilemap](http://phaser.io/docs/2.6.2/Phaser.Loader.html#tilemap)
#### [video](http://phaser.io/docs/2.6.2/Phaser.Loader.html#video)
#### [xml](http://phaser.io/docs/2.6.2/Phaser.Loader.html#xml)

## Unit tests
In order to test the AssetLoader, I made a simple Phaser game...

The tests are [here](/test).

## Credits
This project used the [webpack-library-starter](https://github.com/krasimir/webpack-library-starter) project

