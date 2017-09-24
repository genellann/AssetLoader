# Phaser Asset Loader

Tell where to get min and how to include in project

phaser version

## Code   

    json = {
        "image": {
            "example": "example.png"
        }
    }
    
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
    
            this.game.add.sprite(0, 0, "example");
        }
    }

## JSON

#### [baseURL](http://phaser.io/docs/2.6.2/Phaser.Loader.html#baseURL) {string}
    "baseURL": "absolute/path"
    
#### [crossOrigin](http://phaser.io/docs/2.6.2/Phaser.Loader.html#crossOrigin) {string | boolean}
    "crossOrigin": "anonymous"
    --
    "crossOrigin": true

#### [enableParallel](http://phaser.io/docs/2.6.2/Phaser.Loader.html#enableParallel) {boolean}
    "enableParallel": false //defaults to true
    
#### [path](http://phaser.io/docs/2.6.2/Phaser.Loader.html#path) {string}
    "path": "relative/path"

#### [resetLocked](http://phaser.io/docs/2.6.2/Phaser.Loader.html#resetLocked) {boolean}
    "enableParallel": true //defaults to false

#### [atlas(key, textureURL, atlasURL, atlasData, format)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#atlas)
    /**
     * @param {string} key 
     * @param {string} [textureURL = <key>.png
     * @param {string} [atlasURL = <key>.json]
     * @param {object} [atlasData = null]
     * @param {number} [format = 0]
     */
    --
    "atlas": "example"
    -
    "atlas": ["example1", "example2"]
    -
    "atlas": {
        "example": {
            "textureURL": "relative/path/example.png",
            "atlasURL": "relative/path/example.json",
            "format": 1
        }
    }
    --
    FORMATS:
    Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY = 0; (default)
    Phaser.Loader.TEXTURE_ATLAS_JSON_HASH = 1;
    Phaser.Loader.TEXTURE_ATLAS_XML_STARLING = 2;
    
#### [atlasJSONArray(key, textureURL, atlasURL, atlasData)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#atlasJSONArray)
    /**
     * @param {string} key 
     * @param {string} [textureURL = <key>.png]
     * @param {string} [atlasURL = <key>.json]
     * @param {object} [atlasData = null]
     */
    --
    "atlasJSONArray": "example"
    -
    "atlasJSONArray": ["example1", "example2"]
    -
    "atlasJSONArray": {
        "example1": "example", //the key is "example" in this case, not "example1"
        "example2": {
            "textureURL": "relative/path/example.png",
            "atlasURL": "relative/path/example.json"
        },
        "example3": {
            "textureURL": "relative/path/example.png",
            "atlasData": { 
               // json data obj
            }
        }
    }
     
#### [atlasJSONHash(key, textureURL, atlasURL, atlasData)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#atlasJSONHash)
Same as atlasJSONArray

#### [atlasXML(key, textureURL, atlasURL, atlasData)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#atlasXML)
    /**
     * @param {string} key
     * @param {string} [textureURL = <key>.png]
     * @param {string} [atlasURL = <key>.xml]
     * @param {object} [atlasData = null]
     */
    --
    "atlasXML": "example"
    -
    "atlasXML": ["example1", "example2"]
    -
    "atlasXML": {
        "example1": "example", //the key is "example" in this case, not "example1"
        "example2": {
            "textureURL": "relative/path/example.png",
            "atlasURL": "relative/path/example.xml"
        },
        "example3": {
            "textureURL": "relative/path/example.png",
            "atlasData": { 
               // xml data obj
            }
        }
    }

#### [audio(key, urls, autoDecode)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#audio)
    /**
     * @param {string} key
     * @param {string | Array.<string> | Array.<object>} urls
     * @param {boolean} [autoDecode = true]
     */
     --
    "audio": {
        "example1": "relative/path/example.mp3",
        "example2": ["relative/path/example.mp3", "relative/path/example.wav"],
        "example3": {
            "urls": "relative/path/example.mp3",
            "autoDecode": false
        },
        "example4": {
            "urls": ["relative/path/example.mp3", "relative/path/example.wav"]
        }
    }
         
