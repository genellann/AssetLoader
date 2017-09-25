# Phaser Asset Loader

Tell where to get min and how to include in project

phaser version

Explain that some things have to be loaded within the src code (callbacks)

Preload sprite convo

## Code   

    assets.json = {
        "image": {
            "example": "example.png"
        }
    }
    
    class BootState extends Phaser.State {
    
        preload() {
            this.game.load.json("assets", "assets.json");
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
fields in **bold** mean you must include either/or

fields in _italics_ mean optional. If you exclude the field, it will default to something

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
     * @param {string} [textureURL = <key>.png]
     * @param {string} [atlasURL = <key>.json]
     * @param {object} [atlasData = null]
     * @param {number} [format = 0]
     */
    
"atlas": "key"

"atlas": ["key", "key"]

"atlas": {
    "key": {
        "textureURL": "relative/path/name.png",
        **"atlasURL"**: "relative/path/name.json",
        **"atlasData"**: {
            // You can put the json object here directly. If you do, "atlasURL" will be ignored. It's either/or. 
        },
        _"format"_: 1
    }
}

    "atlas": {
        "key": {
            "textureURL": "relative/path/name.png",
            **"atlasURL"**: "relative/path/name.json",
            **"atlasData"**: {
                // You can put the json object here directly. If you do, "atlasURL" will be ignored. It's either/or. 
            },
            _"format"_: 1
        }
    }
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
    "atlasJSONArray": "key"
    -
    "atlasJSONArray": ["key", "key"]
    -
    "atlasJSONArray": {
        "irrelevant": "key",
        "irrelevant": ["key", "key"],
        "key": {
            "textureURL": "relative/path/name.png",
            "atlasURL": "relative/path/name.json"
        },
        "key": {
            "textureURL": "relative/path/name.png",
            "atlasData": { 
               //data obj
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
    "atlasXML": "key"
    -
    "atlasXML": ["key", "key"]
    -
    "atlasXML": {
        "irrelevant": "key",
        "irrelevant": ["key", "key"],
        "key": {
            "textureURL": "relative/path/name.png",
            "atlasURL": "relative/path/name.xml"
        },
        "key": {
            "textureURL": "relative/path/name.png",
            "atlasData": { 
               //data obj
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
        "key": "relative/path/name.mp3",
        "key": ["relative/path/name.mp3", "relative/path/name.wav"],
        "key": {
            "urls": "relative/path/name.mp3",
            "autoDecode": false
        },
        "key": {
            "urls": ["relative/path/name.mp3", "relative/path/name.wav"]
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
        "key": "relative/path/name.mp3",
        "key": ["relative/path/name.mp3", "relative/path/name.wav"],
        "key": {
            "urls": "relative/path/name.mp3",
            "jsonURL": "relative/path/name.json,
            "autoDecode": false
        },
        "key": {
            "urls": ["relative/path/name.mp3", "relative/path/name.wav"],
            "jsonData": {
                //data obj
            },
            "autoDecode": true
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
    "binary": "key"
    -
    "binary": ["key", "key"]
    -
    "binary": {
        "key": "relative/path/name.bin"
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
    "bitmapFont": "key"
    -
    "bitmapFont": ["key", "key"]
    -
    "bitmapFont": {
        "irrelevant": "key",
        "irrelevant": ["key", "key"],
        "key": {
            "textureURL": "relative/path/name.png",
            "atlasURL": "relative/path/name.xml",
            "xSpacing": 10,
            "ySpacing": 5
        },
        "key": {
            "textureURL": "relative/path/name.png",
            "atlasData": { 
               //data obj
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
    "image": "key"
    -
    "image": ["key", "key"]
    -
    "image": {
        "key": "relative/path/name.png",
        "key": {
            "url": "relative/path/name.jpeg",
            "overwrite": true
        }
    }
     
#### [images(keys, urls)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#images)
    /**
     * @param {Array} keys
     * @param {Array} [urls = Array.<string>] // The strings in the array will default to <key>.png
     */
    --
    "images": ["key", "key"]
    -
    "images": {
        "keys": ["key", "key"],
        "urls": ["relative/path/name.png", "relative/path/name.jpeg"]
    }
     
#### [json(key, url, overwrite)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#json)
    /**
     * @param {string} key
     * @param {string} [url = <key>.json]
     * @param {boolean} [overwrite = false]
     */
    --
    "json": "key"
    -
    "json": ["key", "key"]
    -
    "json": {
        "key": "relative/path/name.json",
        "key": {
            "url": "relative/path/name.json",
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
        "key": "relative/path/name.json",
        "key": {
            //data obj
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
    "physics": "key"
    -
    "physics": ["key", "key"]
    -
    "physics": {
        "key": "relative/path/name.json",
        "key": {
            "url": "relative/path/name.json",
            "format": 4
        },
        "key": {
            "data": "stringified json"
        },
        "key": {
            "data": {
                //data obj
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
    "script": "key"
    -
    "script": ["key", "key"]
    -
    "script": {
        "key": "relative/path/name.js",
    }

#### [shader(key, url, overwrite)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#shader)
    /**
     * @param {string} key
     * @param {string} [url = <key>.frag]
     * @param {string} [overwrite = false]
     */
     --
     "shader": "key"
     -
     "shader": ["key", "key"]
     -
     "shader": {
         "key": "relative/path/name.frag",
         "key": {
             "url": "relative/path/name.frag",
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
        "key": {
            "url": "relative/path/name.png",
            "frameWidth": 70,
            "frameHeight": 70
        },
        "key": {
            "url": "relative/path/name.png",
            "frameWidth": 70,
            "frameHeight": 70,
            "frameMax": -1,
            "margin": 10,
            "spacing": 0
        }
    }
     
#### [text(key, url, overwrite)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#text)
    /**
     * @param {string} key
     * @param {string} [url = <key>.txt]
     * @param {boolean} [overwrite = false]
     */
    --
    "text": "key"
    -
    "text": ["key", "key"]
    -
    "text": {
        "key": "relative/path/name.txt",
        "key": {
            "url": "relative/path/name.txt",
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
    "tilemap": "key"
    -
    "tilemap": ["key", "key"]
    -
    "tilemap": {
        "key": "relative/path/name.json",
        "key": {
            "url": "relative/path/name.json",
            "format": 1
        },
        "key": {
            "data": "stringified json"
        },
        "key": {
            "data": {
                //data obj
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
        "key": "relative/path/name.mp3",
        "key": ["relative/path/name.mp3", "relative/path/name.wav"],
        "key": [{}, {}],
        "key": {
            "urls": "relative/path/name.mp3",
            "loadEvent": "loadeddata"
        },
        "key": {
            "urls": ["relative/path/name.mp3", "relative/path/name.wav"],
            "asBlob": true
        },
        "key": {
            "urls": [{}, {}],
            "loadEvent": "canplay",
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
    "xml": "key"
    -
    "xml": ["key", "key"]
    -
    "xml": {
        "key": "relative/path/name.xml",
        "key": {
            "url": "relative/path/name.xml",
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