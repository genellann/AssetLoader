# Phaser Asset Loader

The min.js is in the [/main/dist](/main/dist) directory. 

The Phaser AssetLoader library was written with Phaser version 2.6.2.

## CODE  
There are 3 steps to using the AssetLoader:
1. List the keys and paths to your assets in a json file.

---
    assets.json = {
        "image": {
            "example": "example.png"
        }
    }

2. Load the json into your game.

---
    class BootState extends Phaser.State {
    
        preload() {
            this.game.load.json("assets", "assets.json");
        }
    
        create() {
            this.game.state.start("load");
        }
    }

3. Pass the json into an AssetLoader instance and allow it to load the rest of your assets automatically.

---
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

#### Example
Please see the [test](/test) project for a real life example.

#### Exceptions
##### Callbacks
There are some load methods that allow callbacks and callback contexts to be passed (binary, pack, script). There isn't a way to pass functions into the AssetLoader from a json. You will want to load binaries, packs, and scripts manually from inside your source code if you would like to pass callbacks to them. If you do not need to pass callbacks to these, you can set them up and load them with the AssetLoader from a json.

##### Preload Sprite
If you are using a preload sprite, an image that will show during the loading period of your game, you can either:
1. Load it outside of the AssetLoader at the same time you load your json for the AssetLoader.

---
    class BootState extends Phaser.State {
    
        preload() {
            this.game.load.json("assets", "assets.json");
         
            this.game.load.image("preloadSprite", "preloadSprite.png");
        }
    
        create() {
            this.game.state.start("load");
        }
    }

    class LoadState extends Phaser.State {
    
        preload() {
            let loadingBar = this.game.add.sprite(0, 0, "preloadSprite);
            this.game.load.setPreloadSprite(loadingBar);
            
            new AssetLoader(this.game, this.game.cache.getJSON("assets"));
        }
    }

2. List it first in your json file, listen for when it is loaded, then add it to the stage. 

---
    class LoadState extends Phaser.State {

    preload() {
        this.game.load.onFileComplete.add(this.onFileLoaded, this);

        new AssetLoader(this.game, this.game.cache.getJSON(AssetKeys.ASSETS));
    }

    onFileLoaded(progress, cacheKey, success, totalLoaded, totalFiles) {
        if (success && cacheKey === "preloadSprite") {
             let loadingBar = this.game.add.sprite(0, 0, "preloadSprite");
             this.game.load.setPreloadSprite(loadingBar);
        }
    }

## JSON STRUCTURE
It is important that your json is structured properly. Below are all the Loader functions that come with Phaser. 
 
The function names are linked to the [Phaser.Loader](http://phaser.io/docs/2.6.2/Phaser.Loader) doc. I have also listed the params in jsdoc notation so you can see information about the params like data type, whether it's required, and default values.
 
There are examples of how you can structure your json for each Loader function. There are several ways per load function of how you can form your json object.

Sometimes, there are Loader function params that are either/or. For example. If you pass an object for "atlasData" to the Loader.atlas(), "atlasURL" will be ignored. You are either passing the path ("atlasURL") or the json object directly ("atlasData"). You must pass one or the other even though they both have default values.

Sometimes, there are Loader function params that are optional. The have a default value. You do not need to include a value for these params in the json if you would like to use the default value.

Please see [template.json](/test/data/template.json) for the most common (and recommended) structures. This will be the easiest starting point for you when creating your json file.

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
    "resetLocked": true //defaults to false

#### [atlas(key, textureURL, atlasURL, atlasData, format)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#atlas)
    /**
     * @param {string} key 
     * @param {string} [textureURL = <key>.png]
     * @param {string} [atlasURL = <key>.json]
     * @param {object} [atlasData = null]
     * @param {number} [format = 0]
     */
---
    "atlas": "key"
---
    "atlas": ["key", "key"]
---
    "atlas": {
        "key": {
            "textureURL": "relative/path/name.png",
            "atlasURL": "relative/path/name.json",
            "atlasData": {
                // If you give an "atlasData" object, "atlasURL" will be ignored. It's either/or. 
            },
            "format": 1
        }
    }
---
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
---
    "atlasJSONArray": "key"
---
    "atlasJSONArray": ["key", "key"]
---
    "atlasJSONArray": {
        "key": {
            "textureURL": "relative/path/name.png",
            "atlasURL": "relative/path/name.json",
            "atlasData": { 
                // If you give an "atlasData" object, "atlasURL" will be ignored. It's either/or. 
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
---
    "atlasXML": "key"
---
    "atlasXML": ["key", "key"]
---
    "atlasXML": {
        "key": {
            "textureURL": "relative/path/name.png",
            "atlasURL": "relative/path/name.xml",
            "atlasData": { 
                // If you give an "atlasData" object, "atlasURL" will be ignored. It's either/or. 
            }
        }
    }

#### [audio(key, urls, autoDecode)](http://phaser.io/docs/2.6.2/Phaser.Loader.html#audio)
    /**
     * @param {string} key
     * @param {string | Array.<string> | Array.<object>} urls
     * @param {boolean} [autoDecode = true]
     */
---
    "audio": {
        "key": "relative/path/name.mp3",
        "key": ["relative/path/name.mp3", "relative/path/name.wav"],
        "key": [{}, {}],
        "key": {
            "urls": "relative/path/name.mp3",   // {string | Array.<string> | Array.<object>}
            "autoDecode": false
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
---
    "audioSprite": {
        "key": "relative/path/name.mp3",
        "key": ["relative/path/name.mp3", "relative/path/name.wav"],
        "key": {
            "urls": "relative/path/name.mp3",   // {Array | string}
            "jsonURL": "relative/path/name.json,
            "jsonData": {
                // If you give a "jsonData" object, "jsonURL" will be ignored. It's either/or. 
            },
            "autoDecode": false
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

## UNIT TESTS
In order to test the AssetLoader, I made a simple Phaser game...

The tests are [here](/test).

Ask for people to put in issues/pr's

Tell how to set json path, build, and open index.html

Need to run npm install & grunt task then open index

## JSDOCS
Please download or clone the repo and open [/main/docs/index.html](/main/docs/index.html) in a web browser

## MY OTHER GITHUB PROJECTS

[Align](https://github.com/genradley/Align) - A library for aligning display objects in relation to one another.

[PhaserSignals](https://github.com/genradley/PhaserSignals) - Add **_any_** listener to **_any_** signal. Dispatch **_any_** signal **_anywhere/anytime_**.

More coming soon...

## CREDITS
This project used the [webpack-library-starter](https://github.com/krasimir/webpack-library-starter) project

Some of the test assets are from the Phaser game [Elemental One]()

Some of the test assets are from [Phaser's example code]()

## ABOUT ME
My name is Genell Radley. I am a game developer w/7yr professional experience writing games in Flash, Unity and HTML5. I believe in unit testing and documenting my code well. I am very excited to share my code here with you on GitHub. I hope you will contribute. 

Please see my [github profile](https://github.com/genradley) and [linkedin profile](https://www.linkedin.com/in/genellradley/). 

--
(ignore this line. it is for seo purposes)
Genell Radley
Genell Radley
Genell Radley
Genell Radley
Genell Radley
Genell Radley
Genell Radley
Genell Radley