#### [audioSprite(key, urls, jsonURL, jsonData, autoDecode)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#audioSprite)
    /**
     * @param {string} key
     * @param {Array | string} urls
     * @param {string} [jsonURL = null]
     * @param {string | object} [jsonData = null]
     * @param {boolean} [autoDecode = true]
     */
    --
    "audioSprite": {
        "example1": "relative/path/example.mp3",
        "example2": ["relative/path/example.mp3", "relative/path/example.wav"],
        "example3": {
            "urls": "relative/path/example.mp3",
            "jsonURL": "relative/path/example.json,
            "autoDecode": false
        },
        "example4": {
            "urls": ["relative/path/example.mp3", "relative/path/example.wav"],
            "jsonData": {
                // json data obj
            }
        }
    }
#### [binary(key, url, callback, callbackContext)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#binary)
    /**
     * @param {string} key
     * @param {string} [url = <key>.bin]
     * @param {function} [callback = null] // NOTE: we cannot pass in a callback from a json
     * @param {function} [callbackContext = null]
     */
    --
    "binary": "example"
    -
    "binary": ["example1", "example2"]
    -
    "binary": {
        "example": "example.bin" //"key": "url" (with file ext)
    }
     
#### [bitmapFont(key, textureURL, atlasURL, atlasData, xSpacing, ySpacing)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#bitmapFont)
    /**
     * @param {string} key
     * @param {string} [textureURL = <key>.png]
     * @param {string} [atlasURL = <key>.xml]
     * @param {object} [atlasData = null]
     * @param {number} [xSpacing = 0]
     * @param {number} [ySpacing = 0]
     */
    --
    "bitmapFont": "example"
    -
    "bitmapFont": ["example1", "example2"]
    -
    "bitmapFont": {
        "example1": "example", //the key is "example" in this case, not "example1"
        "example2": {
            "textureURL": "relative/path/example.png",
            "atlasURL": "relative/path/example.xml",
            "xSpacing": 10,
            "ySpacing": 5
        },
        "example3": {
            "textureURL": "relative/path/example.png",
            "atlasData": { 
               // xml data obj
            }
        }
    }
     
#### [image(key, url, overwrite)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#image)
    /**
     * @param {string} key
     * @param {string} [url = <key>.png]
     * @param {boolean} [overwrite = false]
     */
    --
    "image": "example"
    -
    "image": ["example1", "example2"]
    -
    "image": {
        "example1": "relative/path/example.png", //"key": "url" (with file ext)
        "example2": {
            "url": "relative/path/example.jpeg",
            "overwrite": true
        }
    }
     
#### [images(keys, urls)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#images)
    /**
     * @param {Array} keys
     * @param {Array} [urls = Array.<string>] // The strings in the array will default to <key>.png
     */
    --
    "images": ["example1", "example2"]
    -
    "images": {
        "example1": ["example1", "example2"],
        "example2": {
            "keys": ["example1", "example2"],
            "urls": ["example1.png", "example2.jpeg"]
        }
    }
     
#### [json(key, url, overwrite)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#json)
    /**
     * @param {string} key
     * @param {string} [url = <key>.json]
     * @param {boolean} [overwrite = false]
     */
    --
    "json": "example"
    -
    "json": ["example1", "example2"]
    -
    "json": {
        "example1": "relative/path/example.json", //"key": "url" (with file ext)
        "example2": {
            "url": "relative/path/example.json",
            "overwrite": true
        }
    }
     
#### [pack(key, url, data, callbackContext)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#pack)
    /**
      * @param {string} key
      * @param {string} [url = null] //Must pass either url or data param
      * @param {object} [data = null] //Must pass either url or data param
      * @param {loader} [callbackContext = null] //If you need to pass a context, you won't be able to do it from an external json, load it from within the code base.
      */
    --
    "pack": {
        "example1": "relative/path/example.json",
        "example2": {
            // json data obj
        }
    }
      
#### [physics(key, url, data, format)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#physics)
    /**
     * @param {string} key
     * @param {string} [url = <key>.json]
     * @param {object | string} [data = null]
     * @param {string} [format = 3]
     */
    --
    "physics": "example"
    -
    "physics": ["example1", "example2"]
    -
    "physics": {
        "example1": "relative/path/example.json", //"key": "url" (with file ext)
        "example2": {
            "url": "relative/path/example.json",
            "format": 4
        },
        "example3": {
            "data": "relative/path/example.png"
        },
        "example4": {
            "data": {
                // json data obj
            }
        }
    }
    --
    FORMATS:
    Phaser.Loader.PHYSICS_LIME_CORONA_JSON = 3;
    Phaser.Loader.PHYSICS_PHASER_JSON = 4;
    
