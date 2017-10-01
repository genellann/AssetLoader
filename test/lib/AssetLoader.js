/**
 * Created by gradley on 12/25/2016.
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
     * @param {json} json - The loaded json. You will have to load the json for
     *     this file manually but everything else can load from the
     *     AssetLoader.
     */
    constructor(game, json) {
        this.game = game;

        if (json.hasOwnProperty("baseURL")) this.loadBaseURL(json.baseURL);
        if (json.hasOwnProperty("crossOrigin")) this.loadCrossOrigin(json.crossOrigin);
        if (json.hasOwnProperty("enableParallel")) this.loadEnableParallel(json.enableParallel);
        if (json.hasOwnProperty("path")) this.loadPath(json.path);
        if (json.hasOwnProperty("resetLocked")) this.loadResetLocked(json.resetLocked);
        if (json.hasOwnProperty("atlas")) this.loadAtlas(json.atlas);
        if (json.hasOwnProperty("atlasJSONArray")) this.loadAtlasJSONArray(json.atlasJSONArray);
        if (json.hasOwnProperty("atlasJSONHash")) this.loadAtlasJSONHash(json.atlasJSONHash);
        if (json.hasOwnProperty("atlasXML")) this.loadAtlasXML(json.atlasXML);
        if (json.hasOwnProperty("audio")) this.loadAudio(json.audio);
        if (json.hasOwnProperty("audioSprite")) this.loadAudioSprite(json.audioSprite);
        if (json.hasOwnProperty("binary")) this.loadBinary(json.binary);
        if (json.hasOwnProperty("bitmapFont")) this.loadBitmapFont(json.bitmapFont);
        if (json.hasOwnProperty("image")) this.loadImage(json.image);
        if (json.hasOwnProperty("images")) this.loadImages(json.images);
        if (json.hasOwnProperty("json")) this.loadJSON(json.json);
        if (json.hasOwnProperty("pack")) this.loadPack(json.pack);
        if (json.hasOwnProperty("physics")) this.loadPhysics(json.physics);
        if (json.hasOwnProperty("script")) this.loadScript(json.script);
        if (json.hasOwnProperty("shader")) this.loadShader(json.shader);
        if (json.hasOwnProperty("spritesheet")) this.loadSpritesheet(json.spritesheet);
        if (json.hasOwnProperty("text")) this.loadText(json.text);
        if (json.hasOwnProperty("tilemap")) this.loadTilemap(json.tilemap);
        if (json.hasOwnProperty("video")) this.loadVideo(json.video);
        if (json.hasOwnProperty("xml")) this.loadXML(json.xml);
    }

    // -------- baseURL -------- //

    loadBaseURL(json) {
        if (typeof json === "string" && json !== "") {
            this.game.load.baseURL = json;
        }
    }

    // -------- crossOrigin -------- //

    loadCrossOrigin(json) {
        if (typeof json === "string" && json !== "" || typeof json === "boolean") {
            this.game.load.crossOrigin = json;
        }
    }

    // -------- enableParallel -------- //

    loadEnableParallel(json) {
        if (typeof json === "boolean") {
            this.game.load.enableParallel = json;
        }
    }

    // -------- path -------- //

    loadPath(json) {
        if (typeof json === "string" && json !== "") {
            this.game.load.path = json;
        }
    }

    // -------- resetLocked -------- //

    loadResetLocked(json) {
        if (typeof json === "boolean") {
            this.game.load.resetLocked = json;
        }
    }

    // -------- atlas -------- //

    loadAtlas(json) {
        let key;
        let value;
        let i;
        let textureURL;
        let atlasURL;
        let atlasData;
        let format;
        if (typeof json === "string") {
            this.game.load.atlas(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.atlas(json[i]);
                } else {
                    console.log("AssetLoader:: atlas keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "object") {
                    textureURL = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : key + ".png";
                    if (textureURL) {
                        atlasURL = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : key + ".json";
                        // todo change check here
                        atlasData = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
                        if (atlasURL || atlasData) {
                            format = (value.hasOwnProperty("format")) ? value["format"] : Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY;
                            if (format === Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY || format === Phaser.Loader.TEXTURE_ATLAS_JSON_HASH || format === Phaser.Loader.TEXTURE_ATLAS_XML_STARLING) {
                                this.game.load.atlas(key, textureURL, atlasURL, atlasData, format);
                            } else {
                                console.log("AssetLoader:: (key: " + key + ") atlas format must be Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY (0) or Phaser.Loader.TEXTURE_ATLAS_JSON_HASH (1) or Phaser.Loader.TEXTURE_ATLAS_XML_STARLING (2).");
                            }
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") atlas must have 'atlasURL' or 'atlasData' specified.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") atlas must have a 'textureURL' specified.");
                    }
                } else {
                    console.log("AssetLoader:: 'atlas' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'atlas' json structure is malformed.");
        }
    }

    // -------- atlasJSONArray -------- //

    loadAtlasJSONArray(json) {
        let key;
        let value;
        let i;
        let textureURL;
        let atlasURL;
        let atlasData;
        if (typeof json === "string") {
            this.game.load.atlasJSONArray(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.atlasJSONArray(json[i]);
                } else {
                    console.log("AssetLoader:: atlasJSONArray keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "object" && Object.keys(value).length > 0) {
                    textureURL = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
                    if (textureURL) {
                        atlasURL = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
                        atlasData = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
                        if (atlasURL || atlasData) {
                            this.game.load.atlasJSONArray(key, textureURL, atlasURL, atlasData);
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") atlasJSONArray must have 'atlasURL' or 'atlasData' specified.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") atlasJSONArray must have a 'textureURL' specified.");
                    }
                } else {
                    console.log("AssetLoader:: 'atlasJSONArray' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'atlasJSONArray' json structure is malformed.");
        }
    }

    // -------- atlasJSONHash -------- //

    loadAtlasJSONHash(json) {
        let key;
        let value;
        let i;
        let textureURL;
        let atlasURL;
        let atlasData;
        if (typeof json === "string") {
            this.game.load.atlasJSONHash(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.atlasJSONHash(json[i]);
                } else {
                    console.log("AssetLoader:: atlasJSONHash keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "object" && Object.keys(value).length > 0) {
                    textureURL = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
                    if (textureURL) {
                        atlasURL = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
                        atlasData = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
                        if (atlasURL || atlasData) {
                            this.game.load.atlasJSONHash(key, textureURL, atlasURL, atlasData);
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") atlasJSONHash must have 'atlasURL' or 'atlasData' specified.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") atlasJSONHash must have a 'textureURL' specified.");
                    }
                } else {
                    console.log("AssetLoader:: 'atlasJSONHash' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'atlasJSONHash' json structure is malformed.");
        }
    }

    // -------- atlasXML -------- //

    loadAtlasXML(json) {
        let key;
        let value;
        let i;
        let textureURL;
        let atlasURL;
        let atlasData;
        if (typeof json === "string") {
            this.game.load.atlasXML(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.atlasXML(json[i]);
                } else {
                    console.log("AssetLoader:: atlasXML keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "object" && Object.keys(value).length > 0) {
                    textureURL = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
                    if (textureURL) {
                        atlasURL = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
                        atlasData = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
                        if (atlasURL || atlasData) {
                            this.game.load.atlasXML(key, textureURL, atlasURL, atlasData);
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") atlasXML must have 'atlasURL' or 'atlasData' specified.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") atlasXML must have a 'textureURL' specified.");
                    }
                } else {
                    console.log("AssetLoader:: 'atlasXML' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'atlasXML' json structure is malformed.");
        }
    }


    // -------- audio -------- //

    loadAudio(json) {
        let key;
        let value;
        let urls;
        let autoDecode;
        if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if ((typeof value === "string" && value !== "") || (Array.isArray(value) && value.length > 0)) {
                    this.game.load.audio(key, value);
                }
                else if (typeof value === "object" && Object.keys(value).length > 0) {
                    urls = (value.hasOwnProperty("urls")) ? value["urls"] : null;
                    if (urls) {
                        autoDecode = (value.hasOwnProperty("autoDecode")) ? value["autoDecode"] : true;
                        if (typeof autoDecode === "boolean") {
                            this.game.load.audio(key, urls, autoDecode);
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") audio 'autoDecode' must be of type 'boolean'.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") audio must have a 'urls' specified.");
                    }
                } else {
                    console.log("AssetLoader:: 'audio' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'audio' json structure is malformed.");
        }
    }

    // -------- audioSprite -------- //

    loadAudioSprite(json) {
        let key;
        let value;
        let urls;
        let jsonURL;
        let jsonData;
        let autoDecode;
        if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "object" && Object.keys(value).length > 0) {
                    urls = (value.hasOwnProperty("urls")) ? value["urls"] : null;
                    if (urls) {
                        jsonURL = (value.hasOwnProperty("jsonURL")) ? value["jsonURL"] : null;
                        jsonData = (value.hasOwnProperty("jsonData")) ? value["jsonData"] : null;
                        if (jsonURL || jsonData) {
                            autoDecode = (value.hasOwnProperty("autoDecode")) ? value["autoDecode"] : true;
                            if (typeof autoDecode === "boolean") {
                                this.game.load.audioSprite(key, urls, jsonURL, jsonData, autoDecode);
                            } else {
                                console.log("AssetLoader:: (key: " + key + ") audioSprite 'autoDecode' must be of type 'boolean'.");
                            }
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") audioSprite must have 'jsonURL' or 'jsonData' specified.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") audioSprite must have a 'urls' specified.");
                    }
                } else {
                    console.log("AssetLoader:: 'audioSprite' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'audioSprite' json structure is malformed.");
        }
    }

    // -------- binary -------- //

    loadBinary(json) {
        let key;
        let value;
        let i;
        if (typeof json === "string") {
            this.game.load.binary(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.binary(json[i]);
                } else {
                    console.log("AssetLoader:: binary keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "string") {
                    this.game.load.binary(key, value);
                }
                else if (typeof value === "object" && Object.keys(value).length > 0) {
                    if (value.hasOwnProperty("url")) {
                        this.game.load.binary(key, value["url"]);
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") binary must have a 'url' specified.");
                    }
                } else {
                    console.log("AssetLoader:: 'binary' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'binary' json structure is malformed.");
        }
    }

    // -------- bitmapFont -------- //

    loadBitmapFont(json) {
        let key;
        let value;
        let i;
        let textureURL;
        let atlasURL;
        let atlasData;
        let xSpacing;
        let ySpacing;
        if (typeof json === "string") {
            this.game.load.bitmapFont(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.bitmapFont(json[i]);
                } else {
                    console.log("AssetLoader:: bitmapFont keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "object" && Object.keys(value).length > 0) {
                    textureURL = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
                    if (textureURL) {
                        atlasURL = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
                        atlasData = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
                        if (atlasURL || atlasData) {
                            xSpacing = (value.hasOwnProperty("xSpacing")) ? value["xSpacing"] : 0;
                            ySpacing = (value.hasOwnProperty("ySpacing")) ? value["ySpacing"] : 0;
                            if (typeof xSpacing === "number" && typeof ySpacing === "number") {
                                this.game.load.bitmapFont(key, textureURL, atlasURL, atlasData, xSpacing, ySpacing);
                            } else {
                                console.log("AssetLoader:: (key: " + key + ") bitmapFont 'xSpacing' and 'ySpacing' must be of type 'number'.");
                            }
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") bitmapFont must have 'atlasURL' or 'atlasData' specified.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") bitmapFont must have a 'textureURL' specified.");
                    }
                } else {
                    console.log("AssetLoader:: 'bitmapFont' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'bitmapFont' json structure is malformed.");
        }
    }

    // -------- image -------- //

    loadImage(json) {
        let key;
        let value;
        let i;
        let url;
        let overwrite;
        if (typeof json === "string") {
            this.game.load.image(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.image(json[i]);
                } else {
                    console.log("AssetLoader:: image keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "string") {
                    this.game.load.image(key, value);
                }
                else if (typeof value === "object") {
                    url = (value.hasOwnProperty("url")) ? value["url"] : key + ".png";
                    if (typeof url === "string") {
                        overwrite = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
                        if (typeof overwrite === "boolean") {
                            this.game.load.image(key, url, overwrite);
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") image 'overwrite' must be of type 'boolean'.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") image 'url' must be of type 'string'.");
                    }
                } else {
                    console.log("AssetLoader:: 'image' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'image' json structure is malformed.");
        }
    }

    // -------- images -------- //

    loadImages(json) {
        let key;
        let keys;
        let urls;
        if (Array.isArray(json)) {
            this.game.load.images(json);
        }
        else if (typeof json === "object") {
            keys = (json.hasOwnProperty("keys")) ? json["keys"] : null;
            urls = (json.hasOwnProperty("urls")) ? json["urls"] : false;
            if (keys && urls) {
                this.game.load.images(key, keys, urls);
            } else {
                console.log("AssetLoader:: images must have 'keys' and 'urls' specified.");
            }
        } else {
            console.log("AssetLoader:: 'images' json structure is malformed.");
        }
    }

    // -------- json -------- //

    loadJSON(json) {
        let key;
        let value;
        let i;
        let url;
        let overwrite;
        if (typeof json === "string") {
            this.game.load.json(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.json(json[i]);
                } else {
                    console.log("AssetLoader:: 'json' keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "string") {
                    this.game.load.json(key, value);
                }
                else if (typeof value === "object") {
                    url = (value.hasOwnProperty("url")) ? value["url"] : key + ".json";
                    if (typeof url === "string") {
                        overwrite = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
                        if (typeof overwrite === "boolean") {
                            this.game.load.json(key, url, overwrite);
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") json 'overwrite' must be of type 'boolean'.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") json 'url' must be of type 'string'.");
                    }
                } else {
                    console.log("AssetLoader:: 'json' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'json' json structure is malformed.");
        }
    }

    // -------- pack -------- //

    loadPack(json) {
        let key;
        let value;
        if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "string") {
                    this.game.load.pack(key, value);
                }
                else if (typeof value === "object") {
                    this.game.load.pack(key, null, value);
                } else {
                    console.log("AssetLoader:: 'pack' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'pack' json structure is malformed.");
        }
    }

    // -------- physics -------- //

    loadPhysics(json) {
        let key;
        let i;
        let value;
        let url;
        let data;
        let format;
        if (typeof json === "string") {
            this.game.load.physics(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.physics(json[i]);
                } else {
                    console.log("AssetLoader:: physics keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "string") {
                    this.game.load.physics(key, value);
                }
                else if (typeof value === "object") {
                    url = (value.hasOwnProperty("url")) ? value["url"] : key + ".json";
                    if (typeof url === "string") {
                        json = (value.hasOwnProperty("data")) ? value["data"] : null;
                        if (data && typeof data !== "object") {
                            console.log("AssetLoader:: (key: " + key + ") physics 'data' must be of type 'object'.");
                        } else {
                            format = (value.hasOwnProperty("format")) ? value["format"] : Phaser.Loader.PHYSICS_LIME_CORONA_JSON;
                            if (format === Phaser.Loader.PHYSICS_LIME_CORONA_JSON || format === Phaser.Loader.PHYSICS_PHASER_JSON) {
                                this.game.load.physics(key, url, data, format);
                            } else {
                                console.log("AssetLoader:: (key: " + key + ") physics 'format' must be Phaser.Loader.PHYSICS_LIME_CORONA_JSON (3) or Phaser.Loader.PHYSICS_PHASER_JSON (4).");
                            }
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") physics 'url' must be of type 'string'.");
                    }
                } else {
                    console.log("AssetLoader:: 'physics' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'physics' json structure is malformed.");
        }
    }

    // -------- script -------- //

    loadScript(json) {
        let key;
        let i;
        let value;
        if (typeof json === "string") {
            this.game.load.script(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.script(json[i]);
                } else {
                    console.log("AssetLoader:: script keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "string") {
                    this.game.load.script(key, value);
                }
                else if (typeof value === "object" && Object.keys(value).length > 0) {
                    if (value.hasOwnProperty("url")) {
                        this.game.load.script(key, value["url"]);
                    } else {
                        //todo this is wrong... <key>.js
                        console.log("AssetLoader:: (key: " + key + ") script 'url' must be specified.");
                    }
                } else {
                    console.log("AssetLoader:: 'script' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'script' json structure is malformed.");
        }
    }

    // -------- shader -------- //

    loadShader(json) {
        let key;
        let value;
        let i;
        let url;
        let overwrite;
        if (typeof json === "string") {
            this.game.load.shader(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.shader(json[i]);
                } else {
                    console.log("AssetLoader:: shader keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "string") {
                    this.game.load.shader(key, value);
                }
                else if (typeof value === "object") {
                    url = (value.hasOwnProperty("url")) ? value["url"] : key + ".frag";
                    if (typeof url === "string") {
                        overwrite = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
                        if (typeof overwrite === "boolean") {
                            this.game.load.shader(key, url, overwrite);
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") shader 'overwrite' must be of type 'boolean'.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") shader 'url' must be of type 'string'.");
                    }
                } else {
                    console.log("AssetLoader:: 'shader' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'shader' json structure is malformed.");
        }
    }

    // -------- spritesheet -------- //

    loadSpritesheet(json) {
        let key;
        let value;
        let url;
        let frameWidth;
        let frameHeight;
        let frameMax;
        let margin;
        let spacing;
        if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                //todo work on this more
                url = (value.hasOwnProperty("url")) ? value["url"] : key + ".png";
                if (value.hasOwnProperty("frameWidth")) {
                    frameWidth = value["frameWidth"];
                } else {
                    frameWidth = 0;
                    console.log("AssetLoader:: (key: " + key + ") spritesheets must have a 'frameWidth' specified");
                }
                if (value.hasOwnProperty("frameHeight")) {
                    frameHeight = value["frameHeight"];
                } else {
                    frameHeight = 0;
                    console.log("AssetLoader:: (key: " + key + ") spritesheets must have a 'frameHeight' specified");
                }
                frameMax = (value.hasOwnProperty("frameMax")) ? value["frameMax"] : -1;
                margin = (value.hasOwnProperty("margin")) ? value["margin"] : 0;
                spacing = (value.hasOwnProperty("spacing")) ? value["spacing"] : 0;
                this.game.load.spritesheet(key, url, frameWidth, frameHeight, frameMax, margin, spacing);
            }
        } else {
            console.log("AssetLoader:: 'spritesheet' json structure is malformed.");
        }
    }

    // -------- text -------- //

    loadText(json) {
        let key;
        let value;
        let i;
        let url;
        let overwrite;
        if (typeof json === "string") {
            this.game.load.text(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.text(json[i]);
                } else {
                    console.log("AssetLoader:: text keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "string") {
                    this.game.load.text(key, value);
                }
                else if (typeof value === "object") {
                    url = (value.hasOwnProperty("url")) ? value["url"] : key + ".txt";
                    if (typeof url === "string") {
                        overwrite = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
                        if (typeof overwrite === "boolean") {
                            this.game.load.text(key, url, overwrite);
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") text 'overwrite' must be of type 'boolean'.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") text 'url' must be of type 'string'.");
                    }
                } else {
                    console.log("AssetLoader:: 'text' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'text' json structure is malformed.");
        }
    }

    // -------- tilemap -------- //

    loadTilemap(json) {
        let key;
        let i;
        let value;
        let url;
        let data;
        let format;
        if (typeof json === "string") {
            this.game.load.tilemap(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.tilemap(json[i]);
                } else {
                    console.log("AssetLoader:: tilemap keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "string") {
                    this.game.load.tilemap(key, value);
                }
                else if (typeof value === "object") {
                    url = (value.hasOwnProperty("url")) ? value["url"] : key + ".json";
                    if (typeof url === "string") {
                        if (data && typeof data !== "object") {
                            console.log("AssetLoader:: (key: " + key + ") tilemap 'data' must be of type 'object'.");
                        } else {
                            format = (value.hasOwnProperty("format")) ? value["format"] : Phaser.Tilemap.CSV;
                            if (format === Phaser.Tilemap.CSV || format === Phaser.Tilemap.TILED_JSON) {
                                this.game.load.tilemap(key, url, data, format);
                            } else {
                                console.log("AssetLoader:: (key: " + key + ") tilemap 'format' must be Phaser.Tilemap.CSV (0) or Phaser.Tilemap.TILED_JSON (1).");
                            }
                        }
                    } else {
                        console.log("AssetLoader:: tilemap 'url' must be of type 'string'.");
                    }
                } else {
                    console.log("AssetLoader:: 'tilemap' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'tilemap' json structure is malformed.");
        }
    }

    // -------- video -------- //

    loadVideo(json) {
        let key;
        let value;
        let urls;
        let loadEvent;
        let asBlob;
        if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if ((typeof value === "string" && value !== "") || (Array.isArray(value) && value.length > 0)) {
                    this.game.load.video(key, value);
                }
                else if (typeof value === "object" && Object.keys(value).length > 0) {
                    urls = (value.hasOwnProperty("urls")) ? value["urls"] : null;
                    if (urls) {
                        loadEvent = (value.hasOwnProperty("loadEvent")) ? value["loadEvent"] : "canplaythrough";
                        if (loadEvent === "canplaythrough" || loadEvent === "canplay" || loadEvent === "loadedata") {
                            asBlob = (value.hasOwnProperty("asBlob")) ? value["asBlob"] : false;
                            if (typeof asBlob === "boolean") {
                                this.game.load.video(key, urls, loadEvent, asBlob);
                            } else {
                                console.log("AssetLoader:: video 'asBlob' must be of type 'boolean'.");
                            }
                        } else {
                            console.log("AssetLoader:: video 'loadEvent' must be 'canplaythrough', 'canplay', or 'loadeddata'.");
                        }
                    } else {
                        console.log("AssetLoader:: video 'urls' must be specified.");
                    }
                } else {
                    console.log("AssetLoader:: 'video' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'video' json structure is malformed.");
        }
    }

    // -------- xml -------- //

    loadXML(json) {
        let key;
        let value;
        let i;
        let url;
        let overwrite;
        if (typeof json === "string") {
            this.game.load.xml(json);
        }
        else if (Array.isArray(json)) {
            for (i = 0; i < json.length; i++) {
                if (typeof json[i] === "string") {
                    this.game.load.xml(json[i]);
                } else {
                    console.log("AssetLoader:: xml keys must be of type 'string'.");
                }
            }
        }
        else if (typeof json === "object") {
            for (key in json) {
                value = json[key];
                if (typeof value === "string") {
                    this.game.load.xml(key, value);
                }
                else if (typeof value === "object") {
                    url = (value.hasOwnProperty("url")) ? value["url"] : key + ".xml";
                    if (typeof url === "string") {
                        overwrite = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
                        if (typeof overwrite === "boolean") {
                            this.game.load.xml(key, url, overwrite);
                        } else {
                            console.log("AssetLoader:: (key: " + key + ") xml 'overwrite' must be of type 'boolean'.");
                        }
                    } else {
                        console.log("AssetLoader:: (key: " + key + ") xml 'url' must be of type 'string'.");
                    }
                } else {
                    console.log("AssetLoader:: 'xml' json structure is malformed.");
                }
            }
        } else {
            console.log("AssetLoader:: 'xml' json structure is malformed.");
        }
    }
}

export default AssetLoader;