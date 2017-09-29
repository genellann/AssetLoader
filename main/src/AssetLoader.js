/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/PhaserAssetLoader
 */

/**
 * Will load assets from a json file.
 *
 * https://phaser.io/docs/2.6.2/Phaser.Loader.html
 *
 * There are some Phaser.Loader that take in a callback and/or callbackContext.
 * These are: binary, pack, script, withSyncPoints
 * If you want to use these loaders with callbacks, you'll have to do it from
 * code, not json.
 *
 * You can set the value to either the default datatype or an object with the
 * parameters you want to set.
 *
 * TODO: for json data, have to put the json object in the assets.json, can't
 * reference another json because it won't be loaded yet.
 */
class AssetLoader {

    /**
     * Takes in properly formatted json for asset loading.
     * @param {Phaser.Game} game - A reference to the currently running game.
     * @param {json} data - The loaded json. You will have to load the json for
     *     this file manually but everything else can load from the
     *     AssetLoader.
     */
    constructor(game, data) {
        this.game = game;

        this.loadBaseURL(data.baseURL);
        this.loadCrossOrigin(data.crossOrigin);
        this.loadEnableParallel(data.enableParallel);
        this.loadPath(data.path);
        this.loadResetLocked(data.resetLocked);
        this.loadAtlas(data.atlas);
        this.loadAtlasJSONArray(data.atlasJSONArray);
        this.loadAtlasJSONHash(data.atlasJSONHash);
        this.loadAtlasXML(data.atlasXML);
        this.loadAudio(data.audio);
        this.loadAudioSprite(data.audioSprite);
        this.loadBinary(data.binary);
        this.loadBitmapFont(data.bitmapFont);
        this.loadImage(data.image);
        this.loadImages(data.images);
        this.loadJSON(data.json);
        this.loadPack(data.pack);
        this.loadPhysics(data.physics);
        this.loadScript(data.script);
        this.loadShader(data.shader);
        this.loadSpritesheet(data.spritesheet);
        this.loadText(data.text);
        this.loadTilemap(data.tilemap);
        this.loadVideo(data.video);
        this.loadXML(data.xml);
    }

    // -------- baseURL -------- //

    loadBaseURL(data) {
        if (typeof data === "string") {
            this.game.load.baseURL = data;
        }
    }

    // -------- crossOrigin -------- //

    loadCrossOrigin(data) {
        if (typeof data === "string" || typeof data === "boolean") {
            this.game.load.crossOrigin = data;
        }
    }

    // -------- enableParallel -------- //

    loadEnableParallel(data) {
        if (typeof data === "boolean") {
            this.game.load.enableParallel = data;
        }
    }

    // -------- path -------- //

    loadPath(data) {
        if (typeof data === "string") {
            this.game.load.path = data;
        }
    }

    // -------- resetLocked -------- //

    loadResetLocked(data) {
        if (typeof data === "boolean") {
            this.game.load.resetLocked = data;
        }
    }

    // -------- atlas -------- //

