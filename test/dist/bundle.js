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
     * @param {json} data - The loaded json. You will have to load the json for
     *     this file manually but everything else can load from the
     *     AssetLoader.
     */
    function AssetLoader(game, data) {
        _classCallCheck(this, AssetLoader);

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

    _createClass(AssetLoader, [{
        key: "loadBaseURL",
        value: function loadBaseURL(data) {
            if (typeof data === "string") {
                this.game.load.baseURL = data;
            }
        }

        // -------- crossOrigin -------- //

    }, {
        key: "loadCrossOrigin",
        value: function loadCrossOrigin(data) {
            if (typeof data === "string" || typeof data === "boolean") {
                this.game.load.crossOrigin = data;
            }
        }

        // -------- enableParallel -------- //

    }, {
        key: "loadEnableParallel",
        value: function loadEnableParallel(data) {
            if (typeof data === "boolean") {
                this.game.load.enableParallel = data;
            }
        }

        // -------- path -------- //

    }, {
        key: "loadPath",
        value: function loadPath(data) {
            if (typeof data === "string") {
                this.game.load.path = data;
            }
        }

        // -------- resetLocked -------- //

    }, {
        key: "loadResetLocked",
        value: function loadResetLocked(data) {
            if (typeof data === "boolean") {
                this.game.load.resetLocked = data;
            }
        }

        // -------- atlas -------- //

    }, {
        key: "loadAtlas",
        value: function loadAtlas(data) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var paramA = void 0;
            var paramB = void 0;
            var paramC = void 0;
            var paramD = void 0;
            if (typeof data === "string") {
                this.game.load.atlas(data);
            } else if (Array.isArray(data)) {
                for (i = 0; i < data.length; i++) {
                    if (typeof data[i] === "string") {
                        this.game.load.atlas(data[i]);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.atlas(key);
                    } else {
                        paramA = value.hasOwnProperty("textureURL") ? value["textureURL"] : null;
                        paramB = value.hasOwnProperty("atlasURL") ? value["atlasURL"] : null;
                        paramC = value.hasOwnProperty("atlasData") ? value["atlasData"] : null;
                        paramD = value.hasOwnProperty("format") ? value["format"] : Phaser.Loader.TEXTURE_ATLAS_JSON_ARRAY;
                        this.game.load.atlas(key, paramA, paramB, paramC, paramD);
                    }
                }
            }
        }

        // -------- atlasJSONArray -------- //

    }, {
        key: "loadAtlasJSONArray",
        value: function loadAtlasJSONArray(data) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var paramA = void 0;
            var paramB = void 0;
            var paramC = void 0;
            if (typeof data === "string") {
                this.game.load.atlasJSONArray(data);
            } else if (Array.isArray(data)) {
                for (i = 0; i < data.length; i++) {
                    if (typeof data[i] === "string") {
                        this.game.load.atlasJSONArray(data[i]);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.atlasJSONArray(key);
                    } else {
                        paramA = value.hasOwnProperty("textureURL") ? value["textureURL"] : null;
                        paramB = value.hasOwnProperty("atlasURL") ? value["atlasURL"] : null;
                        paramC = value.hasOwnProperty("atlasData") ? value["atlasData"] : null;
                        this.game.load.atlasJSONArray(key, paramA, paramB, paramC);
                    }
                }
            }
        }

        // -------- atlasJSONHash -------- //

    }, {
        key: "loadAtlasJSONHash",
        value: function loadAtlasJSONHash(data) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var paramA = void 0;
            var paramB = void 0;
            var paramC = void 0;
            if (typeof data === "string") {
                this.game.load.atlasJSONHash(data);
            } else if (Array.isArray(data)) {
                for (i = 0; i < data.length; i++) {
                    if (typeof data[i] === "string") {
                        this.game.load.atlasJSONHash(data[i]);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.atlasJSONHash(key);
                    } else {
                        paramA = value.hasOwnProperty("textureURL") ? value["textureURL"] : null;
                        paramB = value.hasOwnProperty("atlasURL") ? value["atlasURL"] : null;
                        paramC = value.hasOwnProperty("atlasData") ? value["atlasData"] : null;
                        this.game.load.atlasJSONHash(key, paramA, paramB, paramC);
                    }
                }
            }
        }

        // -------- atlasXML -------- //

    }, {
        key: "loadAtlasXML",
        value: function loadAtlasXML(data) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var paramA = void 0;
            var paramB = void 0;
            var paramC = void 0;
            if (typeof data === "string") {
                this.game.load.atlasXML(data);
            } else if (Array.isArray(data)) {
                for (i = 0; i < data.length; i++) {
                    if (typeof data[i] === "string") {
                        this.game.load.atlasXML(data[i]);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.atlasXML(key);
                    } else {
                        paramA = value.hasOwnProperty("textureURL") ? value["textureURL"] : null;
                        paramB = value.hasOwnProperty("atlasURL") ? value["atlasURL"] : null;
                        paramC = value.hasOwnProperty("atlasData") ? value["atlasData"] : null;
                        this.game.load.atlasXML(key, paramA, paramB, paramC);
                    }
                }
            }
        }

        // -------- audio -------- //

    }, {
        key: "loadAudio",
        value: function loadAudio(data) {
            var key = void 0;
            var value = void 0;
            var paramA = void 0;
            var paramB = void 0;
            for (key in data) {
                value = data[key];
                if (typeof value === "string" || Array.isArray(value)) {
                    this.game.load.audio(key, value);
                } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                    paramA = value.hasOwnProperty("urls") ? value["urls"] : null;
                    paramB = value.hasOwnProperty("autoDecode") ? value["autoDecode"] : true;
                    this.game.load.audio(key, paramA, paramB);
                }
            }
        }

        // -------- audioSprite -------- //

    }, {
        key: "loadAudioSprite",
        value: function loadAudioSprite(data) {
            var key = void 0;
            var value = void 0;
            var paramA = void 0;
            var paramB = void 0;
            var paramC = void 0;
            var paramD = void 0;
            for (key in data) {
                value = data[key];
                //todo have to have jsonURL or jsonData
                if (typeof value === "string" || Array.isArray(value)) {
                    this.game.load.audioSprite(key, value);
                } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                    paramA = value.hasOwnProperty("urls") ? value["urls"] : null;
                    paramB = value.hasOwnProperty("jsonURL") ? value["jsonURL"] : null;
                    paramC = value.hasOwnProperty("jsonData") ? value["jsonData"] : null;
                    paramD = value.hasOwnProperty("autoDecode") ? value["autoDecode"] : true;
                    this.game.load.audioSprite(key, paramA, paramB, paramC, paramD);
                }
            }
        }

        // -------- binary -------- //

    }, {
        key: "loadBinary",
        value: function loadBinary(data) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            if (typeof data === "string") {
                this.game.load.binary(data);
            } else if (Array.isArray(data)) {
                for (i = 0; i < data.length; i++) {
                    if (typeof data[i] === "string") {
                        this.game.load.binary(data[i]);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.binary(key);
                    } else if (typeof value === "string") {
                        this.game.load.binary(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        if (value.hasOwnProperty("url")) {
                            this.game.load.binary(key, value["url"]);
                        }
                    }
                }
            }
        }

        // -------- bitmapFont -------- //

    }, {
        key: "loadBitmapFont",
        value: function loadBitmapFont(data) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var paramA = void 0;
            var paramB = void 0;
            var paramC = void 0;
            var paramD = void 0;
            var paramE = void 0;
            if (typeof data === "string") {
                this.game.load.bitmapFont(data);
            } else if (Array.isArray(data)) {
                for (i = 0; i < data.length; i++) {
                    if (typeof data[i] === "string") {
                        this.game.load.bitmapFont(data[i]);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.bitmapFont(key);
                    } else {
                        paramA = value.hasOwnProperty("textureURL") ? value["textureURL"] : null;
                        paramB = value.hasOwnProperty("atlasURL") ? value["atlasURL"] : null;
                        paramC = value.hasOwnProperty("atlasData") ? value["atlasData"] : null;
                        paramD = value.hasOwnProperty("xSpacing") ? value["xSpacing"] : 0;
                        paramE = value.hasOwnProperty("ySpacing") ? value["ySpacing"] : 0;
                        this.game.load.bitmapFont(key, paramA, paramB, paramC, paramD, paramE);
                    }
                }
            }
        }

        // -------- image -------- //

    }, {
        key: "loadImage",
        value: function loadImage(data) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var paramA = void 0;
            var paramB = void 0;
            if (typeof data === "string") {
                this.game.load.image(data);
            } else if (Array.isArray(data)) {
                for (i = 0; i < data.length; i++) {
                    if (typeof data[i] === "string") {
                        this.game.load.image(data[i]);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.image(key);
                    } else if (typeof value === "string") {
                        this.game.load.image(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        paramA = value.hasOwnProperty("url") ? value["url"] : key + ".png";
                        paramB = value.hasOwnProperty("overwrite") ? value["overwrite"] : false;
                        this.game.load.image(key, paramA, paramB);
                    }
                }
            }
        }

        // -------- images -------- //

    }, {
        key: "loadImages",
        value: function loadImages(data) {
            var key = void 0;
            var i = void 0;
            var paramA = void 0;
            var paramB = void 0;
            if (Array.isArray(data)) {
                if (typeof data[0] === "string") {
                    this.game.load.images(data);
                } else if (_typeof(data[0]) === "object") {
                    for (i = 0; i < data.length; i++) {
                        key = data[i];
                        paramA = key.hasOwnProperty("keys") ? key["keys"] : null;
                        paramB = key.hasOwnProperty("urls") ? key["urls"] : false;
                        this.game.load.images(key, paramA, paramB);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                paramA = data.hasOwnProperty("keys") ? data["keys"] : null;
                paramB = data.hasOwnProperty("urls") ? data["urls"] : false;
                this.game.load.images(key, paramA, paramB);
            }
        }

        // -------- json -------- //

    }, {
        key: "loadJSON",
        value: function loadJSON(data) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var paramA = void 0;
            var paramB = void 0;
            if (typeof data === "string") {
                this.game.load.json(data);
            } else if (Array.isArray(data)) {
                for (i = 0; i < data.length; i++) {
                    if (typeof data[i] === "string") {
                        this.game.load.json(data[i]);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.json(key);
                    } else if (typeof value === "string") {
                        this.game.load.json(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        paramA = value.hasOwnProperty("url") ? value["url"] : key + ".json";
                        paramB = value.hasOwnProperty("overwrite") ? value["overwrite"] : false;
                        this.game.load.json(key, paramA, paramB);
                    }
                }
            }
        }

        // -------- pack -------- //

    }, {
        key: "loadPack",
        value: function loadPack(data) {
            var key = void 0;
            var value = void 0;
            for (key in data) {
                value = data[key];
                if (typeof value === "string") {
                    this.game.load.pack(key, value);
                }
                // todo either or thing again with url or data
                else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        paramA = value.hasOwnProperty("url") ? value["url"] : key + ".json";
                        paramB = value.hasOwnProperty("data") ? value["data"] : null;
                        this.game.load.physics(key, paramA, paramB);
                    }
            }
        }

        // -------- physics -------- //

    }, {
        key: "loadPhysics",
        value: function loadPhysics(data) {
            var key = void 0;
            var value = void 0;
            var paramA = void 0;
            var paramB = void 0;
            var paramC = void 0;
            if (typeof data === "string") {
                this.game.load.physics(data);
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.physics(key);
                    } else if (typeof value === "string") {
                        this.game.load.physics(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        paramA = value.hasOwnProperty("url") ? value["url"] : key + ".json";
                        paramB = value.hasOwnProperty("data") ? value["data"] : null;
                        paramC = value.hasOwnProperty("format") ? value["format"] : Phaser.Physics.LIME_CORONA_JSON;
                        this.game.load.physics(key, paramA, paramB, paramC);
                    }
                }
            }
        }

        // -------- script -------- //

    }, {
        key: "loadScript",
        value: function loadScript(data) {
            var key = void 0;
            var value = void 0;
            var paramA = void 0;
            if (typeof data === "string") {
                this.game.load.script(data);
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.script(key);
                    } else if (typeof value === "string") {
                        this.game.load.script(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        paramA = value.hasOwnProperty("url") ? value["url"] : key + ".js";
                        this.game.load.script(key, paramA);
                    }
                }
            }
        }

        // -------- shader -------- //

    }, {
        key: "loadShader",
        value: function loadShader(data) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var paramA = void 0;
            var paramB = void 0;
            if (typeof data === "string") {
                this.game.load.shader(data);
            } else if (Array.isArray(data)) {
                for (i = 0; i < data.length; i++) {
                    if (typeof data[i] === "string") {
                        this.game.load.shader(data[i]);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.shader(key);
                    } else if (typeof value === "string") {
                        this.game.load.shader(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        paramA = value.hasOwnProperty("url") ? value["url"] : key + ".frag";
                        paramB = value.hasOwnProperty("overwrite") ? value["overwrite"] : false;
                        this.game.load.shader(key, paramA, paramB);
                    }
                }
            }
        }

        // -------- spritesheet -------- //

    }, {
        key: "loadSpritesheet",
        value: function loadSpritesheet(data) {
            var key = void 0;
            var value = void 0;
            var paramA = void 0;
            var paramB = void 0;
            var paramC = void 0;
            var paramD = void 0;
            var paramE = void 0;
            var paramF = void 0;
            for (key in data) {
                value = data[key];
                paramA = value.hasOwnProperty("url") ? value["url"] : key + ".png";
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
                paramD = value.hasOwnProperty("frameMax") ? value["frameMax"] : -1;
                paramE = value.hasOwnProperty("margin") ? value["margin"] : 0;
                paramF = value.hasOwnProperty("spacing") ? value["spacing"] : 0;
                this.game.load.spritesheet(key, paramA, paramB, paramC, paramD, paramE, paramF);
            }
        }

        // -------- text -------- //

    }, {
        key: "loadText",
        value: function loadText(data) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var paramA = void 0;
            var paramB = void 0;
            if (typeof data === "string") {
                this.game.load.text(data);
            } else if (Array.isArray(data)) {
                for (i = 0; i < data.length; i++) {
                    if (typeof data[i] === "string") {
                        this.game.load.text(data[i]);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.text(key);
                    } else if (typeof value === "string") {
                        this.game.load.text(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        paramA = value.hasOwnProperty("url") ? value["url"] : key + ".txt";
                        paramB = value.hasOwnProperty("overwrite") ? value["overwrite"] : false;
                        this.game.load.text(key, paramA, paramB);
                    }
                }
            }
        }

        // -------- tilemap -------- //

    }, {
        key: "loadTilemap",
        value: function loadTilemap(data) {
            var key = void 0;
            var value = void 0;
            var paramA = void 0;
            var paramB = void 0;
            var paramC = void 0;
            if (typeof data === "string") {
                this.game.load.tilemap(data);
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.tilemap(key);
                    } else if (typeof value === "string") {
                        this.game.load.tilemap(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        paramA = value.hasOwnProperty("url") ? value["url"] : key + ".json";
                        paramB = value.hasOwnProperty("data") ? value["data"] : null;
                        paramC = value.hasOwnProperty("format") ? value["format"] : Phaser.Tilemap.CSV;
                        this.game.load.tilemap(key, paramA, paramB, paramC);
                    }
                }
            }
        }

        // -------- video -------- //

    }, {
        key: "loadVideo",
        value: function loadVideo(data) {
            var key = void 0;
            var value = void 0;
            var paramA = void 0;
            var paramB = void 0;
            var paramC = void 0;
            if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (typeof value === "string" || Array.isArray(value)) {
                        this.game.load.video(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        paramA = value.hasOwnProperty("urls") ? value["urls"] : null;
                        paramB = value.hasOwnProperty("loadEvent") ? value["loadEvent"] : "canplaythrough";
                        paramC = value.hasOwnProperty("asBlob") ? value["asBlob"] : false;
                        this.game.load.video(key, paramA, paramB, paramC);
                    }
                }
            }
        }

        // -------- xml -------- //

    }, {
        key: "loadXML",
        value: function loadXML(data) {
            var key = void 0;
            var value = void 0;
            var i = void 0;
            var paramA = void 0;
            var paramB = void 0;
            if (typeof data === "string") {
                this.game.load.xml(data);
            } else if (Array.isArray(data)) {
                for (i = 0; i < data.length; i++) {
                    if (typeof data[i] === "string") {
                        this.game.load.xml(data[i]);
                    }
                }
            } else if ((typeof data === "undefined" ? "undefined" : _typeof(data)) === "object") {
                for (key in data) {
                    value = data[key];
                    if (!value) {
                        // if value is undefined, null, false, 0, nan, ""
                        this.game.load.xml(key);
                    } else if (typeof value === "string") {
                        this.game.load.xml(key, value);
                    } else if ((typeof value === "undefined" ? "undefined" : _typeof(value)) === "object") {
                        paramA = value.hasOwnProperty("url") ? value["url"] : key + ".xml";
                        paramB = value.hasOwnProperty("overwrite") ? value["overwrite"] : false;
                        this.game.load.xml(key, paramA, paramB);
                    }
                }
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
 * Created by gradley on 12/25/2016.
 */

/**
 * Constants matching assets.json.
 */
var AssetKeys = function AssetKeys() {
    _classCallCheck(this, AssetKeys);
};

Object.defineProperties(AssetKeys, {
    "ASSETS_JSON": {
        value: {
            "key": "assets",
            "path": "data/version1/assets.json"
        }
    },
    "PRELOAD_SPRITE": {
        value: "imageTest"
    },
    "ATLAS": {
        value: "atlasTest"
    },
    "ATLAS_JSON_ARRAY": {
        value: "atlasJSONArrayTest"
    },
    "ATLAS_JSON_HASH": {
        value: "atlasJSONHashTest"
    },
    "ATLAS_XML": {
        value: "atlasXMLTest"
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
    "BITMAP_FONT": {
        value: "bitmapFontTest"
    },
    "IMAGE": {
        value: "imageTest"
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
    "PHYSICS": {
        value: "physicsTest"
    },
    "SCRIPT": {
        value: "Protractor"
    },
    "SHADER": {
        value: "shaderTest"
    },
    "SPRITESHEET": {
        value: "spritesheetTest"
    },
    "TEXT": {
        value: "textTest"
    },
    "TILEMAP": {
        value: "tilemapTest"
    },
    "VIDEO": {
        value: "videoTest"
    },
    "XML": {
        value: "xmlTest"
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by gradley on 12/26/2016.
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
      this.game.load.json(_AssetKeys2.default.ASSETS_JSON.key, _AssetKeys2.default.ASSETS_JSON.path);
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
 * Created by Genell Radley on 12/1/16.
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

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 800, 600, Phaser.AUTO));

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
 * Created by gradley on 12/24/2016.
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
    "ASSETS_JSON": {
        value: {
            "key": "assets",
            "path": "data/assets.json"
        }
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Genell Radley on 12/2/16.
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
            new _AssetLoader2.default(this.game, this.game.cache.getJSON(_AssetKeys2.default.ASSETS_JSON.key));

            this._loadingMsg = "Loading... ";
            this._text = this.game.add.text(0, 0, this._loadingMsg, { fill: "#ffffff" });
            this._text.x = (this.game.width - this._text.width) / 2;
            this._text.y = this.game.height - this._text.height;

            this.game.load.onFileComplete.add(this.onFileLoaded, this);
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
        key: "onFileLoaded",
        value: function onFileLoaded(progress, cacheKey, success, totalLoaded, totalFiles) {
            this._text.text = this._loadingMsg + progress + "%";

            if (progress === 100) {
                this._text.text = "Loaded";
            }

            if (success && cacheKey === _AssetKeys2.default.PRELOAD_SPRITE) {
                var preloadbar = this.game.add.sprite(0, 0, _AssetKeys2.default.PRELOAD_SPRITE);
                preloadbar.x = (this.game.width - preloadbar.width) / 2;
                preloadbar.y = (this.game.height - preloadbar.height) / 2;
                this.game.load.setPreloadSprite(preloadbar);
            }
        }
    }, {
        key: "onLoadComplete",
        value: function onLoadComplete() {
            this.game.load.onFileComplete.remove(this.onFileLoaded, this);
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by Genell Radley on 12/2/16.
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

            // -------- atlas -------- //

            this.game.add.sprite(0, 200, _AssetKeys2.default.ATLAS, "p1_hurt");

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

},{"./AssetKeys":2}]},{},[2,3,4,5,6,7])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJsaWIvQXNzZXRMb2FkZXIuanMiLCJzcmMvQXNzZXRLZXlzLmpzIiwic3JjL0Jvb3RTdGF0ZS5qcyIsInNyYy9HYW1lLmpzIiwic3JjL0dhbWVLZXlzLmpzIiwic3JjL0xvYWRTdGF0ZS5qcyIsInNyYy9QbGF5U3RhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUlBOzs7Ozs7Ozs7Ozs7Ozs7O0lBZ0JNLFc7O0FBRUY7Ozs7Ozs7QUFPQSx5QkFBWSxJQUFaLEVBQWtCLElBQWxCLEVBQXdCO0FBQUE7O0FBQ3BCLGFBQUssSUFBTCxHQUFZLElBQVo7O0FBRUEsYUFBSyxXQUFMLENBQWlCLEtBQUssT0FBdEI7QUFDQSxhQUFLLGVBQUwsQ0FBcUIsS0FBSyxXQUExQjtBQUNBLGFBQUssa0JBQUwsQ0FBd0IsS0FBSyxjQUE3QjtBQUNBLGFBQUssUUFBTCxDQUFjLEtBQUssSUFBbkI7QUFDQSxhQUFLLGVBQUwsQ0FBcUIsS0FBSyxXQUExQjtBQUNBLGFBQUssU0FBTCxDQUFlLEtBQUssS0FBcEI7QUFDQSxhQUFLLGtCQUFMLENBQXdCLEtBQUssY0FBN0I7QUFDQSxhQUFLLGlCQUFMLENBQXVCLEtBQUssYUFBNUI7QUFDQSxhQUFLLFlBQUwsQ0FBa0IsS0FBSyxRQUF2QjtBQUNBLGFBQUssU0FBTCxDQUFlLEtBQUssS0FBcEI7QUFDQSxhQUFLLGVBQUwsQ0FBcUIsS0FBSyxXQUExQjtBQUNBLGFBQUssVUFBTCxDQUFnQixLQUFLLE1BQXJCO0FBQ0EsYUFBSyxjQUFMLENBQW9CLEtBQUssVUFBekI7QUFDQSxhQUFLLFNBQUwsQ0FBZSxLQUFLLEtBQXBCO0FBQ0EsYUFBSyxVQUFMLENBQWdCLEtBQUssTUFBckI7QUFDQSxhQUFLLFFBQUwsQ0FBYyxLQUFLLElBQW5CO0FBQ0EsYUFBSyxRQUFMLENBQWMsS0FBSyxJQUFuQjtBQUNBLGFBQUss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QVUsR0FBVixDQUFjLEtBQWQsQ0FBb0Isb0JBQVUsS0FBOUIsQ0FBWjtBQUNBLGtCQUFNLElBQU4sQ0FBVyxJQUFYO0FBQ0Esa0JBQU0sVUFBTixDQUFpQixHQUFqQixFQUFzQixHQUF0QixFQUEyQixDQUEzQixFQUE4QixDQUE5QixFQUFpQyxHQUFqQyxFQUFzQyxHQUF0Qzs7QUFFQTs7QUFFQSxnQkFBSSxNQUFNLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBZ0IsTUFBaEIsQ0FBdUIsb0JBQVUsR0FBakMsQ0FBVjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsSUFBZCxDQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QixJQUFJLGlCQUFKLENBQXNCLGlCQUF0QixDQUF3QyxTQUFyRSxFQUFnRixFQUFDLE1BQU0sU0FBUCxFQUFoRjtBQUNIOzs7O0VBbkhtQixPQUFPLEs7O2tCQXNIaEIsUyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKipcbiAqIENyZWF0ZWQgYnkgZ3JhZGxleSBvbiAxMi8yNS8yMDE2LlxuICovXG5cbi8qKlxuICogV2lsbCBsb2FkIGFzc2V0cyBmcm9tIGEganNvbiBmaWxlLlxuICpcbiAqIGh0dHBzOi8vcGhhc2VyLmlvL2RvY3MvMi42LjIvUGhhc2VyLkxvYWRlci5odG1sXG4gKlxuICogVGhlcmUgYXJlIHNvbWUgUGhhc2VyLkxvYWRlciB0aGF0IHRha2UgaW4gYSBjYWxsYmFjayBhbmQvb3IgY2FsbGJhY2tDb250ZXh0LlxuICogVGhlc2UgYXJlOiBiaW5hcnksIHBhY2ssIHNjcmlwdCwgd2l0aFN5bmNQb2ludHNcbiAqIElmIHlvdSB3YW50IHRvIHVzZSB0aGVzZSBsb2FkZXJzIHdpdGggY2FsbGJhY2tzLCB5b3UnbGwgaGF2ZSB0byBkbyBpdCBmcm9tXG4gKiBjb2RlLCBub3QganNvbi5cbiAqXG4gKiBZb3UgY2FuIHNldCB0aGUgdmFsdWUgdG8gZWl0aGVyIHRoZSBkZWZhdWx0IGRhdGF0eXBlIG9yIGFuIG9iamVjdCB3aXRoIHRoZVxuICogcGFyYW1ldGVycyB5b3Ugd2FudCB0byBzZXQuXG4gKlxuICogVE9ETzogZm9yIGpzb24gZGF0YSwgaGF2ZSB0byBwdXQgdGhlIGpzb24gb2JqZWN0IGluIHRoZSBhc3NldHMuanNvbiwgY2FuJ3RcbiAqIHJlZmVyZW5jZSBhbm90aGVyIGpzb24gYmVjYXVzZSBpdCB3b24ndCBiZSBsb2FkZWQgeWV0LlxuICovXG5jbGFzcyBBc3NldExvYWRlciB7XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBpbiBwcm9wZXJseSBmb3JtYXR0ZWQganNvbiBmb3IgYXNzZXQgbG9hZGluZy5cbiAgICAgKiBAcGFyYW0ge1BoYXNlci5HYW1lfSBnYW1lIC0gQSByZWZlcmVuY2UgdG8gdGhlIGN1cnJlbnRseSBydW5uaW5nIGdhbWUuXG4gICAgICogQHBhcmFtIHtqc29ufSBkYXRhIC0gVGhlIGxvYWRlZCBqc29uLiBZb3Ugd2lsbCBoYXZlIHRvIGxvYWQgdGhlIGpzb24gZm9yXG4gICAgICogICAgIHRoaXMgZmlsZSBtYW51YWxseSBidXQgZXZlcnl0aGluZyBlbHNlIGNhbiBsb2FkIGZyb20gdGhlXG4gICAgICogICAgIEFzc2V0TG9hZGVyLlxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKGdhbWUsIGRhdGEpIHtcbiAgICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcblxuICAgICAgICB0aGlzLmxvYWRCYXNlVVJMKGRhdGEuYmFzZVVSTCk7XG4gICAgICAgIHRoaXMubG9hZENyb3NzT3JpZ2luKGRhdGEuY3Jvc3NPcmlnaW4pO1xuICAgICAgICB0aGlzLmxvYWRFbmFibGVQYXJhbGxlbChkYXRhLmVuYWJsZVBhcmFsbGVsKTtcbiAgICAgICAgdGhpcy5sb2FkUGF0aChkYXRhLnBhdGgpO1xuICAgICAgICB0aGlzLmxvYWRSZXNldExvY2tlZChkYXRhLnJlc2V0TG9ja2VkKTtcbiAgICAgICAgdGhpcy5sb2FkQXRsYXMoZGF0YS5hdGxhcyk7XG4gICAgICAgIHRoaXMubG9hZEF0bGFzSlNPTkFycmF5KGRhdGEuYXRsYXNKU09OQXJyYXkpO1xuICAgICAgICB0aGlzLmxvYWRBdGxhc0pTT05IYXNoKGRhdGEuYXRsYXNKU09OSGFzaCk7XG4gICAgICAgIHRoaXMubG9hZEF0bGFzWE1MKGRhdGEuYXRsYXNYTUwpO1xuICAgICAgICB0aGlzLmxvYWRBdWRpbyhkYXRhLmF1ZGlvKTtcbiAgICAgICAgdGhpcy5sb2FkQXVkaW9TcHJpdGUoZGF0YS5hdWRpb1Nwcml0ZSk7XG4gICAgICAgIHRoaXMubG9hZEJpbmFyeShkYXRhLmJpbmFyeSk7XG4gICAgICAgIHRoaXMubG9hZEJpdG1hcEZvbnQoZGF0YS5iaXRtYXBGb250KTtcbiAgICAgICAgdGhpcy5sb2FkSW1hZ2UoZGF0YS5pbWFnZSk7XG4gICAgICAgIHRoaXMubG9hZEltYWdlcyhkYXRhLmltYWdlcyk7XG4gICAgICAgIHRoaXMubG9hZEpTT04oZGF0YS5qc29uKTtcbiAgICAgICAgdGhpcy5sb2FkUGFjayhkYXRhLnBhY2spO1xuICAgICAgICB0aGlzLmxvYWRQaHlzaWNzKGRhdGEucGh5c2ljcyk7XG4gICAgICAgIHRoaXMubG9hZFNjcmlwdChkYXRhLnNjcmlwdCk7XG4gICAgICAgIHRoaXMubG9hZFNoYWRlcihkYXRhLnNoYWRlcik7XG4gICAgICAgIHRoaXMubG9hZFNwcml0ZXNoZWV0KGRhdGEuc3ByaXRlc2hlZXQpO1xuICAgICAgICB0aGlzLmxvYWRUZXh0KGRhdGEudGV4dCk7XG4gICAgICAgIHRoaXMubG9hZFRpbGVtYXAoZGF0YS50aWxlbWFwKTtcbiAgICAgICAgdGhpcy5sb2FkVmlkZW8oZGF0YS52aWRlbyk7XG4gICAgICAgIHRoaXMubG9hZFhNTChkYXRhLnhtbCk7XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0gYmFzZVVSTCAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZEJhc2VVUkwoZGF0YSkge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmJhc2VVUkwgPSBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0gY3Jvc3NPcmlnaW4gLS0tLS0tLS0gLy9cblxuICAgIGxvYWRDcm9zc09yaWdpbihkYXRhKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGF0YSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmNyb3NzT3JpZ2luID0gZGF0YTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIGVuYWJsZVBhcmFsbGVsIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkRW5hYmxlUGFyYWxsZWwoZGF0YSkge1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5lbmFibGVQYXJhbGxlbCA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBwYXRoIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkUGF0aChkYXRhKSB7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQucGF0aCA9IGRhdGE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSByZXNldExvY2tlZCAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZFJlc2V0TG9ja2VkKGRhdGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQucmVzZXRMb2NrZWQgPSBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0gYXRsYXMgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRBdGxhcyhkYXRhKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBwYXJhbUE7XG4gICAgICAgIGxldCBwYXJhbUI7XG4gICAgICAgIGxldCBwYXJhbUM7XG4gICAgICAgIGxldCBwYXJhbUQ7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbaV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyB1bmRlZmluZWQsIG51bGwsIGZhbHNlLCAwLCBuYW4sIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoa2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUEgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ0ZXh0dXJlVVJMXCIpKSA/IHZhbHVlW1widGV4dHVyZVVSTFwiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQiA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImF0bGFzVVJMXCIpKSA/IHZhbHVlW1wiYXRsYXNVUkxcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUMgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJhdGxhc0RhdGFcIikpID8gdmFsdWVbXCJhdGxhc0RhdGFcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUQgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJmb3JtYXRcIikpID8gdmFsdWVbXCJmb3JtYXRcIl0gOiBQaGFzZXIuTG9hZGVyLlRFWFRVUkVfQVRMQVNfSlNPTl9BUlJBWTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXMoa2V5LCBwYXJhbUEsIHBhcmFtQiwgcGFyYW1DLCBwYXJhbUQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIGF0bGFzSlNPTkFycmF5IC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkQXRsYXNKU09OQXJyYXkoZGF0YSkge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgcGFyYW1BO1xuICAgICAgICBsZXQgcGFyYW1CO1xuICAgICAgICBsZXQgcGFyYW1DO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF0bGFzSlNPTkFycmF5KGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2ldID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF0bGFzSlNPTkFycmF5KGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdmFsdWUgaXMgdW5kZWZpbmVkLCBudWxsLCBmYWxzZSwgMCwgbmFuLCBcIlwiXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF0bGFzSlNPTkFycmF5KGtleSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1BID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwidGV4dHVyZVVSTFwiKSkgPyB2YWx1ZVtcInRleHR1cmVVUkxcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUIgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJhdGxhc1VSTFwiKSkgPyB2YWx1ZVtcImF0bGFzVVJMXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1DID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwiYXRsYXNEYXRhXCIpKSA/IHZhbHVlW1wiYXRsYXNEYXRhXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXNKU09OQXJyYXkoa2V5LCBwYXJhbUEsIHBhcmFtQiwgcGFyYW1DKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBhdGxhc0pTT05IYXNoIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkQXRsYXNKU09OSGFzaChkYXRhKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBwYXJhbUE7XG4gICAgICAgIGxldCBwYXJhbUI7XG4gICAgICAgIGxldCBwYXJhbUM7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXNKU09OSGFzaChkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdGxhc0pTT05IYXNoKGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdmFsdWUgaXMgdW5kZWZpbmVkLCBudWxsLCBmYWxzZSwgMCwgbmFuLCBcIlwiXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF0bGFzSlNPTkhhc2goa2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUEgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ0ZXh0dXJlVVJMXCIpKSA/IHZhbHVlW1widGV4dHVyZVVSTFwiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQiA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImF0bGFzVVJMXCIpKSA/IHZhbHVlW1wiYXRsYXNVUkxcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUMgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJhdGxhc0RhdGFcIikpID8gdmFsdWVbXCJhdGxhc0RhdGFcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdGxhc0pTT05IYXNoKGtleSwgcGFyYW1BLCBwYXJhbUIsIHBhcmFtQyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0gYXRsYXNYTUwgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRBdGxhc1hNTChkYXRhKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBwYXJhbUE7XG4gICAgICAgIGxldCBwYXJhbUI7XG4gICAgICAgIGxldCBwYXJhbUM7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXNYTUwoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbaV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXNYTUwoZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyB1bmRlZmluZWQsIG51bGwsIGZhbHNlLCAwLCBuYW4sIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXRsYXNYTUwoa2V5KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUEgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ0ZXh0dXJlVVJMXCIpKSA/IHZhbHVlW1widGV4dHVyZVVSTFwiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQiA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImF0bGFzVVJMXCIpKSA/IHZhbHVlW1wiYXRsYXNVUkxcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUMgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJhdGxhc0RhdGFcIikpID8gdmFsdWVbXCJhdGxhc0RhdGFcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdGxhc1hNTChrZXksIHBhcmFtQSwgcGFyYW1CLCBwYXJhbUMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIGF1ZGlvIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkQXVkaW8oZGF0YSkge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCBwYXJhbUE7XG4gICAgICAgIGxldCBwYXJhbUI7XG4gICAgICAgIGZvciAoa2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCBBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmF1ZGlvKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1BID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwidXJsc1wiKSkgPyB2YWx1ZVtcInVybHNcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgIHBhcmFtQiA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImF1dG9EZWNvZGVcIikpID8gdmFsdWVbXCJhdXRvRGVjb2RlXCJdIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpbyhrZXksIHBhcmFtQSwgcGFyYW1CKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIGF1ZGlvU3ByaXRlIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkQXVkaW9TcHJpdGUoZGF0YSkge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCBwYXJhbUE7XG4gICAgICAgIGxldCBwYXJhbUI7XG4gICAgICAgIGxldCBwYXJhbUM7XG4gICAgICAgIGxldCBwYXJhbUQ7XG4gICAgICAgIGZvciAoa2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgLy90b2RvIGhhdmUgdG8gaGF2ZSBqc29uVVJMIG9yIGpzb25EYXRhXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYXVkaW9TcHJpdGUoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbUEgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ1cmxzXCIpKSA/IHZhbHVlW1widXJsc1wiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgcGFyYW1CID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwianNvblVSTFwiKSkgPyB2YWx1ZVtcImpzb25VUkxcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgIHBhcmFtQyA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImpzb25EYXRhXCIpKSA/IHZhbHVlW1wianNvbkRhdGFcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgIHBhcmFtRCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImF1dG9EZWNvZGVcIikpID8gdmFsdWVbXCJhdXRvRGVjb2RlXCJdIDogdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5hdWRpb1Nwcml0ZShrZXksIHBhcmFtQSwgcGFyYW1CLCBwYXJhbUMsIHBhcmFtRCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBiaW5hcnkgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRCaW5hcnkoZGF0YSkge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmJpbmFyeShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5iaW5hcnkoZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyB1bmRlZmluZWQsIG51bGwsIGZhbHNlLCAwLCBuYW4sIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYmluYXJ5KGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5iaW5hcnkoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ1cmxcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmJpbmFyeShrZXksIHZhbHVlW1widXJsXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIGJpdG1hcEZvbnQgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRCaXRtYXBGb250KGRhdGEpIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHBhcmFtQTtcbiAgICAgICAgbGV0IHBhcmFtQjtcbiAgICAgICAgbGV0IHBhcmFtQztcbiAgICAgICAgbGV0IHBhcmFtRDtcbiAgICAgICAgbGV0IHBhcmFtRTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5iaXRtYXBGb250KGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2ldID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmJpdG1hcEZvbnQoZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyB1bmRlZmluZWQsIG51bGwsIGZhbHNlLCAwLCBuYW4sIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYml0bWFwRm9udChrZXkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQSA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInRleHR1cmVVUkxcIikpID8gdmFsdWVbXCJ0ZXh0dXJlVVJMXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1CID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwiYXRsYXNVUkxcIikpID8gdmFsdWVbXCJhdGxhc1VSTFwiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQyA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImF0bGFzRGF0YVwiKSkgPyB2YWx1ZVtcImF0bGFzRGF0YVwiXSA6IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtRCA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInhTcGFjaW5nXCIpKSA/IHZhbHVlW1wieFNwYWNpbmdcIl0gOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUUgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ5U3BhY2luZ1wiKSkgPyB2YWx1ZVtcInlTcGFjaW5nXCJdIDogMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuYml0bWFwRm9udChrZXksIHBhcmFtQSwgcGFyYW1CLCBwYXJhbUMsIHBhcmFtRCwgcGFyYW1FKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBpbWFnZSAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZEltYWdlKGRhdGEpIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHBhcmFtQTtcbiAgICAgICAgbGV0IHBhcmFtQjtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShkYXRhW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlIGlzIHVuZGVmaW5lZCwgbnVsbCwgZmFsc2UsIDAsIG5hbiwgXCJcIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2Uoa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUEgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ1cmxcIikpID8gdmFsdWVbXCJ1cmxcIl0gOiBrZXkgKyBcIi5wbmdcIjtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1CID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwib3ZlcndyaXRlXCIpKSA/IHZhbHVlW1wib3ZlcndyaXRlXCJdIDogZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmltYWdlKGtleSwgcGFyYW1BLCBwYXJhbUIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIGltYWdlcyAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZEltYWdlcyhkYXRhKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCBpO1xuICAgICAgICBsZXQgcGFyYW1BO1xuICAgICAgICBsZXQgcGFyYW1CO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhWzBdID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuaW1hZ2VzKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGFbMF0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBkYXRhW2ldO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUEgPSAoa2V5Lmhhc093blByb3BlcnR5KFwia2V5c1wiKSkgPyBrZXlbXCJrZXlzXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1CID0gKGtleS5oYXNPd25Qcm9wZXJ0eShcInVybHNcIikpID8ga2V5W1widXJsc1wiXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZXMoa2V5LCBwYXJhbUEsIHBhcmFtQik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBwYXJhbUEgPSAoZGF0YS5oYXNPd25Qcm9wZXJ0eShcImtleXNcIikpID8gZGF0YVtcImtleXNcIl0gOiBudWxsO1xuICAgICAgICAgICAgcGFyYW1CID0gKGRhdGEuaGFzT3duUHJvcGVydHkoXCJ1cmxzXCIpKSA/IGRhdGFbXCJ1cmxzXCJdIDogZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZXMoa2V5LCBwYXJhbUEsIHBhcmFtQik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSBqc29uIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkSlNPTihkYXRhKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBwYXJhbUE7XG4gICAgICAgIGxldCBwYXJhbUI7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuanNvbihkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZGF0YVtpXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5qc29uKGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdmFsdWUgaXMgdW5kZWZpbmVkLCBudWxsLCBmYWxzZSwgMCwgbmFuLCBcIlwiXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLmpzb24oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUEgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ1cmxcIikpID8gdmFsdWVbXCJ1cmxcIl0gOiBrZXkgKyBcIi5qc29uXCI7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQiA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcIm92ZXJ3cml0ZVwiKSkgPyB2YWx1ZVtcIm92ZXJ3cml0ZVwiXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5qc29uKGtleSwgcGFyYW1BLCBwYXJhbUIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIHBhY2sgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRQYWNrKGRhdGEpIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBmb3IgKGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5wYWNrKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdG9kbyBlaXRoZXIgb3IgdGhpbmcgYWdhaW4gd2l0aCB1cmwgb3IgZGF0YVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1BID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwidXJsXCIpKSA/IHZhbHVlW1widXJsXCJdIDoga2V5ICsgXCIuanNvblwiO1xuICAgICAgICAgICAgICAgIHBhcmFtQiA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikpID8gdmFsdWVbXCJkYXRhXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5waHlzaWNzKGtleSwgcGFyYW1BLCBwYXJhbUIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0gcGh5c2ljcyAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZFBoeXNpY3MoZGF0YSkge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCBwYXJhbUE7XG4gICAgICAgIGxldCBwYXJhbUI7XG4gICAgICAgIGxldCBwYXJhbUM7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQucGh5c2ljcyhkYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdmFsdWUgaXMgdW5kZWZpbmVkLCBudWxsLCBmYWxzZSwgMCwgbmFuLCBcIlwiXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnBoeXNpY3Moa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnBoeXNpY3Moa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUEgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJ1cmxcIikpID8gdmFsdWVbXCJ1cmxcIl0gOiBrZXkgKyBcIi5qc29uXCI7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQiA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImRhdGFcIikpID8gdmFsdWVbXCJkYXRhXCJdIDogbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1DID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwiZm9ybWF0XCIpKSA/IHZhbHVlW1wiZm9ybWF0XCJdIDogUGhhc2VyLlBoeXNpY3MuTElNRV9DT1JPTkFfSlNPTjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQucGh5c2ljcyhrZXksIHBhcmFtQSwgcGFyYW1CLCBwYXJhbUMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIHNjcmlwdCAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZFNjcmlwdChkYXRhKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IHBhcmFtQTtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zY3JpcHQoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlIGlzIHVuZGVmaW5lZCwgbnVsbCwgZmFsc2UsIDAsIG5hbiwgXCJcIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zY3JpcHQoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNjcmlwdChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQSA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInVybFwiKSkgPyB2YWx1ZVtcInVybFwiXSA6IGtleSArIFwiLmpzXCI7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNjcmlwdChrZXksIHBhcmFtQSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gLS0tLS0tLS0gc2hhZGVyIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkU2hhZGVyKGRhdGEpIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHBhcmFtQTtcbiAgICAgICAgbGV0IHBhcmFtQjtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5zaGFkZXIoZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFbaV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuc2hhZGVyKGRhdGFbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgZm9yIChrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdmFsdWUgaXMgdW5kZWZpbmVkLCBudWxsLCBmYWxzZSwgMCwgbmFuLCBcIlwiXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNoYWRlcihrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuc2hhZGVyKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1BID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwidXJsXCIpKSA/IHZhbHVlW1widXJsXCJdIDoga2V5ICsgXCIuZnJhZ1wiO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUIgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJvdmVyd3JpdGVcIikpID8gdmFsdWVbXCJvdmVyd3JpdGVcIl0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuc2hhZGVyKGtleSwgcGFyYW1BLCBwYXJhbUIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIHNwcml0ZXNoZWV0IC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkU3ByaXRlc2hlZXQoZGF0YSkge1xuICAgICAgICBsZXQga2V5O1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIGxldCBwYXJhbUE7XG4gICAgICAgIGxldCBwYXJhbUI7XG4gICAgICAgIGxldCBwYXJhbUM7XG4gICAgICAgIGxldCBwYXJhbUQ7XG4gICAgICAgIGxldCBwYXJhbUU7XG4gICAgICAgIGxldCBwYXJhbUY7XG4gICAgICAgIGZvciAoa2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgcGFyYW1BID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwidXJsXCIpKSA/IHZhbHVlW1widXJsXCJdIDoga2V5ICsgXCIucG5nXCI7XG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJmcmFtZVdpZHRoXCIpKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1CID0gdmFsdWVbXCJmcmFtZVdpZHRoXCJdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbUIgPSAwO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic3ByaXRlc2hlZXRzIG11c3QgaGF2ZSBhICdmcmFtZVdpZHRoJyBzcGVjaWZpZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJmcmFtZUhlaWdodFwiKSkge1xuICAgICAgICAgICAgICAgIHBhcmFtQyA9IHZhbHVlW1wiZnJhbWVIZWlnaHRcIl07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtQyA9IDA7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzcHJpdGVzaGVldHMgbXVzdCBoYXZlIGEgJ2ZyYW1lSGVpZ2h0JyBzcGVjaWZpZWRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwYXJhbUQgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJmcmFtZU1heFwiKSkgPyB2YWx1ZVtcImZyYW1lTWF4XCJdIDogLTE7XG4gICAgICAgICAgICBwYXJhbUUgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJtYXJnaW5cIikpID8gdmFsdWVbXCJtYXJnaW5cIl0gOiAwO1xuICAgICAgICAgICAgcGFyYW1GID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwic3BhY2luZ1wiKSkgPyB2YWx1ZVtcInNwYWNpbmdcIl0gOiAwO1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQuc3ByaXRlc2hlZXQoa2V5LCBwYXJhbUEsIHBhcmFtQiwgcGFyYW1DLCBwYXJhbUQsIHBhcmFtRSwgcGFyYW1GKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIHRleHQgLS0tLS0tLS0gLy9cblxuICAgIGxvYWRUZXh0KGRhdGEpIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgaTtcbiAgICAgICAgbGV0IHBhcmFtQTtcbiAgICAgICAgbGV0IHBhcmFtQjtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC50ZXh0KGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2ldID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnRleHQoZGF0YVtpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyB1bmRlZmluZWQsIG51bGwsIGZhbHNlLCAwLCBuYW4sIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQudGV4dChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQudGV4dChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQSA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInVybFwiKSkgPyB2YWx1ZVtcInVybFwiXSA6IGtleSArIFwiLnR4dFwiO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUIgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJvdmVyd3JpdGVcIikpID8gdmFsdWVbXCJvdmVyd3JpdGVcIl0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQudGV4dChrZXksIHBhcmFtQSwgcGFyYW1CKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSB0aWxlbWFwIC0tLS0tLS0tIC8vXG5cbiAgICBsb2FkVGlsZW1hcChkYXRhKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IHBhcmFtQTtcbiAgICAgICAgbGV0IHBhcmFtQjtcbiAgICAgICAgbGV0IHBhcmFtQztcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC50aWxlbWFwKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICBmb3IgKGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBpZiB2YWx1ZSBpcyB1bmRlZmluZWQsIG51bGwsIGZhbHNlLCAwLCBuYW4sIFwiXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQudGlsZW1hcChrZXkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQudGlsZW1hcChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQSA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInVybFwiKSkgPyB2YWx1ZVtcInVybFwiXSA6IGtleSArIFwiLmpzb25cIjtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1CID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwiZGF0YVwiKSkgPyB2YWx1ZVtcImRhdGFcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUMgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJmb3JtYXRcIikpID8gdmFsdWVbXCJmb3JtYXRcIl0gOiBQaGFzZXIuVGlsZW1hcC5DU1Y7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnRpbGVtYXAoa2V5LCBwYXJhbUEsIHBhcmFtQiwgcGFyYW1DKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyAtLS0tLS0tLSB2aWRlbyAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZFZpZGVvKGRhdGEpIHtcbiAgICAgICAgbGV0IGtleTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBsZXQgcGFyYW1BO1xuICAgICAgICBsZXQgcGFyYW1CO1xuICAgICAgICBsZXQgcGFyYW1DO1xuICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnZpZGVvKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1BID0gKHZhbHVlLmhhc093blByb3BlcnR5KFwidXJsc1wiKSkgPyB2YWx1ZVtcInVybHNcIl0gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUIgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJsb2FkRXZlbnRcIikpID8gdmFsdWVbXCJsb2FkRXZlbnRcIl0gOiBcImNhbnBsYXl0aHJvdWdoXCI7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQyA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImFzQmxvYlwiKSkgPyB2YWx1ZVtcImFzQmxvYlwiXSA6IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC52aWRlbyhrZXksIHBhcmFtQSwgcGFyYW1CLCBwYXJhbUMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIC0tLS0tLS0tIHhtbCAtLS0tLS0tLSAvL1xuXG4gICAgbG9hZFhNTChkYXRhKSB7XG4gICAgICAgIGxldCBrZXk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgbGV0IGk7XG4gICAgICAgIGxldCBwYXJhbUE7XG4gICAgICAgIGxldCBwYXJhbUI7XG4gICAgICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQueG1sKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2ldID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnhtbChkYXRhW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGZvciAoa2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHZhbHVlIGlzIHVuZGVmaW5lZCwgbnVsbCwgZmFsc2UsIDAsIG5hbiwgXCJcIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdhbWUubG9hZC54bWwoa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnhtbChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmFtQSA9ICh2YWx1ZS5oYXNPd25Qcm9wZXJ0eShcInVybFwiKSkgPyB2YWx1ZVtcInVybFwiXSA6IGtleSArIFwiLnhtbFwiO1xuICAgICAgICAgICAgICAgICAgICBwYXJhbUIgPSAodmFsdWUuaGFzT3duUHJvcGVydHkoXCJvdmVyd3JpdGVcIikpID8gdmFsdWVbXCJvdmVyd3JpdGVcIl0gOiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nYW1lLmxvYWQueG1sKGtleSwgcGFyYW1BLCBwYXJhbUIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQXNzZXRMb2FkZXI7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IGdyYWRsZXkgb24gMTIvMjUvMjAxNi5cbiAqL1xuXG4vKipcbiAqIENvbnN0YW50cyBtYXRjaGluZyBhc3NldHMuanNvbi5cbiAqL1xuY2xhc3MgQXNzZXRLZXlzIHtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQXNzZXRLZXlzLCB7XG4gICAgXCJBU1NFVFNfSlNPTlwiOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICBcImtleVwiOiBcImFzc2V0c1wiLFxuICAgICAgICAgICAgXCJwYXRoXCI6IFwiZGF0YS92ZXJzaW9uMS9hc3NldHMuanNvblwiXG4gICAgICAgIH1cbiAgICB9LFxuICAgIFwiUFJFTE9BRF9TUFJJVEVcIjoge1xuICAgICAgICB2YWx1ZTogXCJpbWFnZVRlc3RcIlxuICAgIH0sXG4gICAgXCJBVExBU1wiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzVGVzdFwiXG4gICAgfSxcbiAgICBcIkFUTEFTX0pTT05fQVJSQVlcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc0pTT05BcnJheVRlc3RcIlxuICAgIH0sXG4gICAgXCJBVExBU19KU09OX0hBU0hcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc0pTT05IYXNoVGVzdFwiXG4gICAgfSxcbiAgICBcIkFUTEFTX1hNTFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzWE1MVGVzdFwiXG4gICAgfSxcbiAgICBcIkFVRElPXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXVkaW9UZXN0XCJcbiAgICB9LFxuICAgIFwiQVVESU9fU1BSSVRFXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXVkaW9TcHJpdGVUZXN0XCJcbiAgICB9LFxuICAgIFwiQklOQVJZXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYmluYXJ5VGVzdFwiXG4gICAgfSxcbiAgICBcIkJJVE1BUF9GT05UXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYml0bWFwRm9udFRlc3RcIlxuICAgIH0sXG4gICAgXCJJTUFHRVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImltYWdlVGVzdFwiXG4gICAgfSxcbiAgICBcIklNQUdFMlwiOiB7XG4gICAgICAgIHZhbHVlOiBcImltYWdlVGVzdDJcIlxuICAgIH0sXG4gICAgXCJJTUFHRTNcIjoge1xuICAgICAgICB2YWx1ZTogXCJpbWFnZVRlc3QzXCJcbiAgICB9LFxuICAgIFwiSlNPTlwiOiB7XG4gICAgICAgIHZhbHVlOiBcImpzb25UZXN0XCJcbiAgICB9LFxuICAgIFwiUEhZU0lDU1wiOiB7XG4gICAgICAgIHZhbHVlOiBcInBoeXNpY3NUZXN0XCJcbiAgICB9LFxuICAgIFwiU0NSSVBUXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiUHJvdHJhY3RvclwiXG4gICAgfSxcbiAgICBcIlNIQURFUlwiOiB7XG4gICAgICAgIHZhbHVlOiBcInNoYWRlclRlc3RcIlxuICAgIH0sXG4gICAgXCJTUFJJVEVTSEVFVFwiOiB7XG4gICAgICAgIHZhbHVlOiBcInNwcml0ZXNoZWV0VGVzdFwiXG4gICAgfSxcbiAgICBcIlRFWFRcIjoge1xuICAgICAgICB2YWx1ZTogXCJ0ZXh0VGVzdFwiXG4gICAgfSxcbiAgICBcIlRJTEVNQVBcIjoge1xuICAgICAgICB2YWx1ZTogXCJ0aWxlbWFwVGVzdFwiXG4gICAgfSxcbiAgICBcIlZJREVPXCI6IHtcbiAgICAgICAgdmFsdWU6IFwidmlkZW9UZXN0XCJcbiAgICB9LFxuICAgIFwiWE1MXCI6IHtcbiAgICAgICAgdmFsdWU6IFwieG1sVGVzdFwiXG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0S2V5cztcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBncmFkbGV5IG9uIDEyLzI2LzIwMTYuXG4gKi9cblxuaW1wb3J0IEFzc2V0S2V5cyBmcm9tIFwiLi9Bc3NldEtleXNcIjtcbmltcG9ydCBHYW1lS2V5cyBmcm9tIFwiLi9HYW1lS2V5c1wiO1xuXG5jbGFzcyBCb290U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gIHByZWxvYWQoKSB7XG4gICAgdGhpcy5nYW1lLmxvYWQuanNvbihBc3NldEtleXMuQVNTRVRTX0pTT04ua2V5LCBBc3NldEtleXMuQVNTRVRTX0pTT04ucGF0aCk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KEdhbWVLZXlzLkxPQUQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb3RTdGF0ZTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBHZW5lbGwgUmFkbGV5IG9uIDEyLzEvMTYuXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCBHYW1lS2V5cyBmcm9tIFwiLi9HYW1lS2V5c1wiO1xuaW1wb3J0IEJvb3RTdGF0ZSBmcm9tIFwiLi9Cb290U3RhdGVcIjtcbmltcG9ydCBMb2FkU3RhdGUgZnJvbSBcIi4vTG9hZFN0YXRlXCI7XG5pbXBvcnQgUGxheVN0YXRlIGZyb20gXCIuL1BsYXlTdGF0ZVwiO1xuXG5jbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKDgwMCwgNjAwLCBQaGFzZXIuQVVUTyk7XG5cbiAgICB0aGlzLnN0YXRlLmFkZChHYW1lS2V5cy5CT09ULCBCb290U3RhdGUpO1xuICAgIHRoaXMuc3RhdGUuYWRkKEdhbWVLZXlzLkxPQUQsIExvYWRTdGF0ZSk7XG4gICAgdGhpcy5zdGF0ZS5hZGQoR2FtZUtleXMuUExBWSwgUGxheVN0YXRlKTtcblxuICAgIHRoaXMuc3RhdGUuc3RhcnQoR2FtZUtleXMuQk9PVCk7XG4gIH1cbn1cblxubmV3IEdhbWUoKTtcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBncmFkbGV5IG9uIDEyLzI0LzIwMTYuXG4gKi9cblxuLyoqXG4gKiBNYWluIGNvbnN0cy5cbiAqL1xuY2xhc3MgR2FtZUtleXMge1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhHYW1lS2V5cywge1xuICAgIFwiQk9PVFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImJvb3RcIlxuICAgIH0sXG4gICAgXCJMT0FEXCI6IHtcbiAgICAgICAgdmFsdWU6IFwibG9hZFwiXG4gICAgfSxcbiAgICBcIlBMQVlcIjoge1xuICAgICAgICB2YWx1ZTogXCJwbGF5XCJcbiAgICB9LFxuICAgIFwiQVNTRVRTX0pTT05cIjoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgXCJrZXlcIjogXCJhc3NldHNcIixcbiAgICAgICAgICAgIFwicGF0aFwiOiBcImRhdGEvYXNzZXRzLmpzb25cIlxuICAgICAgICB9XG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVLZXlzO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEdlbmVsbCBSYWRsZXkgb24gMTIvMi8xNi5cbiAqL1xuXG5pbXBvcnQgQXNzZXRLZXlzIGZyb20gXCIuL0Fzc2V0S2V5c1wiO1xuaW1wb3J0IEdhbWVLZXlzIGZyb20gXCIuL0dhbWVLZXlzXCI7XG5pbXBvcnQgQXNzZXRMb2FkZXIgZnJvbSBcIi4uL2xpYi9Bc3NldExvYWRlclwiO1xuXG5jbGFzcyBMb2FkU3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgcHJlbG9hZCgpIHtcbiAgICAgICAgbmV3IEFzc2V0TG9hZGVyKHRoaXMuZ2FtZSwgdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oQXNzZXRLZXlzLkFTU0VUU19KU09OLmtleSkpO1xuXG4gICAgICAgIHRoaXMuX2xvYWRpbmdNc2cgPSBcIkxvYWRpbmcuLi4gXCI7XG4gICAgICAgIHRoaXMuX3RleHQgPSB0aGlzLmdhbWUuYWRkLnRleHQoMCwgMCwgdGhpcy5fbG9hZGluZ01zZywge2ZpbGw6IFwiI2ZmZmZmZlwifSk7XG4gICAgICAgIHRoaXMuX3RleHQueCA9ICh0aGlzLmdhbWUud2lkdGggLSB0aGlzLl90ZXh0LndpZHRoKSAvIDI7XG4gICAgICAgIHRoaXMuX3RleHQueSA9IHRoaXMuZ2FtZS5oZWlnaHQgLSB0aGlzLl90ZXh0LmhlaWdodDtcblxuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5hZGQodGhpcy5vbkZpbGVMb2FkZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkxvYWRDb21wbGV0ZS5hZGQodGhpcy5vbkxvYWRDb21wbGV0ZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHByb2dyZXNzIC0gUGVyY2VudCBsb2FkaW5nIHByb2dyZXNzIGF0IHRpbWUgb2YgZmlsZSBsb2FkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGNhY2hlS2V5IC0gIEtleSBvZiBmaWxlIGxvYWRlZFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gc3VjY2VzcyAtIElmIGZpbGUgc3VjY2VlZGVkIGxvYWRlZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0b3RhbExvYWRlZCAtIEZpbGVzIGxvYWRlZCBzbyBmYXJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdG90YWxGaWxlcyAtIEZpbGVzIHRvIGJlIGxvYWRlZFxuICAgICAqL1xuICAgIG9uRmlsZUxvYWRlZChwcm9ncmVzcywgY2FjaGVLZXksIHN1Y2Nlc3MsIHRvdGFsTG9hZGVkLCB0b3RhbEZpbGVzKSB7XG4gICAgICAgIHRoaXMuX3RleHQudGV4dCA9IHRoaXMuX2xvYWRpbmdNc2cgKyBwcm9ncmVzcyArIFwiJVwiO1xuXG4gICAgICAgIGlmIChwcm9ncmVzcyA9PT0gMTAwKSB7XG4gICAgICAgICAgICB0aGlzLl90ZXh0LnRleHQgPSBcIkxvYWRlZFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN1Y2Nlc3MgJiYgY2FjaGVLZXkgPT09IEFzc2V0S2V5cy5QUkVMT0FEX1NQUklURSkge1xuICAgICAgICAgICAgbGV0IHByZWxvYWRiYXIgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAwLCBBc3NldEtleXMuUFJFTE9BRF9TUFJJVEUpO1xuICAgICAgICAgICAgcHJlbG9hZGJhci54ID0gKHRoaXMuZ2FtZS53aWR0aCAtIHByZWxvYWRiYXIud2lkdGgpIC8gMjtcbiAgICAgICAgICAgIHByZWxvYWRiYXIueSA9ICh0aGlzLmdhbWUuaGVpZ2h0IC0gcHJlbG9hZGJhci5oZWlnaHQpIC8gMjtcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5sb2FkLnNldFByZWxvYWRTcHJpdGUocHJlbG9hZGJhcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkxvYWRDb21wbGV0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25GaWxlQ29tcGxldGUucmVtb3ZlKHRoaXMub25GaWxlTG9hZGVkLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUucmVtb3ZlKHRoaXMub25Mb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgICAgICB0aGlzLmdhbWUuc3RhdGUuc3RhcnQoR2FtZUtleXMuUExBWSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2FkU3RhdGU7XG5cbiIsIi8qKlxuICogQ3JlYXRlZCBieSBHZW5lbGwgUmFkbGV5IG9uIDEyLzIvMTYuXG4gKi9cblxuaW1wb3J0IEFzc2V0S2V5cyBmcm9tIFwiLi9Bc3NldEtleXNcIjtcblxuY2xhc3MgUGxheVN0YXRlIGV4dGVuZHMgUGhhc2VyLlN0YXRlIHtcblxuICAgIGluaXQoKSB7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXMgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAyMDAsIEFzc2V0S2V5cy5BVExBUywgXCJwMV9odXJ0XCIpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGF0bGFzSlNPTkFycmF5IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgMzAwLCBBc3NldEtleXMuQVRMQVNfSlNPTl9BUlJBWSwgXCJwMV9mcm9udFwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBhdGxhc0pTT05IYXNoIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgNDAwLCBBc3NldEtleXMuQVRMQVNfSlNPTl9IQVNILCBcInAxX2R1Y2tcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXNYTUwgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCA1MDAsIEFzc2V0S2V5cy5BVExBU19YTUwsIFwiYm9tYi5wbmdcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXVkaW8gLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuc291bmQucGxheShBc3NldEtleXMuQVVESU8pO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGF1ZGlvU3ByaXRlIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGZ4ID0gdGhpcy5nYW1lLmFkZC5hdWRpbyhBc3NldEtleXMuQVVESU9fU1BSSVRFKTtcbiAgICAgICAgZnguYWxsb3dNdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIGZ4LmFkZE1hcmtlcignYWxpZW4gZGVhdGgnLCAxLCAxLjApO1xuICAgICAgICBsZXQgYnV0dG9uID0gdGhpcy5nYW1lLmFkZC5idXR0b24oMjAwLCA1MDAsIEFzc2V0S2V5cy5JTUFHRSwgKCkgPT4ge1xuICAgICAgICAgICAgZngucGxheSgnYWxpZW4gZGVhdGgnKTtcbiAgICAgICAgfSwgdGhpcywgMCwgMSwgMik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYmluYXJ5IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGJpbmFyeSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRCaW5hcnkoQXNzZXRLZXlzLkJJTkFSWSk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMDAsIDUwMCwgXCJiaW5hcnkuYnl0ZUxlbmd0aDogXCIgKyBiaW5hcnkuYnl0ZUxlbmd0aCwge2ZpbGw6IFwiI2ZmZmZmZlwifSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYml0bWFwRm9udCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5nYW1lLmFkZC5iaXRtYXBUZXh0KDIwMCwgMTAwLCBBc3NldEtleXMuQklUTUFQX0ZPTlQsICdCaXRtYXAgRm9udHMhJywgNjQpO1xuICAgICAgICB0ZXh0LnNldFRleHQoJ0JpdG1hcCBGb250cyFcXG54OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueCkgKyAnIHk6ICcgKyBNYXRoLnJvdW5kKHRoaXMuZ2FtZS5pbnB1dC55KSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gaW1hZ2UgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAwLCBBc3NldEtleXMuSU1BR0UpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGltYWdlcyAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDUwMCwgLTUwLCBBc3NldEtleXMuSU1BR0UyKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBqc29uIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGpzb24gPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihBc3NldEtleXMuSlNPTik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMDAsIDEzMCwganNvbi50ZXN0LCB7ZmlsbDogXCIjZmZmZmZmXCJ9KTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBwYWNrIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5pbWFnZSgwLCAwLCBBc3NldEtleXMuSU1BR0UzKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBwaHlzaWNzIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuUDJKUyk7XG4gICAgICAgIGxldCBjb250cmEgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxMDAsIDIwMCwgQXNzZXRLZXlzLklNQUdFKTtcbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3MuZW5hYmxlKGNvbnRyYSwgUGhhc2VyLlBoeXNpY3MuUDJKUyk7XG4gICAgICAgIGNvbnRyYS5ib2R5LmxvYWRQb2x5Z29uKEFzc2V0S2V5cy5QSFlTSUNTLCAnY29udHJhMicsIGNvbnRyYSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gc2NyaXB0IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IG1vZHVsZSA9IG5ldyBTY3JpcHRUZXN0KCk7XG4gICAgICAgIG1vZHVsZS5wcmludChcImdhbWUubG9hZC5zY3JpcHQgd29ya2VkIVwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBzaGFkZXIgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgZmlsdGVyID0gbmV3IFBoYXNlci5GaWx0ZXIodGhpcy5nYW1lLCBudWxsLCB0aGlzLmdhbWUuY2FjaGUuZ2V0U2hhZGVyKEFzc2V0S2V5cy5TSEFERVIpKTtcbiAgICAgICAgZmlsdGVyLnNldFJlc29sdXRpb24oNDAwLCA2MDApO1xuXG4gICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgpO1xuICAgICAgICBzcHJpdGUueCA9IDUwMDtcbiAgICAgICAgc3ByaXRlLnkgPSAxNTA7XG4gICAgICAgIHNwcml0ZS53aWR0aCA9IDQwMDtcbiAgICAgICAgc3ByaXRlLmhlaWdodCA9IDYwMDtcblxuICAgICAgICBzcHJpdGUuZmlsdGVycyA9IFtmaWx0ZXJdO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHNwcml0ZXNoZWV0IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IHNwcml0ZXNoZWV0ID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgMTMwLCBBc3NldEtleXMuU1BSSVRFU0hFRVQpO1xuICAgICAgICBzcHJpdGVzaGVldC5hbmltYXRpb25zLmFkZChcImFuaW1cIik7XG4gICAgICAgIHNwcml0ZXNoZWV0LmFuaW1hdGlvbnMucGxheShcImFuaW1cIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gdGV4dCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBodG1sID0gdGhpcy5nYW1lLmNhY2hlLmdldFRleHQoQXNzZXRLZXlzLlRFWFQpO1xuICAgICAgICBjb25zb2xlLmxvZyhodG1sKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSB0aWxlbWFwIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IG1hcCA9IHRoaXMuZ2FtZS5hZGQudGlsZW1hcChBc3NldEtleXMuVElMRU1BUCk7XG4gICAgICAgIGlmIChtYXAuZ2V0TGF5ZXJJbmRleChcInN1cmZhY2VcIikpIHtcbiAgICAgICAgICAgIG1hcC5hZGRUaWxlc2V0SW1hZ2UoQXNzZXRLZXlzLlNQUklURVNIRUVULCBBc3NldEtleXMuU1BSSVRFU0hFRVQsIDcwLCA3MCk7XG4gICAgICAgICAgICBsZXQgbGF5ZXIgPSBtYXAuY3JlYXRlTGF5ZXIoXCJzdXJmYWNlXCIpO1xuICAgICAgICAgICAgbGF5ZXIucmVzaXplV29ybGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tIHZpZGVvIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IHZpZGVvID0gdGhpcy5nYW1lLmFkZC52aWRlbyhBc3NldEtleXMuVklERU8pO1xuICAgICAgICB2aWRlby5wbGF5KHRydWUpO1xuICAgICAgICB2aWRlby5hZGRUb1dvcmxkKDIwMCwgMjAwLCAwLCAwLCAwLjMsIDAuMyk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0geG1sIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IHhtbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRYTUwoQXNzZXRLZXlzLlhNTCk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMDAsIDE2MCwgeG1sLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCwge2ZpbGw6IFwiI2ZmZmZmZlwifSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5U3RhdGU7XG4iXX0=