#### [script(key, url, callback, callbackContext)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#script)
    /**
     * @param {string} key
     * @param {string} [url = <key>.js]
     * @param {function} [callback = null] //Cannot pass callbacks from json
     * @param {object} [callbackContext = null]
     */
    --
    "script": "example"
    -
    "script": ["example1", "example2"]
    -
    "script": {
        "example1": "relative/path/example.json", //"key": "url" (with file ext)
        "example2": {
            "url": "relative/path/example.json",
        }
    }

#### [shader(key, url, overwrite)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#shader)
    /**
     * @param {string} key
     * @param {string} [url = <key>.frag]
     * @param {string} [overwrite = false]
     */
     --
     "shader": "example"
     -
     "shader": ["example1", "example2"]
     -
     "shader": {
         "example1": "relative/path/example.frag", //"key": "url" (with file ext)
         "example2": {
             "url": "relative/path/example.frag",
             "overwrite": true
         }
     }
    
#### [spritesheet(key, url, frameWidth, frameHeight, frameMax, margin, spacing)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#spritesheet)
    /**
     * @param {string} key
     * @param {string} url
     * @param {number} frameWidth
     * @param {number} frameHeight
     * @param {number} [frameMax = -1]
     * @param {number} [margin = 0]
     * @param {number} [spacing = 0]
     */
    --
    "spritesheet": {
        "example": {
            "url": "relative/path/example.png",
            "frameWidth": 70,
            "frameHeight": 70,
            "margin": 10
        }
    }
     
#### [text(key, url, overwrite)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#text)
    /**
     * @param {string} key
     * @param {string} [url = <key>.txt]
     * @param {boolean} [overwrite = false]
     */
    --
    "text": "example"
    -
    "text": ["example1", "example2"]
    -
    "text": {
        "example1": "relative/path/example.txt", //"key": "url" (with file ext)
        "example2": {
            "url": "relative/path/example.txt",
            "overwrite": true
        }
    }
     
#### [tilemap(key, url, data, format)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#tilemap)
    /**
     * @param {string} key
     * @param {string} [url = <key>.json]
     * @param {object | string} [data = null]
     * @param {number} [format = 0]
     */
    --
    "tilemap": "example"
    -
    "tilemap": ["example1", "example2"]
    -
    "tilemap": {
        "example1": "relative/path/example.json", //"key": "url" (with file ext)
        "example2": {
            "url": "relative/path/example.json",
            "format": 1
        },
        "example3": {
            "data": "relative/path/example.png"
        },
        "example4": {
            "data": {
                // json data obj
            }
        }
    }
    --     
    FORMATS:
    Phaser.Tilemap.CSV = 0;
    Phaser.Tilemap.TILED_JSON = 1;
    
#### [video(key, urls, loadEvent, asBlob)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#video)
    /**
     * @param {string} key
     * @param {string | Array.<string> | Array.<object>} urls
     * @param {string} [loadEvent = "canplaythrough"]
     * @param {boolean} [asBlob = false]
     */
     --
    "video": {
        "example1": "relative/path/example.mp3",
        "example2": ["relative/path/example.mp3", "relative/path/example.wav"],
        "example3": [{}, {}],
        "example4": {
            "urls": "relative/path/example.mp3",
            "loadEvent": "loadeddata"
        },
        "example5": {
            "urls": ["relative/path/example.mp3", "relative/path/example.wav"],
            "asBlob": true
        },
        "example6": {
            "urls": [{}, {}]
            "loadEvent": "canplay"
            "asBlob": true
        }
    }
    --     
    LOAD EVENTS:
        "canplaythrough"
        "canplay"
        "loadeddata" 
        
#### [xml(key, url, overwrite)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#xml)
    /**
     * @param {string} key
     * @param {string} [url = <key>.xml]
     * @param {boolean} [overwrite = false]
     */
    --
    "xml": "example"
    -
    "xml": ["example1", "example2"]
    -
    "xml": {
        "example1": "relative/path/example.xml", //"key": "url" (with file ext)
        "example2": {
            "url": "relative/path/example.xml",
            "overwrite": true
        }
    }

## Unit tests
In order to test the AssetLoader, I made a simple Phaser game...

The tests are [here](/test).

Ask for people to put in issues/pr's

Tell how to set json path, build, and open index.html

## Credits
This project used the [webpack-library-starter](https://github.com/krasimir/webpack-library-starter) project

Some of the test assets are from the Phaser game [Elemental One]()

Some of the test assets are from [Phaser's example code]()