    /*
     * @param {string} key
     * @param {string} [textureURL = <key>.png
     * @param {string} [atlasURL = <key>.json]
     * @param {object} [atlasData = null]
     * @param {number} [format = 0]
     */
    loadAtlas(data) {
        let key;
        let value;
        let i;
        let paramA;
        let paramB;
        let paramC;
        let paramD;
        if (typeof data === "string") {
            this.game.load.atlas(data);
        }
        else if (Array.isArray(data)) {
            for (i = 0; i < data.length; i++) {
                if (typeof data[i] === "string") {
                    this.game.load.atlas(data[i]);
                }
            }
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.atlas(key);
                } else {
                    paramA = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
                    paramB = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
                    paramC = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
                    paramD = (value.hasOwnProperty("format")) ? value["format"] : Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY;
                    this.game.load.atlas(key, paramA, paramB, paramC, paramD);
                }
            }
        }
    }

    // -------- atlasJSONArray -------- //

    /*
     * @param {string} key
     * @param {string} [textureURL = <key>.png]
     * @param {string} [atlasURL = <key>.json]
     * @param {object} [atlasData = null]
     */
    loadAtlasJSONArray(data) {
        let key;
        let value;
        let i;
        let paramA;
        let paramB;
        let paramC;
        if (typeof data === "string") {
            this.game.load.atlasJSONArray(data);
        }
        else if (Array.isArray(data)) {
            for (i = 0; i < data.length; i++) {
                if (typeof data[i] === "string") {
                    this.game.load.atlasJSONArray(data[i]);
                }
            }
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.atlasJSONArray(key);
                } else {
                    paramA = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
                    paramB = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
                    paramC = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
                    this.game.load.atlasJSONArray(key, paramA, paramB, paramC);
                }
            }
        }
    }

    // -------- atlasJSONHash -------- //

    /*
     * @param {string} key
     * @param {string} [textureURL = <key>.png]
     * @param {string} [atlasURL = <key>.json]
     * @param {object} [atlasData = null]
     */
    loadAtlasJSONHash(data) {
        let key;
        let value;
        let i;
        let paramA;
        let paramB;
        let paramC;
        if (typeof data === "string") {
            this.game.load.atlasJSONHash(data);
        }
        else if (Array.isArray(data)) {
            for (i = 0; i < data.length; i++) {
                if (typeof data[i] === "string") {
                    this.game.load.atlasJSONHash(data[i]);
                }
            }
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.atlasJSONHash(key);
                } else {
                    paramA = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
                    paramB = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
                    paramC = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
                    this.game.load.atlasJSONHash(key, paramA, paramB, paramC);
                }
            }
        }
    }

    // -------- atlasXML -------- //

    /*
     * @param {string} key
     * @param {string} [textureURL = <key>.png]
     * @param {string} [atlasURL = <key>.xml]
     * @param {object} [atlasData = null]
     */
    loadAtlasXML(data) {
        let key;
        let value;
        let i;
        let paramA;
        let paramB;
        let paramC;
        if (typeof data === "string") {
            this.game.load.atlasXML(data);
        }
        else if (Array.isArray(data)) {
            for (i = 0; i < data.length; i++) {
                if (typeof data[i] === "string") {
                    this.game.load.atlasXML(data[i]);
                }
            }
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.atlasXML(key);
                } else {
                    paramA = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
                    paramB = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
                    paramC = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
                    this.game.load.atlasXML(key, paramA, paramB, paramC);
                }
            }
        }
    }

    // -------- audio -------- //

    /*
     * @param {string} key
     * @param {string | Array.<string> | Array.<object>} urls
     * @param {boolean} [autoDecode = true]
     */
    loadAudio(data) {
        let key;
        let value;
        let paramA;
        let paramB;
        for (key in data) {
            value = data[key];
            if (typeof value === "string" || Array.isArray(value)) {
                this.game.load.audio(key, value);
            }
            else if (typeof value === "object") {
                paramA = (value.hasOwnProperty("urls")) ? value["urls"] : null;
                paramB = (value.hasOwnProperty("autoDecode")) ? value["autoDecode"] : true;
                this.game.load.audio(key, paramA, paramB);
            }
        }
    }

    // -------- audioSprite -------- //

    /*
     * @param {string} key
     * @param {Array | string} urls
     * @param {string} [jsonURL = null]
     * @param {string | object} [jsonData = null]
     * @param {boolean} [autoDecode = true]
     */
    loadAudioSprite(data) {
        let key;
        let value;
        let paramA;
        let paramB;
        let paramC;
        let paramD;
        for (key in data) {
            value = data[key];
            //todo have to have jsonURL or jsonData
            if (typeof value === "string" || Array.isArray(value)) {
                this.game.load.audioSprite(key, value);
            }
            else if (typeof value === "object") {
                paramA = (value.hasOwnProperty("urls")) ? value["urls"] : null;
                paramB = (value.hasOwnProperty("jsonURL")) ? value["jsonURL"] : null;
                paramC = (value.hasOwnProperty("jsonData")) ? value["jsonData"] : null;
                paramD = (value.hasOwnProperty("autoDecode")) ? value["autoDecode"] : true;
                this.game.load.audioSprite(key, paramA, paramB, paramC, paramD);
            }
        }
    }

    // -------- binary -------- //

    /*
     * @param {string} key
     * @param {string} [url = <key>.bin]
     * @param {function} [callback = null]
     * @param {function} [callbackContext = null]
     */
    loadBinary(data) {
        let key;
        let value;
        let i;
        if (typeof data === "string") {
            this.game.load.binary(data);
        }
        else if (Array.isArray(data)) {
            for (i = 0; i < data.length; i++) {
                if (typeof data[i] === "string") {
                    this.game.load.binary(data[i]);
                }
            }
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.binary(key);
                }
                else if (typeof value === "string") {
                    this.game.load.binary(key, value);
                }
                else if (typeof value === "object") {
                    if (value.hasOwnProperty("url")) {
                        this.game.load.binary(key, value["url"]);
                    }
                }
            }
        }
    }

    // -------- bitmapFont -------- //

    /*
     * @param {string} key
     * @param {string} [textureURL = <key>.png]
     * @param {string} [atlasURL = <key>.xml]
     * @param {object} [atlasData = null]
     * @param {number} [xSpacing = 0]
     * @param {number} [ySpacing = 0]
     */
    loadBitmapFont(data) {
        let key;
        let value;
        let i;
        let paramA;
        let paramB;
        let paramC;
        let paramD;
        let paramE;
        if (typeof data === "string") {
            this.game.load.bitmapFont(data);
        }
        else if (Array.isArray(data)) {
            for (i = 0; i < data.length; i++) {
                if (typeof data[i] === "string") {
                    this.game.load.bitmapFont(data[i]);
                }
            }
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.bitmapFont(key);
                } else {
                    paramA = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
                    paramB = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
                    paramC = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
                    paramD = (value.hasOwnProperty("xSpacing")) ? value["xSpacing"] : 0;
                    paramE = (value.hasOwnProperty("ySpacing")) ? value["ySpacing"] : 0;
                    this.game.load.bitmapFont(key, paramA, paramB, paramC, paramD, paramE);
                }
            }
        }
    }

    // -------- image -------- //

    /*
     * @param {string} key
     * @param {string} [url = <key>.png]
     * @param {boolean} [overwrite = false]
     */
    loadImage(data) {
        let key;
        let value;
        let i;
        let paramA;
        let paramB;
        if (typeof data === "string") {
            this.game.load.image(data);
        }
        else if (Array.isArray(data)) {
            for (i = 0; i < data.length; i++) {
                if (typeof data[i] === "string") {
                    this.game.load.image(data[i]);
                }
            }
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.image(key);
                }
                else if (typeof value === "string") {
                    this.game.load.image(key, value);
                }
                else if (typeof value === "object") {
                    paramA = (value.hasOwnProperty("url")) ? value["url"] : key + ".png";
                    paramB = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
                    this.game.load.image(key, paramA, paramB);
                }
            }
        }
    }

    // -------- images -------- //

    /*
     * @param {Array} keys
     * @param {Array} [urls = Array.<string>] // The strings in the array will default to <key>.png
     */
    loadImages(data) {
        let key;
        let i;
        let paramA;
        let paramB;
        if (Array.isArray(data)) {
            if (typeof data[0] === "string") {
                this.game.load.images(data);
            }
            else if (typeof data[0] === "object") {
                for (i = 0; i < data.length; i++) {
                    key = data[i];
                    paramA = (key.hasOwnProperty("keys")) ? key["keys"] : null;
                    paramB = (key.hasOwnProperty("urls")) ? key["urls"] : false;
                    this.game.load.images(key, paramA, paramB);
                }
            }
        }
        else if (typeof data === "object") {
            paramA = (data.hasOwnProperty("keys")) ? data["keys"] : null;
            paramB = (data.hasOwnProperty("urls")) ? data["urls"] : false;
            this.game.load.images(key, paramA, paramB);
        }
    }

    // -------- json -------- //

    /*
     * @param {string} key
     * @param {string} [url = <key>.json]
     * @param {boolean} [overwrite = false]
     */
    loadJSON(data) {
        let key;
        let value;
        let i;
        let paramA;
        let paramB;
        if (typeof data === "string") {
            this.game.load.json(data);
        }
        else if (Array.isArray(data)) {
            for (i = 0; i < data.length; i++) {
                if (typeof data[i] === "string") {
                    this.game.load.json(data[i]);
                }
            }
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.json(key);
                }
                else if (typeof value === "string") {
                    this.game.load.json(key, value);
                }
                else if (typeof value === "object") {
                    paramA = (value.hasOwnProperty("url")) ? value["url"] : key + ".json";
                    paramB = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
                    this.game.load.json(key, paramA, paramB);
                }
            }
        }
    }

    // -------- pack -------- //

    /*
     * @param {string} key
     * @param {string} [url = null] //Must pass either url or data param
     * @param {object} [data = null]
     * @param {loader} [callbackContext = null] //If you need to pass a context, you won't be able to do it from an external json, load this in the code base.
     */
    loadPack(data) {
        let key;
        let value;
        for (key in data) {
            value = data[key];
            if (typeof value === "string") {
                this.game.load.pack(key, value);
            }
            // todo either or thing again with url or data
            else if (typeof value === "object") {
                paramA = (value.hasOwnProperty("url")) ? value["url"] : key + ".json";
                paramB = (value.hasOwnProperty("data")) ? value["data"] : null;
                this.game.load.physics(key, paramA, paramB);
            }
        }
    }

    // -------- physics -------- //

    /*
     * @param {string} key
     * @param {string} [url = <key>.json]
     * @param {object | string} [data = null]
     * @param {string} [format = 3]
     */
    loadPhysics(data) {
        let key;
        let value;
        let paramA;
        let paramB;
        let paramC;
        if (typeof data === "string") {
            this.game.load.physics(data);
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.physics(key);
                }
                else if (typeof value === "string") {
                    this.game.load.physics(key, value);
                }
                else if (typeof value === "object") {
                    paramA = (value.hasOwnProperty("url")) ? value["url"] : key + ".json";
                    paramB = (value.hasOwnProperty("data")) ? value["data"] : null;
                    paramC = (value.hasOwnProperty("format")) ? value["format"] : Phaser.Loader.LIME_CORONA_JSON;
                    this.game.load.physics(key, paramA, paramB, paramC);
                }
            }
        }
    }

    // -------- script -------- //

    /*
     * @param {string} key
     * @param {string} [url = <key>.js]
     * @param {function} [callback = null] //Cannot pass callbacks from json
     * @param {object} [callbackContext = null]
     */
    loadScript(data) {
        let key;
        let value;
        let paramA;
        if (typeof data === "string") {
            this.game.load.script(data);
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.script(key);
                }
                else if (typeof value === "string") {
                    this.game.load.script(key, value);
                }
                else if (typeof value === "object") {
                    paramA = (value.hasOwnProperty("url")) ? value["url"] : key + ".js";
                    this.game.load.script(key, paramA);
                }
            }
        }
    }

    // -------- shader -------- //

    /*
     * @param {string} key
     * @param {string} [url = <key>.frag]
     * @param {string} [overwrite = false]
     */
    loadShader(data) {
        let key;
        let value;
        let i;
        let paramA;
        let paramB;
        if (typeof data === "string") {
            this.game.load.shader(data);
        }
        else if (Array.isArray(data)) {
            for (i = 0; i < data.length; i++) {
                if (typeof data[i] === "string") {
                    this.game.load.shader(data[i]);
                }
            }
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.shader(key);
                }
                else if (typeof value === "string") {
                    this.game.load.shader(key, value);
                }
                else if (typeof value === "object") {
                    paramA = (value.hasOwnProperty("url")) ? value["url"] : key + ".frag";
                    paramB = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
                    this.game.load.shader(key, paramA, paramB);
                }
            }
        }
    }

    // -------- spritesheet -------- //

    /*
     * @param {string} key
     * @param {string} url
     * @param {number} frameWidth
     * @param {number} frameHeight
     * @param {number} [frameMax = -1]
     * @param {number} [margin = 0]
     * @param {number} [spacing = 0]
     */
    loadSpritesheet(data) {
        let key;
        let value;
        let paramA;
        let paramB;
        let paramC;
        let paramD;
        let paramE;
        let paramF;
        for (key in data) {
            value = data[key];
            paramA = (value.hasOwnProperty("url")) ? value["url"] : key + ".png";
            if (value.hasOwnProperty("frameWidth")) {
                paramB = value["frameWidth"];
            } else {
                paramB = 0;
                console.log("spritesheets must have a 'frameWidth' specified");
            }
            if (value.hasOwnProperty("frameHeight")) {
                paramC = value["frameHeight"];
            } else {
                paramC = 0;
                console.log("spritesheets must have a 'frameHeight' specified");
            }
            paramD = (value.hasOwnProperty("frameMax")) ? value["frameMax"] : -1;
            paramE = (value.hasOwnProperty("margin")) ? value["margin"] : 0;
            paramF = (value.hasOwnProperty("spacing")) ? value["spacing"] : 0;
            this.game.load.spritesheet(key, paramA, paramB, paramC, paramD, paramE, paramF);
        }
    }

    // -------- text -------- //

    /*
     * @param {string} key
     * @param {string} [url = <key>.txt]
     * @param {boolean} [overwrite = false]
     */
    loadText(data) {
        let key;
        let value;
        let i;
        let paramA;
        let paramB;
        if (typeof data === "string") {
            this.game.load.text(data);
        }
        else if (Array.isArray(data)) {
            for (i = 0; i < data.length; i++) {
                if (typeof data[i] === "string") {
                    this.game.load.text(data[i]);
                }
            }
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.text(key);
                }
                else if (typeof value === "string") {
                    this.game.load.text(key, value);
                }
                else if (typeof value === "object") {
                    paramA = (value.hasOwnProperty("url")) ? value["url"] : key + ".txt";
                    paramB = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
                    this.game.load.text(key, paramA, paramB);
                }
            }
        }
    }

    // -------- tilemap -------- //

    /*
     * @param {string} key
     * @param {string} [url = <key>.json]
     * @param {object | string} [data = null]
     * @param {number} [format = 0]
     */
    loadTilemap(data) {
        let key;
        let value;
        let paramA;
        let paramB;
        let paramC;
        if (typeof data === "string") {
            this.game.load.tilemap(data);
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.tilemap(key);
                }
                else if (typeof value === "string") {
                    this.game.load.tilemap(key, value);
                }
                else if (typeof value === "object") {
                    paramA = (value.hasOwnProperty("url")) ? value["url"] : key + ".json";
                    paramB = (value.hasOwnProperty("data")) ? value["data"] : null;
                    paramC = (value.hasOwnProperty("format")) ? value["format"] : Phaser.Tilemap.CSV;
                    this.game.load.tilemap(key, paramA, paramB, paramC);
                }
            }
        }
    }

    // -------- video -------- //

    /*
     * @param {string} key
     * @param {string | Array.<string> | Array.<object>} urls
     * @param {string} [loadEvent = "canplaythrough"]
     * @param {boolean} [asBlob = false]
     */
    loadVideo(data) {
        let key;
        let value;
        let paramA;
        let paramB;
        let paramC;
        if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (typeof value === "string" || Array.isArray(value)) {
                    this.game.load.video(key, value);
                }
                else if (typeof value === "object") {
                    paramA = (value.hasOwnProperty("urls")) ? value["urls"] : null;
                    paramB = (value.hasOwnProperty("loadEvent")) ? value["loadEvent"] : "canplaythrough";
                    paramC = (value.hasOwnProperty("asBlob")) ? value["asBlob"] : false;
                    this.game.load.video(key, paramA, paramB, paramC);
                }
            }
        }
    }

    // -------- xml -------- //

    /*
     * @param {string} key
     * @param {string} [url = <key>.xml]
     * @param {boolean} [overwrite = false]
     */
    loadXML(data) {
        let key;
        let value;
        let i;
        let paramA;
        let paramB;
        if (typeof data === "string") {
            this.game.load.xml(data);
        }
        else if (Array.isArray(data)) {
            for (i = 0; i < data.length; i++) {
                if (typeof data[i] === "string") {
                    this.game.load.xml(data[i]);
                }
            }
        }
        else if (typeof data === "object") {
            for (key in data) {
                value = data[key];
                if (!value) {
                    // if value is undefined, null, false, 0, nan, ""
                    this.game.load.xml(key);
                }
                else if (typeof value === "string") {
                    this.game.load.xml(key, value);
                }
                else if (typeof value === "object") {
                    paramA = (value.hasOwnProperty("url")) ? value["url"] : key + ".xml";
                    paramB = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
                    this.game.load.xml(key, paramA, paramB);
                }
            }
        }
    }
}

export default AssetLoader;