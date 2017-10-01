(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
var AssetLoader = function () {

    /**
     * Takes in properly formatted json for asset loading.
     * @param {Phaser.Game} game - A reference to the currently running game.
     * @param {json} json - The loaded json. You will have to load the json for
     *     this file manually but everything else can load from the
     *     AssetLoader.
     */
    function AssetLoader(game, json) {
        _classCallCheck(this, AssetLoader);

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

    _createClass(AssetLoader, [{
        key: "loadBaseURL",
        value: function loadBaseURL(json) {
            if (typeof json === "string" && json !== "") {
                this.game.load.baseURL = json;
            }
        }

        // -------- crossOrigin -------- //

    }, {
        key: "loadCrossOrigin",
        value: function loadCrossOrigin(json) {
            if (typeof json === "string" && json !== "" || typeof json === "boolean") {
                this.game.load.crossOrigin = json;
            }
        }

        // -------- enableParallel -------- //

    }, {
        key: "loadEnableParallel",
        value: function loadEnableParallel(json) {
            if (typeof json === "boolean") {
                this.game.load.enableParallel = json;
            }
        }

        // -------- path -------- //

    }, {
        key: "loadPath",
        value: function loadPath(json) {
            if (typeof json === "string" && json !== "") {
                this.game.load.path = json;
            }
        }

        // -------- resetLocked -------- //

    }, {
        key: "loadResetLocked",
        value: function loadResetLocked(json) {
            if (typeof json === "boolean") {
                this.game.load.resetLocked = json;
            }
        }

        // -------- atlas -------- //

    }, {
        key: "loadAtlas",
        value: function loadAtlas(json) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var textureURL = void 0;
            var atlasURL = void 0;
            var atlasData = void 0;
            var format = void 0;
            if (typeof json === "string") {
                this.game.load.atlas(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.atlas(json[i]);
                    } else {
                        console.log("AssetLoader:: atlas keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        textureURL = value.hasOwnProperty("textureURL") ? value["textureURL"] : key + ".png";
                        if (textureURL) {
                            atlasURL = value.hasOwnProperty("atlasURL") ? value["atlasURL"] : key + ".json";
                            // todo change check here
                            atlasData = value.hasOwnProperty("atlasData") ? value["atlasData"] : null;
                            if (atlasURL || atlasData) {
                                format = value.hasOwnProperty("format") ? value["format"] : Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY;
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

    }, {
        key: "loadAtlasJSONArray",
        value: function loadAtlasJSONArray(json) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var textureURL = void 0;
            var atlasURL = void 0;
            var atlasData = void 0;
            if (typeof json === "string") {
                this.game.load.atlasJSONArray(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.atlasJSONArray(json[i]);
                    } else {
                        console.log("AssetLoader:: atlasJSONArray keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && Object.keys(value).length > 0) {
                        textureURL = value.hasOwnProperty("textureURL") ? value["textureURL"] : null;
                        if (textureURL) {
                            atlasURL = value.hasOwnProperty("atlasURL") ? value["atlasURL"] : null;
                            atlasData = value.hasOwnProperty("atlasData") ? value["atlasData"] : null;
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

    }, {
        key: "loadAtlasJSONHash",
        value: function loadAtlasJSONHash(json) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var textureURL = void 0;
            var atlasURL = void 0;
            var atlasData = void 0;
            if (typeof json === "string") {
                this.game.load.atlasJSONHash(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.atlasJSONHash(json[i]);
                    } else {
                        console.log("AssetLoader:: atlasJSONHash keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && Object.keys(value).length > 0) {
                        textureURL = value.hasOwnProperty("textureURL") ? value["textureURL"] : null;
                        if (textureURL) {
                            atlasURL = value.hasOwnProperty("atlasURL") ? value["atlasURL"] : null;
                            atlasData = value.hasOwnProperty("atlasData") ? value["atlasData"] : null;
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

    }, {
        key: "loadAtlasXML",
        value: function loadAtlasXML(json) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var textureURL = void 0;
            var atlasURL = void 0;
            var atlasData = void 0;
            if (typeof json === "string") {
                this.game.load.atlasXML(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.atlasXML(json[i]);
                    } else {
                        console.log("AssetLoader:: atlasXML keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && Object.keys(value).length > 0) {
                        textureURL = value.hasOwnProperty("textureURL") ? value["textureURL"] : null;
                        if (textureURL) {
                            atlasURL = value.hasOwnProperty("atlasURL") ? value["atlasURL"] : null;
                            atlasData = value.hasOwnProperty("atlasData") ? value["atlasData"] : null;
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

    }, {
        key: "loadAudio",
        value: function loadAudio(json) {
            var key = void 0;
            var value = void 0;
            var urls = void 0;
            var autoDecode = void 0;
            if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string" && value !== "" || Array.isArray(value) && value.length > 0) {
                        this.game.load.audio(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && Object.keys(value).length > 0) {
                        urls = value.hasOwnProperty("urls") ? value["urls"] : null;
                        if (urls) {
                            autoDecode = value.hasOwnProperty("autoDecode") ? value["autoDecode"] : true;
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

    }, {
        key: "loadAudioSprite",
        value: function loadAudioSprite(json) {
            var key = void 0;
            var value = void 0;
            var urls = void 0;
            var jsonURL = void 0;
            var jsonData = void 0;
            var autoDecode = void 0;
            if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && Object.keys(value).length > 0) {
                        urls = value.hasOwnProperty("urls") ? value["urls"] : null;
                        if (urls) {
                            jsonURL = value.hasOwnProperty("jsonURL") ? value["jsonURL"] : null;
                            jsonData = value.hasOwnProperty("jsonData") ? value["jsonData"] : null;
                            if (jsonURL || jsonData) {
                                autoDecode = value.hasOwnProperty("autoDecode") ? value["autoDecode"] : true;
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

    }, {
        key: "loadBinary",
        value: function loadBinary(json) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            if (typeof json === "string") {
                this.game.load.binary(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.binary(json[i]);
                    } else {
                        console.log("AssetLoader:: binary keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string") {
                        this.game.load.binary(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && Object.keys(value).length > 0) {
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

    }, {
        key: "loadBitmapFont",
        value: function loadBitmapFont(json) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var textureURL = void 0;
            var atlasURL = void 0;
            var atlasData = void 0;
            var xSpacing = void 0;
            var ySpacing = void 0;
            if (typeof json === "string") {
                this.game.load.bitmapFont(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.bitmapFont(json[i]);
                    } else {
                        console.log("AssetLoader:: bitmapFont keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && Object.keys(value).length > 0) {
                        textureURL = value.hasOwnProperty("textureURL") ? value["textureURL"] : null;
                        if (textureURL) {
                            atlasURL = value.hasOwnProperty("atlasURL") ? value["atlasURL"] : null;
                            atlasData = value.hasOwnProperty("atlasData") ? value["atlasData"] : null;
                            if (atlasURL || atlasData) {
                                xSpacing = value.hasOwnProperty("xSpacing") ? value["xSpacing"] : 0;
                                ySpacing = value.hasOwnProperty("ySpacing") ? value["ySpacing"] : 0;
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

    }, {
        key: "loadImage",
        value: function loadImage(json) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var url = void 0;
            var overwrite = void 0;
            if (typeof json === "string") {
                this.game.load.image(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.image(json[i]);
                    } else {
                        console.log("AssetLoader:: image keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string") {
                        this.game.load.image(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        url = value.hasOwnProperty("url") ? value["url"] : key + ".png";
                        if (typeof url === "string") {
                            overwrite = value.hasOwnProperty("overwrite") ? value["overwrite"] : false;
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

    }, {
        key: "loadImages",
        value: function loadImages(json) {
            var key = void 0;
            var keys = void 0;
            var urls = void 0;
            if (Array.isArray(json)) {
                this.game.load.images(json);
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                keys = json.hasOwnProperty("keys") ? json["keys"] : null;
                urls = json.hasOwnProperty("urls") ? json["urls"] : false;
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

    }, {
        key: "loadJSON",
        value: function loadJSON(json) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var url = void 0;
            var overwrite = void 0;
            if (typeof json === "string") {
                this.game.load.json(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.json(json[i]);
                    } else {
                        console.log("AssetLoader:: 'json' keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string") {
                        this.game.load.json(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        url = value.hasOwnProperty("url") ? value["url"] : key + ".json";
                        if (typeof url === "string") {
                            overwrite = value.hasOwnProperty("overwrite") ? value["overwrite"] : false;
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

    }, {
        key: "loadPack",
        value: function loadPack(json) {
            var key = void 0;
            var value = void 0;
            if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string") {
                        this.game.load.pack(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
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

    }, {
        key: "loadPhysics",
        value: function loadPhysics(json) {
            var key = void 0;
            var i = void 0;
            var value = void 0;
            var url = void 0;
            var data = void 0;
            var format = void 0;
            if (typeof json === "string") {
                this.game.load.physics(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.physics(json[i]);
                    } else {
                        console.log("AssetLoader:: physics keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string") {
                        this.game.load.physics(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        url = value.hasOwnProperty("url") ? value["url"] : key + ".json";
                        if (typeof url === "string") {
                            json = value.hasOwnProperty("data") ? value["data"] : null;
                            if (data && (typeof data === "undefined" ? "undefined" : _typeof(data)) !== "object") {
                                console.log("AssetLoader:: (key: " + key + ") physics 'data' must be of type 'object'.");
                            } else {
                                format = value.hasOwnProperty("format") ? value["format"] : Phaser.Loader.PHYSICS_LIME_CORONA_JSON;
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

    }, {
        key: "loadScript",
        value: function loadScript(json) {
            var key = void 0;
            var i = void 0;
            var value = void 0;
            if (typeof json === "string") {
                this.game.load.script(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.script(json[i]);
                    } else {
                        console.log("AssetLoader:: script keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string") {
                        this.game.load.script(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && Object.keys(value).length > 0) {
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

    }, {
        key: "loadShader",
        value: function loadShader(json) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var url = void 0;
            var overwrite = void 0;
            if (typeof json === "string") {
                this.game.load.shader(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.shader(json[i]);
                    } else {
                        console.log("AssetLoader:: shader keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string") {
                        this.game.load.shader(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        url = value.hasOwnProperty("url") ? value["url"] : key + ".frag";
                        if (typeof url === "string") {
                            overwrite = value.hasOwnProperty("overwrite") ? value["overwrite"] : false;
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

    }, {
        key: "loadSpritesheet",
        value: function loadSpritesheet(json) {
            var key = void 0;
            var value = void 0;
            var url = void 0;
            var frameWidth = void 0;
            var frameHeight = void 0;
            var frameMax = void 0;
            var margin = void 0;
            var spacing = void 0;
            if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    //todo work on this more
                    url = value.hasOwnProperty("url") ? value["url"] : key + ".png";
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
                    frameMax = value.hasOwnProperty("frameMax") ? value["frameMax"] : -1;
                    margin = value.hasOwnProperty("margin") ? value["margin"] : 0;
                    spacing = value.hasOwnProperty("spacing") ? value["spacing"] : 0;
                    this.game.load.spritesheet(key, url, frameWidth, frameHeight, frameMax, margin, spacing);
                }
            } else {
                console.log("AssetLoader:: 'spritesheet' json structure is malformed.");
            }
        }

        // -------- text -------- //

    }, {
        key: "loadText",
        value: function loadText(json) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var url = void 0;
            var overwrite = void 0;
            if (typeof json === "string") {
                this.game.load.text(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.text(json[i]);
                    } else {
                        console.log("AssetLoader:: text keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string") {
                        this.game.load.text(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        url = value.hasOwnProperty("url") ? value["url"] : key + ".txt";
                        if (typeof url === "string") {
                            overwrite = value.hasOwnProperty("overwrite") ? value["overwrite"] : false;
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

    }, {
        key: "loadTilemap",
        value: function loadTilemap(json) {
            var key = void 0;
            var i = void 0;
            var value = void 0;
            var url = void 0;
            var data = void 0;
            var format = void 0;
            if (typeof json === "string") {
                this.game.load.tilemap(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.tilemap(json[i]);
                    } else {
                        console.log("AssetLoader:: tilemap keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string") {
                        this.game.load.tilemap(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        url = value.hasOwnProperty("url") ? value["url"] : key + ".json";
                        if (typeof url === "string") {
                            if (data && (typeof data === "undefined" ? "undefined" : _typeof(data)) !== "object") {
                                console.log("AssetLoader:: (key: " + key + ") tilemap 'data' must be of type 'object'.");
                            } else {
                                format = value.hasOwnProperty("format") ? value["format"] : Phaser.Tilemap.CSV;
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

    }, {
        key: "loadVideo",
        value: function loadVideo(json) {
            var key = void 0;
            var value = void 0;
            var urls = void 0;
            var loadEvent = void 0;
            var asBlob = void 0;
            if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string" && value !== "" || Array.isArray(value) && value.length > 0) {
                        this.game.load.video(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object" && Object.keys(value).length > 0) {
                        urls = value.hasOwnProperty("urls") ? value["urls"] : null;
                        if (urls) {
                            loadEvent = value.hasOwnProperty("loadEvent") ? value["loadEvent"] : "canplaythrough";
                            if (loadEvent === "canplaythrough" || loadEvent === "canplay" || loadEvent === "loadedata") {
                                asBlob = value.hasOwnProperty("asBlob") ? value["asBlob"] : false;
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

    }, {
        key: "loadXML",
        value: function loadXML(json) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var url = void 0;
            var overwrite = void 0;
            if (typeof json === "string") {
                this.game.load.xml(json);
            } else if (Array.isArray(json)) {
                for (i = 0; i < json.length; i++) {
                    if (typeof json[i] === "string") {
                        this.game.load.xml(json[i]);
                    } else {
                        console.log("AssetLoader:: xml keys must be of type 'string'.");
                    }
                }
            } else if ((typeof json === "undefined" ? "undefined" : _typeof(json)) === "object") {
                for (key in json) {
                    value = json[key];
                    if (typeof value === "string") {
                        this.game.load.xml(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        url = value.hasOwnProperty("url") ? value["url"] : key + ".xml";
                        if (typeof url === "string") {
                            overwrite = value.hasOwnProperty("overwrite") ? value["overwrite"] : false;
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
    }]);

    return AssetLoader;
}();

exports.default = AssetLoader;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/PhaserAssetLoader
 */

/**
 * Constants matching assets.json.
 */
var AssetKeys = function AssetKeys() {
    _classCallCheck(this, AssetKeys);
};

Object.defineProperties(AssetKeys, {
    "ASSETS": {
        value: "assets"
    },
    "PRELOAD_SPRITE": {
        value: "preloadSprite"
    },
    "ATLAS_0": {
        value: "atlasTest"
    },
    "ATLAS_1": {
        value: "atlasTest1"
    },
    "ATLAS_2": {
        value: "atlasTest2"
    },
    "ATLAS_3": {
        value: "atlasTest3"
    },
    "ATLAS_4": {
        value: "atlasTest4"
    },
    "ATLAS_5": {
        value: "atlasTest5"
    },
    "ATLAS_6": {
        value: "atlasTest6"
    },
    "ATLAS_7": {
        value: "atlasTest7"
    },
    "ATLAS_8": {
        value: "atlasTest8"
    },
    "ATLAS_9": {
        value: "atlasTest9"
    },
    "ATLAS_JSON_ARRAY": {
        value: "atlasJSONArrayTest"
    },
    "ATLAS_JSON_ARRAY1": {
        value: "atlasJSONArrayTest1"
    },
    "ATLAS_JSON_HASH": {
        value: "atlasJSONHashTest"
    },
    "ATLAS_JSON_HASH1": {
        value: "atlasJSONHashTest1"
    },
    "ATLAS_XML": {
        value: "atlasXMLTest"
    },
    "ATLAS_XML1": {
        value: "atlasXMLTest1"
    },
    "AUDIO": {
        value: "audioTest"
    },
    "AUDIO_SPRITE": {
        value: "audioSpriteTest"
    },
    "BINARY": {
        value: "binaryTest"
    },
    "BINARY1": {
        value: "binaryTest1"
    },
    "BITMAP_FONT": {
        value: "bitmapFontTest"
    },
    "BITMAP_FONT1": {
        value: "bitmapFontTest1"
    },
    "IMAGE": {
        value: "imageTest"
    },
    "IMAGE1": {
        value: "imageTest1"
    },
    "IMAGE2": {
        value: "imageTest2"
    },
    "IMAGE3": {
        value: "imageTest3"
    },
    "JSON": {
        value: "jsonTest"
    },
    "JSON1": {
        value: "jsonTest1"
    },
    "PHYSICS": {
        value: "physicsTest"
    },
    "PHYSICS1": {
        value: "physicsTest1"
    },
    "SHADER": {
        value: "shaderTest"
    },
    "SHADER1": {
        value: "shaderTest1"
    },
    "SPRITESHEET": {
        value: "spritesheetTest"
    },
    "TEXT": {
        value: "textTest"
    },
    "TEXT1": {
        value: "textTest1"
    },
    "TILEMAP": {
        value: "tilemapTest"
    },
    "TILEMAP1": {
        value: "tilemapTest1"
    },
    "VIDEO": {
        value: "videoTest"
    },
    "XML": {
        value: "xmlTest"
    },
    "XML1": {
        value: "xmlTest1"
    }
});

exports.default = AssetKeys;

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AssetKeys = require("./AssetKeys");

var _AssetKeys2 = _interopRequireDefault(_AssetKeys);

var _GameKeys = require("./GameKeys");

var _GameKeys2 = _interopRequireDefault(_GameKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Genell Radley in 2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/gradley/PhaserAssetLoader
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var BootState = function (_Phaser$State) {
    _inherits(BootState, _Phaser$State);

    function BootState() {
        _classCallCheck(this, BootState);

        return _possibleConstructorReturn(this, (BootState.__proto__ || Object.getPrototypeOf(BootState)).apply(this, arguments));
    }

    _createClass(BootState, [{
        key: "preload",
        value: function preload() {
            // this.game.test = GameKeys.TEST_STRING_EMPTY;
            // this.game.test = GameKeys.TEST_STRING_EXISTING;
            // this.game.test = GameKeys.TEST_ARRAY_EMPTY;
            // this.game.test = GameKeys.TEST_ARRAY_EXISTING;
            // this.game.test = GameKeys.TEST_OBJECT_EMPTY;
            this.game.test = _GameKeys2.default.TEST_OBJECT_ATLAS;

            this.game.load.json(_AssetKeys2.default.ASSETS, this.game.test);

            this.game.load.image(_AssetKeys2.default.PRELOAD_SPRITE, "assets/preloadSprite.png");
        }
    }, {
        key: "create",
        value: function create() {
            this.game.state.start(_GameKeys2.default.LOAD);
        }
    }]);

    return BootState;
}(Phaser.State);

exports.default = BootState;

},{"./AssetKeys":2,"./GameKeys":5}],4:[function(require,module,exports){
/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/PhaserAssetLoader
 */

"use strict";

var _GameKeys = require("./GameKeys");

var _GameKeys2 = _interopRequireDefault(_GameKeys);

var _BootState = require("./BootState");

var _BootState2 = _interopRequireDefault(_BootState);

var _LoadState = require("./LoadState");

var _LoadState2 = _interopRequireDefault(_LoadState);

var _PlayState = require("./PlayState");

var _PlayState2 = _interopRequireDefault(_PlayState);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Game = function (_Phaser$Game) {
    _inherits(Game, _Phaser$Game);

    function Game() {
        _classCallCheck(this, Game);

        // super(800, 600, Phaser.CANVAS);

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 800, 600, Phaser.WEBGL));

        _this.state.add(_GameKeys2.default.BOOT, _BootState2.default);
        _this.state.add(_GameKeys2.default.LOAD, _LoadState2.default);
        _this.state.add(_GameKeys2.default.PLAY, _PlayState2.default);

        _this.state.start(_GameKeys2.default.BOOT);
        return _this;
    }

    return Game;
}(Phaser.Game);

new Game();

},{"./BootState":3,"./GameKeys":5,"./LoadState":6,"./PlayState":7}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/PhaserAssetLoader
 */

/**
 * Main consts.
 */
var GameKeys = function GameKeys() {
    _classCallCheck(this, GameKeys);
};

Object.defineProperties(GameKeys, {
    "BOOT": {
        value: "boot"
    },
    "LOAD": {
        value: "load"
    },
    "PLAY": {
        value: "play"
    },
    "TEST_STRING_EMPTY": {
        value: "data/string/empty.json"
    },
    "TEST_STRING_EXISTING": {
        value: "data/string/existing.json"
    },
    "TEST_ARRAY_EMPTY": {
        value: "data/array/empty.json"
    },
    "TEST_ARRAY_EXISTING": {
        value: "data/array/existing.json"
    },
    "TEST_OBJECT_EMPTY": {
        value: "data/object/empty.json"
    },
    "TEST_OBJECT_ATLAS": {
        value: "data/object/atlas.json"
    },
    "TEST_OBJECT_ATLAS_JSON": {
        value: "data/object/atlasJSON.json"
    },
    "TEST_OBJECT_ATLAS_XML": {
        value: "data/object/atlasXML.json"
    },
    "TEST_OBJECT_AUDIO": {
        value: "data/object/audio.json"
    }
});

exports.default = GameKeys;

},{}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AssetKeys = require("./AssetKeys");

var _AssetKeys2 = _interopRequireDefault(_AssetKeys);

var _GameKeys = require("./GameKeys");

var _GameKeys2 = _interopRequireDefault(_GameKeys);

var _AssetLoader = require("../lib/AssetLoader");

var _AssetLoader2 = _interopRequireDefault(_AssetLoader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Genell Radley in 2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/gradley/PhaserAssetLoader
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var LoadState = function (_Phaser$State) {
    _inherits(LoadState, _Phaser$State);

    function LoadState() {
        _classCallCheck(this, LoadState);

        return _possibleConstructorReturn(this, (LoadState.__proto__ || Object.getPrototypeOf(LoadState)).apply(this, arguments));
    }

    _createClass(LoadState, [{
        key: "preload",
        value: function preload() {
            var preloadbar = this.game.add.sprite(0, 0, _AssetKeys2.default.PRELOAD_SPRITE);
            preloadbar.x = (this.game.width - preloadbar.width) / 2;
            preloadbar.y = (this.game.height - preloadbar.height) / 2;
            this.game.load.setPreloadSprite(preloadbar);

            new _AssetLoader2.default(this.game, this.game.cache.getJSON(_AssetKeys2.default.ASSETS));

            this._loadingMsg = "Loading... ";
            this._text = this.game.add.text(0, 0, this._loadingMsg, { fill: "#ffffff" });
            this._text.x = (this.game.width - this._text.width) / 2;
            this._text.y = this.game.height - this._text.height;

            this.game.load.onFileComplete.add(this.onFileComplete, this);
            this.game.load.onLoadComplete.add(this.onLoadComplete, this);
        }

        /**
         * @param {number} progress - Percent loading progress at time of file load
         * @param {string} cacheKey -  Key of file loaded
         * @param {boolean} success - If file succeeded loaded
         * @param {number} totalLoaded - Files loaded so far
         * @param {number} totalFiles - Files to be loaded
         */

    }, {
        key: "onFileComplete",
        value: function onFileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
            this._text.text = this._loadingMsg + progress + "%";

            if (progress === 100) {
                this.game.load.onFileComplete.remove(this.onFileComplete, this);
                this._text.text = "Loaded";
            }
        }
    }, {
        key: "onLoadComplete",
        value: function onLoadComplete() {
            this.game.load.onLoadComplete.remove(this.onLoadComplete, this);
            this.game.state.start(_GameKeys2.default.PLAY);
        }
    }]);

    return LoadState;
}(Phaser.State);

exports.default = LoadState;

},{"../lib/AssetLoader":1,"./AssetKeys":2,"./GameKeys":5}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _AssetKeys = require("./AssetKeys");

var _AssetKeys2 = _interopRequireDefault(_AssetKeys);

var _GameKeys = require("./GameKeys");

var _GameKeys2 = _interopRequireDefault(_GameKeys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Genell Radley in 2017.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/gradley/PhaserAssetLoader
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var PlayState = function (_Phaser$State) {
    _inherits(PlayState, _Phaser$State);

    function PlayState() {
        _classCallCheck(this, PlayState);

        return _possibleConstructorReturn(this, (PlayState.__proto__ || Object.getPrototypeOf(PlayState)).apply(this, arguments));
    }

    _createClass(PlayState, [{
        key: "init",
        value: function init() {
            switch (this.game.test) {
                case _GameKeys2.default.TEST_STRING_EXISTING:
                    this.testString();
                    break;
                case _GameKeys2.default.TEST_ARRAY_EXISTING:
                    this.testArray();
                    break;
                case _GameKeys2.default.TEST_OBJECT_ATLAS:
                    this.testAtlas();
                    break;
            }
        }
    }, {
        key: "testString",
        value: function testString() {

            // -------- atlas -------- //

            this.game.add.sprite(0, 200, _AssetKeys2.default.ATLAS_0, "p1_hurt");

            // -------- atlasJSONArray -------- //

            this.game.add.sprite(0, 300, _AssetKeys2.default.ATLAS_JSON_ARRAY, "p1_front");

            // -------- atlasJSONHash -------- //

            this.game.add.sprite(0, 400, _AssetKeys2.default.ATLAS_JSON_HASH, "p1_duck");

            // -------- atlasXML -------- //

            this.game.add.sprite(0, 500, _AssetKeys2.default.ATLAS_XML, "bomb.png");

            // -------- binary -------- //

            var binary = this.game.cache.getBinary(_AssetKeys2.default.BINARY);
            this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, { fill: "#ffffff" });

            // -------- bitmapFont -------- //

            var text = this.game.add.bitmapText(200, 100, _AssetKeys2.default.BITMAP_FONT, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            // -------- image -------- //

            this.game.add.sprite(0, 0, _AssetKeys2.default.IMAGE);

            // -------- json -------- //

            var json = this.game.cache.getJSON(_AssetKeys2.default.JSON);
            this.game.add.text(100, 130, json.test, { fill: "#ffffff" });

            // -------- physics -------- //

            this.game.physics.startSystem(Phaser.Physics.P2JS);
            var contra = this.game.add.sprite(100, 200, _AssetKeys2.default.IMAGE);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS, 'contra2', contra);

            // -------- script -------- //

            var module = new ScriptTest();
            module.print("game.load.script worked!");

            // -------- shader -------- //

            var filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER));
            filter.setResolution(400, 600);

            var sprite = this.game.add.sprite();
            sprite.x = 500;
            sprite.y = 150;
            sprite.width = 400;
            sprite.height = 600;

            sprite.filters = [filter];

            // -------- text -------- //

            var html = this.game.cache.getText(_AssetKeys2.default.TEXT);
            console.log(html);

            // -------- tilemap -------- //

            var map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET, _AssetKeys2.default.SPRITESHEET, 70, 70);
                var layer = map.createLayer("surface");
                layer.resizeWorld();
            }

            // -------- xml -------- //

            var xml = this.game.cache.getXML(_AssetKeys2.default.XML);
            this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#ffffff" });
        }
    }, {
        key: "testArray",
        value: function testArray() {
            // -------- atlas -------- //

            this.game.add.sprite(0, 200, _AssetKeys2.default.ATLAS_0, "p1_hurt");

            this.game.add.sprite(20, 220, _AssetKeys2.default.ATLAS_1, "p1_hurt");

            // -------- atlasJSONArray -------- //

            this.game.add.sprite(0, 300, _AssetKeys2.default.ATLAS_JSON_ARRAY, "p1_front");

            this.game.add.sprite(20, 320, _AssetKeys2.default.ATLAS_JSON_ARRAY1, "p1_front");

            // -------- atlasJSONHash -------- //

            this.game.add.sprite(0, 400, _AssetKeys2.default.ATLAS_JSON_HASH, "p1_duck");

            this.game.add.sprite(20, 420, _AssetKeys2.default.ATLAS_JSON_HASH1, "p1_duck");

            // -------- atlasXML -------- //

            this.game.add.sprite(0, 500, _AssetKeys2.default.ATLAS_XML, "bomb.png");

            this.game.add.sprite(20, 520, _AssetKeys2.default.ATLAS_XML1, "bomb.png");

            // -------- binary -------- //

            var binary = this.game.cache.getBinary(_AssetKeys2.default.BINARY);
            this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, { fill: "#ffffff" });

            binary = this.game.cache.getBinary(_AssetKeys2.default.BINARY1);
            this.game.add.text(120, 520, "binary.byteLength: " + binary.byteLength, { fill: "#ffffff" });

            // -------- bitmapFont -------- //

            var text = this.game.add.bitmapText(200, 100, _AssetKeys2.default.BITMAP_FONT, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            text = this.game.add.bitmapText(220, 120, _AssetKeys2.default.BITMAP_FONT1, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            // -------- image -------- //

            this.game.add.sprite(0, 0, _AssetKeys2.default.IMAGE);

            this.game.add.sprite(20, 20, _AssetKeys2.default.IMAGE1);

            // -------- images -------- //

            this.game.add.sprite(40, 40, _AssetKeys2.default.IMAGE2);

            this.game.add.sprite(60, 60, _AssetKeys2.default.IMAGE3);

            // -------- json -------- //

            var json = this.game.cache.getJSON(_AssetKeys2.default.JSON);
            this.game.add.text(100, 130, json.test, { fill: "#ffffff" });

            json = this.game.cache.getJSON(_AssetKeys2.default.JSON1);
            this.game.add.text(120, 150, json.test, { fill: "#ffffff" });

            // -------- physics -------- //

            this.game.physics.startSystem(Phaser.Physics.P2JS);

            var contra = this.game.add.sprite(100, 200, _AssetKeys2.default.IMAGE);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS, 'contra2', contra);

            contra = this.game.add.sprite(120, 220, _AssetKeys2.default.IMAGE1);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS1, 'contra2', contra);

            // -------- script -------- //

            var module = new ScriptTest();
            module.print("game.load.script worked!");

            module = new ScriptTest1();
            module.print("game.load.script worked again!");

            // -------- shader -------- //

            var filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER));
            filter.setResolution(400, 600);
            var sprite = this.game.add.sprite();
            sprite.x = 500;
            sprite.y = 150;
            sprite.width = 400;
            sprite.height = 600;
            sprite.filters = [filter];

            filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER1));
            filter.setResolution(400, 600);
            sprite = this.game.add.sprite();
            sprite.x = 520;
            sprite.y = 170;
            sprite.width = 400;
            sprite.height = 600;
            sprite.filters = [filter];

            // -------- text -------- //

            var html = this.game.cache.getText(_AssetKeys2.default.TEXT);
            console.log(html);

            html = this.game.cache.getText(_AssetKeys2.default.TEXT1);
            console.log(html);

            // -------- tilemap -------- //

            var map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET, _AssetKeys2.default.SPRITESHEET, 70, 70);
                var layer = map.createLayer("surface");
                layer.resizeWorld();
            }

            map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP1);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET, _AssetKeys2.default.SPRITESHEET, 70, 70);
                var _layer = map.createLayer("surface");
                _layer.resizeWorld();
            }

            // -------- xml -------- //

            var xml = this.game.cache.getXML(_AssetKeys2.default.XML);
            this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#ffffff" });

            xml = this.game.cache.getXML(_AssetKeys2.default.XML1);
            this.game.add.text(120, 180, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#ffffff" });
        }
    }, {
        key: "testAtlas",
        value: function testAtlas() {
            this.game.add.sprite(0, 200, _AssetKeys2.default.ATLAS_0, "p1_hurt");
            this.game.add.sprite(20, 220, _AssetKeys2.default.ATLAS_1, "p1_hurt");
            this.game.add.sprite(40, 240, _AssetKeys2.default.ATLAS_2, "p1_hurt");
            var test = this.game.add.sprite(60, 260, _AssetKeys2.default.ATLAS_3, "p1_hurt");
            if (test.data.test !== "test") {
                console.log("test failed for " + _AssetKeys2.default.ATLAS_3);
            }
            test = this.game.add.sprite(80, 280, _AssetKeys2.default.ATLAS_4, "p1_hurt");
            if (test.format !== 1) {
                console.log("test failed for " + _AssetKeys2.default.ATLAS_4);
            }
        }
    }, {
        key: "testObject",
        value: function testObject() {

            // -------- atlasJSONArray -------- //

            this.game.add.sprite(0, 300, _AssetKeys2.default.ATLAS_JSON_ARRAY, "p1_front");

            // -------- atlasJSONHash -------- //

            this.game.add.sprite(0, 400, _AssetKeys2.default.ATLAS_JSON_HASH, "p1_duck");

            // -------- atlasXML -------- //

            this.game.add.sprite(0, 500, _AssetKeys2.default.ATLAS_XML, "bomb.png");

            // -------- audio -------- //

            this.game.sound.play(_AssetKeys2.default.AUDIO);

            // -------- audioSprite -------- //

            var fx = this.game.add.audio(_AssetKeys2.default.AUDIO_SPRITE);
            fx.allowMultiple = true;
            fx.addMarker('alien death', 1, 1.0);
            var button = this.game.add.button(200, 500, _AssetKeys2.default.IMAGE, function () {
                fx.play('alien death');
            }, this, 0, 1, 2);

            // -------- binary -------- //

            var binary = this.game.cache.getBinary(_AssetKeys2.default.BINARY);
            this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, { fill: "#ffffff" });

            // -------- bitmapFont -------- //

            var text = this.game.add.bitmapText(200, 100, _AssetKeys2.default.BITMAP_FONT, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            // -------- image -------- //

            this.game.add.sprite(0, 0, _AssetKeys2.default.IMAGE);

            // -------- images -------- //

            this.game.add.sprite(500, -50, _AssetKeys2.default.IMAGE2);

            // -------- json -------- //

            var json = this.game.cache.getJSON(_AssetKeys2.default.JSON);
            this.game.add.text(100, 130, json.test, { fill: "#ffffff" });

            // -------- pack -------- //

            this.game.add.image(0, 0, _AssetKeys2.default.IMAGE3);

            // -------- physics -------- //

            this.game.physics.startSystem(Phaser.Physics.P2JS);
            var contra = this.game.add.sprite(100, 200, _AssetKeys2.default.IMAGE);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS, 'contra2', contra);

            // -------- script -------- //

            var module = new ScriptTest();
            module.print("game.load.script worked!");

            // -------- shader -------- //

            var filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER));
            filter.setResolution(400, 600);

            var sprite = this.game.add.sprite();
            sprite.x = 500;
            sprite.y = 150;
            sprite.width = 400;
            sprite.height = 600;

            sprite.filters = [filter];

            // -------- spritesheet -------- //

            var spritesheet = this.game.add.sprite(0, 130, _AssetKeys2.default.SPRITESHEET);
            spritesheet.animations.add("anim");
            spritesheet.animations.play("anim");

            // -------- text -------- //

            var html = this.game.cache.getText(_AssetKeys2.default.TEXT);
            console.log(html);

            // -------- tilemap -------- //

            var map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET, _AssetKeys2.default.SPRITESHEET, 70, 70);
                var layer = map.createLayer("surface");
                layer.resizeWorld();
            }

            // -------- video -------- //

            var video = this.game.add.video(_AssetKeys2.default.VIDEO);
            video.play(true);
            video.addToWorld(200, 200, 0, 0, 0.3, 0.3);

            // -------- xml -------- //

            var xml = this.game.cache.getXML(_AssetKeys2.default.XML);
            this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#ffffff" });
        }
    }]);

    return PlayState;
}(Phaser.State);

exports.default = PlayState;

},{"./AssetKeys":2,"./GameKeys":5}]},{},[2,3,4,5,6,7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvQXNzZXRMb2FkZXIuanMiLCJzcmMvQXNzZXRLZXlzLmpzIiwic3JjL0Jvb3RTdGF0ZS5qcyIsInNyYy9HYW1lLmpzIiwic3JjL0dhbWVLZXlzLmpzIiwic3JjL0xvYWRTdGF0ZS5qcyIsInNyYy9QbGF5U3RhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JNLFc7O0FBRUY7Ozs7Ozs7QUFPQSx5QkFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCO0FBQUE7O0FBQ3BCLGFBQUssSUFBTCxHQUFZLElBQVo7O0FBRUEsWUFBSSxLQUFLLGNBQUwsQ0FBb0IsU0FBcEIsQ0FBSixFQUFvQyxLQUFLLFdBQUwsQ0FBaUIsS0FBSyxPQUF0QjtBQUNwQyxZQUFJLEtBQUssY0FBTCxDQUFvQixhQUFwQixDQUFKLEVBQXdDLEtBQUssZUFBTCxDQUFxQixLQUFLLFdBQTFCO0FBQ3hDLFlBQUksS0FBSyxjQUFMLENBQW9CLGdCQUFwQixDQUFKLEVBQTJDLEtBQUssa0JBQUwsQ0FBd0IsS0FBSyxjQUE3QjtBQUMzQyxZQUFJLEtBQUssY0FBTCxDQUFvQixNQUFwQixDQUFKLEVBQWlDLEtBQUssUUFBTCxDQUFjLEtBQUssSUFBbkI7QUFDakMsWUFBSSxLQUFLLGNBQUwsQ0FBb0IsYUFBcEIsQ0FBSixFQUF3QyxLQUFLLGVBQUwsQ0FBcUIsS0FBSyxXQUExQjtBQUN4QyxZQUFJLEtBQUssY0FBTCxDQUFvQixPQUFwQixDQUFKLEVBQWtDLEtBQUssU0FBTCxDQUFlLEtBQUssS0FBcEI7QUFDbEMsWUFBSSxLQUFLLGNBQUwsQ0FBb0IsZ0JBQXBCLENBQUosRUFBMkMsS0FBSyxrQkFBTCxDQUF3QixLQUFLLGNBQTdCO0FBQzNDLFlBQUksS0FBSyxjQUFMLENBQW9CLGVBQXBCLENBQUosRUFBMEMsS0FBSyxpQkFB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QixFQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0Qzs7QUFFQTs7QUFFQSxnQkFBSSxNQUFNLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsTUFBaEIsQ0FBdUIsb0JBQVUsR0FBakMsQ0FBVjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsSUFBZCxDQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QixJQUFJLGlCQUFKLENBQXNCLGlCQUF0QixDQUF3QyxTQUFyRSxFQUFnRixFQUFDLE1BQU0sU0FBUCxFQUFoRjtBQUNIOzs7O0VBbldtQixPQUFPLEs7O2tCQXNXaEIsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgZ3JhZGxleSBvbiAxMi8yNS8yMDE2LlxuICovXG5cbi8qKlxuICogV2lsbCBsb2FkIGFzc2V0cyBmcm9tIGEganNvbiBmaWxlLlxuICpcbiAqIGh0dHBzOi8vcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLkxvYWRlci5odG1sXG4gKlxuICogVGhlcmUgYXJlIHNvbWUgUGhhc2VyLkxvYWRlciB0aGF0IHRha2UgaW4gYSBjYWxsYmFjayBhbmQvb3IgY2FsbGJhY2tDb250ZXh0LlxuICogVGhlc2UgYXJlOiBiaW5hcnksIHBhY2ssIHNjcmlwdCwgd2l0aFN5bmNQb2ludHNcbiAqIElmIHlvdSB3YW50IHRvIHVzZSB0aGVzZSBsb2FkZXJzIHdpdGggY2FsbGJhY2tzLCB5b3UnbGwgaGF2ZSB0byBkbyBpdCBmcm9tXG4gKiBjb2RlLCBub3QganNvbi5cbiAqXG4gKiBZb3UgY2FuIHNldCB0aGUgdmFsdWUgdG8gZWl0aGVyIHRoZSBkZWZhdWx0IGRhdGF0eXBlIG9yIGFuIG9iamVjdCB3aXRoIHRoZVxuICogcGFyYW1ldGVycyB5b3Ugd2FudCB0byBzZXQuXG4gKlxuICogVE9ETzogZm9yIGpzb24gZGF0YSwgaGF2ZSB0byBwdXQgdGhlIGpzb24gb2JqZWN0IGluIHRoZSBhc3NldHMuanNvbiwgY2FuJ3RcbiAqIHJlZmVyZW5jZSBhbm90aGVyIGpzb24gYmVjYXVzZSBpdCB3b24ndCBiZSBsb2FkZWQgeWV0LlxuICovXG5jbGFzcyBBc3NldExvYWRlciB7XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBpbiBwcm9wZXJseSBmb3JtYXR0ZWQganNvbiBmb3IgYXNzZXQgbG9hZGluZy5cbiAgICAgKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXG4gICAgICogQHBhcmFtIHtqc29ufSBqc29uIC0gVGhlIGxvYWRlZCBqc29uLiBZb3Ugd2lsbCBoYXZlIHRvIGxvYWQgdGhlIGpzb24gZm9yXG4gICAgICogICAgIHRoaXMgZmlsZSBtYW51YWxseSBidXQgZXZlcnl0aGluZyBlbHNlIGNhbiBsb2FkIGZyb20gdGhlXG4gICAgICogICAgIEFzc2V0TG9hZGVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGpzb24pIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcImJhc2VVUkxcIikpIHRoaXMubG9hZEJhc2VVUkwoanNvbi5iYXNlVVJMKTtcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJjcm9zc09yaWdpblwiKSkgdGhpcy5sb2FkQ3Jvc3NPcmlnaW4oanNvbi5jcm9zc09yaWdpbik7XG4gICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwiZW5hYmxlUGFyYWxsZWxcIikpIHRoaXMubG9hZEVuYWJsZVBhcmFsbGVsKGpzb24uZW5hYmxlUGFyYWxsZWwpO1xuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcInBhdGhcIikpIHRoaXMubG9hZFBhdGgoanNvbi5wYXRoKTtcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJyZXNldExvY2tlZFwiKSkgdGhpcy5sb2FkUmVzZXRMb2NrZWQoanNvbi5yZXNldExvY2tlZCk7XG4gICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwiYXRsYXNcIikpIHRoaXMubG9hZEF0bGFzKGpzb24uYXRsYXMpO1xuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcImF0bGFzSlNPTkFycmF5XCIpKSB0aGlzLmxvYWRBdGxhc0pTT05BcnJheShqc29uLmF0bGFzSlNPTkFycmF5KTtcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJhdGxhc0pTT05IYXNoXCIpKSB0aGlzLmxvYWRBdGxhc0pTT05IYXNoKGpzb24uYXRsYXNKU09OSGFzaCk7XG4gICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwiYXRsYXNYTUxcIikpIHRoaXMubG9hZEF0bGFzWE1MKGpzb24uYXRsYXNYTUwpO1xuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcImF1ZGlvXCIpKSB0aGlzLmxvYWRBdWRpbyhqc29uLmF1ZGlvKTtcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJhdWRpb1Nwcml0ZVwiKSkgdGhpcy5sb2FkQXVkaW9TcHJpdGUoanNvbi5hdWRpb1Nwcml0ZSk7XG4gICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwiYmluYXJ5XCIpKSB0aGlzLmxvYWRCaW5hcnkoanNvbi5iaW5hcnkpO1xuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcImJpdG1hcEZvbnRcIikpIHRoaXMubG9hZEJpdG1hcEZvbnQoanNvbi5iaXRtYXBGb250KTtcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJpbWFnZVwiKSkgdGhpcy5sb2FkSW1hZ2UoanNvbi5pbWFnZSk7XG4gICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwiaW1hZ2VzXCIpKSB0aGlzLmxvYWRJbWFnZXMoanNvbi5pbWFnZXMpO1xuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcImpzb25cIikpIHRoaXMubG9hZEpTT04oanNvbi5qc29uKTtcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJwYWNrXCIpKSB0aGlzLmxvYWRQYWNrKGpzb24ucGFjayk7XG4gICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwicGh5c2ljc1wiKSkgdGhpcy5sb2FkUGh5c2ljcyhqc29uLnBoeXNpY3MpO1xuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcInNjcmlwdFwiKSkgdGhpcy5sb2FkU2NyaXB0KGpzb24uc2NyaXB0KTtcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJzaGFkZXJcIikpIHRoaXMubG9hZFNoYWRlcihqc29uLnNoYWRlcik7XG4gICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwic3ByaXRlc2hlZXRcIikpIHRoaXMubG9hZFNwcml0ZXNoZWV0KGpzb24uc3ByaXRlc2hlZXQpO1xuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcInRleHRcIikpIHRoaXMubG9hZFRleHQoanNvbi50ZXh0KTtcbiAgICAgICAgaWYgKGpzb24uaGFzT3duUHJvcGVydHkoXCJ0aWxlbWFwXCIpKSB0aGlzLmxvYWRUaWxlbWFwKGpzb24udGlsZW1hcCk7XG4gICAgICAgIGlmIChqc29uLmhhc093blByb3BlcnR5KFwidmlkZW9cIikpIHRoaXMubG9hZFZpZGVvKGpzb24udmlkZW8pO1xuICAgICAgICBpZiAoanNvbi5oYXNPd25Qcm9wZXJ0eShcInhtbFwiKSkgdGhpcy5sb2FkWE1MKGpzb24ueG1sKTtcbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBiYXNlVVJMIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkQmFzZVVSTChqc29uKSB7XG4gICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gXCJzdHJpbmdcIiAmJiBqc29uICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5iYXNlVVJMID0ganNvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIGNyb3NzT3JpZ2luIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkQ3Jvc3NPcmlnaW4oanNvbikge1xuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09IFwic3RyaW5nXCIgJiYganNvbiAhPT0gXCJcIiB8fCB0eXBlb2YganNvbiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmNyb3NzT3JpZ2luID0ganNvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIGVuYWJsZVBhcmFsbGVsIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkRW5hYmxlUGFyYWxsZWwoanNvbikge1xuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5lbmFibGVQYXJhbGxlbCA9IGpzb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBwYXRoIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkUGF0aChqc29uKSB7XG4gICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gXCJzdHJpbmdcIiAmJiBqc29uICE9PSBcIlwiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5wYXRoID0ganNvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIHJlc2V0TG9ja2VkIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkUmVzZXRMb2NrZWQoanNvbikge1xuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5yZXNldExvY2tlZCA9IGpzb247XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBhdGxhcyAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZEF0bGFzKGpzb24pIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHRleHR1cmVVUkw7XG4gICAgICAgIGxldCBhdGxhc1VSTDtcbiAgICAgICAgbGV0IGF0bGFzRGF0YTtcbiAgICAgICAgbGV0IGZvcm1hdDtcbiAgICAgICAgaWYgKHR5cGVvZiBqc29uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdGxhcyhqc29uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YganNvbltpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdGxhcyhqc29uW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogYXRsYXMga2V5cyBtdXN0IGJlIG9mIHR5cGUgJ3N0cmluZycuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YganNvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ganNvbltrZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZVVSTCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInRleHR1cmVVUkxcIikpID8gdmFsdWVbXCJ0ZXh0dXJlVVJMXCJdIDoga2V5ICsgXCIucG5nXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlVVJMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdGxhc1VSTCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImF0bGFzVVJMXCIpKSA/IHZhbHVlW1wiYXRsYXNVUkxcIl0gOiBrZXkgKyBcIi5qc29uXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0b2RvIGNoYW5nZSBjaGVjayBoZXJlXG4gICAgICAgICAgICAgICAgICAgICAgICBhdGxhc0RhdGEgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJhdGxhc0RhdGFcIikpID8gdmFsdWVbXCJhdGxhc0RhdGFcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0bGFzVVJMIHx8IGF0bGFzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImZvcm1hdFwiKSkgPyB2YWx1ZVtcImZvcm1hdFwiXSA6IFBoYXNlci5Mb2FkZXIuVEVYVFVSRV9BVExBU19KU09OX0FSUkFZO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXQgPT09IFBoYXNlci5Mb2FkZXIuVEVYVFVSRV9BVExBU19KU09OX0FSUkFZIHx8IGZvcm1hdCA9PT0gUGhhc2VyLkxvYWRlci5URVhUVVJFX0FUTEFTX0pTT05fSEFTSCB8fCBmb3JtYXQgPT09IFBoYXNlci5Mb2FkZXIuVEVYVFVSRV9BVExBU19YTUxfU1RBUkxJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoa2V5LCB0ZXh0dXJlVVJMLCBhdGxhc1VSTCwgYXRsYXNEYXRhLCBmb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAoa2V5OiBcIiArIGtleSArIFwiKSBhdGxhcyBmb3JtYXQgbXVzdCBiZSBQaGFzZXIuTG9hZGVyLlRFWFRVUkVfQVRMQVNfSlNPTl9BUlJBWSAoMCkgb3IgUGhhc2VyLkxvYWRlci5URVhUVVJFX0FUTEFTX0pTT05fSEFTSCAoMSkgb3IgUGhhc2VyLkxvYWRlci5URVhUVVJFX0FUTEFTX1hNTF9TVEFSTElORyAoMikuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIGF0bGFzIG11c3QgaGF2ZSAnYXRsYXNVUkwnIG9yICdhdGxhc0RhdGEnIHNwZWNpZmllZC5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogKGtleTogXCIgKyBrZXkgKyBcIikgYXRsYXMgbXVzdCBoYXZlIGEgJ3RleHR1cmVVUkwnIHNwZWNpZmllZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ2F0bGFzJyBqc29uIHN0cnVjdHVyZSBpcyBtYWxmb3JtZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAnYXRsYXMnIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBhdGxhc0pTT05BcnJheSAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZEF0bGFzSlNPTkFycmF5KGpzb24pIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHRleHR1cmVVUkw7XG4gICAgICAgIGxldCBhdGxhc1VSTDtcbiAgICAgICAgbGV0IGF0bGFzRGF0YTtcbiAgICAgICAgaWYgKHR5cGVvZiBqc29uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdGxhc0pTT05BcnJheShqc29uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YganNvbltpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdGxhc0pTT05BcnJheShqc29uW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogYXRsYXNKU09OQXJyYXkga2V5cyBtdXN0IGJlIG9mIHR5cGUgJ3N0cmluZycuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YganNvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ganNvbltrZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dHVyZVVSTCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInRleHR1cmVVUkxcIikpID8gdmFsdWVbXCJ0ZXh0dXJlVVJMXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRleHR1cmVVUkwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0bGFzVVJMID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwiYXRsYXNVUkxcIikpID8gdmFsdWVbXCJhdGxhc1VSTFwiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdGxhc0RhdGEgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJhdGxhc0RhdGFcIikpID8gdmFsdWVbXCJhdGxhc0RhdGFcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGF0bGFzVVJMIHx8IGF0bGFzRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF0bGFzSlNPTkFycmF5KGtleSwgdGV4dHVyZVVSTCwgYXRsYXNVUkwsIGF0bGFzRGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAoa2V5OiBcIiArIGtleSArIFwiKSBhdGxhc0pTT05BcnJheSBtdXN0IGhhdmUgJ2F0bGFzVVJMJyBvciAnYXRsYXNEYXRhJyBzcGVjaWZpZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIGF0bGFzSlNPTkFycmF5IG11c3QgaGF2ZSBhICd0ZXh0dXJlVVJMJyBzcGVjaWZpZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6ICdhdGxhc0pTT05BcnJheScganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ2F0bGFzSlNPTkFycmF5JyBqc29uIHN0cnVjdHVyZSBpcyBtYWxmb3JtZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0gYXRsYXNKU09OSGFzaCAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZEF0bGFzSlNPTkhhc2goanNvbikge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgdGV4dHVyZVVSTDtcbiAgICAgICAgbGV0IGF0bGFzVVJMO1xuICAgICAgICBsZXQgYXRsYXNEYXRhO1xuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF0bGFzSlNPTkhhc2goanNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShqc29uKSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGpzb25baV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXNKU09OSGFzaChqc29uW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogYXRsYXNKU09OSGFzaCBrZXlzIG11c3QgYmUgb2YgdHlwZSAnc3RyaW5nJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBqc29uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBqc29uW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlVVJMID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwidGV4dHVyZVVSTFwiKSkgPyB2YWx1ZVtcInRleHR1cmVVUkxcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGV4dHVyZVVSTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXRsYXNVUkwgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJhdGxhc1VSTFwiKSkgPyB2YWx1ZVtcImF0bGFzVVJMXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0bGFzRGF0YSA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImF0bGFzRGF0YVwiKSkgPyB2YWx1ZVtcImF0bGFzRGF0YVwiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXRsYXNVUkwgfHwgYXRsYXNEYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXNKU09OSGFzaChrZXksIHRleHR1cmVVUkwsIGF0bGFzVVJMLCBhdGxhc0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogKGtleTogXCIgKyBrZXkgKyBcIikgYXRsYXNKU09OSGFzaCBtdXN0IGhhdmUgJ2F0bGFzVVJMJyBvciAnYXRsYXNEYXRhJyBzcGVjaWZpZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIGF0bGFzSlNPTkhhc2ggbXVzdCBoYXZlIGEgJ3RleHR1cmVVUkwnIHNwZWNpZmllZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ2F0bGFzSlNPTkhhc2gnIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6ICdhdGxhc0pTT05IYXNoJyBqc29uIHN0cnVjdHVyZSBpcyBtYWxmb3JtZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0gYXRsYXNYTUwgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRBdGxhc1hNTChqc29uKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCB0ZXh0dXJlVVJMO1xuICAgICAgICBsZXQgYXRsYXNVUkw7XG4gICAgICAgIGxldCBhdGxhc0RhdGE7XG4gICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXNYTUwoanNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShqc29uKSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGpzb25baV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXNYTUwoanNvbltpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IGF0bGFzWE1MIGtleXMgbXVzdCBiZSBvZiB0eXBlICdzdHJpbmcnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGpzb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGpzb25ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVVUkwgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ0ZXh0dXJlVVJMXCIpKSA/IHZhbHVlW1widGV4dHVyZVVSTFwiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlVVJMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdGxhc1VSTCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImF0bGFzVVJMXCIpKSA/IHZhbHVlW1wiYXRsYXNVUkxcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXRsYXNEYXRhID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwiYXRsYXNEYXRhXCIpKSA/IHZhbHVlW1wiYXRsYXNEYXRhXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdGxhc1VSTCB8fCBhdGxhc0RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdGxhc1hNTChrZXksIHRleHR1cmVVUkwsIGF0bGFzVVJMLCBhdGxhc0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogKGtleTogXCIgKyBrZXkgKyBcIikgYXRsYXNYTUwgbXVzdCBoYXZlICdhdGxhc1VSTCcgb3IgJ2F0bGFzRGF0YScgc3BlY2lmaWVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAoa2V5OiBcIiArIGtleSArIFwiKSBhdGxhc1hNTCBtdXN0IGhhdmUgYSAndGV4dHVyZVVSTCcgc3BlY2lmaWVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAnYXRsYXNYTUwnIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6ICdhdGxhc1hNTCcganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLy8gLS0tLS0tLS0gYXVkaW8gLS0tLS0tLS0gLy9cblxuICAgIGxvYWRBdWRpbyhqc29uKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IHVybHM7XG4gICAgICAgIGxldCBhdXRvRGVjb2RlO1xuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGpzb25ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSAhPT0gXCJcIikgfHwgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA+IDApKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdXJscyA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInVybHNcIikpID8gdmFsdWVbXCJ1cmxzXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9EZWNvZGUgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJhdXRvRGVjb2RlXCIpKSA/IHZhbHVlW1wiYXV0b0RlY29kZVwiXSA6IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGF1dG9EZWNvZGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW8oa2V5LCB1cmxzLCBhdXRvRGVjb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIGF1ZGlvICdhdXRvRGVjb2RlJyBtdXN0IGJlIG9mIHR5cGUgJ2Jvb2xlYW4nLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAoa2V5OiBcIiArIGtleSArIFwiKSBhdWRpbyBtdXN0IGhhdmUgYSAndXJscycgc3BlY2lmaWVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAnYXVkaW8nIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6ICdhdWRpbycganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIGF1ZGlvU3ByaXRlIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkQXVkaW9TcHJpdGUoanNvbikge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCB1cmxzO1xuICAgICAgICBsZXQganNvblVSTDtcbiAgICAgICAgbGV0IGpzb25EYXRhO1xuICAgICAgICBsZXQgYXV0b0RlY29kZTtcbiAgICAgICAgaWYgKHR5cGVvZiBqc29uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBqc29uW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB1cmxzID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwidXJsc1wiKSkgPyB2YWx1ZVtcInVybHNcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAodXJscykge1xuICAgICAgICAgICAgICAgICAgICAgICAganNvblVSTCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImpzb25VUkxcIikpID8gdmFsdWVbXCJqc29uVVJMXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGpzb25EYXRhID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwianNvbkRhdGFcIikpID8gdmFsdWVbXCJqc29uRGF0YVwiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoanNvblVSTCB8fCBqc29uRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9EZWNvZGUgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJhdXRvRGVjb2RlXCIpKSA/IHZhbHVlW1wiYXV0b0RlY29kZVwiXSA6IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBhdXRvRGVjb2RlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpb1Nwcml0ZShrZXksIHVybHMsIGpzb25VUkwsIGpzb25EYXRhLCBhdXRvRGVjb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogKGtleTogXCIgKyBrZXkgKyBcIikgYXVkaW9TcHJpdGUgJ2F1dG9EZWNvZGUnIG11c3QgYmUgb2YgdHlwZSAnYm9vbGVhbicuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIGF1ZGlvU3ByaXRlIG11c3QgaGF2ZSAnanNvblVSTCcgb3IgJ2pzb25EYXRhJyBzcGVjaWZpZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIGF1ZGlvU3ByaXRlIG11c3QgaGF2ZSBhICd1cmxzJyBzcGVjaWZpZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6ICdhdWRpb1Nwcml0ZScganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ2F1ZGlvU3ByaXRlJyBqc29uIHN0cnVjdHVyZSBpcyBtYWxmb3JtZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0gYmluYXJ5IC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkQmluYXJ5KGpzb24pIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgaWYgKHR5cGVvZiBqc29uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5iaW5hcnkoanNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShqc29uKSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGpzb25baV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYmluYXJ5KGpzb25baV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiBiaW5hcnkga2V5cyBtdXN0IGJlIG9mIHR5cGUgJ3N0cmluZycuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YganNvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ganNvbltrZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYmluYXJ5KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlLmhhc093blByb3BlcnR5KFwidXJsXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5iaW5hcnkoa2V5LCB2YWx1ZVtcInVybFwiXSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogKGtleTogXCIgKyBrZXkgKyBcIikgYmluYXJ5IG11c3QgaGF2ZSBhICd1cmwnIHNwZWNpZmllZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ2JpbmFyeScganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ2JpbmFyeScganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIGJpdG1hcEZvbnQgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRCaXRtYXBGb250KGpzb24pIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHRleHR1cmVVUkw7XG4gICAgICAgIGxldCBhdGxhc1VSTDtcbiAgICAgICAgbGV0IGF0bGFzRGF0YTtcbiAgICAgICAgbGV0IHhTcGFjaW5nO1xuICAgICAgICBsZXQgeVNwYWNpbmc7XG4gICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYml0bWFwRm9udChqc29uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YganNvbltpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5iaXRtYXBGb250KGpzb25baV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiBiaXRtYXBGb250IGtleXMgbXVzdCBiZSBvZiB0eXBlICdzdHJpbmcnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGpzb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGpzb25ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRleHR1cmVVUkwgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ0ZXh0dXJlVVJMXCIpKSA/IHZhbHVlW1widGV4dHVyZVVSTFwiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ZXh0dXJlVVJMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdGxhc1VSTCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImF0bGFzVVJMXCIpKSA/IHZhbHVlW1wiYXRsYXNVUkxcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXRsYXNEYXRhID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwiYXRsYXNEYXRhXCIpKSA/IHZhbHVlW1wiYXRsYXNEYXRhXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhdGxhc1VSTCB8fCBhdGxhc0RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4U3BhY2luZyA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInhTcGFjaW5nXCIpKSA/IHZhbHVlW1wieFNwYWNpbmdcIl0gOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHlTcGFjaW5nID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwieVNwYWNpbmdcIikpID8gdmFsdWVbXCJ5U3BhY2luZ1wiXSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB4U3BhY2luZyA9PT0gXCJudW1iZXJcIiAmJiB0eXBlb2YgeVNwYWNpbmcgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYml0bWFwRm9udChrZXksIHRleHR1cmVVUkwsIGF0bGFzVVJMLCBhdGxhc0RhdGEsIHhTcGFjaW5nLCB5U3BhY2luZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIGJpdG1hcEZvbnQgJ3hTcGFjaW5nJyBhbmQgJ3lTcGFjaW5nJyBtdXN0IGJlIG9mIHR5cGUgJ251bWJlcicuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIGJpdG1hcEZvbnQgbXVzdCBoYXZlICdhdGxhc1VSTCcgb3IgJ2F0bGFzRGF0YScgc3BlY2lmaWVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAoa2V5OiBcIiArIGtleSArIFwiKSBiaXRtYXBGb250IG11c3QgaGF2ZSBhICd0ZXh0dXJlVVJMJyBzcGVjaWZpZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6ICdiaXRtYXBGb250JyBqc29uIHN0cnVjdHVyZSBpcyBtYWxmb3JtZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAnYml0bWFwRm9udCcganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIGltYWdlIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkSW1hZ2UoanNvbikge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgdXJsO1xuICAgICAgICBsZXQgb3ZlcndyaXRlO1xuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKGpzb24pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoanNvbikpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBqc29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBqc29uW2ldID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKGpzb25baV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiBpbWFnZSBrZXlzIG11c3QgYmUgb2YgdHlwZSAnc3RyaW5nJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBqc29uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBqc29uW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInVybFwiKSkgPyB2YWx1ZVtcInVybFwiXSA6IGtleSArIFwiLnBuZ1wiO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcndyaXRlID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwib3ZlcndyaXRlXCIpKSA/IHZhbHVlW1wib3ZlcndyaXRlXCJdIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG92ZXJ3cml0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShrZXksIHVybCwgb3ZlcndyaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIGltYWdlICdvdmVyd3JpdGUnIG11c3QgYmUgb2YgdHlwZSAnYm9vbGVhbicuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIGltYWdlICd1cmwnIG11c3QgYmUgb2YgdHlwZSAnc3RyaW5nJy5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ2ltYWdlJyBqc29uIHN0cnVjdHVyZSBpcyBtYWxmb3JtZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAnaW1hZ2UnIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBpbWFnZXMgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRJbWFnZXMoanNvbikge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQga2V5cztcbiAgICAgICAgbGV0IHVybHM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZXMoanNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGpzb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGtleXMgPSAoanNvbi5oYXNPd25Qcm9wZXJ0eShcImtleXNcIikpID8ganNvbltcImtleXNcIl0gOiBudWxsO1xuICAgICAgICAgICAgdXJscyA9IChqc29uLmhhc093blByb3BlcnR5KFwidXJsc1wiKSkgPyBqc29uW1widXJsc1wiXSA6IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGtleXMgJiYgdXJscykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlcyhrZXksIGtleXMsIHVybHMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogaW1hZ2VzIG11c3QgaGF2ZSAna2V5cycgYW5kICd1cmxzJyBzcGVjaWZpZWQuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6ICdpbWFnZXMnIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBqc29uIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkSlNPTihqc29uKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCB1cmw7XG4gICAgICAgIGxldCBvdmVyd3JpdGU7XG4gICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuanNvbihqc29uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YganNvbltpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5qc29uKGpzb25baV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAnanNvbicga2V5cyBtdXN0IGJlIG9mIHR5cGUgJ3N0cmluZycuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YganNvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ganNvbltrZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuanNvbihrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInVybFwiKSkgPyB2YWx1ZVtcInVybFwiXSA6IGtleSArIFwiLmpzb25cIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJ3cml0ZSA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcIm92ZXJ3cml0ZVwiKSkgPyB2YWx1ZVtcIm92ZXJ3cml0ZVwiXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvdmVyd3JpdGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuanNvbihrZXksIHVybCwgb3ZlcndyaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIGpzb24gJ292ZXJ3cml0ZScgbXVzdCBiZSBvZiB0eXBlICdib29sZWFuJy5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogKGtleTogXCIgKyBrZXkgKyBcIikganNvbiAndXJsJyBtdXN0IGJlIG9mIHR5cGUgJ3N0cmluZycuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6ICdqc29uJyBqc29uIHN0cnVjdHVyZSBpcyBtYWxmb3JtZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAnanNvbicganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIHBhY2sgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRQYWNrKGpzb24pIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGpzb25ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnBhY2soa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5wYWNrKGtleSwgbnVsbCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAncGFjaycganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ3BhY2snIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBwaHlzaWNzIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkUGh5c2ljcyhqc29uKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCB1cmw7XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICBsZXQgZm9ybWF0O1xuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnBoeXNpY3MoanNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShqc29uKSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGpzb25baV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQucGh5c2ljcyhqc29uW2ldKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogcGh5c2ljcyBrZXlzIG11c3QgYmUgb2YgdHlwZSAnc3RyaW5nJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBqc29uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBqc29uW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5waHlzaWNzKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwidXJsXCIpKSA/IHZhbHVlW1widXJsXCJdIDoga2V5ICsgXCIuanNvblwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAganNvbiA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikpID8gdmFsdWVbXCJkYXRhXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIHR5cGVvZiBkYXRhICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIHBoeXNpY3MgJ2RhdGEnIG11c3QgYmUgb2YgdHlwZSAnb2JqZWN0Jy5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImZvcm1hdFwiKSkgPyB2YWx1ZVtcImZvcm1hdFwiXSA6IFBoYXNlci5Mb2FkZXIuUEhZU0lDU19MSU1FX0NPUk9OQV9KU09OO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtYXQgPT09IFBoYXNlci5Mb2FkZXIuUEhZU0lDU19MSU1FX0NPUk9OQV9KU09OIHx8IGZvcm1hdCA9PT0gUGhhc2VyLkxvYWRlci5QSFlTSUNTX1BIQVNFUl9KU09OKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnBoeXNpY3Moa2V5LCB1cmwsIGRhdGEsIGZvcm1hdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIHBoeXNpY3MgJ2Zvcm1hdCcgbXVzdCBiZSBQaGFzZXIuTG9hZGVyLlBIWVNJQ1NfTElNRV9DT1JPTkFfSlNPTiAoMykgb3IgUGhhc2VyLkxvYWRlci5QSFlTSUNTX1BIQVNFUl9KU09OICg0KS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIHBoeXNpY3MgJ3VybCcgbXVzdCBiZSBvZiB0eXBlICdzdHJpbmcnLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAncGh5c2ljcycganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ3BoeXNpY3MnIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBzY3JpcHQgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRTY3JpcHQoanNvbikge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNjcmlwdChqc29uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YganNvbltpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zY3JpcHQoanNvbltpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IHNjcmlwdCBrZXlzIG11c3QgYmUgb2YgdHlwZSAnc3RyaW5nJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBqc29uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBqc29uW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zY3JpcHQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ1cmxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNjcmlwdChrZXksIHZhbHVlW1widXJsXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdG9kbyB0aGlzIGlzIHdyb25nLi4uIDxrZXk+LmpzXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogKGtleTogXCIgKyBrZXkgKyBcIikgc2NyaXB0ICd1cmwnIG11c3QgYmUgc3BlY2lmaWVkLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAnc2NyaXB0JyBqc29uIHN0cnVjdHVyZSBpcyBtYWxmb3JtZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAnc2NyaXB0JyBqc29uIHN0cnVjdHVyZSBpcyBtYWxmb3JtZWQuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0gc2hhZGVyIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkU2hhZGVyKGpzb24pIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHVybDtcbiAgICAgICAgbGV0IG92ZXJ3cml0ZTtcbiAgICAgICAgaWYgKHR5cGVvZiBqc29uID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zaGFkZXIoanNvbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShqc29uKSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGpzb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGpzb25baV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuc2hhZGVyKGpzb25baV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiBzaGFkZXIga2V5cyBtdXN0IGJlIG9mIHR5cGUgJ3N0cmluZycuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YganNvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ganNvbltrZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuc2hhZGVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwidXJsXCIpKSA/IHZhbHVlW1widXJsXCJdIDoga2V5ICsgXCIuZnJhZ1wiO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHVybCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcndyaXRlID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwib3ZlcndyaXRlXCIpKSA/IHZhbHVlW1wib3ZlcndyaXRlXCJdIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG92ZXJ3cml0ZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zaGFkZXIoa2V5LCB1cmwsIG92ZXJ3cml0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAoa2V5OiBcIiArIGtleSArIFwiKSBzaGFkZXIgJ292ZXJ3cml0ZScgbXVzdCBiZSBvZiB0eXBlICdib29sZWFuJy5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogKGtleTogXCIgKyBrZXkgKyBcIikgc2hhZGVyICd1cmwnIG11c3QgYmUgb2YgdHlwZSAnc3RyaW5nJy5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ3NoYWRlcicganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ3NoYWRlcicganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIHNwcml0ZXNoZWV0IC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkU3ByaXRlc2hlZXQoanNvbikge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCB1cmw7XG4gICAgICAgIGxldCBmcmFtZVdpZHRoO1xuICAgICAgICBsZXQgZnJhbWVIZWlnaHQ7XG4gICAgICAgIGxldCBmcmFtZU1heDtcbiAgICAgICAgbGV0IG1hcmdpbjtcbiAgICAgICAgbGV0IHNwYWNpbmc7XG4gICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4ganNvbikge1xuICAgICAgICAgICAgICAgIHZhbHVlID0ganNvbltrZXldO1xuICAgICAgICAgICAgICAgIC8vdG9kbyB3b3JrIG9uIHRoaXMgbW9yZVxuICAgICAgICAgICAgICAgIHVybCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInVybFwiKSkgPyB2YWx1ZVtcInVybFwiXSA6IGtleSArIFwiLnBuZ1wiO1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImZyYW1lV2lkdGhcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVXaWR0aCA9IHZhbHVlW1wiZnJhbWVXaWR0aFwiXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZVdpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIHNwcml0ZXNoZWV0cyBtdXN0IGhhdmUgYSAnZnJhbWVXaWR0aCcgc3BlY2lmaWVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJmcmFtZUhlaWdodFwiKSkge1xuICAgICAgICAgICAgICAgICAgICBmcmFtZUhlaWdodCA9IHZhbHVlW1wiZnJhbWVIZWlnaHRcIl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZnJhbWVIZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogKGtleTogXCIgKyBrZXkgKyBcIikgc3ByaXRlc2hlZXRzIG11c3QgaGF2ZSBhICdmcmFtZUhlaWdodCcgc3BlY2lmaWVkXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmcmFtZU1heCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImZyYW1lTWF4XCIpKSA/IHZhbHVlW1wiZnJhbWVNYXhcIl0gOiAtMTtcbiAgICAgICAgICAgICAgICBtYXJnaW4gPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJtYXJnaW5cIikpID8gdmFsdWVbXCJtYXJnaW5cIl0gOiAwO1xuICAgICAgICAgICAgICAgIHNwYWNpbmcgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJzcGFjaW5nXCIpKSA/IHZhbHVlW1wic3BhY2luZ1wiXSA6IDA7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoa2V5LCB1cmwsIGZyYW1lV2lkdGgsIGZyYW1lSGVpZ2h0LCBmcmFtZU1heCwgbWFyZ2luLCBzcGFjaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAnc3ByaXRlc2hlZXQnIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSB0ZXh0IC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkVGV4dChqc29uKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCB1cmw7XG4gICAgICAgIGxldCBvdmVyd3JpdGU7XG4gICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQudGV4dChqc29uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YganNvbltpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC50ZXh0KGpzb25baV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiB0ZXh0IGtleXMgbXVzdCBiZSBvZiB0eXBlICdzdHJpbmcnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGpzb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGpzb25ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnRleHQoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ1cmxcIikpID8gdmFsdWVbXCJ1cmxcIl0gOiBrZXkgKyBcIi50eHRcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJ3cml0ZSA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcIm92ZXJ3cml0ZVwiKSkgPyB2YWx1ZVtcIm92ZXJ3cml0ZVwiXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvdmVyd3JpdGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQudGV4dChrZXksIHVybCwgb3ZlcndyaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIHRleHQgJ292ZXJ3cml0ZScgbXVzdCBiZSBvZiB0eXBlICdib29sZWFuJy5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogKGtleTogXCIgKyBrZXkgKyBcIikgdGV4dCAndXJsJyBtdXN0IGJlIG9mIHR5cGUgJ3N0cmluZycuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6ICd0ZXh0JyBqc29uIHN0cnVjdHVyZSBpcyBtYWxmb3JtZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAndGV4dCcganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIHRpbGVtYXAgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRUaWxlbWFwKGpzb24pIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IHVybDtcbiAgICAgICAgbGV0IGRhdGE7XG4gICAgICAgIGxldCBmb3JtYXQ7XG4gICAgICAgIGlmICh0eXBlb2YganNvbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQudGlsZW1hcChqc29uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YganNvbltpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC50aWxlbWFwKGpzb25baV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiB0aWxlbWFwIGtleXMgbXVzdCBiZSBvZiB0eXBlICdzdHJpbmcnLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGpzb24gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGpzb24pIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGpzb25ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnRpbGVtYXAoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ1cmxcIikpID8gdmFsdWVbXCJ1cmxcIl0gOiBrZXkgKyBcIi5qc29uXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdXJsID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAmJiB0eXBlb2YgZGF0YSAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAoa2V5OiBcIiArIGtleSArIFwiKSB0aWxlbWFwICdkYXRhJyBtdXN0IGJlIG9mIHR5cGUgJ29iamVjdCcuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJmb3JtYXRcIikpID8gdmFsdWVbXCJmb3JtYXRcIl0gOiBQaGFzZXIuVGlsZW1hcC5DU1Y7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm1hdCA9PT0gUGhhc2VyLlRpbGVtYXAuQ1NWIHx8IGZvcm1hdCA9PT0gUGhhc2VyLlRpbGVtYXAuVElMRURfSlNPTikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC50aWxlbWFwKGtleSwgdXJsLCBkYXRhLCBmb3JtYXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAoa2V5OiBcIiArIGtleSArIFwiKSB0aWxlbWFwICdmb3JtYXQnIG11c3QgYmUgUGhhc2VyLlRpbGVtYXAuQ1NWICgwKSBvciBQaGFzZXIuVGlsZW1hcC5USUxFRF9KU09OICgxKS5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IHRpbGVtYXAgJ3VybCcgbXVzdCBiZSBvZiB0eXBlICdzdHJpbmcnLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAndGlsZW1hcCcganNvbiBzdHJ1Y3R1cmUgaXMgbWFsZm9ybWVkLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ3RpbGVtYXAnIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSB2aWRlbyAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZFZpZGVvKGpzb24pIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgdXJscztcbiAgICAgICAgbGV0IGxvYWRFdmVudDtcbiAgICAgICAgbGV0IGFzQmxvYjtcbiAgICAgICAgaWYgKHR5cGVvZiBqc29uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBqc29uW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUgIT09IFwiXCIpIHx8IChBcnJheS5pc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5sZW5ndGggPiAwKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC52aWRlbyhrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVybHMgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ1cmxzXCIpKSA/IHZhbHVlW1widXJsc1wiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmICh1cmxzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkRXZlbnQgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJsb2FkRXZlbnRcIikpID8gdmFsdWVbXCJsb2FkRXZlbnRcIl0gOiBcImNhbnBsYXl0aHJvdWdoXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobG9hZEV2ZW50ID09PSBcImNhbnBsYXl0aHJvdWdoXCIgfHwgbG9hZEV2ZW50ID09PSBcImNhbnBsYXlcIiB8fCBsb2FkRXZlbnQgPT09IFwibG9hZGVkYXRhXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc0Jsb2IgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJhc0Jsb2JcIikpID8gdmFsdWVbXCJhc0Jsb2JcIl0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFzQmxvYiA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQudmlkZW8oa2V5LCB1cmxzLCBsb2FkRXZlbnQsIGFzQmxvYik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IHZpZGVvICdhc0Jsb2InIG11c3QgYmUgb2YgdHlwZSAnYm9vbGVhbicuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IHZpZGVvICdsb2FkRXZlbnQnIG11c3QgYmUgJ2NhbnBsYXl0aHJvdWdoJywgJ2NhbnBsYXknLCBvciAnbG9hZGVkZGF0YScuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IHZpZGVvICd1cmxzJyBtdXN0IGJlIHNwZWNpZmllZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogJ3ZpZGVvJyBqc29uIHN0cnVjdHVyZSBpcyBtYWxmb3JtZWQuXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQXNzZXRMb2FkZXI6OiAndmlkZW8nIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSB4bWwgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRYTUwoanNvbikge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgdXJsO1xuICAgICAgICBsZXQgb3ZlcndyaXRlO1xuICAgICAgICBpZiAodHlwZW9mIGpzb24gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnhtbChqc29uKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGpzb24pKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwganNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YganNvbltpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC54bWwoanNvbltpXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IHhtbCBrZXlzIG11c3QgYmUgb2YgdHlwZSAnc3RyaW5nJy5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBqc29uID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBqc29uKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBqc29uW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC54bWwoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICB1cmwgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ1cmxcIikpID8gdmFsdWVbXCJ1cmxcIl0gOiBrZXkgKyBcIi54bWxcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB1cmwgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJ3cml0ZSA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcIm92ZXJ3cml0ZVwiKSkgPyB2YWx1ZVtcIm92ZXJ3cml0ZVwiXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvdmVyd3JpdGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQueG1sKGtleSwgdXJsLCBvdmVyd3JpdGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFzc2V0TG9hZGVyOjogKGtleTogXCIgKyBrZXkgKyBcIikgeG1sICdvdmVyd3JpdGUnIG11c3QgYmUgb2YgdHlwZSAnYm9vbGVhbicuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6IChrZXk6IFwiICsga2V5ICsgXCIpIHhtbCAndXJsJyBtdXN0IGJlIG9mIHR5cGUgJ3N0cmluZycuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6ICd4bWwnIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJBc3NldExvYWRlcjo6ICd4bWwnIGpzb24gc3RydWN0dXJlIGlzIG1hbGZvcm1lZC5cIik7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0TG9hZGVyOyIsIi8qKlxuICogQ3JlYXRlZCBieSBHZW5lbGwgUmFkbGV5IGluIDIwMTcuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dyYWRsZXkvUGhhc2VyQXNzZXRMb2FkZXJcbiAqL1xuXG4vKipcbiAqIENvbnN0YW50cyBtYXRjaGluZyBhc3NldHMuanNvbi5cbiAqL1xuY2xhc3MgQXNzZXRLZXlzIHtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQXNzZXRLZXlzLCB7XG4gICAgXCJBU1NFVFNcIjoge1xuICAgICAgICB2YWx1ZTogXCJhc3NldHNcIlxuICAgIH0sXG4gICAgXCJQUkVMT0FEX1NQUklURVwiOiB7XG4gICAgICAgIHZhbHVlOiBcInByZWxvYWRTcHJpdGVcIlxuICAgIH0sXG4gICAgXCJBVExBU18wXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNUZXN0XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfMVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzVGVzdDFcIlxuICAgIH0sXG4gICAgXCJBVExBU18yXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNUZXN0MlwiXG4gICAgfSxcbiAgICBcIkFUTEFTXzNcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1Rlc3QzXCJcbiAgICB9LFxuICAgIFwiQVRMQVNfNFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzVGVzdDRcIlxuICAgIH0sXG4gICAgXCJBVExBU181XCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNUZXN0NVwiXG4gICAgfSxcbiAgICBcIkFUTEFTXzZcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1Rlc3Q2XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfN1wiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzVGVzdDdcIlxuICAgIH0sXG4gICAgXCJBVExBU184XCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNUZXN0OFwiXG4gICAgfSxcbiAgICBcIkFUTEFTXzlcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1Rlc3Q5XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfSlNPTl9BUlJBWVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzSlNPTkFycmF5VGVzdFwiXG4gICAgfSxcbiAgICBcIkFUTEFTX0pTT05fQVJSQVkxXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNKU09OQXJyYXlUZXN0MVwiXG4gICAgfSxcbiAgICBcIkFUTEFTX0pTT05fSEFTSFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzSlNPTkhhc2hUZXN0XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfSlNPTl9IQVNIMVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzSlNPTkhhc2hUZXN0MVwiXG4gICAgfSxcbiAgICBcIkFUTEFTX1hNTFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzWE1MVGVzdFwiXG4gICAgfSxcbiAgICBcIkFUTEFTX1hNTDFcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1hNTFRlc3QxXCJcbiAgICB9LFxuICAgIFwiQVVESU9cIjoge1xuICAgICAgICB2YWx1ZTogXCJhdWRpb1Rlc3RcIlxuICAgIH0sXG4gICAgXCJBVURJT19TUFJJVEVcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdWRpb1Nwcml0ZVRlc3RcIlxuICAgIH0sXG4gICAgXCJCSU5BUllcIjoge1xuICAgICAgICB2YWx1ZTogXCJiaW5hcnlUZXN0XCJcbiAgICB9LFxuICAgIFwiQklOQVJZMVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImJpbmFyeVRlc3QxXCJcbiAgICB9LFxuICAgIFwiQklUTUFQX0ZPTlRcIjoge1xuICAgICAgICB2YWx1ZTogXCJiaXRtYXBGb250VGVzdFwiXG4gICAgfSxcbiAgICBcIkJJVE1BUF9GT05UMVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImJpdG1hcEZvbnRUZXN0MVwiXG4gICAgfSxcbiAgICBcIklNQUdFXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiaW1hZ2VUZXN0XCJcbiAgICB9LFxuICAgIFwiSU1BR0UxXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiaW1hZ2VUZXN0MVwiXG4gICAgfSxcbiAgICBcIklNQUdFMlwiOiB7XG4gICAgICAgIHZhbHVlOiBcImltYWdlVGVzdDJcIlxuICAgIH0sXG4gICAgXCJJTUFHRTNcIjoge1xuICAgICAgICB2YWx1ZTogXCJpbWFnZVRlc3QzXCJcbiAgICB9LFxuICAgIFwiSlNPTlwiOiB7XG4gICAgICAgIHZhbHVlOiBcImpzb25UZXN0XCJcbiAgICB9LFxuICAgIFwiSlNPTjFcIjoge1xuICAgICAgICB2YWx1ZTogXCJqc29uVGVzdDFcIlxuICAgIH0sXG4gICAgXCJQSFlTSUNTXCI6IHtcbiAgICAgICAgdmFsdWU6IFwicGh5c2ljc1Rlc3RcIlxuICAgIH0sXG4gICAgXCJQSFlTSUNTMVwiOiB7XG4gICAgICAgIHZhbHVlOiBcInBoeXNpY3NUZXN0MVwiXG4gICAgfSxcbiAgICBcIlNIQURFUlwiOiB7XG4gICAgICAgIHZhbHVlOiBcInNoYWRlclRlc3RcIlxuICAgIH0sXG4gICAgXCJTSEFERVIxXCI6IHtcbiAgICAgICAgdmFsdWU6IFwic2hhZGVyVGVzdDFcIlxuICAgIH0sXG4gICAgXCJTUFJJVEVTSEVFVFwiOiB7XG4gICAgICAgIHZhbHVlOiBcInNwcml0ZXNoZWV0VGVzdFwiXG4gICAgfSxcbiAgICBcIlRFWFRcIjoge1xuICAgICAgICB2YWx1ZTogXCJ0ZXh0VGVzdFwiXG4gICAgfSxcbiAgICBcIlRFWFQxXCI6IHtcbiAgICAgICAgdmFsdWU6IFwidGV4dFRlc3QxXCJcbiAgICB9LFxuICAgIFwiVElMRU1BUFwiOiB7XG4gICAgICAgIHZhbHVlOiBcInRpbGVtYXBUZXN0XCJcbiAgICB9LFxuICAgIFwiVElMRU1BUDFcIjoge1xuICAgICAgICB2YWx1ZTogXCJ0aWxlbWFwVGVzdDFcIlxuICAgIH0sXG4gICAgXCJWSURFT1wiOiB7XG4gICAgICAgIHZhbHVlOiBcInZpZGVvVGVzdFwiXG4gICAgfSxcbiAgICBcIlhNTFwiOiB7XG4gICAgICAgIHZhbHVlOiBcInhtbFRlc3RcIlxuICAgIH0sXG4gICAgXCJYTUwxXCI6IHtcbiAgICAgICAgdmFsdWU6IFwieG1sVGVzdDFcIlxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBBc3NldEtleXM7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgR2VuZWxsIFJhZGxleSBpbiAyMDE3LlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFkbGV5L1BoYXNlckFzc2V0TG9hZGVyXG4gKi9cblxuaW1wb3J0IEFzc2V0S2V5cyBmcm9tIFwiLi9Bc3NldEtleXNcIjtcbmltcG9ydCBHYW1lS2V5cyBmcm9tIFwiLi9HYW1lS2V5c1wiO1xuXG5jbGFzcyBCb290U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgLy8gdGhpcy5nYW1lLnRlc3QgPSBHYW1lS2V5cy5URVNUX1NUUklOR19FTVBUWTtcbiAgICAgICAgLy8gdGhpcy5nYW1lLnRlc3QgPSBHYW1lS2V5cy5URVNUX1NUUklOR19FWElTVElORztcbiAgICAgICAgLy8gdGhpcy5nYW1lLnRlc3QgPSBHYW1lS2V5cy5URVNUX0FSUkFZX0VNUFRZO1xuICAgICAgICAvLyB0aGlzLmdhbWUudGVzdCA9IEdhbWVLZXlzLlRFU1RfQVJSQVlfRVhJU1RJTkc7XG4gICAgICAgIC8vIHRoaXMuZ2FtZS50ZXN0ID0gR2FtZUtleXMuVEVTVF9PQkpFQ1RfRU1QVFk7XG4gICAgICAgIHRoaXMuZ2FtZS50ZXN0ID0gR2FtZUtleXMuVEVTVF9PQkpFQ1RfQVRMQVM7XG5cbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuanNvbihBc3NldEtleXMuQVNTRVRTLCB0aGlzLmdhbWUudGVzdCk7XG5cbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2UoQXNzZXRLZXlzLlBSRUxPQURfU1BSSVRFLCBcImFzc2V0cy9wcmVsb2FkU3ByaXRlLnBuZ1wiKTtcbiAgICB9XG5cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5zdGF0ZS5zdGFydChHYW1lS2V5cy5MT0FEKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb3RTdGF0ZTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBHZW5lbGwgUmFkbGV5IGluIDIwMTcuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dyYWRsZXkvUGhhc2VyQXNzZXRMb2FkZXJcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IEdhbWVLZXlzIGZyb20gXCIuL0dhbWVLZXlzXCI7XG5pbXBvcnQgQm9vdFN0YXRlIGZyb20gXCIuL0Jvb3RTdGF0ZVwiO1xuaW1wb3J0IExvYWRTdGF0ZSBmcm9tIFwiLi9Mb2FkU3RhdGVcIjtcbmltcG9ydCBQbGF5U3RhdGUgZnJvbSBcIi4vUGxheVN0YXRlXCI7XG5cbmNsYXNzIEdhbWUgZXh0ZW5kcyBQaGFzZXIuR2FtZSB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoODAwLCA2MDAsIFBoYXNlci5XRUJHTCk7XG4gICAgICAgIC8vIHN1cGVyKDgwMCwgNjAwLCBQaGFzZXIuQ0FOVkFTKTtcblxuICAgICAgICB0aGlzLnN0YXRlLmFkZChHYW1lS2V5cy5CT09ULCBCb290U3RhdGUpO1xuICAgICAgICB0aGlzLnN0YXRlLmFkZChHYW1lS2V5cy5MT0FELCBMb2FkU3RhdGUpO1xuICAgICAgICB0aGlzLnN0YXRlLmFkZChHYW1lS2V5cy5QTEFZLCBQbGF5U3RhdGUpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuc3RhcnQoR2FtZUtleXMuQk9PVCk7XG4gICAgfVxufVxuXG5uZXcgR2FtZSgpO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEdlbmVsbCBSYWRsZXkgaW4gMjAxNy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ3JhZGxleS9QaGFzZXJBc3NldExvYWRlclxuICovXG5cbi8qKlxuICogTWFpbiBjb25zdHMuXG4gKi9cbmNsYXNzIEdhbWVLZXlzIHtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoR2FtZUtleXMsIHtcbiAgICBcIkJPT1RcIjoge1xuICAgICAgICB2YWx1ZTogXCJib290XCJcbiAgICB9LFxuICAgIFwiTE9BRFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImxvYWRcIlxuICAgIH0sXG4gICAgXCJQTEFZXCI6IHtcbiAgICAgICAgdmFsdWU6IFwicGxheVwiXG4gICAgfSxcbiAgICBcIlRFU1RfU1RSSU5HX0VNUFRZXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiZGF0YS9zdHJpbmcvZW1wdHkuanNvblwiXG4gICAgfSxcbiAgICBcIlRFU1RfU1RSSU5HX0VYSVNUSU5HXCI6e1xuICAgICAgICB2YWx1ZTpcImRhdGEvc3RyaW5nL2V4aXN0aW5nLmpzb25cIlxuICAgIH0sXG4gICAgXCJURVNUX0FSUkFZX0VNUFRZXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiZGF0YS9hcnJheS9lbXB0eS5qc29uXCJcbiAgICB9LFxuICAgIFwiVEVTVF9BUlJBWV9FWElTVElOR1wiOntcbiAgICAgICAgdmFsdWU6XCJkYXRhL2FycmF5L2V4aXN0aW5nLmpzb25cIlxuICAgIH0sXG4gICAgXCJURVNUX09CSkVDVF9FTVBUWVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImRhdGEvb2JqZWN0L2VtcHR5Lmpzb25cIlxuICAgIH0sXG4gICAgXCJURVNUX09CSkVDVF9BVExBU1wiOntcbiAgICAgICAgdmFsdWU6XCJkYXRhL29iamVjdC9hdGxhcy5qc29uXCJcbiAgICB9LFxuICAgIFwiVEVTVF9PQkpFQ1RfQVRMQVNfSlNPTlwiOntcbiAgICAgICAgdmFsdWU6XCJkYXRhL29iamVjdC9hdGxhc0pTT04uanNvblwiXG4gICAgfSxcbiAgICBcIlRFU1RfT0JKRUNUX0FUTEFTX1hNTFwiOntcbiAgICAgICAgdmFsdWU6XCJkYXRhL29iamVjdC9hdGxhc1hNTC5qc29uXCJcbiAgICB9LFxuICAgIFwiVEVTVF9PQkpFQ1RfQVVESU9cIjp7XG4gICAgICAgIHZhbHVlOlwiZGF0YS9vYmplY3QvYXVkaW8uanNvblwiXG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVLZXlzO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEdlbmVsbCBSYWRsZXkgaW4gMjAxNy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ3JhZGxleS9QaGFzZXJBc3NldExvYWRlclxuICovXG5cbmltcG9ydCBBc3NldEtleXMgZnJvbSBcIi4vQXNzZXRLZXlzXCI7XG5pbXBvcnQgR2FtZUtleXMgZnJvbSBcIi4vR2FtZUtleXNcIjtcbmltcG9ydCBBc3NldExvYWRlciBmcm9tIFwiLi4vbGliL0Fzc2V0TG9hZGVyXCI7XG5cbmNsYXNzIExvYWRTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBwcmVsb2FkKCkge1xuICAgICAgICBsZXQgcHJlbG9hZGJhciA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIEFzc2V0S2V5cy5QUkVMT0FEX1NQUklURSk7XG4gICAgICAgIHByZWxvYWRiYXIueCA9ICh0aGlzLmdhbWUud2lkdGggLSBwcmVsb2FkYmFyLndpZHRoKSAvIDI7XG4gICAgICAgIHByZWxvYWRiYXIueSA9ICh0aGlzLmdhbWUuaGVpZ2h0IC0gcHJlbG9hZGJhci5oZWlnaHQpIC8gMjtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuc2V0UHJlbG9hZFNwcml0ZShwcmVsb2FkYmFyKTtcblxuICAgICAgICBuZXcgQXNzZXRMb2FkZXIodGhpcy5nYW1lLCB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihBc3NldEtleXMuQVNTRVRTKSk7XG5cbiAgICAgICAgdGhpcy5fbG9hZGluZ01zZyA9IFwiTG9hZGluZy4uLiBcIjtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCgwLCAwLCB0aGlzLl9sb2FkaW5nTXNnLCB7ZmlsbDogXCIjZmZmZmZmXCJ9KTtcbiAgICAgICAgdGhpcy5fdGV4dC54ID0gKHRoaXMuZ2FtZS53aWR0aCAtIHRoaXMuX3RleHQud2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5fdGV4dC55ID0gdGhpcy5nYW1lLmhlaWdodCAtIHRoaXMuX3RleHQuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLm9uRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkKHRoaXMub25Mb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9ncmVzcyAtIFBlcmNlbnQgbG9hZGluZyBwcm9ncmVzcyBhdCB0aW1lIG9mIGZpbGUgbG9hZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZUtleSAtICBLZXkgb2YgZmlsZSBsb2FkZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN1Y2Nlc3MgLSBJZiBmaWxlIHN1Y2NlZWRlZCBsb2FkZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdG90YWxMb2FkZWQgLSBGaWxlcyBsb2FkZWQgc28gZmFyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvdGFsRmlsZXMgLSBGaWxlcyB0byBiZSBsb2FkZWRcbiAgICAgKi9cbiAgICBvbkZpbGVDb21wbGV0ZShwcm9ncmVzcywgY2FjaGVLZXksIHN1Y2Nlc3MsIHRvdGFsTG9hZGVkLCB0b3RhbEZpbGVzKSB7XG4gICAgICAgIHRoaXMuX3RleHQudGV4dCA9IHRoaXMuX2xvYWRpbmdNc2cgKyBwcm9ncmVzcyArIFwiJVwiO1xuXG4gICAgICAgIGlmIChwcm9ncmVzcyA9PT0gMTAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5vbkZpbGVDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0LnRleHQgPSBcIkxvYWRlZFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLnJlbW92ZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KEdhbWVLZXlzLlBMQVkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZFN0YXRlO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgR2VuZWxsIFJhZGxleSBpbiAyMDE3LlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFkbGV5L1BoYXNlckFzc2V0TG9hZGVyXG4gKi9cblxuaW1wb3J0IEFzc2V0S2V5cyBmcm9tIFwiLi9Bc3NldEtleXNcIjtcbmltcG9ydCBHYW1lS2V5cyBmcm9tIFwiLi9HYW1lS2V5c1wiO1xuXG5jbGFzcyBQbGF5U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmdhbWUudGVzdCkge1xuICAgICAgICAgICAgY2FzZSBHYW1lS2V5cy5URVNUX1NUUklOR19FWElTVElORzpcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUtleXMuVEVTVF9BUlJBWV9FWElTVElORzpcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RBcnJheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lS2V5cy5URVNUX09CSkVDVF9BVExBUzpcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RBdGxhcygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGVzdFN0cmluZygpIHtcblxuICAgICAgICAvLyAtLS0tLS0tLSBhdGxhcyAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDIwMCwgQXNzZXRLZXlzLkFUTEFTXzAsIFwicDFfaHVydFwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBhdGxhc0pTT05BcnJheSAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDMwMCwgQXNzZXRLZXlzLkFUTEFTX0pTT05fQVJSQVksIFwicDFfZnJvbnRcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXNKU09OSGFzaCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDQwMCwgQXNzZXRLZXlzLkFUTEFTX0pTT05fSEFTSCwgXCJwMV9kdWNrXCIpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGF0bGFzWE1MIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgNTAwLCBBc3NldEtleXMuQVRMQVNfWE1MLCBcImJvbWIucG5nXCIpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGJpbmFyeSAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBiaW5hcnkgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0QmluYXJ5KEFzc2V0S2V5cy5CSU5BUlkpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnRleHQoMTAwLCA1MDAsIFwiYmluYXJ5LmJ5dGVMZW5ndGg6IFwiICsgYmluYXJ5LmJ5dGVMZW5ndGgsIHtmaWxsOiBcIiNmZmZmZmZcIn0pO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGJpdG1hcEZvbnQgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuZ2FtZS5hZGQuYml0bWFwVGV4dCgyMDAsIDEwMCwgQXNzZXRLZXlzLkJJVE1BUF9GT05ULCAnQml0bWFwIEZvbnRzIScsIDY0KTtcbiAgICAgICAgdGV4dC5zZXRUZXh0KCdCaXRtYXAgRm9udHMhXFxueDogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LngpICsgJyB5OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueSkpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGltYWdlIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgMCwgQXNzZXRLZXlzLklNQUdFKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBqc29uIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGpzb24gPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihBc3NldEtleXMuSlNPTik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMDAsIDEzMCwganNvbi50ZXN0LCB7ZmlsbDogXCIjZmZmZmZmXCJ9KTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBwaHlzaWNzIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuUDJKUyk7XG4gICAgICAgIGxldCBjb250cmEgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxMDAsIDIwMCwgQXNzZXRLZXlzLklNQUdFKTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKGNvbnRyYSwgUGhhc2VyLlBoeXNpY3MuUDJKUyk7XG4gICAgICAgIGNvbnRyYS5ib2R5LmxvYWRQb2x5Z29uKEFzc2V0S2V5cy5QSFlTSUNTLCAnY29udHJhMicsIGNvbnRyYSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gc2NyaXB0IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IG1vZHVsZSA9IG5ldyBTY3JpcHRUZXN0KCk7XG4gICAgICAgIG1vZHVsZS5wcmludChcImdhbWUubG9hZC5zY3JpcHQgd29ya2VkIVwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBzaGFkZXIgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgZmlsdGVyID0gbmV3IFBoYXNlci5GaWx0ZXIodGhpcy5nYW1lLCBudWxsLCB0aGlzLmdhbWUuY2FjaGUuZ2V0U2hhZGVyKEFzc2V0S2V5cy5TSEFERVIpKTtcbiAgICAgICAgZmlsdGVyLnNldFJlc29sdXRpb24oNDAwLCA2MDApO1xuXG4gICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgpO1xuICAgICAgICBzcHJpdGUueCA9IDUwMDtcbiAgICAgICAgc3ByaXRlLnkgPSAxNTA7XG4gICAgICAgIHNwcml0ZS53aWR0aCA9IDQwMDtcbiAgICAgICAgc3ByaXRlLmhlaWdodCA9IDYwMDtcblxuICAgICAgICBzcHJpdGUuZmlsdGVycyA9IFtmaWx0ZXJdO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHRleHQgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgaHRtbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRUZXh0KEFzc2V0S2V5cy5URVhUKTtcbiAgICAgICAgY29uc29sZS5sb2coaHRtbCk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gdGlsZW1hcCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBtYXAgPSB0aGlzLmdhbWUuYWRkLnRpbGVtYXAoQXNzZXRLZXlzLlRJTEVNQVApO1xuICAgICAgICBpZiAobWFwLmdldExheWVySW5kZXgoXCJzdXJmYWNlXCIpKSB7XG4gICAgICAgICAgICBtYXAuYWRkVGlsZXNldEltYWdlKEFzc2V0S2V5cy5TUFJJVEVTSEVFVCwgQXNzZXRLZXlzLlNQUklURVNIRUVULCA3MCwgNzApO1xuICAgICAgICAgICAgbGV0IGxheWVyID0gbWFwLmNyZWF0ZUxheWVyKFwic3VyZmFjZVwiKTtcbiAgICAgICAgICAgIGxheWVyLnJlc2l6ZVdvcmxkKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyAtLS0tLS0tLSB4bWwgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgeG1sID0gdGhpcy5nYW1lLmNhY2hlLmdldFhNTChBc3NldEtleXMuWE1MKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEwMCwgMTYwLCB4bWwuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MLCB7ZmlsbDogXCIjZmZmZmZmXCJ9KTtcbiAgICB9XG5cbiAgICB0ZXN0QXJyYXkoKSB7XG4gICAgICAgIC8vIC0tLS0tLS0tIGF0bGFzIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgMjAwLCBBc3NldEtleXMuQVRMQVNfMCwgXCJwMV9odXJ0XCIpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDIwLCAyMjAsIEFzc2V0S2V5cy5BVExBU18xLCBcInAxX2h1cnRcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXNKU09OQXJyYXkgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAzMDAsIEFzc2V0S2V5cy5BVExBU19KU09OX0FSUkFZLCBcInAxX2Zyb250XCIpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDIwLCAzMjAsIEFzc2V0S2V5cy5BVExBU19KU09OX0FSUkFZMSwgXCJwMV9mcm9udFwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBhdGxhc0pTT05IYXNoIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgNDAwLCBBc3NldEtleXMuQVRMQVNfSlNPTl9IQVNILCBcInAxX2R1Y2tcIik7XG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMjAsIDQyMCwgQXNzZXRLZXlzLkFUTEFTX0pTT05fSEFTSDEsIFwicDFfZHVja1wiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBhdGxhc1hNTCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDUwMCwgQXNzZXRLZXlzLkFUTEFTX1hNTCwgXCJib21iLnBuZ1wiKTtcblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgyMCwgNTIwLCBBc3NldEtleXMuQVRMQVNfWE1MMSwgXCJib21iLnBuZ1wiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBiaW5hcnkgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgYmluYXJ5ID0gdGhpcy5nYW1lLmNhY2hlLmdldEJpbmFyeShBc3NldEtleXMuQklOQVJZKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEwMCwgNTAwLCBcImJpbmFyeS5ieXRlTGVuZ3RoOiBcIiArIGJpbmFyeS5ieXRlTGVuZ3RoLCB7ZmlsbDogXCIjZmZmZmZmXCJ9KTtcblxuICAgICAgICBiaW5hcnkgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0QmluYXJ5KEFzc2V0S2V5cy5CSU5BUlkxKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEyMCwgNTIwLCBcImJpbmFyeS5ieXRlTGVuZ3RoOiBcIiArIGJpbmFyeS5ieXRlTGVuZ3RoLCB7ZmlsbDogXCIjZmZmZmZmXCJ9KTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBiaXRtYXBGb250IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcFRleHQoMjAwLCAxMDAsIEFzc2V0S2V5cy5CSVRNQVBfRk9OVCwgJ0JpdG1hcCBGb250cyEnLCA2NCk7XG4gICAgICAgIHRleHQuc2V0VGV4dCgnQml0bWFwIEZvbnRzIVxcbng6ICcgKyBNYXRoLnJvdW5kKHRoaXMuZ2FtZS5pbnB1dC54KSArICcgeTogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LnkpKTtcblxuICAgICAgICB0ZXh0ID0gdGhpcy5nYW1lLmFkZC5iaXRtYXBUZXh0KDIyMCwgMTIwLCBBc3NldEtleXMuQklUTUFQX0ZPTlQxLCAnQml0bWFwIEZvbnRzIScsIDY0KTtcbiAgICAgICAgdGV4dC5zZXRUZXh0KCdCaXRtYXAgRm9udHMhXFxueDogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LngpICsgJyB5OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueSkpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGltYWdlIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgMCwgQXNzZXRLZXlzLklNQUdFKTtcblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgyMCwgMjAsIEFzc2V0S2V5cy5JTUFHRTEpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGltYWdlcyAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDQwLCA0MCwgQXNzZXRLZXlzLklNQUdFMik7XG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoNjAsIDYwLCBBc3NldEtleXMuSU1BR0UzKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBqc29uIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGpzb24gPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihBc3NldEtleXMuSlNPTik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMDAsIDEzMCwganNvbi50ZXN0LCB7ZmlsbDogXCIjZmZmZmZmXCJ9KTtcblxuICAgICAgICBqc29uID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oQXNzZXRLZXlzLkpTT04xKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEyMCwgMTUwLCBqc29uLnRlc3QsIHtmaWxsOiBcIiNmZmZmZmZcIn0pO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHBoeXNpY3MgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5QMkpTKTtcblxuICAgICAgICBsZXQgY29udHJhID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMTAwLCAyMDAsIEFzc2V0S2V5cy5JTUFHRSk7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZShjb250cmEsIFBoYXNlci5QaHlzaWNzLlAySlMpO1xuICAgICAgICBjb250cmEuYm9keS5sb2FkUG9seWdvbihBc3NldEtleXMuUEhZU0lDUywgJ2NvbnRyYTInLCBjb250cmEpO1xuXG4gICAgICAgIGNvbnRyYSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDEyMCwgMjIwLCBBc3NldEtleXMuSU1BR0UxKTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKGNvbnRyYSwgUGhhc2VyLlBoeXNpY3MuUDJKUyk7XG4gICAgICAgIGNvbnRyYS5ib2R5LmxvYWRQb2x5Z29uKEFzc2V0S2V5cy5QSFlTSUNTMSwgJ2NvbnRyYTInLCBjb250cmEpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHNjcmlwdCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBtb2R1bGUgPSBuZXcgU2NyaXB0VGVzdCgpO1xuICAgICAgICBtb2R1bGUucHJpbnQoXCJnYW1lLmxvYWQuc2NyaXB0IHdvcmtlZCFcIik7XG5cbiAgICAgICAgbW9kdWxlID0gbmV3IFNjcmlwdFRlc3QxKCk7XG4gICAgICAgIG1vZHVsZS5wcmludChcImdhbWUubG9hZC5zY3JpcHQgd29ya2VkIGFnYWluIVwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBzaGFkZXIgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgZmlsdGVyID0gbmV3IFBoYXNlci5GaWx0ZXIodGhpcy5nYW1lLCBudWxsLCB0aGlzLmdhbWUuY2FjaGUuZ2V0U2hhZGVyKEFzc2V0S2V5cy5TSEFERVIpKTtcbiAgICAgICAgZmlsdGVyLnNldFJlc29sdXRpb24oNDAwLCA2MDApO1xuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoKTtcbiAgICAgICAgc3ByaXRlLnggPSA1MDA7XG4gICAgICAgIHNwcml0ZS55ID0gMTUwO1xuICAgICAgICBzcHJpdGUud2lkdGggPSA0MDA7XG4gICAgICAgIHNwcml0ZS5oZWlnaHQgPSA2MDA7XG4gICAgICAgIHNwcml0ZS5maWx0ZXJzID0gW2ZpbHRlcl07XG5cbiAgICAgICAgZmlsdGVyID0gbmV3IFBoYXNlci5GaWx0ZXIodGhpcy5nYW1lLCBudWxsLCB0aGlzLmdhbWUuY2FjaGUuZ2V0U2hhZGVyKEFzc2V0S2V5cy5TSEFERVIxKSk7XG4gICAgICAgIGZpbHRlci5zZXRSZXNvbHV0aW9uKDQwMCwgNjAwKTtcbiAgICAgICAgc3ByaXRlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoKTtcbiAgICAgICAgc3ByaXRlLnggPSA1MjA7XG4gICAgICAgIHNwcml0ZS55ID0gMTcwO1xuICAgICAgICBzcHJpdGUud2lkdGggPSA0MDA7XG4gICAgICAgIHNwcml0ZS5oZWlnaHQgPSA2MDA7XG4gICAgICAgIHNwcml0ZS5maWx0ZXJzID0gW2ZpbHRlcl07XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gdGV4dCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBodG1sID0gdGhpcy5nYW1lLmNhY2hlLmdldFRleHQoQXNzZXRLZXlzLlRFWFQpO1xuICAgICAgICBjb25zb2xlLmxvZyhodG1sKTtcblxuICAgICAgICBodG1sID0gdGhpcy5nYW1lLmNhY2hlLmdldFRleHQoQXNzZXRLZXlzLlRFWFQxKTtcbiAgICAgICAgY29uc29sZS5sb2coaHRtbCk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gdGlsZW1hcCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBtYXAgPSB0aGlzLmdhbWUuYWRkLnRpbGVtYXAoQXNzZXRLZXlzLlRJTEVNQVApO1xuICAgICAgICBpZiAobWFwLmdldExheWVySW5kZXgoXCJzdXJmYWNlXCIpKSB7XG4gICAgICAgICAgICBtYXAuYWRkVGlsZXNldEltYWdlKEFzc2V0S2V5cy5TUFJJVEVTSEVFVCwgQXNzZXRLZXlzLlNQUklURVNIRUVULCA3MCwgNzApO1xuICAgICAgICAgICAgbGV0IGxheWVyID0gbWFwLmNyZWF0ZUxheWVyKFwic3VyZmFjZVwiKTtcbiAgICAgICAgICAgIGxheWVyLnJlc2l6ZVdvcmxkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBtYXAgPSB0aGlzLmdhbWUuYWRkLnRpbGVtYXAoQXNzZXRLZXlzLlRJTEVNQVAxKTtcbiAgICAgICAgaWYgKG1hcC5nZXRMYXllckluZGV4KFwic3VyZmFjZVwiKSkge1xuICAgICAgICAgICAgbWFwLmFkZFRpbGVzZXRJbWFnZShBc3NldEtleXMuU1BSSVRFU0hFRVQsIEFzc2V0S2V5cy5TUFJJVEVTSEVFVCwgNzAsIDcwKTtcbiAgICAgICAgICAgIGxldCBsYXllciA9IG1hcC5jcmVhdGVMYXllcihcInN1cmZhY2VcIik7XG4gICAgICAgICAgICBsYXllci5yZXNpemVXb3JsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0geG1sIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IHhtbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRYTUwoQXNzZXRLZXlzLlhNTCk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMDAsIDE2MCwgeG1sLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCwge2ZpbGw6IFwiI2ZmZmZmZlwifSk7XG5cbiAgICAgICAgeG1sID0gdGhpcy5nYW1lLmNhY2hlLmdldFhNTChBc3NldEtleXMuWE1MMSk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMjAsIDE4MCwgeG1sLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCwge2ZpbGw6IFwiI2ZmZmZmZlwifSk7XG4gICAgfVxuXG4gICAgdGVzdEF0bGFzKCl7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDIwMCwgQXNzZXRLZXlzLkFUTEFTXzAsIFwicDFfaHVydFwiKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMjAsIDIyMCwgQXNzZXRLZXlzLkFUTEFTXzEsIFwicDFfaHVydFwiKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoNDAsIDI0MCwgQXNzZXRLZXlzLkFUTEFTXzIsIFwicDFfaHVydFwiKTtcbiAgICAgICAgbGV0IHRlc3QgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSg2MCwgMjYwLCBBc3NldEtleXMuQVRMQVNfMywgXCJwMV9odXJ0XCIpO1xuICAgICAgICBpZiAodGVzdC5kYXRhLnRlc3QgIT09IFwidGVzdFwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3QgZmFpbGVkIGZvciBcIiArIEFzc2V0S2V5cy5BVExBU18zKTtcbiAgICAgICAgfVxuICAgICAgICB0ZXN0ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoODAsIDI4MCwgQXNzZXRLZXlzLkFUTEFTXzQsIFwicDFfaHVydFwiKTtcbiAgICAgICAgaWYgKHRlc3QuZm9ybWF0ICE9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRlc3QgZmFpbGVkIGZvciBcIiArIEFzc2V0S2V5cy5BVExBU180KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRlc3RPYmplY3QoKSB7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXNKU09OQXJyYXkgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAzMDAsIEFzc2V0S2V5cy5BVExBU19KU09OX0FSUkFZLCBcInAxX2Zyb250XCIpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGF0bGFzSlNPTkhhc2ggLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCA0MDAsIEFzc2V0S2V5cy5BVExBU19KU09OX0hBU0gsIFwicDFfZHVja1wiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBhdGxhc1hNTCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDUwMCwgQXNzZXRLZXlzLkFUTEFTX1hNTCwgXCJib21iLnBuZ1wiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBhdWRpbyAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5zb3VuZC5wbGF5KEFzc2V0S2V5cy5BVURJTyk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXVkaW9TcHJpdGUgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgZnggPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKEFzc2V0S2V5cy5BVURJT19TUFJJVEUpO1xuICAgICAgICBmeC5hbGxvd011bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgZnguYWRkTWFya2VyKCdhbGllbiBkZWF0aCcsIDEsIDEuMCk7XG4gICAgICAgIGxldCBidXR0b24gPSB0aGlzLmdhbWUuYWRkLmJ1dHRvbigyMDAsIDUwMCwgQXNzZXRLZXlzLklNQUdFLCAoKSA9PiB7XG4gICAgICAgICAgICBmeC5wbGF5KCdhbGllbiBkZWF0aCcpO1xuICAgICAgICB9LCB0aGlzLCAwLCAxLCAyKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBiaW5hcnkgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgYmluYXJ5ID0gdGhpcy5nYW1lLmNhY2hlLmdldEJpbmFyeShBc3NldEtleXMuQklOQVJZKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEwMCwgNTAwLCBcImJpbmFyeS5ieXRlTGVuZ3RoOiBcIiArIGJpbmFyeS5ieXRlTGVuZ3RoLCB7ZmlsbDogXCIjZmZmZmZmXCJ9KTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBiaXRtYXBGb250IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcFRleHQoMjAwLCAxMDAsIEFzc2V0S2V5cy5CSVRNQVBfRk9OVCwgJ0JpdG1hcCBGb250cyEnLCA2NCk7XG4gICAgICAgIHRleHQuc2V0VGV4dCgnQml0bWFwIEZvbnRzIVxcbng6ICcgKyBNYXRoLnJvdW5kKHRoaXMuZ2FtZS5pbnB1dC54KSArICcgeTogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LnkpKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBpbWFnZSAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIEFzc2V0S2V5cy5JTUFHRSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gaW1hZ2VzIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoNTAwLCAtNTAsIEFzc2V0S2V5cy5JTUFHRTIpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGpzb24gLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQganNvbiA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKEFzc2V0S2V5cy5KU09OKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEwMCwgMTMwLCBqc29uLnRlc3QsIHtmaWxsOiBcIiNmZmZmZmZcIn0pO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHBhY2sgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLmltYWdlKDAsIDAsIEFzc2V0S2V5cy5JTUFHRTMpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHBoeXNpY3MgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5zdGFydFN5c3RlbShQaGFzZXIuUGh5c2ljcy5QMkpTKTtcbiAgICAgICAgbGV0IGNvbnRyYSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDEwMCwgMjAwLCBBc3NldEtleXMuSU1BR0UpO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoY29udHJhLCBQaGFzZXIuUGh5c2ljcy5QMkpTKTtcbiAgICAgICAgY29udHJhLmJvZHkubG9hZFBvbHlnb24oQXNzZXRLZXlzLlBIWVNJQ1MsICdjb250cmEyJywgY29udHJhKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBzY3JpcHQgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgbW9kdWxlID0gbmV3IFNjcmlwdFRlc3QoKTtcbiAgICAgICAgbW9kdWxlLnByaW50KFwiZ2FtZS5sb2FkLnNjcmlwdCB3b3JrZWQhXCIpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHNoYWRlciAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBmaWx0ZXIgPSBuZXcgUGhhc2VyLkZpbHRlcih0aGlzLmdhbWUsIG51bGwsIHRoaXMuZ2FtZS5jYWNoZS5nZXRTaGFkZXIoQXNzZXRLZXlzLlNIQURFUikpO1xuICAgICAgICBmaWx0ZXIuc2V0UmVzb2x1dGlvbig0MDAsIDYwMCk7XG5cbiAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKCk7XG4gICAgICAgIHNwcml0ZS54ID0gNTAwO1xuICAgICAgICBzcHJpdGUueSA9IDE1MDtcbiAgICAgICAgc3ByaXRlLndpZHRoID0gNDAwO1xuICAgICAgICBzcHJpdGUuaGVpZ2h0ID0gNjAwO1xuXG4gICAgICAgIHNwcml0ZS5maWx0ZXJzID0gW2ZpbHRlcl07XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gc3ByaXRlc2hlZXQgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgc3ByaXRlc2hlZXQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAxMzAsIEFzc2V0S2V5cy5TUFJJVEVTSEVFVCk7XG4gICAgICAgIHNwcml0ZXNoZWV0LmFuaW1hdGlvbnMuYWRkKFwiYW5pbVwiKTtcbiAgICAgICAgc3ByaXRlc2hlZXQuYW5pbWF0aW9ucy5wbGF5KFwiYW5pbVwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSB0ZXh0IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0VGV4dChBc3NldEtleXMuVEVYVCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGh0bWwpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHRpbGVtYXAgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgbWFwID0gdGhpcy5nYW1lLmFkZC50aWxlbWFwKEFzc2V0S2V5cy5USUxFTUFQKTtcbiAgICAgICAgaWYgKG1hcC5nZXRMYXllckluZGV4KFwic3VyZmFjZVwiKSkge1xuICAgICAgICAgICAgbWFwLmFkZFRpbGVzZXRJbWFnZShBc3NldEtleXMuU1BSSVRFU0hFRVQsIEFzc2V0S2V5cy5TUFJJVEVTSEVFVCwgNzAsIDcwKTtcbiAgICAgICAgICAgIGxldCBsYXllciA9IG1hcC5jcmVhdGVMYXllcihcInN1cmZhY2VcIik7XG4gICAgICAgICAgICBsYXllci5yZXNpemVXb3JsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gdmlkZW8gLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgdmlkZW8gPSB0aGlzLmdhbWUuYWRkLnZpZGVvKEFzc2V0S2V5cy5WSURFTyk7XG4gICAgICAgIHZpZGVvLnBsYXkodHJ1ZSk7XG4gICAgICAgIHZpZGVvLmFkZFRvV29ybGQoMjAwLCAyMDAsIDAsIDAsIDAuMywgMC4zKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSB4bWwgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgeG1sID0gdGhpcy5nYW1lLmNhY2hlLmdldFhNTChBc3NldEtleXMuWE1MKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEwMCwgMTYwLCB4bWwuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MLCB7ZmlsbDogXCIjZmZmZmZmXCJ9KTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXlTdGF0ZTtcbiJdfQ==
