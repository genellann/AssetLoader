(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/AssetLoader
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
    "ATLAS_JSON_ARRAY_0": {
        value: "atlasJSONArrayTest"
    },
    "ATLAS_JSON_ARRAY_1": {
        value: "atlasJSONArrayTest1"
    },
    "ATLAS_JSON_ARRAY_2": {
        value: "atlasJSONArrayTest2"
    },
    "ATLAS_JSON_ARRAY_3": {
        value: "atlasJSONArrayTest3"
    },
    "ATLAS_JSON_ARRAY_4": {
        value: "atlasJSONArrayTest4"
    },
    "ATLAS_JSON_ARRAY_5": {
        value: "atlasJSONArrayTest5"
    },
    "ATLAS_JSON_ARRAY_6": {
        value: "atlasJSONArrayTest6"
    },
    "ATLAS_JSON_ARRAY_7": {
        value: "atlasJSONArrayTest7"
    },
    "ATLAS_JSON_HASH_0": {
        value: "atlasJSONHashTest"
    },
    "ATLAS_JSON_HASH_1": {
        value: "atlasJSONHashTest1"
    },
    "ATLAS_JSON_HASH_2": {
        value: "atlasJSONHashTest2"
    },
    "ATLAS_JSON_HASH_3": {
        value: "atlasJSONHashTest3"
    },
    "ATLAS_JSON_HASH_4": {
        value: "atlasJSONHashTest4"
    },
    "ATLAS_JSON_HASH_5": {
        value: "atlasJSONHashTest5"
    },
    "ATLAS_JSON_HASH_6": {
        value: "atlasJSONHashTest6"
    },
    "ATLAS_JSON_HASH_7": {
        value: "atlasJSONHashTest7"
    },
    "ATLAS_XML_0": {
        value: "atlasXMLTest"
    },
    "ATLAS_XML_1": {
        value: "atlasXMLTest1"
    },
    "ATLAS_XML_2": {
        value: "atlasXMLTest2"
    },
    "ATLAS_XML_3": {
        value: "atlasXMLTest3"
    },
    "ATLAS_XML_4": {
        value: "atlasXMLTest4"
    },
    "ATLAS_XML_5": {
        value: "atlasXMLTest5"
    },
    "ATLAS_XML_6": {
        value: "atlasXMLTest6"
    },
    "ATLAS_XML_7": {
        value: "atlasXMLTest7"
    },
    "AUDIO_0": {
        value: "audioTest"
    },
    "AUDIO_1": {
        value: "audioTest1"
    },
    "AUDIO_2": {
        value: "audioTest2"
    },
    "AUDIO_3": {
        value: "audioTest3"
    },
    "AUDIO_4": {
        value: "audioTest4"
    },
    "AUDIO_SPRITE_0": {
        value: "audioSpriteTest"
    },
    "AUDIO_SPRITE_1": {
        value: "audioSpriteTest1"
    },
    "AUDIO_SPRITE_2": {
        value: "audioSpriteTest2"
    },
    "AUDIO_SPRITE_3": {
        value: "audioSpriteTest3"
    },
    "BINARY_0": {
        value: "binaryTest"
    },
    "BINARY_1": {
        value: "binaryTest1"
    },
    "BINARY_2": {
        value: "binaryTest2"
    },
    "BITMAP_FONT_0": {
        value: "bitmapFontTest"
    },
    "BITMAP_FONT_1": {
        value: "bitmapFontTest1"
    },
    "BITMAP_FONT_2": {
        value: "bitmapFontTest2"
    },
    "BITMAP_FONT_3": {
        value: "bitmapFontTest3"
    },
    "BITMAP_FONT_4": {
        value: "bitmapFontTest4"
    },
    "BITMAP_FONT_5": {
        value: "bitmapFontTest5"
    },
    "BITMAP_FONT_6": {
        value: "bitmapFontTest6"
    },
    "BITMAP_FONT_7": {
        value: "bitmapFontTest7"
    },
    "BITMAP_FONT_8": {
        value: "bitmapFontTest8"
    },
    "IMAGE_0": {
        value: "imageTest"
    },
    "IMAGE_1": {
        value: "imageTest1"
    },
    "IMAGE_2": {
        value: "imageTest2"
    },
    "IMAGE_3": {
        value: "imageTest3"
    },
    "IMAGE_4": {
        value: "imageTest4"
    },
    "IMAGE_5": {
        value: "imageTest5"
    },
    "IMAGE_6": {
        value: "imageTest6"
    },
    "IMAGES_0": {
        value: "imagesTest"
    },
    "IMAGES_1": {
        value: "imagesTest1"
    },
    "JSON_0": {
        value: "jsonTest"
    },
    "JSON_1": {
        value: "jsonTest1"
    },
    "JSON_2": {
        value: "jsonTest2"
    },
    "JSON_3": {
        value: "jsonTest3"
    },
    "JSON_4": {
        value: "jsonTest4"
    },
    "PHYSICS_0": {
        value: "physicsTest"
    },
    "PHYSICS_1": {
        value: "physicsTest1"
    },
    "PHYSICS_2": {
        value: "physicsTest2"
    },
    "PHYSICS_3": {
        value: "physicsTest3"
    },
    "PHYSICS_4": {
        value: "physicsTest4"
    },
    "PHYSICS_5": {
        value: "physicsTest5"
    },
    "SHADER_0": {
        value: "shaderTest"
    },
    "SHADER_1": {
        value: "shaderTest1"
    },
    "SHADER_2": {
        value: "shaderTest2"
    },
    "SHADER_3": {
        value: "shaderTest3"
    },
    "SHADER_4": {
        value: "shaderTest4"
    },
    "SPRITESHEET_0": {
        value: "spritesheetTest"
    },
    "SPRITESHEET_1": {
        value: "spritesheetTest1"
    },
    "TEXT_0": {
        value: "textTest"
    },
    "TEXT_1": {
        value: "textTest1"
    },
    "TEXT_2": {
        value: "textTest2"
    },
    "TEXT_3": {
        value: "textTest3"
    },
    "TEXT_4": {
        value: "textTest4"
    },
    "TILEMAP_0": {
        value: "tilemapTest"
    },
    "TILEMAP_1": {
        value: "tilemapTest1"
    },
    "TILEMAP_2": {
        value: "tilemapTest2"
    },
    "TILEMAP_3": {
        value: "tilemapTest3"
    },
    "TILEMAP_4": {
        value: "tilemapTest4"
    },
    "VIDEO_0": {
        value: "videoTest"
    },
    "VIDEO_1": {
        value: "videoTest1"
    },
    "VIDEO_2": {
        value: "videoTest2"
    },
    "VIDEO_3": {
        value: "videoTest3"
    },
    "XML_0": {
        value: "xmlTest"
    },
    "XML_1": {
        value: "xmlTest1"
    },
    "XML_2": {
        value: "xmlTest2"
    },
    "XML_3": {
        value: "xmlTest3"
    },
    "XML_4": {
        value: "xmlTest4"
    }
});

exports.default = AssetKeys;

},{}],2:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/gradley/AssetLoader
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
            this.game.test = _GameKeys2.default.TEST_OBJECT_EXISTING;

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

},{"./AssetKeys":1,"./GameKeys":4}],3:[function(require,module,exports){
/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/AssetLoader
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

        var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, 800, 600, Phaser.CANVAS));
        // super(800, 600, Phaser.WEBGL);


        _this.state.add(_GameKeys2.default.BOOT, _BootState2.default);
        _this.state.add(_GameKeys2.default.LOAD, _LoadState2.default);
        _this.state.add(_GameKeys2.default.PLAY, _PlayState2.default);

        _this.state.start(_GameKeys2.default.BOOT);
        return _this;
    }

    return Game;
}(Phaser.Game);

new Game();

},{"./BootState":2,"./GameKeys":4,"./LoadState":5,"./PlayState":6}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/AssetLoader
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
    "TEST_OBJECT_EXISTING": {
        value: "data/object/existing.json"
    }
});

exports.default = GameKeys;

},{}],5:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/gradley/AssetLoader
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

            new AssetLoader(this.game, this.game.cache.getJSON(_AssetKeys2.default.ASSETS));

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

},{"./AssetKeys":1,"./GameKeys":4}],6:[function(require,module,exports){
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
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * https://github.com/gradley/AssetLoader
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
                case _GameKeys2.default.TEST_OBJECT_EXISTING:
                    this.testObject();
                    break;
            }
        }
    }, {
        key: "testString",
        value: function testString() {

            // -------- atlas -------- //

            this.game.add.sprite(0, 200, _AssetKeys2.default.ATLAS_0, "p1_hurt");

            // -------- atlasJSONArray -------- //

            this.game.add.sprite(0, 300, _AssetKeys2.default.ATLAS_JSON_ARRAY_0, "p1_front");

            // -------- atlasJSONHash -------- //

            this.game.add.sprite(0, 400, _AssetKeys2.default.ATLAS_JSON_HASH_0, "p1_duck");

            // -------- atlasXML -------- //

            this.game.add.sprite(0, 500, _AssetKeys2.default.ATLAS_XML_0, "bomb.png");

            // -------- binary -------- //

            var binary = this.game.cache.getBinary(_AssetKeys2.default.BINARY_0);
            this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, { fill: "#fff" });

            // -------- bitmapFont -------- //

            var text = this.game.add.bitmapText(200, 100, _AssetKeys2.default.BITMAP_FONT_0, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            // -------- image -------- //

            this.game.add.sprite(0, 0, _AssetKeys2.default.IMAGE_0);

            // -------- json -------- //

            var json = this.game.cache.getJSON(_AssetKeys2.default.JSON_0);
            this.game.add.text(100, 130, json.test, { fill: "#fff" });

            // -------- physics -------- //

            this.game.physics.startSystem(Phaser.Physics.P2JS);
            var contra = this.game.add.sprite(100, 200, _AssetKeys2.default.IMAGE_0);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS_0, 'contra2', contra);

            // -------- script -------- //

            var module = new ScriptTest();
            module.print("game.load.script worked!");

            // -------- shader -------- //

            var filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER_0));
            filter.setResolution(400, 600);

            var sprite = this.game.add.sprite();
            sprite.x = 500;
            sprite.y = 150;
            sprite.width = 400;
            sprite.height = 600;

            sprite.filters = [filter];

            // -------- text -------- //

            var html = this.game.cache.getText(_AssetKeys2.default.TEXT_0);
            console.log(html);

            // -------- tilemap -------- //

            var map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP_0);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET_0, _AssetKeys2.default.SPRITESHEET_0, 70, 70);
                var layer = map.createLayer("surface");
                layer.resizeWorld();
            }

            // -------- xml -------- //

            var xml = this.game.cache.getXML(_AssetKeys2.default.XML_0);
            this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#fff" });
        }
    }, {
        key: "testArray",
        value: function testArray() {
            // -------- atlas -------- //

            this.game.add.sprite(0, 200, _AssetKeys2.default.ATLAS_0, "p1_hurt");

            this.game.add.sprite(20, 220, _AssetKeys2.default.ATLAS_1, "p1_hurt");

            // -------- atlasJSONArray -------- //

            this.game.add.sprite(0, 300, _AssetKeys2.default.ATLAS_JSON_ARRAY_0, "p1_front");

            this.game.add.sprite(20, 320, _AssetKeys2.default.ATLAS_JSON_ARRAY_1, "p1_front");

            // -------- atlasJSONHash -------- //

            this.game.add.sprite(0, 400, _AssetKeys2.default.ATLAS_JSON_HASH_0, "p1_duck");

            this.game.add.sprite(20, 420, _AssetKeys2.default.ATLAS_JSON_HASH_1, "p1_duck");

            // -------- atlasXML -------- //

            this.game.add.sprite(0, 500, _AssetKeys2.default.ATLAS_XML_0, "bomb.png");

            this.game.add.sprite(20, 520, _AssetKeys2.default.ATLAS_XML_1, "bomb.png");

            // -------- binary -------- //

            var binary = this.game.cache.getBinary(_AssetKeys2.default.BINARY_0);
            this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, { fill: "#fff" });

            binary = this.game.cache.getBinary(_AssetKeys2.default.BINARY_1);
            this.game.add.text(120, 520, "binary.byteLength: " + binary.byteLength, { fill: "#fff" });

            // -------- bitmapFont -------- //

            var text = this.game.add.bitmapText(200, 100, _AssetKeys2.default.BITMAP_FONT_0, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            text = this.game.add.bitmapText(220, 120, _AssetKeys2.default.BITMAP_FONT_1, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            // -------- image -------- //

            this.game.add.sprite(0, 0, _AssetKeys2.default.IMAGE_0);

            this.game.add.sprite(20, 20, _AssetKeys2.default.IMAGE_1);

            // -------- images -------- //

            this.game.add.sprite(40, 40, _AssetKeys2.default.IMAGES_0);

            this.game.add.sprite(60, 60, _AssetKeys2.default.IMAGES_1);

            // -------- json -------- //

            var json = this.game.cache.getJSON(_AssetKeys2.default.JSON_0);
            this.game.add.text(100, 130, json.test, { fill: "#fff" });

            json = this.game.cache.getJSON(_AssetKeys2.default.JSON_1);
            this.game.add.text(120, 150, json.test, { fill: "#fff" });

            // -------- physics -------- //

            this.game.physics.startSystem(Phaser.Physics.P2JS);

            var contra = this.game.add.sprite(100, 200, _AssetKeys2.default.IMAGE_0);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS_0, 'contra2', contra);

            contra = this.game.add.sprite(120, 220, _AssetKeys2.default.IMAGE_1);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS_1, 'contra2', contra);

            // -------- script -------- //

            var module = new ScriptTest();
            module.print("game.load.script worked!");

            module = new ScriptTest1();
            module.print("game.load.script worked again!");

            // -------- shader -------- //

            var filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER_0));
            filter.setResolution(400, 600);
            var sprite = this.game.add.sprite();
            sprite.x = 500;
            sprite.y = 150;
            sprite.width = 400;
            sprite.height = 600;
            sprite.filters = [filter];

            filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER_1));
            filter.setResolution(400, 600);
            sprite = this.game.add.sprite();
            sprite.x = 520;
            sprite.y = 170;
            sprite.width = 400;
            sprite.height = 600;
            sprite.filters = [filter];

            // -------- text -------- //

            var html = this.game.cache.getText(_AssetKeys2.default.TEXT_0);
            console.log(html);

            html = this.game.cache.getText(_AssetKeys2.default.TEXT_1);
            console.log(html);

            // -------- tilemap -------- //

            var map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP_0);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET_0, _AssetKeys2.default.SPRITESHEET_0, 70, 70);
                var layer = map.createLayer("surface");
                layer.resizeWorld();
            }

            map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP_1);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET_0, _AssetKeys2.default.SPRITESHEET_0, 70, 70);
                var _layer = map.createLayer("surface");
                _layer.resizeWorld();
            }

            // -------- xml -------- //

            var xml = this.game.cache.getXML(_AssetKeys2.default.XML_0);
            this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#fff" });

            xml = this.game.cache.getXML(_AssetKeys2.default.XML_1);
            this.game.add.text(120, 180, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#fff" });
        }
    }, {
        key: "testObject",
        value: function testObject() {

            // -------- atlas -------- //

            this.game.add.sprite(0, 200, _AssetKeys2.default.ATLAS_0, "p1_hurt");
            this.game.add.sprite(20, 220, _AssetKeys2.default.ATLAS_1, "p1_hurt");
            this.game.add.sprite(40, 240, _AssetKeys2.default.ATLAS_2, "p1_hurt");
            this.game.add.sprite(60, 260, _AssetKeys2.default.ATLAS_3, "p1_hurt");
            this.game.add.sprite(80, 280, _AssetKeys2.default.ATLAS_4, "p1_hurt");
            this.game.add.sprite(100, 300, _AssetKeys2.default.ATLAS_5, "p1_hurt");
            this.game.add.sprite(120, 320, _AssetKeys2.default.ATLAS_6, "carrot");
            this.game.add.sprite(140, 340, _AssetKeys2.default.ATLAS_7, "p1_hurt");
            this.game.add.sprite(160, 360, _AssetKeys2.default.ATLAS_8, "p1_hurt");
            this.game.add.sprite(180, 380, _AssetKeys2.default.ATLAS_9, "p1_hurt");
            console.log("atlas - should see 5 error logs from AssetLoader");

            // -------- atlasJSONArray -------- //

            this.game.add.sprite(20, 300, _AssetKeys2.default.ATLAS_JSON_ARRAY_0, "p1_front");
            this.game.add.sprite(40, 320, _AssetKeys2.default.ATLAS_JSON_ARRAY_1, "p1_front");
            this.game.add.sprite(60, 340, _AssetKeys2.default.ATLAS_JSON_ARRAY_2, "p1_front");
            this.game.add.sprite(80, 360, _AssetKeys2.default.ATLAS_JSON_ARRAY_3, "p1_front");
            this.game.add.sprite(100, 380, _AssetKeys2.default.ATLAS_JSON_ARRAY_4, "p1_front");
            this.game.add.sprite(120, 400, _AssetKeys2.default.ATLAS_JSON_ARRAY_5, "p1_front");
            this.game.add.sprite(140, 420, _AssetKeys2.default.ATLAS_JSON_ARRAY_6, "p1_front");
            this.game.add.sprite(160, 440, _AssetKeys2.default.ATLAS_JSON_ARRAY_7, "p1_front");
            console.log("atlasJSONArray - should see 4 error logs from AssetLoader");

            // -------- atlasJSONHash -------- //

            this.game.add.sprite(0, 400, _AssetKeys2.default.ATLAS_JSON_HASH_0, "p1_duck");
            this.game.add.sprite(20, 420, _AssetKeys2.default.ATLAS_JSON_HASH_1, "p1_duck");
            this.game.add.sprite(40, 440, _AssetKeys2.default.ATLAS_JSON_HASH_2, "p1_duck");
            this.game.add.sprite(60, 460, _AssetKeys2.default.ATLAS_JSON_HASH_3, "p1_duck");
            this.game.add.sprite(80, 480, _AssetKeys2.default.ATLAS_JSON_HASH_4, "p1_duck");
            this.game.add.sprite(100, 500, _AssetKeys2.default.ATLAS_JSON_HASH_5, "p1_duck");
            this.game.add.sprite(120, 520, _AssetKeys2.default.ATLAS_JSON_HASH_6, "p1_duck");
            this.game.add.sprite(140, 540, _AssetKeys2.default.ATLAS_JSON_HASH_7, "p1_duck");
            console.log("atlasJSONHash - should see 4 error logs from AssetLoader");

            // -------- atlasXML -------- //

            this.game.add.sprite(0, 500, _AssetKeys2.default.ATLAS_XML_0, "bomb.png");
            this.game.add.sprite(20, 520, _AssetKeys2.default.ATLAS_XML_1, "bomb.png");
            this.game.add.sprite(40, 540, _AssetKeys2.default.ATLAS_XML_2, "bomb.png");
            this.game.add.sprite(60, 560, _AssetKeys2.default.ATLAS_XML_3, "bomb.png");
            this.game.add.sprite(80, 580, _AssetKeys2.default.ATLAS_XML_4, "bomb.png");
            this.game.add.sprite(100, 600, _AssetKeys2.default.ATLAS_XML_5, "bomb.png");
            this.game.add.sprite(120, 620, _AssetKeys2.default.ATLAS_XML_6, "bomb.png");
            this.game.add.sprite(140, 640, _AssetKeys2.default.ATLAS_XML_7, "bomb.png");
            console.log("atlasXML - should see 4 error logs from AssetLoader");

            // -------- audio -------- //

            this.game.sound.play(_AssetKeys2.default.AUDIO_0);
            this.game.sound.play(_AssetKeys2.default.AUDIO_1);
            this.game.sound.play(_AssetKeys2.default.AUDIO_2);
            this.game.sound.play(_AssetKeys2.default.AUDIO_3);
            this.game.sound.play(_AssetKeys2.default.AUDIO_4);
            console.log("audio - should see 9 error logs from AssetLoader");

            // -------- audioSprite -------- //

            var fx = this.game.add.audio(_AssetKeys2.default.AUDIO_SPRITE_0);
            fx.allowMultiple = true;
            fx.addMarker('alien death', 1, 1.0);
            this.game.add.button(200, 400, _AssetKeys2.default.IMAGE_4, function () {
                fx.play('alien death');
            }, this, 0, 1, 2);
            this.game.add.text(200, 400, "click for audioSprite test");

            fx = this.game.add.audio(_AssetKeys2.default.AUDIO_SPRITE_1);
            fx.allowMultiple = true;
            fx.addMarker('alien death', 1, 1.0);
            this.game.add.button(200, 420, _AssetKeys2.default.IMAGE_4, function () {
                fx.play('alien death');
            }, this, 0, 1, 2);
            this.game.add.text(200, 420, "click for audioSprite test");

            fx = this.game.add.audio(_AssetKeys2.default.AUDIO_SPRITE_2);
            fx.allowMultiple = true;
            fx.addMarker('alien death', 1, 1.0);
            this.game.add.button(200, 440, _AssetKeys2.default.IMAGE_4, function () {
                fx.play('alien death');
            }, this, 0, 1, 2);
            this.game.add.text(200, 440, "click for audioSprite test");

            fx = this.game.add.audio(_AssetKeys2.default.AUDIO_SPRITE_3);
            fx.allowMultiple = true;
            fx.addMarker('alien death', 1, 1.0);
            this.game.add.button(200, 460, _AssetKeys2.default.IMAGE_4, function () {
                fx.play('alien death');
            }, this, 0, 1, 2);
            this.game.add.text(200, 460, "click for audioSprite test");

            console.log("audioSprite - should see 7 error logs from AssetLoader");

            // -------- binary -------- //

            var binary = this.game.cache.getBinary(_AssetKeys2.default.BINARY_0);
            this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, { fill: "#fff" });

            binary = this.game.cache.getBinary(_AssetKeys2.default.BINARY_1);
            this.game.add.text(120, 520, "binary.byteLength: " + binary.byteLength, { fill: "#fff" });

            binary = this.game.cache.getBinary(_AssetKeys2.default.BINARY_2);
            this.game.add.text(140, 540, "binary.byteLength: " + binary.byteLength, { fill: "#fff" });

            console.log("binary - should see 3 error logs from AssetLoader");

            // -------- bitmapFont -------- //

            var text = this.game.add.bitmapText(200, 100, _AssetKeys2.default.BITMAP_FONT_0, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            text = this.game.add.bitmapText(220, 120, _AssetKeys2.default.BITMAP_FONT_1, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            text = this.game.add.bitmapText(240, 140, _AssetKeys2.default.BITMAP_FONT_2, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            text = this.game.add.bitmapText(260, 160, _AssetKeys2.default.BITMAP_FONT_3, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            text = this.game.add.bitmapText(280, 180, _AssetKeys2.default.BITMAP_FONT_4, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            text = this.game.add.bitmapText(300, 200, _AssetKeys2.default.BITMAP_FONT_5, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            text = this.game.add.bitmapText(320, 230, _AssetKeys2.default.BITMAP_FONT_6, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            text = this.game.add.bitmapText(320, 230, _AssetKeys2.default.BITMAP_FONT_7, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            text = this.game.add.bitmapText(320, 230, _AssetKeys2.default.BITMAP_FONT_8, 'Bitmap Fonts!', 64);
            text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

            console.log("bitmapFont - should see 4 error logs from AssetLoader");

            // -------- image -------- //

            this.game.add.sprite(0, 0, _AssetKeys2.default.IMAGE_0);
            this.game.add.sprite(20, 20, _AssetKeys2.default.IMAGE_1);
            this.game.add.sprite(40, 40, _AssetKeys2.default.IMAGE_2);
            this.game.add.sprite(50, 50, _AssetKeys2.default.IMAGE_3);
            this.game.add.sprite(60, 60, _AssetKeys2.default.IMAGE_4);

            console.log("image - should see 3 error logs from AssetLoader");

            // -------- images -------- //

            this.game.add.sprite(700, 160, _AssetKeys2.default.IMAGES_0);
            this.game.add.sprite(720, 180, _AssetKeys2.default.IMAGES_1);

            // -------- json -------- //

            var json = this.game.cache.getJSON(_AssetKeys2.default.JSON_0);
            this.game.add.text(100, 130, json.test, { fill: "#fff" });

            json = this.game.cache.getJSON(_AssetKeys2.default.JSON_1);
            this.game.add.text(120, 150, json.test, { fill: "#fff" });

            json = this.game.cache.getJSON(_AssetKeys2.default.JSON_2);
            this.game.add.text(140, 170, json.test, { fill: "#fff" });

            json = this.game.cache.getJSON(_AssetKeys2.default.JSON_3);
            this.game.add.text(160, 190, json.test, { fill: "#fff" });

            json = this.game.cache.getJSON(_AssetKeys2.default.JSON_4);
            this.game.add.text(180, 210, json.test, { fill: "#fff" });

            console.log("json - should see 3 error logs from AssetLoader");

            // -------- pack -------- //

            this.game.add.image(0, 0, _AssetKeys2.default.IMAGE_5);
            this.game.add.image(20, 20, _AssetKeys2.default.IMAGE_6);

            console.log("pack - should see 1 error log from AssetLoader");

            // -------- physics -------- //

            this.game.physics.startSystem(Phaser.Physics.P2JS);

            var contra = this.game.add.sprite(100, 200, _AssetKeys2.default.IMAGES_0);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS_0, 'contra2', contra);

            contra = this.game.add.sprite(120, 220, _AssetKeys2.default.IMAGES_0);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS_1, 'contra2', contra);

            contra = this.game.add.sprite(140, 240, _AssetKeys2.default.IMAGES_0);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS_2, 'contra2', contra);

            contra = this.game.add.sprite(160, 260, _AssetKeys2.default.IMAGES_0);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS_3, 'contra2', contra);

            contra = this.game.add.sprite(180, 280, _AssetKeys2.default.IMAGES_0);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS_4, 'contra2', contra);

            contra = this.game.add.sprite(200, 300, _AssetKeys2.default.IMAGES_0);
            this.game.physics.enable(contra, Phaser.Physics.P2JS);
            contra.body.loadPolygon(_AssetKeys2.default.PHYSICS_5, 'contra2', contra);

            console.log("physics - should see 4 error logs from AssetLoader");

            // -------- script -------- //

            var module = new ScriptTest();
            module.print("game.load.script for ScriptTest.js worked!");

            module = new ScriptTest1();
            module.print("game.load.script for ScriptTest1.js worked!");

            module = new ScriptTest2();
            module.print("game.load.script for ScriptTest2.js worked!");

            console.log("script - should see 2 error logs from AssetLoader");

            // -------- shader -------- //

            var filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER_0));
            filter.setResolution(400, 600);
            var sprite = this.game.add.sprite();
            sprite.x = 500;
            sprite.y = 150;
            sprite.width = 400;
            sprite.height = 600;
            sprite.filters = [filter];

            filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER_1));
            filter.setResolution(400, 600);
            sprite = this.game.add.sprite();
            sprite.x = 520;
            sprite.y = 170;
            sprite.width = 400;
            sprite.height = 600;
            sprite.filters = [filter];

            filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER_2));
            filter.setResolution(400, 600);
            sprite = this.game.add.sprite();
            sprite.x = 540;
            sprite.y = 190;
            sprite.width = 400;
            sprite.height = 600;
            sprite.filters = [filter];

            filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER_3));
            filter.setResolution(400, 600);
            sprite = this.game.add.sprite();
            sprite.x = 560;
            sprite.y = 210;
            sprite.width = 400;
            sprite.height = 600;
            sprite.filters = [filter];

            filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(_AssetKeys2.default.SHADER_4));
            filter.setResolution(400, 600);
            sprite = this.game.add.sprite();
            sprite.x = 580;
            sprite.y = 230;
            sprite.width = 400;
            sprite.height = 600;
            sprite.filters = [filter];

            console.log("shader - should see 3 error logs from AssetLoader");

            // -------- spritesheet -------- //

            var spritesheet = this.game.add.sprite(0, 130, _AssetKeys2.default.SPRITESHEET_0);
            spritesheet.animations.add("anim");
            spritesheet.animations.play("anim");

            spritesheet = this.game.add.sprite(20, 150, _AssetKeys2.default.SPRITESHEET_1);
            spritesheet.animations.add("anim");
            spritesheet.animations.play("anim");

            console.log("spritesheet - should see 5 error logs from AssetLoader");

            // -------- text -------- //

            var html = this.game.cache.getText(_AssetKeys2.default.TEXT_0);
            console.log(html);

            html = this.game.cache.getText(_AssetKeys2.default.TEXT_1);
            console.log(html);

            html = this.game.cache.getText(_AssetKeys2.default.TEXT_2);
            console.log(html);

            html = this.game.cache.getText(_AssetKeys2.default.TEXT_3);
            console.log(html);

            html = this.game.cache.getText(_AssetKeys2.default.TEXT_4);
            console.log(html);

            console.log("text - should see 3 error logs from AssetLoader");

            // -------- tilemap -------- //

            var map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP_0);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET_0, _AssetKeys2.default.SPRITESHEET_0, 70, 70);
                var layer = map.createLayer("surface");
                layer.resizeWorld();
            }

            map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP_1);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET_0, _AssetKeys2.default.SPRITESHEET_0, 70, 70);
                var _layer2 = map.createLayer("surface");
                _layer2.resizeWorld();
            }

            map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP_2);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET_0, _AssetKeys2.default.SPRITESHEET_0, 70, 70);
                var _layer3 = map.createLayer("surface");
                _layer3.resizeWorld();
            }

            map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP_3);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET_0, _AssetKeys2.default.SPRITESHEET_0, 70, 70);
                var _layer4 = map.createLayer("surface");
                _layer4.resizeWorld();
            }

            map = this.game.add.tilemap(_AssetKeys2.default.TILEMAP_4);
            if (map.getLayerIndex("surface")) {
                map.addTilesetImage(_AssetKeys2.default.SPRITESHEET_0, _AssetKeys2.default.SPRITESHEET_0, 70, 70);
                var _layer5 = map.createLayer("surface");
                _layer5.resizeWorld();
            }

            console.log("tilemap - should see 4 error logs from AssetLoader");

            // -------- video -------- //

            var video = this.game.add.video(_AssetKeys2.default.VIDEO_0);
            video.play(true);
            video.addToWorld(200, 200, 0, 0, 0.3, 0.3);

            video = this.game.add.video(_AssetKeys2.default.VIDEO_1);
            video.play(true);
            video.addToWorld(250, 250, 0, 0, 0.3, 0.3);

            video = this.game.add.video(_AssetKeys2.default.VIDEO_2);
            video.play(true);
            video.addToWorld(300, 300, 0, 0, 0.3, 0.3);

            video = this.game.add.video(_AssetKeys2.default.VIDEO_3);
            video.play(true);
            video.addToWorld(350, 350, 0, 0, 0.3, 0.3);

            console.log("video - should see 3 error logs from AssetLoader");

            // -------- xml -------- //

            var xml = this.game.cache.getXML(_AssetKeys2.default.XML_0);
            this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#fff" });

            xml = this.game.cache.getXML(_AssetKeys2.default.XML_1);
            this.game.add.text(120, 180, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#fff" });

            xml = this.game.cache.getXML(_AssetKeys2.default.XML_2);
            this.game.add.text(140, 200, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#fff" });

            xml = this.game.cache.getXML(_AssetKeys2.default.XML_3);
            this.game.add.text(160, 220, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#fff" });

            xml = this.game.cache.getXML(_AssetKeys2.default.XML_4);
            this.game.add.text(180, 240, xml.firstElementChild.firstElementChild.innerHTML, { fill: "#fff" });

            console.log("xml - should see 3 error logs from AssetLoader");
        }
    }]);

    return PlayState;
}(Phaser.State);

exports.default = PlayState;

},{"./AssetKeys":1,"./GameKeys":4}]},{},[1,2,3,4,5,6])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvQXNzZXRLZXlzLmpzIiwic3JjL0Jvb3RTdGF0ZS5qcyIsInNyYy9HYW1lLmpzIiwic3JjL0dhbWVLZXlzLmpzIiwic3JjL0xvYWRTdGF0ZS5qcyIsInNyYy9QbGF5U3RhdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7OztBQ0FBOzs7Ozs7QUFNQTs7O0lBR00sUzs7OztBQUdOLE9BQU8sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUM7QUFDL0IsY0FBVTtBQUNOLGVBQU87QUFERCxLQURxQjtBQUkvQixzQkFBa0I7QUFDZCxlQUFPO0FBRE8sS0FKYTtBQU8vQixlQUFXO0FBQ1AsZUFBTztBQURBLEtBUG9CO0FBVS9CLGVBQVc7QUFDUCxlQUFPO0FBREEsS0FWb0I7QUFhL0IsZUFBVztBQUNQLGVBQU87QUFEQSxLQWJvQjtBQWdCL0IsZUFBVztBQUNQLGVBQU87QUFEQSxLQWhCb0I7QUFtQi9CLGVBQVc7QUFDUCxlQUFPO0FBREEsS0FuQm9CO0FBc0IvQixlQUFXO0FBQ1AsZUFBTztBQURBLEtBdEJvQjtBQXlCL0IsZUFBVztBQUNQLGVBQU87QUFEQSxLQXpCb0I7QUE0Qi9CLGVBQVc7QUFDUCxlQUFPO0FBREEsS0E1Qm9CO0FBK0IvQixlQUFXO0FBQ1AsZUFBTztBQURBLEtBL0JvQjtBQWtDL0IsZUFBVztBQUNQLGVBQU87QUFEQSxLQWxDb0I7QUFxQy9CLDBCQUFzQjtBQUNsQixlQUFPO0FBRFcsS0FyQ1M7QUF3Qy9CLDBCQUFzQjtBQUNsQixlQUFPO0FBRFcsS0F4Q1M7QUEyQy9CLDBCQUFzQjtBQUNsQixlQUFPO0FBRFcsS0EzQ1M7QUE4Qy9CLDBCQUFzQjtBQUNsQixlQUFPO0FBRFcsS0E5Q1M7QUFpRC9CLDBCQUFzQjtBQUNsQixlQUFPO0FBRFcsS0FqRFM7QUFvRC9CLDBCQUFzQjtBQUNsQixlQUFPO0FBRFcsS0FwRFM7QUF1RC9CLDBCQUFzQjtB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Q0FBTjtBQUNBLGlCQUFLLElBQUwsQ0FBVSxHQUFWLENBQWMsSUFBZCxDQUFtQixHQUFuQixFQUF3QixHQUF4QixFQUE2QixJQUFJLGlCQUFKLENBQXNCLGlCQUF0QixDQUF3QyxTQUFyRSxFQUFnRixFQUFDLE1BQU0sTUFBUCxFQUFoRjs7QUFFQSxrQkFBTSxLQUFLLElBQUwsQ0FBVSxLQUFWLENBQWdCLE1BQWhCLENBQXVCLG9CQUFVLEtBQWpDLENBQU47QUFDQSxpQkFBSyxJQUFMLENBQVUsR0FBVixDQUFjLElBQWQsQ0FBbUIsR0FBbkIsRUFBd0IsR0FBeEIsRUFBNkIsSUFBSSxpQkFBSixDQUFzQixpQkFBdEIsQ0FBd0MsU0FBckUsRUFBZ0YsRUFBQyxNQUFNLE1BQVAsRUFBaEY7O0FBRUEsa0JBQU0sS0FBSyxJQUFMLENBQVUsS0FBVixDQUFnQixNQUFoQixDQUF1QixvQkFBVSxLQUFqQyxDQUFOO0FBQ0EsaUJBQUssSUFBTCxDQUFVLEdBQVYsQ0FBYyxJQUFkLENBQW1CLEdBQW5CLEVBQXdCLEdBQXhCLEVBQTZCLElBQUksaUJBQUosQ0FBc0IsaUJBQXRCLENBQXdDLFNBQXJFLEVBQWdGLEVBQUMsTUFBTSxNQUFQLEVBQWhGOztBQUVBLG9CQUFRLEdBQVIsQ0FBWSxnREFBWjtBQUNIOzs7O0VBdG1CbUIsT0FBTyxLOztrQkF5bUJoQixTIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qKlxuICogQ3JlYXRlZCBieSBHZW5lbGwgUmFkbGV5IGluIDIwMTcuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dyYWRsZXkvQXNzZXRMb2FkZXJcbiAqL1xuXG4vKipcbiAqIENvbnN0YW50cyBtYXRjaGluZyBhc3NldHMuanNvbi5cbiAqL1xuY2xhc3MgQXNzZXRLZXlzIHtcbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoQXNzZXRLZXlzLCB7XG4gICAgXCJBU1NFVFNcIjoge1xuICAgICAgICB2YWx1ZTogXCJhc3NldHNcIlxuICAgIH0sXG4gICAgXCJQUkVMT0FEX1NQUklURVwiOiB7XG4gICAgICAgIHZhbHVlOiBcInByZWxvYWRTcHJpdGVcIlxuICAgIH0sXG4gICAgXCJBVExBU18wXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNUZXN0XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfMVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzVGVzdDFcIlxuICAgIH0sXG4gICAgXCJBVExBU18yXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNUZXN0MlwiXG4gICAgfSxcbiAgICBcIkFUTEFTXzNcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1Rlc3QzXCJcbiAgICB9LFxuICAgIFwiQVRMQVNfNFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzVGVzdDRcIlxuICAgIH0sXG4gICAgXCJBVExBU181XCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNUZXN0NVwiXG4gICAgfSxcbiAgICBcIkFUTEFTXzZcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1Rlc3Q2XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfN1wiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzVGVzdDdcIlxuICAgIH0sXG4gICAgXCJBVExBU184XCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNUZXN0OFwiXG4gICAgfSxcbiAgICBcIkFUTEFTXzlcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1Rlc3Q5XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfSlNPTl9BUlJBWV8wXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNKU09OQXJyYXlUZXN0XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfSlNPTl9BUlJBWV8xXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNKU09OQXJyYXlUZXN0MVwiXG4gICAgfSxcbiAgICBcIkFUTEFTX0pTT05fQVJSQVlfMlwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzSlNPTkFycmF5VGVzdDJcIlxuICAgIH0sXG4gICAgXCJBVExBU19KU09OX0FSUkFZXzNcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc0pTT05BcnJheVRlc3QzXCJcbiAgICB9LFxuICAgIFwiQVRMQVNfSlNPTl9BUlJBWV80XCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNKU09OQXJyYXlUZXN0NFwiXG4gICAgfSxcbiAgICBcIkFUTEFTX0pTT05fQVJSQVlfNVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzSlNPTkFycmF5VGVzdDVcIlxuICAgIH0sXG4gICAgXCJBVExBU19KU09OX0FSUkFZXzZcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc0pTT05BcnJheVRlc3Q2XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfSlNPTl9BUlJBWV83XCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNKU09OQXJyYXlUZXN0N1wiXG4gICAgfSxcbiAgICBcIkFUTEFTX0pTT05fSEFTSF8wXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNKU09OSGFzaFRlc3RcIlxuICAgIH0sXG4gICAgXCJBVExBU19KU09OX0hBU0hfMVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzSlNPTkhhc2hUZXN0MVwiXG4gICAgfSxcbiAgICBcIkFUTEFTX0pTT05fSEFTSF8yXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNKU09OSGFzaFRlc3QyXCJcbiAgICB9LFxuICAgIFwiQVRMQVNfSlNPTl9IQVNIXzNcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc0pTT05IYXNoVGVzdDNcIlxuICAgIH0sXG4gICAgXCJBVExBU19KU09OX0hBU0hfNFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzSlNPTkhhc2hUZXN0NFwiXG4gICAgfSxcbiAgICBcIkFUTEFTX0pTT05fSEFTSF81XCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNKU09OSGFzaFRlc3Q1XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfSlNPTl9IQVNIXzZcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc0pTT05IYXNoVGVzdDZcIlxuICAgIH0sXG4gICAgXCJBVExBU19KU09OX0hBU0hfN1wiOiB7XG4gICAgICAgIHZhbHVlOiBcImF0bGFzSlNPTkhhc2hUZXN0N1wiXG4gICAgfSxcbiAgICBcIkFUTEFTX1hNTF8wXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXRsYXNYTUxUZXN0XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfWE1MXzFcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1hNTFRlc3QxXCJcbiAgICB9LFxuICAgIFwiQVRMQVNfWE1MXzJcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1hNTFRlc3QyXCJcbiAgICB9LFxuICAgIFwiQVRMQVNfWE1MXzNcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1hNTFRlc3QzXCJcbiAgICB9LFxuICAgIFwiQVRMQVNfWE1MXzRcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1hNTFRlc3Q0XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfWE1MXzVcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1hNTFRlc3Q1XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfWE1MXzZcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1hNTFRlc3Q2XCJcbiAgICB9LFxuICAgIFwiQVRMQVNfWE1MXzdcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdGxhc1hNTFRlc3Q3XCJcbiAgICB9LFxuICAgIFwiQVVESU9fMFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF1ZGlvVGVzdFwiXG4gICAgfSxcbiAgICBcIkFVRElPXzFcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdWRpb1Rlc3QxXCJcbiAgICB9LFxuICAgIFwiQVVESU9fMlwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF1ZGlvVGVzdDJcIlxuICAgIH0sXG4gICAgXCJBVURJT18zXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYXVkaW9UZXN0M1wiXG4gICAgfSxcbiAgICBcIkFVRElPXzRcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdWRpb1Rlc3Q0XCJcbiAgICB9LFxuICAgIFwiQVVESU9fU1BSSVRFXzBcIjoge1xuICAgICAgICB2YWx1ZTogXCJhdWRpb1Nwcml0ZVRlc3RcIlxuICAgIH0sXG4gICAgXCJBVURJT19TUFJJVEVfMVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF1ZGlvU3ByaXRlVGVzdDFcIlxuICAgIH0sXG4gICAgXCJBVURJT19TUFJJVEVfMlwiOiB7XG4gICAgICAgIHZhbHVlOiBcImF1ZGlvU3ByaXRlVGVzdDJcIlxuICAgIH0sXG4gICAgXCJBVURJT19TUFJJVEVfM1wiOiB7XG4gICAgICAgIHZhbHVlOiBcImF1ZGlvU3ByaXRlVGVzdDNcIlxuICAgIH0sXG4gICAgXCJCSU5BUllfMFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImJpbmFyeVRlc3RcIlxuICAgIH0sXG4gICAgXCJCSU5BUllfMVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImJpbmFyeVRlc3QxXCJcbiAgICB9LFxuICAgIFwiQklOQVJZXzJcIjoge1xuICAgICAgICB2YWx1ZTogXCJiaW5hcnlUZXN0MlwiXG4gICAgfSxcbiAgICBcIkJJVE1BUF9GT05UXzBcIjoge1xuICAgICAgICB2YWx1ZTogXCJiaXRtYXBGb250VGVzdFwiXG4gICAgfSxcbiAgICBcIkJJVE1BUF9GT05UXzFcIjoge1xuICAgICAgICB2YWx1ZTogXCJiaXRtYXBGb250VGVzdDFcIlxuICAgIH0sXG4gICAgXCJCSVRNQVBfRk9OVF8yXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYml0bWFwRm9udFRlc3QyXCJcbiAgICB9LFxuICAgIFwiQklUTUFQX0ZPTlRfM1wiOiB7XG4gICAgICAgIHZhbHVlOiBcImJpdG1hcEZvbnRUZXN0M1wiXG4gICAgfSxcbiAgICBcIkJJVE1BUF9GT05UXzRcIjoge1xuICAgICAgICB2YWx1ZTogXCJiaXRtYXBGb250VGVzdDRcIlxuICAgIH0sXG4gICAgXCJCSVRNQVBfRk9OVF81XCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYml0bWFwRm9udFRlc3Q1XCJcbiAgICB9LFxuICAgIFwiQklUTUFQX0ZPTlRfNlwiOiB7XG4gICAgICAgIHZhbHVlOiBcImJpdG1hcEZvbnRUZXN0NlwiXG4gICAgfSxcbiAgICBcIkJJVE1BUF9GT05UXzdcIjoge1xuICAgICAgICB2YWx1ZTogXCJiaXRtYXBGb250VGVzdDdcIlxuICAgIH0sXG4gICAgXCJCSVRNQVBfRk9OVF84XCI6IHtcbiAgICAgICAgdmFsdWU6IFwiYml0bWFwRm9udFRlc3Q4XCJcbiAgICB9LFxuICAgIFwiSU1BR0VfMFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImltYWdlVGVzdFwiXG4gICAgfSxcbiAgICBcIklNQUdFXzFcIjoge1xuICAgICAgICB2YWx1ZTogXCJpbWFnZVRlc3QxXCJcbiAgICB9LFxuICAgIFwiSU1BR0VfMlwiOiB7XG4gICAgICAgIHZhbHVlOiBcImltYWdlVGVzdDJcIlxuICAgIH0sXG4gICAgXCJJTUFHRV8zXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiaW1hZ2VUZXN0M1wiXG4gICAgfSxcbiAgICBcIklNQUdFXzRcIjoge1xuICAgICAgICB2YWx1ZTogXCJpbWFnZVRlc3Q0XCJcbiAgICB9LFxuICAgIFwiSU1BR0VfNVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImltYWdlVGVzdDVcIlxuICAgIH0sXG4gICAgXCJJTUFHRV82XCI6IHtcbiAgICAgICAgdmFsdWU6IFwiaW1hZ2VUZXN0NlwiXG4gICAgfSxcbiAgICBcIklNQUdFU18wXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiaW1hZ2VzVGVzdFwiXG4gICAgfSxcbiAgICBcIklNQUdFU18xXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiaW1hZ2VzVGVzdDFcIlxuICAgIH0sXG4gICAgXCJKU09OXzBcIjoge1xuICAgICAgICB2YWx1ZTogXCJqc29uVGVzdFwiXG4gICAgfSxcbiAgICBcIkpTT05fMVwiOiB7XG4gICAgICAgIHZhbHVlOiBcImpzb25UZXN0MVwiXG4gICAgfSxcbiAgICBcIkpTT05fMlwiOiB7XG4gICAgICAgIHZhbHVlOiBcImpzb25UZXN0MlwiXG4gICAgfSxcbiAgICBcIkpTT05fM1wiOiB7XG4gICAgICAgIHZhbHVlOiBcImpzb25UZXN0M1wiXG4gICAgfSxcbiAgICBcIkpTT05fNFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImpzb25UZXN0NFwiXG4gICAgfSxcbiAgICBcIlBIWVNJQ1NfMFwiOiB7XG4gICAgICAgIHZhbHVlOiBcInBoeXNpY3NUZXN0XCJcbiAgICB9LFxuICAgIFwiUEhZU0lDU18xXCI6IHtcbiAgICAgICAgdmFsdWU6IFwicGh5c2ljc1Rlc3QxXCJcbiAgICB9LFxuICAgIFwiUEhZU0lDU18yXCI6IHtcbiAgICAgICAgdmFsdWU6IFwicGh5c2ljc1Rlc3QyXCJcbiAgICB9LFxuICAgIFwiUEhZU0lDU18zXCI6IHtcbiAgICAgICAgdmFsdWU6IFwicGh5c2ljc1Rlc3QzXCJcbiAgICB9LFxuICAgIFwiUEhZU0lDU180XCI6IHtcbiAgICAgICAgdmFsdWU6IFwicGh5c2ljc1Rlc3Q0XCJcbiAgICB9LFxuICAgIFwiUEhZU0lDU181XCI6IHtcbiAgICAgICAgdmFsdWU6IFwicGh5c2ljc1Rlc3Q1XCJcbiAgICB9LFxuICAgIFwiU0hBREVSXzBcIjoge1xuICAgICAgICB2YWx1ZTogXCJzaGFkZXJUZXN0XCJcbiAgICB9LFxuICAgIFwiU0hBREVSXzFcIjoge1xuICAgICAgICB2YWx1ZTogXCJzaGFkZXJUZXN0MVwiXG4gICAgfSxcbiAgICBcIlNIQURFUl8yXCI6IHtcbiAgICAgICAgdmFsdWU6IFwic2hhZGVyVGVzdDJcIlxuICAgIH0sXG4gICAgXCJTSEFERVJfM1wiOiB7XG4gICAgICAgIHZhbHVlOiBcInNoYWRlclRlc3QzXCJcbiAgICB9LFxuICAgIFwiU0hBREVSXzRcIjoge1xuICAgICAgICB2YWx1ZTogXCJzaGFkZXJUZXN0NFwiXG4gICAgfSxcbiAgICBcIlNQUklURVNIRUVUXzBcIjoge1xuICAgICAgICB2YWx1ZTogXCJzcHJpdGVzaGVldFRlc3RcIlxuICAgIH0sXG4gICAgXCJTUFJJVEVTSEVFVF8xXCI6IHtcbiAgICAgICAgdmFsdWU6IFwic3ByaXRlc2hlZXRUZXN0MVwiXG4gICAgfSxcbiAgICBcIlRFWFRfMFwiOiB7XG4gICAgICAgIHZhbHVlOiBcInRleHRUZXN0XCJcbiAgICB9LFxuICAgIFwiVEVYVF8xXCI6IHtcbiAgICAgICAgdmFsdWU6IFwidGV4dFRlc3QxXCJcbiAgICB9LFxuICAgIFwiVEVYVF8yXCI6IHtcbiAgICAgICAgdmFsdWU6IFwidGV4dFRlc3QyXCJcbiAgICB9LFxuICAgIFwiVEVYVF8zXCI6IHtcbiAgICAgICAgdmFsdWU6IFwidGV4dFRlc3QzXCJcbiAgICB9LFxuICAgIFwiVEVYVF80XCI6IHtcbiAgICAgICAgdmFsdWU6IFwidGV4dFRlc3Q0XCJcbiAgICB9LFxuICAgIFwiVElMRU1BUF8wXCI6IHtcbiAgICAgICAgdmFsdWU6IFwidGlsZW1hcFRlc3RcIlxuICAgIH0sXG4gICAgXCJUSUxFTUFQXzFcIjoge1xuICAgICAgICB2YWx1ZTogXCJ0aWxlbWFwVGVzdDFcIlxuICAgIH0sXG4gICAgXCJUSUxFTUFQXzJcIjoge1xuICAgICAgICB2YWx1ZTogXCJ0aWxlbWFwVGVzdDJcIlxuICAgIH0sXG4gICAgXCJUSUxFTUFQXzNcIjoge1xuICAgICAgICB2YWx1ZTogXCJ0aWxlbWFwVGVzdDNcIlxuICAgIH0sXG4gICAgXCJUSUxFTUFQXzRcIjoge1xuICAgICAgICB2YWx1ZTogXCJ0aWxlbWFwVGVzdDRcIlxuICAgIH0sXG4gICAgXCJWSURFT18wXCI6IHtcbiAgICAgICAgdmFsdWU6IFwidmlkZW9UZXN0XCJcbiAgICB9LFxuICAgIFwiVklERU9fMVwiOiB7XG4gICAgICAgIHZhbHVlOiBcInZpZGVvVGVzdDFcIlxuICAgIH0sXG4gICAgXCJWSURFT18yXCI6IHtcbiAgICAgICAgdmFsdWU6IFwidmlkZW9UZXN0MlwiXG4gICAgfSxcbiAgICBcIlZJREVPXzNcIjoge1xuICAgICAgICB2YWx1ZTogXCJ2aWRlb1Rlc3QzXCJcbiAgICB9LFxuICAgIFwiWE1MXzBcIjoge1xuICAgICAgICB2YWx1ZTogXCJ4bWxUZXN0XCJcbiAgICB9LFxuICAgIFwiWE1MXzFcIjoge1xuICAgICAgICB2YWx1ZTogXCJ4bWxUZXN0MVwiXG4gICAgfSxcbiAgICBcIlhNTF8yXCI6IHtcbiAgICAgICAgdmFsdWU6IFwieG1sVGVzdDJcIlxuICAgIH0sXG4gICAgXCJYTUxfM1wiOiB7XG4gICAgICAgIHZhbHVlOiBcInhtbFRlc3QzXCJcbiAgICB9LFxuICAgIFwiWE1MXzRcIjoge1xuICAgICAgICB2YWx1ZTogXCJ4bWxUZXN0NFwiXG4gICAgfVxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEFzc2V0S2V5cztcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBHZW5lbGwgUmFkbGV5IGluIDIwMTcuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dyYWRsZXkvQXNzZXRMb2FkZXJcbiAqL1xuXG5pbXBvcnQgQXNzZXRLZXlzIGZyb20gXCIuL0Fzc2V0S2V5c1wiO1xuaW1wb3J0IEdhbWVLZXlzIGZyb20gXCIuL0dhbWVLZXlzXCI7XG5cbmNsYXNzIEJvb3RTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBwcmVsb2FkKCkge1xuICAgICAgICAvLyB0aGlzLmdhbWUudGVzdCA9IEdhbWVLZXlzLlRFU1RfU1RSSU5HX0VNUFRZO1xuICAgICAgICAvLyB0aGlzLmdhbWUudGVzdCA9IEdhbWVLZXlzLlRFU1RfU1RSSU5HX0VYSVNUSU5HO1xuICAgICAgICAvLyB0aGlzLmdhbWUudGVzdCA9IEdhbWVLZXlzLlRFU1RfQVJSQVlfRU1QVFk7XG4gICAgICAgIC8vIHRoaXMuZ2FtZS50ZXN0ID0gR2FtZUtleXMuVEVTVF9BUlJBWV9FWElTVElORztcbiAgICAgICAgLy8gdGhpcy5nYW1lLnRlc3QgPSBHYW1lS2V5cy5URVNUX09CSkVDVF9FTVBUWTtcbiAgICAgICAgdGhpcy5nYW1lLnRlc3QgPSBHYW1lS2V5cy5URVNUX09CSkVDVF9FWElTVElORztcblxuICAgICAgICB0aGlzLmdhbWUubG9hZC5qc29uKEFzc2V0S2V5cy5BU1NFVFMsIHRoaXMuZ2FtZS50ZXN0KTtcblxuICAgICAgICB0aGlzLmdhbWUubG9hZC5pbWFnZShBc3NldEtleXMuUFJFTE9BRF9TUFJJVEUsIFwiYXNzZXRzL3ByZWxvYWRTcHJpdGUucG5nXCIpO1xuICAgIH1cblxuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KEdhbWVLZXlzLkxPQUQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQm9vdFN0YXRlO1xuIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEdlbmVsbCBSYWRsZXkgaW4gMjAxNy5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vZ3JhZGxleS9Bc3NldExvYWRlclxuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgR2FtZUtleXMgZnJvbSBcIi4vR2FtZUtleXNcIjtcbmltcG9ydCBCb290U3RhdGUgZnJvbSBcIi4vQm9vdFN0YXRlXCI7XG5pbXBvcnQgTG9hZFN0YXRlIGZyb20gXCIuL0xvYWRTdGF0ZVwiO1xuaW1wb3J0IFBsYXlTdGF0ZSBmcm9tIFwiLi9QbGF5U3RhdGVcIjtcblxuY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBzdXBlcig4MDAsIDYwMCwgUGhhc2VyLldFQkdMKTtcbiAgICAgICAgc3VwZXIoODAwLCA2MDAsIFBoYXNlci5DQU5WQVMpO1xuXG4gICAgICAgIHRoaXMuc3RhdGUuYWRkKEdhbWVLZXlzLkJPT1QsIEJvb3RTdGF0ZSk7XG4gICAgICAgIHRoaXMuc3RhdGUuYWRkKEdhbWVLZXlzLkxPQUQsIExvYWRTdGF0ZSk7XG4gICAgICAgIHRoaXMuc3RhdGUuYWRkKEdhbWVLZXlzLlBMQVksIFBsYXlTdGF0ZSk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5zdGFydChHYW1lS2V5cy5CT09UKTtcbiAgICB9XG59XG5cbm5ldyBHYW1lKCk7XG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgR2VuZWxsIFJhZGxleSBpbiAyMDE3LlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFkbGV5L0Fzc2V0TG9hZGVyXG4gKi9cblxuLyoqXG4gKiBNYWluIGNvbnN0cy5cbiAqL1xuY2xhc3MgR2FtZUtleXMge1xufVxuXG5PYmplY3QuZGVmaW5lUHJvcGVydGllcyhHYW1lS2V5cywge1xuICAgIFwiQk9PVFwiOiB7XG4gICAgICAgIHZhbHVlOiBcImJvb3RcIlxuICAgIH0sXG4gICAgXCJMT0FEXCI6IHtcbiAgICAgICAgdmFsdWU6IFwibG9hZFwiXG4gICAgfSxcbiAgICBcIlBMQVlcIjoge1xuICAgICAgICB2YWx1ZTogXCJwbGF5XCJcbiAgICB9LFxuICAgIFwiVEVTVF9TVFJJTkdfRU1QVFlcIjoge1xuICAgICAgICB2YWx1ZTogXCJkYXRhL3N0cmluZy9lbXB0eS5qc29uXCJcbiAgICB9LFxuICAgIFwiVEVTVF9TVFJJTkdfRVhJU1RJTkdcIjp7XG4gICAgICAgIHZhbHVlOlwiZGF0YS9zdHJpbmcvZXhpc3RpbmcuanNvblwiXG4gICAgfSxcbiAgICBcIlRFU1RfQVJSQVlfRU1QVFlcIjoge1xuICAgICAgICB2YWx1ZTogXCJkYXRhL2FycmF5L2VtcHR5Lmpzb25cIlxuICAgIH0sXG4gICAgXCJURVNUX0FSUkFZX0VYSVNUSU5HXCI6e1xuICAgICAgICB2YWx1ZTpcImRhdGEvYXJyYXkvZXhpc3RpbmcuanNvblwiXG4gICAgfSxcbiAgICBcIlRFU1RfT0JKRUNUX0VNUFRZXCI6IHtcbiAgICAgICAgdmFsdWU6IFwiZGF0YS9vYmplY3QvZW1wdHkuanNvblwiXG4gICAgfSxcbiAgICBcIlRFU1RfT0JKRUNUX0VYSVNUSU5HXCI6e1xuICAgICAgICB2YWx1ZTpcImRhdGEvb2JqZWN0L2V4aXN0aW5nLmpzb25cIlxuICAgIH1cbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBHYW1lS2V5cztcbiIsIi8qKlxuICogQ3JlYXRlZCBieSBHZW5lbGwgUmFkbGV5IGluIDIwMTcuXG4gKlxuICogaHR0cHM6Ly9naXRodWIuY29tL2dyYWRsZXkvQXNzZXRMb2FkZXJcbiAqL1xuXG5pbXBvcnQgQXNzZXRLZXlzIGZyb20gXCIuL0Fzc2V0S2V5c1wiO1xuaW1wb3J0IEdhbWVLZXlzIGZyb20gXCIuL0dhbWVLZXlzXCI7XG5cbmNsYXNzIExvYWRTdGF0ZSBleHRlbmRzIFBoYXNlci5TdGF0ZSB7XG5cbiAgICBwcmVsb2FkKCkge1xuICAgICAgICBsZXQgcHJlbG9hZGJhciA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIEFzc2V0S2V5cy5QUkVMT0FEX1NQUklURSk7XG4gICAgICAgIHByZWxvYWRiYXIueCA9ICh0aGlzLmdhbWUud2lkdGggLSBwcmVsb2FkYmFyLndpZHRoKSAvIDI7XG4gICAgICAgIHByZWxvYWRiYXIueSA9ICh0aGlzLmdhbWUuaGVpZ2h0IC0gcHJlbG9hZGJhci5oZWlnaHQpIC8gMjtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQuc2V0UHJlbG9hZFNwcml0ZShwcmVsb2FkYmFyKTtcblxuICAgICAgICBuZXcgQXNzZXRMb2FkZXIodGhpcy5nYW1lLCB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihBc3NldEtleXMuQVNTRVRTKSk7XG5cbiAgICAgICAgdGhpcy5fbG9hZGluZ01zZyA9IFwiTG9hZGluZy4uLiBcIjtcbiAgICAgICAgdGhpcy5fdGV4dCA9IHRoaXMuZ2FtZS5hZGQudGV4dCgwLCAwLCB0aGlzLl9sb2FkaW5nTXNnLCB7ZmlsbDogXCIjZmZmZmZmXCJ9KTtcbiAgICAgICAgdGhpcy5fdGV4dC54ID0gKHRoaXMuZ2FtZS53aWR0aCAtIHRoaXMuX3RleHQud2lkdGgpIC8gMjtcbiAgICAgICAgdGhpcy5fdGV4dC55ID0gdGhpcy5nYW1lLmhlaWdodCAtIHRoaXMuX3RleHQuaGVpZ2h0O1xuXG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uRmlsZUNvbXBsZXRlLmFkZCh0aGlzLm9uRmlsZUNvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLmxvYWQub25Mb2FkQ29tcGxldGUuYWRkKHRoaXMub25Mb2FkQ29tcGxldGUsIHRoaXMpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwcm9ncmVzcyAtIFBlcmNlbnQgbG9hZGluZyBwcm9ncmVzcyBhdCB0aW1lIG9mIGZpbGUgbG9hZFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjYWNoZUtleSAtICBLZXkgb2YgZmlsZSBsb2FkZWRcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHN1Y2Nlc3MgLSBJZiBmaWxlIHN1Y2NlZWRlZCBsb2FkZWRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdG90YWxMb2FkZWQgLSBGaWxlcyBsb2FkZWQgc28gZmFyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRvdGFsRmlsZXMgLSBGaWxlcyB0byBiZSBsb2FkZWRcbiAgICAgKi9cbiAgICBvbkZpbGVDb21wbGV0ZShwcm9ncmVzcywgY2FjaGVLZXksIHN1Y2Nlc3MsIHRvdGFsTG9hZGVkLCB0b3RhbEZpbGVzKSB7XG4gICAgICAgIHRoaXMuX3RleHQudGV4dCA9IHRoaXMuX2xvYWRpbmdNc2cgKyBwcm9ncmVzcyArIFwiJVwiO1xuXG4gICAgICAgIGlmIChwcm9ncmVzcyA9PT0gMTAwKSB7XG4gICAgICAgICAgICB0aGlzLmdhbWUubG9hZC5vbkZpbGVDb21wbGV0ZS5yZW1vdmUodGhpcy5vbkZpbGVDb21wbGV0ZSwgdGhpcyk7XG4gICAgICAgICAgICB0aGlzLl90ZXh0LnRleHQgPSBcIkxvYWRlZFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25Mb2FkQ29tcGxldGUoKSB7XG4gICAgICAgIHRoaXMuZ2FtZS5sb2FkLm9uTG9hZENvbXBsZXRlLnJlbW92ZSh0aGlzLm9uTG9hZENvbXBsZXRlLCB0aGlzKTtcbiAgICAgICAgdGhpcy5nYW1lLnN0YXRlLnN0YXJ0KEdhbWVLZXlzLlBMQVkpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9hZFN0YXRlO1xuXG4iLCIvKipcbiAqIENyZWF0ZWQgYnkgR2VuZWxsIFJhZGxleSBpbiAyMDE3LlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9ncmFkbGV5L0Fzc2V0TG9hZGVyXG4gKi9cblxuaW1wb3J0IEFzc2V0S2V5cyBmcm9tIFwiLi9Bc3NldEtleXNcIjtcbmltcG9ydCBHYW1lS2V5cyBmcm9tIFwiLi9HYW1lS2V5c1wiO1xuXG5jbGFzcyBQbGF5U3RhdGUgZXh0ZW5kcyBQaGFzZXIuU3RhdGUge1xuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLmdhbWUudGVzdCkge1xuICAgICAgICAgICAgY2FzZSBHYW1lS2V5cy5URVNUX1NUUklOR19FWElTVElORzpcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RTdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgR2FtZUtleXMuVEVTVF9BUlJBWV9FWElTVElORzpcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RBcnJheSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBHYW1lS2V5cy5URVNUX09CSkVDVF9FWElTVElORzpcbiAgICAgICAgICAgICAgICB0aGlzLnRlc3RPYmplY3QoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRlc3RTdHJpbmcoKSB7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXMgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAyMDAsIEFzc2V0S2V5cy5BVExBU18wLCBcInAxX2h1cnRcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXNKU09OQXJyYXkgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAzMDAsIEFzc2V0S2V5cy5BVExBU19KU09OX0FSUkFZXzAsIFwicDFfZnJvbnRcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXNKU09OSGFzaCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDQwMCwgQXNzZXRLZXlzLkFUTEFTX0pTT05fSEFTSF8wLCBcInAxX2R1Y2tcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXNYTUwgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCA1MDAsIEFzc2V0S2V5cy5BVExBU19YTUxfMCwgXCJib21iLnBuZ1wiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBiaW5hcnkgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgYmluYXJ5ID0gdGhpcy5nYW1lLmNhY2hlLmdldEJpbmFyeShBc3NldEtleXMuQklOQVJZXzApO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnRleHQoMTAwLCA1MDAsIFwiYmluYXJ5LmJ5dGVMZW5ndGg6IFwiICsgYmluYXJ5LmJ5dGVMZW5ndGgsIHtmaWxsOiBcIiNmZmZcIn0pO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGJpdG1hcEZvbnQgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuZ2FtZS5hZGQuYml0bWFwVGV4dCgyMDAsIDEwMCwgQXNzZXRLZXlzLkJJVE1BUF9GT05UXzAsICdCaXRtYXAgRm9udHMhJywgNjQpO1xuICAgICAgICB0ZXh0LnNldFRleHQoJ0JpdG1hcCBGb250cyFcXG54OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueCkgKyAnIHk6ICcgKyBNYXRoLnJvdW5kKHRoaXMuZ2FtZS5pbnB1dC55KSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gaW1hZ2UgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAwLCBBc3NldEtleXMuSU1BR0VfMCk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0ganNvbiAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBqc29uID0gdGhpcy5nYW1lLmNhY2hlLmdldEpTT04oQXNzZXRLZXlzLkpTT05fMCk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMDAsIDEzMCwganNvbi50ZXN0LCB7ZmlsbDogXCIjZmZmXCJ9KTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBwaHlzaWNzIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuUDJKUyk7XG4gICAgICAgIGxldCBjb250cmEgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxMDAsIDIwMCwgQXNzZXRLZXlzLklNQUdFXzApO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoY29udHJhLCBQaGFzZXIuUGh5c2ljcy5QMkpTKTtcbiAgICAgICAgY29udHJhLmJvZHkubG9hZFBvbHlnb24oQXNzZXRLZXlzLlBIWVNJQ1NfMCwgJ2NvbnRyYTInLCBjb250cmEpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHNjcmlwdCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBtb2R1bGUgPSBuZXcgU2NyaXB0VGVzdCgpO1xuICAgICAgICBtb2R1bGUucHJpbnQoXCJnYW1lLmxvYWQuc2NyaXB0IHdvcmtlZCFcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gc2hhZGVyIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGZpbHRlciA9IG5ldyBQaGFzZXIuRmlsdGVyKHRoaXMuZ2FtZSwgbnVsbCwgdGhpcy5nYW1lLmNhY2hlLmdldFNoYWRlcihBc3NldEtleXMuU0hBREVSXzApKTtcbiAgICAgICAgZmlsdGVyLnNldFJlc29sdXRpb24oNDAwLCA2MDApO1xuXG4gICAgICAgIGxldCBzcHJpdGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgpO1xuICAgICAgICBzcHJpdGUueCA9IDUwMDtcbiAgICAgICAgc3ByaXRlLnkgPSAxNTA7XG4gICAgICAgIHNwcml0ZS53aWR0aCA9IDQwMDtcbiAgICAgICAgc3ByaXRlLmhlaWdodCA9IDYwMDtcblxuICAgICAgICBzcHJpdGUuZmlsdGVycyA9IFtmaWx0ZXJdO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHRleHQgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgaHRtbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRUZXh0KEFzc2V0S2V5cy5URVhUXzApO1xuICAgICAgICBjb25zb2xlLmxvZyhodG1sKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSB0aWxlbWFwIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IG1hcCA9IHRoaXMuZ2FtZS5hZGQudGlsZW1hcChBc3NldEtleXMuVElMRU1BUF8wKTtcbiAgICAgICAgaWYgKG1hcC5nZXRMYXllckluZGV4KFwic3VyZmFjZVwiKSkge1xuICAgICAgICAgICAgbWFwLmFkZFRpbGVzZXRJbWFnZShBc3NldEtleXMuU1BSSVRFU0hFRVRfMCwgQXNzZXRLZXlzLlNQUklURVNIRUVUXzAsIDcwLCA3MCk7XG4gICAgICAgICAgICBsZXQgbGF5ZXIgPSBtYXAuY3JlYXRlTGF5ZXIoXCJzdXJmYWNlXCIpO1xuICAgICAgICAgICAgbGF5ZXIucmVzaXplV29ybGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tIHhtbCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCB4bWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0WE1MKEFzc2V0S2V5cy5YTUxfMCk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMDAsIDE2MCwgeG1sLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCwge2ZpbGw6IFwiI2ZmZlwifSk7XG4gICAgfVxuXG4gICAgdGVzdEFycmF5KCkge1xuICAgICAgICAvLyAtLS0tLS0tLSBhdGxhcyAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDIwMCwgQXNzZXRLZXlzLkFUTEFTXzAsIFwicDFfaHVydFwiKTtcblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgyMCwgMjIwLCBBc3NldEtleXMuQVRMQVNfMSwgXCJwMV9odXJ0XCIpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGF0bGFzSlNPTkFycmF5IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgMzAwLCBBc3NldEtleXMuQVRMQVNfSlNPTl9BUlJBWV8wLCBcInAxX2Zyb250XCIpO1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDIwLCAzMjAsIEFzc2V0S2V5cy5BVExBU19KU09OX0FSUkFZXzEsIFwicDFfZnJvbnRcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXNKU09OSGFzaCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDQwMCwgQXNzZXRLZXlzLkFUTEFTX0pTT05fSEFTSF8wLCBcInAxX2R1Y2tcIik7XG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMjAsIDQyMCwgQXNzZXRLZXlzLkFUTEFTX0pTT05fSEFTSF8xLCBcInAxX2R1Y2tcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXNYTUwgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCA1MDAsIEFzc2V0S2V5cy5BVExBU19YTUxfMCwgXCJib21iLnBuZ1wiKTtcblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgyMCwgNTIwLCBBc3NldEtleXMuQVRMQVNfWE1MXzEsIFwiYm9tYi5wbmdcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYmluYXJ5IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGJpbmFyeSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRCaW5hcnkoQXNzZXRLZXlzLkJJTkFSWV8wKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEwMCwgNTAwLCBcImJpbmFyeS5ieXRlTGVuZ3RoOiBcIiArIGJpbmFyeS5ieXRlTGVuZ3RoLCB7ZmlsbDogXCIjZmZmXCJ9KTtcblxuICAgICAgICBiaW5hcnkgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0QmluYXJ5KEFzc2V0S2V5cy5CSU5BUllfMSk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMjAsIDUyMCwgXCJiaW5hcnkuYnl0ZUxlbmd0aDogXCIgKyBiaW5hcnkuYnl0ZUxlbmd0aCwge2ZpbGw6IFwiI2ZmZlwifSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYml0bWFwRm9udCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5nYW1lLmFkZC5iaXRtYXBUZXh0KDIwMCwgMTAwLCBBc3NldEtleXMuQklUTUFQX0ZPTlRfMCwgJ0JpdG1hcCBGb250cyEnLCA2NCk7XG4gICAgICAgIHRleHQuc2V0VGV4dCgnQml0bWFwIEZvbnRzIVxcbng6ICcgKyBNYXRoLnJvdW5kKHRoaXMuZ2FtZS5pbnB1dC54KSArICcgeTogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LnkpKTtcblxuICAgICAgICB0ZXh0ID0gdGhpcy5nYW1lLmFkZC5iaXRtYXBUZXh0KDIyMCwgMTIwLCBBc3NldEtleXMuQklUTUFQX0ZPTlRfMSwgJ0JpdG1hcCBGb250cyEnLCA2NCk7XG4gICAgICAgIHRleHQuc2V0VGV4dCgnQml0bWFwIEZvbnRzIVxcbng6ICcgKyBNYXRoLnJvdW5kKHRoaXMuZ2FtZS5pbnB1dC54KSArICcgeTogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LnkpKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBpbWFnZSAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDAsIEFzc2V0S2V5cy5JTUFHRV8wKTtcblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgyMCwgMjAsIEFzc2V0S2V5cy5JTUFHRV8xKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBpbWFnZXMgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSg0MCwgNDAsIEFzc2V0S2V5cy5JTUFHRVNfMCk7XG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoNjAsIDYwLCBBc3NldEtleXMuSU1BR0VTXzEpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGpzb24gLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQganNvbiA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKEFzc2V0S2V5cy5KU09OXzApO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnRleHQoMTAwLCAxMzAsIGpzb24udGVzdCwge2ZpbGw6IFwiI2ZmZlwifSk7XG5cbiAgICAgICAganNvbiA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRKU09OKEFzc2V0S2V5cy5KU09OXzEpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnRleHQoMTIwLCAxNTAsIGpzb24udGVzdCwge2ZpbGw6IFwiI2ZmZlwifSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gcGh5c2ljcyAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnN0YXJ0U3lzdGVtKFBoYXNlci5QaHlzaWNzLlAySlMpO1xuXG4gICAgICAgIGxldCBjb250cmEgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxMDAsIDIwMCwgQXNzZXRLZXlzLklNQUdFXzApO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoY29udHJhLCBQaGFzZXIuUGh5c2ljcy5QMkpTKTtcbiAgICAgICAgY29udHJhLmJvZHkubG9hZFBvbHlnb24oQXNzZXRLZXlzLlBIWVNJQ1NfMCwgJ2NvbnRyYTInLCBjb250cmEpO1xuXG4gICAgICAgIGNvbnRyYSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDEyMCwgMjIwLCBBc3NldEtleXMuSU1BR0VfMSk7XG4gICAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLmVuYWJsZShjb250cmEsIFBoYXNlci5QaHlzaWNzLlAySlMpO1xuICAgICAgICBjb250cmEuYm9keS5sb2FkUG9seWdvbihBc3NldEtleXMuUEhZU0lDU18xLCAnY29udHJhMicsIGNvbnRyYSk7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gc2NyaXB0IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IG1vZHVsZSA9IG5ldyBTY3JpcHRUZXN0KCk7XG4gICAgICAgIG1vZHVsZS5wcmludChcImdhbWUubG9hZC5zY3JpcHQgd29ya2VkIVwiKTtcblxuICAgICAgICBtb2R1bGUgPSBuZXcgU2NyaXB0VGVzdDEoKTtcbiAgICAgICAgbW9kdWxlLnByaW50KFwiZ2FtZS5sb2FkLnNjcmlwdCB3b3JrZWQgYWdhaW4hXCIpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHNoYWRlciAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBmaWx0ZXIgPSBuZXcgUGhhc2VyLkZpbHRlcih0aGlzLmdhbWUsIG51bGwsIHRoaXMuZ2FtZS5jYWNoZS5nZXRTaGFkZXIoQXNzZXRLZXlzLlNIQURFUl8wKSk7XG4gICAgICAgIGZpbHRlci5zZXRSZXNvbHV0aW9uKDQwMCwgNjAwKTtcbiAgICAgICAgbGV0IHNwcml0ZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKCk7XG4gICAgICAgIHNwcml0ZS54ID0gNTAwO1xuICAgICAgICBzcHJpdGUueSA9IDE1MDtcbiAgICAgICAgc3ByaXRlLndpZHRoID0gNDAwO1xuICAgICAgICBzcHJpdGUuaGVpZ2h0ID0gNjAwO1xuICAgICAgICBzcHJpdGUuZmlsdGVycyA9IFtmaWx0ZXJdO1xuXG4gICAgICAgIGZpbHRlciA9IG5ldyBQaGFzZXIuRmlsdGVyKHRoaXMuZ2FtZSwgbnVsbCwgdGhpcy5nYW1lLmNhY2hlLmdldFNoYWRlcihBc3NldEtleXMuU0hBREVSXzEpKTtcbiAgICAgICAgZmlsdGVyLnNldFJlc29sdXRpb24oNDAwLCA2MDApO1xuICAgICAgICBzcHJpdGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgpO1xuICAgICAgICBzcHJpdGUueCA9IDUyMDtcbiAgICAgICAgc3ByaXRlLnkgPSAxNzA7XG4gICAgICAgIHNwcml0ZS53aWR0aCA9IDQwMDtcbiAgICAgICAgc3ByaXRlLmhlaWdodCA9IDYwMDtcbiAgICAgICAgc3ByaXRlLmZpbHRlcnMgPSBbZmlsdGVyXTtcblxuICAgICAgICAvLyAtLS0tLS0tLSB0ZXh0IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0VGV4dChBc3NldEtleXMuVEVYVF8wKTtcbiAgICAgICAgY29uc29sZS5sb2coaHRtbCk7XG5cbiAgICAgICAgaHRtbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRUZXh0KEFzc2V0S2V5cy5URVhUXzEpO1xuICAgICAgICBjb25zb2xlLmxvZyhodG1sKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSB0aWxlbWFwIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IG1hcCA9IHRoaXMuZ2FtZS5hZGQudGlsZW1hcChBc3NldEtleXMuVElMRU1BUF8wKTtcbiAgICAgICAgaWYgKG1hcC5nZXRMYXllckluZGV4KFwic3VyZmFjZVwiKSkge1xuICAgICAgICAgICAgbWFwLmFkZFRpbGVzZXRJbWFnZShBc3NldEtleXMuU1BSSVRFU0hFRVRfMCwgQXNzZXRLZXlzLlNQUklURVNIRUVUXzAsIDcwLCA3MCk7XG4gICAgICAgICAgICBsZXQgbGF5ZXIgPSBtYXAuY3JlYXRlTGF5ZXIoXCJzdXJmYWNlXCIpO1xuICAgICAgICAgICAgbGF5ZXIucmVzaXplV29ybGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcCA9IHRoaXMuZ2FtZS5hZGQudGlsZW1hcChBc3NldEtleXMuVElMRU1BUF8xKTtcbiAgICAgICAgaWYgKG1hcC5nZXRMYXllckluZGV4KFwic3VyZmFjZVwiKSkge1xuICAgICAgICAgICAgbWFwLmFkZFRpbGVzZXRJbWFnZShBc3NldEtleXMuU1BSSVRFU0hFRVRfMCwgQXNzZXRLZXlzLlNQUklURVNIRUVUXzAsIDcwLCA3MCk7XG4gICAgICAgICAgICBsZXQgbGF5ZXIgPSBtYXAuY3JlYXRlTGF5ZXIoXCJzdXJmYWNlXCIpO1xuICAgICAgICAgICAgbGF5ZXIucmVzaXplV29ybGQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIC0tLS0tLS0tIHhtbCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCB4bWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0WE1MKEFzc2V0S2V5cy5YTUxfMCk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMDAsIDE2MCwgeG1sLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCwge2ZpbGw6IFwiI2ZmZlwifSk7XG5cbiAgICAgICAgeG1sID0gdGhpcy5nYW1lLmNhY2hlLmdldFhNTChBc3NldEtleXMuWE1MXzEpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnRleHQoMTIwLCAxODAsIHhtbC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwsIHtmaWxsOiBcIiNmZmZcIn0pO1xuICAgIH1cblxuICAgIHRlc3RPYmplY3QoKSB7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXMgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAyMDAsIEFzc2V0S2V5cy5BVExBU18wLCBcInAxX2h1cnRcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDIwLCAyMjAsIEFzc2V0S2V5cy5BVExBU18xLCBcInAxX2h1cnRcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDQwLCAyNDAsIEFzc2V0S2V5cy5BVExBU18yLCBcInAxX2h1cnRcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDYwLCAyNjAsIEFzc2V0S2V5cy5BVExBU18zLCBcInAxX2h1cnRcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDgwLCAyODAsIEFzc2V0S2V5cy5BVExBU180LCBcInAxX2h1cnRcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDEwMCwgMzAwLCBBc3NldEtleXMuQVRMQVNfNSwgXCJwMV9odXJ0XCIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxMjAsIDMyMCwgQXNzZXRLZXlzLkFUTEFTXzYsIFwiY2Fycm90XCIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxNDAsIDM0MCwgQXNzZXRLZXlzLkFUTEFTXzcsIFwicDFfaHVydFwiKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMTYwLCAzNjAsIEFzc2V0S2V5cy5BVExBU184LCBcInAxX2h1cnRcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDE4MCwgMzgwLCBBc3NldEtleXMuQVRMQVNfOSwgXCJwMV9odXJ0XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImF0bGFzIC0gc2hvdWxkIHNlZSA1IGVycm9yIGxvZ3MgZnJvbSBBc3NldExvYWRlclwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBhdGxhc0pTT05BcnJheSAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDIwLCAzMDAsIEFzc2V0S2V5cy5BVExBU19KU09OX0FSUkFZXzAsIFwicDFfZnJvbnRcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDQwLCAzMjAsIEFzc2V0S2V5cy5BVExBU19KU09OX0FSUkFZXzEsIFwicDFfZnJvbnRcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDYwLCAzNDAsIEFzc2V0S2V5cy5BVExBU19KU09OX0FSUkFZXzIsIFwicDFfZnJvbnRcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDgwLCAzNjAsIEFzc2V0S2V5cy5BVExBU19KU09OX0FSUkFZXzMsIFwicDFfZnJvbnRcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDEwMCwgMzgwLCBBc3NldEtleXMuQVRMQVNfSlNPTl9BUlJBWV80LCBcInAxX2Zyb250XCIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxMjAsIDQwMCwgQXNzZXRLZXlzLkFUTEFTX0pTT05fQVJSQVlfNSwgXCJwMV9mcm9udFwiKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMTQwLCA0MjAsIEFzc2V0S2V5cy5BVExBU19KU09OX0FSUkFZXzYsIFwicDFfZnJvbnRcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDE2MCwgNDQwLCBBc3NldEtleXMuQVRMQVNfSlNPTl9BUlJBWV83LCBcInAxX2Zyb250XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImF0bGFzSlNPTkFycmF5IC0gc2hvdWxkIHNlZSA0IGVycm9yIGxvZ3MgZnJvbSBBc3NldExvYWRlclwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBhdGxhc0pTT05IYXNoIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMCwgNDAwLCBBc3NldEtleXMuQVRMQVNfSlNPTl9IQVNIXzAsIFwicDFfZHVja1wiKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMjAsIDQyMCwgQXNzZXRLZXlzLkFUTEFTX0pTT05fSEFTSF8xLCBcInAxX2R1Y2tcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDQwLCA0NDAsIEFzc2V0S2V5cy5BVExBU19KU09OX0hBU0hfMiwgXCJwMV9kdWNrXCIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSg2MCwgNDYwLCBBc3NldEtleXMuQVRMQVNfSlNPTl9IQVNIXzMsIFwicDFfZHVja1wiKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoODAsIDQ4MCwgQXNzZXRLZXlzLkFUTEFTX0pTT05fSEFTSF80LCBcInAxX2R1Y2tcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDEwMCwgNTAwLCBBc3NldEtleXMuQVRMQVNfSlNPTl9IQVNIXzUsIFwicDFfZHVja1wiKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMTIwLCA1MjAsIEFzc2V0S2V5cy5BVExBU19KU09OX0hBU0hfNiwgXCJwMV9kdWNrXCIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxNDAsIDU0MCwgQXNzZXRLZXlzLkFUTEFTX0pTT05fSEFTSF83LCBcInAxX2R1Y2tcIik7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYXRsYXNKU09OSGFzaCAtIHNob3VsZCBzZWUgNCBlcnJvciBsb2dzIGZyb20gQXNzZXRMb2FkZXJcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYXRsYXNYTUwgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCA1MDAsIEFzc2V0S2V5cy5BVExBU19YTUxfMCwgXCJib21iLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoMjAsIDUyMCwgQXNzZXRLZXlzLkFUTEFTX1hNTF8xLCBcImJvbWIucG5nXCIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSg0MCwgNTQwLCBBc3NldEtleXMuQVRMQVNfWE1MXzIsIFwiYm9tYi5wbmdcIik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDYwLCA1NjAsIEFzc2V0S2V5cy5BVExBU19YTUxfMywgXCJib21iLnBuZ1wiKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoODAsIDU4MCwgQXNzZXRLZXlzLkFUTEFTX1hNTF80LCBcImJvbWIucG5nXCIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxMDAsIDYwMCwgQXNzZXRLZXlzLkFUTEFTX1hNTF81LCBcImJvbWIucG5nXCIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxMjAsIDYyMCwgQXNzZXRLZXlzLkFUTEFTX1hNTF82LCBcImJvbWIucG5nXCIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgxNDAsIDY0MCwgQXNzZXRLZXlzLkFUTEFTX1hNTF83LCBcImJvbWIucG5nXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImF0bGFzWE1MIC0gc2hvdWxkIHNlZSA0IGVycm9yIGxvZ3MgZnJvbSBBc3NldExvYWRlclwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBhdWRpbyAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5zb3VuZC5wbGF5KEFzc2V0S2V5cy5BVURJT18wKTtcbiAgICAgICAgdGhpcy5nYW1lLnNvdW5kLnBsYXkoQXNzZXRLZXlzLkFVRElPXzEpO1xuICAgICAgICB0aGlzLmdhbWUuc291bmQucGxheShBc3NldEtleXMuQVVESU9fMik7XG4gICAgICAgIHRoaXMuZ2FtZS5zb3VuZC5wbGF5KEFzc2V0S2V5cy5BVURJT18zKTtcbiAgICAgICAgdGhpcy5nYW1lLnNvdW5kLnBsYXkoQXNzZXRLZXlzLkFVRElPXzQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcImF1ZGlvIC0gc2hvdWxkIHNlZSA5IGVycm9yIGxvZ3MgZnJvbSBBc3NldExvYWRlclwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBhdWRpb1Nwcml0ZSAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBmeCA9IHRoaXMuZ2FtZS5hZGQuYXVkaW8oQXNzZXRLZXlzLkFVRElPX1NQUklURV8wKTtcbiAgICAgICAgZnguYWxsb3dNdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIGZ4LmFkZE1hcmtlcignYWxpZW4gZGVhdGgnLCAxLCAxLjApO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLmJ1dHRvbigyMDAsIDQwMCwgQXNzZXRLZXlzLklNQUdFXzQsICgpID0+IHtcbiAgICAgICAgICAgIGZ4LnBsYXkoJ2FsaWVuIGRlYXRoJyk7XG4gICAgICAgIH0sIHRoaXMsIDAsIDEsIDIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnRleHQoMjAwLCA0MDAsIFwiY2xpY2sgZm9yIGF1ZGlvU3ByaXRlIHRlc3RcIik7XG5cbiAgICAgICAgZnggPSB0aGlzLmdhbWUuYWRkLmF1ZGlvKEFzc2V0S2V5cy5BVURJT19TUFJJVEVfMSk7XG4gICAgICAgIGZ4LmFsbG93TXVsdGlwbGUgPSB0cnVlO1xuICAgICAgICBmeC5hZGRNYXJrZXIoJ2FsaWVuIGRlYXRoJywgMSwgMS4wKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5idXR0b24oMjAwLCA0MjAsIEFzc2V0S2V5cy5JTUFHRV80LCAoKSA9PiB7XG4gICAgICAgICAgICBmeC5wbGF5KCdhbGllbiBkZWF0aCcpO1xuICAgICAgICB9LCB0aGlzLCAwLCAxLCAyKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDIwMCwgNDIwLCBcImNsaWNrIGZvciBhdWRpb1Nwcml0ZSB0ZXN0XCIpO1xuXG4gICAgICAgIGZ4ID0gdGhpcy5nYW1lLmFkZC5hdWRpbyhBc3NldEtleXMuQVVESU9fU1BSSVRFXzIpO1xuICAgICAgICBmeC5hbGxvd011bHRpcGxlID0gdHJ1ZTtcbiAgICAgICAgZnguYWRkTWFya2VyKCdhbGllbiBkZWF0aCcsIDEsIDEuMCk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuYnV0dG9uKDIwMCwgNDQwLCBBc3NldEtleXMuSU1BR0VfNCwgKCkgPT4ge1xuICAgICAgICAgICAgZngucGxheSgnYWxpZW4gZGVhdGgnKTtcbiAgICAgICAgfSwgdGhpcywgMCwgMSwgMik7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgyMDAsIDQ0MCwgXCJjbGljayBmb3IgYXVkaW9TcHJpdGUgdGVzdFwiKTtcblxuICAgICAgICBmeCA9IHRoaXMuZ2FtZS5hZGQuYXVkaW8oQXNzZXRLZXlzLkFVRElPX1NQUklURV8zKTtcbiAgICAgICAgZnguYWxsb3dNdWx0aXBsZSA9IHRydWU7XG4gICAgICAgIGZ4LmFkZE1hcmtlcignYWxpZW4gZGVhdGgnLCAxLCAxLjApO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLmJ1dHRvbigyMDAsIDQ2MCwgQXNzZXRLZXlzLklNQUdFXzQsICgpID0+IHtcbiAgICAgICAgICAgIGZ4LnBsYXkoJ2FsaWVuIGRlYXRoJyk7XG4gICAgICAgIH0sIHRoaXMsIDAsIDEsIDIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnRleHQoMjAwLCA0NjAsIFwiY2xpY2sgZm9yIGF1ZGlvU3ByaXRlIHRlc3RcIik7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJhdWRpb1Nwcml0ZSAtIHNob3VsZCBzZWUgNyBlcnJvciBsb2dzIGZyb20gQXNzZXRMb2FkZXJcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gYmluYXJ5IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGJpbmFyeSA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRCaW5hcnkoQXNzZXRLZXlzLkJJTkFSWV8wKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEwMCwgNTAwLCBcImJpbmFyeS5ieXRlTGVuZ3RoOiBcIiArIGJpbmFyeS5ieXRlTGVuZ3RoLCB7ZmlsbDogXCIjZmZmXCJ9KTtcblxuICAgICAgICBiaW5hcnkgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0QmluYXJ5KEFzc2V0S2V5cy5CSU5BUllfMSk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMjAsIDUyMCwgXCJiaW5hcnkuYnl0ZUxlbmd0aDogXCIgKyBiaW5hcnkuYnl0ZUxlbmd0aCwge2ZpbGw6IFwiI2ZmZlwifSk7XG5cbiAgICAgICAgYmluYXJ5ID0gdGhpcy5nYW1lLmNhY2hlLmdldEJpbmFyeShBc3NldEtleXMuQklOQVJZXzIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnRleHQoMTQwLCA1NDAsIFwiYmluYXJ5LmJ5dGVMZW5ndGg6IFwiICsgYmluYXJ5LmJ5dGVMZW5ndGgsIHtmaWxsOiBcIiNmZmZcIn0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYmluYXJ5IC0gc2hvdWxkIHNlZSAzIGVycm9yIGxvZ3MgZnJvbSBBc3NldExvYWRlclwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBiaXRtYXBGb250IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcFRleHQoMjAwLCAxMDAsIEFzc2V0S2V5cy5CSVRNQVBfRk9OVF8wLCAnQml0bWFwIEZvbnRzIScsIDY0KTtcbiAgICAgICAgdGV4dC5zZXRUZXh0KCdCaXRtYXAgRm9udHMhXFxueDogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LngpICsgJyB5OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueSkpO1xuXG4gICAgICAgIHRleHQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcFRleHQoMjIwLCAxMjAsIEFzc2V0S2V5cy5CSVRNQVBfRk9OVF8xLCAnQml0bWFwIEZvbnRzIScsIDY0KTtcbiAgICAgICAgdGV4dC5zZXRUZXh0KCdCaXRtYXAgRm9udHMhXFxueDogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LngpICsgJyB5OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueSkpO1xuXG4gICAgICAgIHRleHQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcFRleHQoMjQwLCAxNDAsIEFzc2V0S2V5cy5CSVRNQVBfRk9OVF8yLCAnQml0bWFwIEZvbnRzIScsIDY0KTtcbiAgICAgICAgdGV4dC5zZXRUZXh0KCdCaXRtYXAgRm9udHMhXFxueDogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LngpICsgJyB5OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueSkpO1xuXG4gICAgICAgIHRleHQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcFRleHQoMjYwLCAxNjAsIEFzc2V0S2V5cy5CSVRNQVBfRk9OVF8zLCAnQml0bWFwIEZvbnRzIScsIDY0KTtcbiAgICAgICAgdGV4dC5zZXRUZXh0KCdCaXRtYXAgRm9udHMhXFxueDogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LngpICsgJyB5OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueSkpO1xuXG4gICAgICAgIHRleHQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcFRleHQoMjgwLCAxODAsIEFzc2V0S2V5cy5CSVRNQVBfRk9OVF80LCAnQml0bWFwIEZvbnRzIScsIDY0KTtcbiAgICAgICAgdGV4dC5zZXRUZXh0KCdCaXRtYXAgRm9udHMhXFxueDogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LngpICsgJyB5OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueSkpO1xuXG4gICAgICAgIHRleHQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcFRleHQoMzAwLCAyMDAsIEFzc2V0S2V5cy5CSVRNQVBfRk9OVF81LCAnQml0bWFwIEZvbnRzIScsIDY0KTtcbiAgICAgICAgdGV4dC5zZXRUZXh0KCdCaXRtYXAgRm9udHMhXFxueDogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LngpICsgJyB5OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueSkpO1xuXG4gICAgICAgIHRleHQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcFRleHQoMzIwLCAyMzAsIEFzc2V0S2V5cy5CSVRNQVBfRk9OVF82LCAnQml0bWFwIEZvbnRzIScsIDY0KTtcbiAgICAgICAgdGV4dC5zZXRUZXh0KCdCaXRtYXAgRm9udHMhXFxueDogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LngpICsgJyB5OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueSkpO1xuXG4gICAgICAgIHRleHQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcFRleHQoMzIwLCAyMzAsIEFzc2V0S2V5cy5CSVRNQVBfRk9OVF83LCAnQml0bWFwIEZvbnRzIScsIDY0KTtcbiAgICAgICAgdGV4dC5zZXRUZXh0KCdCaXRtYXAgRm9udHMhXFxueDogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LngpICsgJyB5OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueSkpO1xuXG4gICAgICAgIHRleHQgPSB0aGlzLmdhbWUuYWRkLmJpdG1hcFRleHQoMzIwLCAyMzAsIEFzc2V0S2V5cy5CSVRNQVBfRk9OVF84LCAnQml0bWFwIEZvbnRzIScsIDY0KTtcbiAgICAgICAgdGV4dC5zZXRUZXh0KCdCaXRtYXAgRm9udHMhXFxueDogJyArIE1hdGgucm91bmQodGhpcy5nYW1lLmlucHV0LngpICsgJyB5OiAnICsgTWF0aC5yb3VuZCh0aGlzLmdhbWUuaW5wdXQueSkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiYml0bWFwRm9udCAtIHNob3VsZCBzZWUgNCBlcnJvciBsb2dzIGZyb20gQXNzZXRMb2FkZXJcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gaW1hZ2UgLS0tLS0tLS0gLy9cblxuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSgwLCAwLCBBc3NldEtleXMuSU1BR0VfMCk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDIwLCAyMCwgQXNzZXRLZXlzLklNQUdFXzEpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSg0MCwgNDAsIEFzc2V0S2V5cy5JTUFHRV8yKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC5zcHJpdGUoNTAsIDUwLCBBc3NldEtleXMuSU1BR0VfMyk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDYwLCA2MCwgQXNzZXRLZXlzLklNQUdFXzQpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiaW1hZ2UgLSBzaG91bGQgc2VlIDMgZXJyb3IgbG9ncyBmcm9tIEFzc2V0TG9hZGVyXCIpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIGltYWdlcyAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDcwMCwgMTYwLCBBc3NldEtleXMuSU1BR0VTXzApO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnNwcml0ZSg3MjAsIDE4MCwgQXNzZXRLZXlzLklNQUdFU18xKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBqc29uIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGpzb24gPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihBc3NldEtleXMuSlNPTl8wKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEwMCwgMTMwLCBqc29uLnRlc3QsIHtmaWxsOiBcIiNmZmZcIn0pO1xuXG4gICAgICAgIGpzb24gPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihBc3NldEtleXMuSlNPTl8xKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEyMCwgMTUwLCBqc29uLnRlc3QsIHtmaWxsOiBcIiNmZmZcIn0pO1xuXG4gICAgICAgIGpzb24gPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihBc3NldEtleXMuSlNPTl8yKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDE0MCwgMTcwLCBqc29uLnRlc3QsIHtmaWxsOiBcIiNmZmZcIn0pO1xuXG4gICAgICAgIGpzb24gPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihBc3NldEtleXMuSlNPTl8zKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDE2MCwgMTkwLCBqc29uLnRlc3QsIHtmaWxsOiBcIiNmZmZcIn0pO1xuXG4gICAgICAgIGpzb24gPSB0aGlzLmdhbWUuY2FjaGUuZ2V0SlNPTihBc3NldEtleXMuSlNPTl80KTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDE4MCwgMjEwLCBqc29uLnRlc3QsIHtmaWxsOiBcIiNmZmZcIn0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwianNvbiAtIHNob3VsZCBzZWUgMyBlcnJvciBsb2dzIGZyb20gQXNzZXRMb2FkZXJcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gcGFjayAtLS0tLS0tLSAvL1xuXG4gICAgICAgIHRoaXMuZ2FtZS5hZGQuaW1hZ2UoMCwgMCwgQXNzZXRLZXlzLklNQUdFXzUpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLmltYWdlKDIwLCAyMCwgQXNzZXRLZXlzLklNQUdFXzYpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGFjayAtIHNob3VsZCBzZWUgMSBlcnJvciBsb2cgZnJvbSBBc3NldExvYWRlclwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBwaHlzaWNzIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgdGhpcy5nYW1lLnBoeXNpY3Muc3RhcnRTeXN0ZW0oUGhhc2VyLlBoeXNpY3MuUDJKUyk7XG5cbiAgICAgICAgbGV0IGNvbnRyYSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDEwMCwgMjAwLCBBc3NldEtleXMuSU1BR0VTXzApO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoY29udHJhLCBQaGFzZXIuUGh5c2ljcy5QMkpTKTtcbiAgICAgICAgY29udHJhLmJvZHkubG9hZFBvbHlnb24oQXNzZXRLZXlzLlBIWVNJQ1NfMCwgJ2NvbnRyYTInLCBjb250cmEpO1xuXG4gICAgICAgIGNvbnRyYSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDEyMCwgMjIwLCBBc3NldEtleXMuSU1BR0VTXzApO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoY29udHJhLCBQaGFzZXIuUGh5c2ljcy5QMkpTKTtcbiAgICAgICAgY29udHJhLmJvZHkubG9hZFBvbHlnb24oQXNzZXRLZXlzLlBIWVNJQ1NfMSwgJ2NvbnRyYTInLCBjb250cmEpO1xuXG4gICAgICAgIGNvbnRyYSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDE0MCwgMjQwLCBBc3NldEtleXMuSU1BR0VTXzApO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoY29udHJhLCBQaGFzZXIuUGh5c2ljcy5QMkpTKTtcbiAgICAgICAgY29udHJhLmJvZHkubG9hZFBvbHlnb24oQXNzZXRLZXlzLlBIWVNJQ1NfMiwgJ2NvbnRyYTInLCBjb250cmEpO1xuXG4gICAgICAgIGNvbnRyYSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDE2MCwgMjYwLCBBc3NldEtleXMuSU1BR0VTXzApO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoY29udHJhLCBQaGFzZXIuUGh5c2ljcy5QMkpTKTtcbiAgICAgICAgY29udHJhLmJvZHkubG9hZFBvbHlnb24oQXNzZXRLZXlzLlBIWVNJQ1NfMywgJ2NvbnRyYTInLCBjb250cmEpO1xuXG4gICAgICAgIGNvbnRyYSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDE4MCwgMjgwLCBBc3NldEtleXMuSU1BR0VTXzApO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoY29udHJhLCBQaGFzZXIuUGh5c2ljcy5QMkpTKTtcbiAgICAgICAgY29udHJhLmJvZHkubG9hZFBvbHlnb24oQXNzZXRLZXlzLlBIWVNJQ1NfNCwgJ2NvbnRyYTInLCBjb250cmEpO1xuXG4gICAgICAgIGNvbnRyYSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDIwMCwgMzAwLCBBc3NldEtleXMuSU1BR0VTXzApO1xuICAgICAgICB0aGlzLmdhbWUucGh5c2ljcy5lbmFibGUoY29udHJhLCBQaGFzZXIuUGh5c2ljcy5QMkpTKTtcbiAgICAgICAgY29udHJhLmJvZHkubG9hZFBvbHlnb24oQXNzZXRLZXlzLlBIWVNJQ1NfNSwgJ2NvbnRyYTInLCBjb250cmEpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicGh5c2ljcyAtIHNob3VsZCBzZWUgNCBlcnJvciBsb2dzIGZyb20gQXNzZXRMb2FkZXJcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gc2NyaXB0IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IG1vZHVsZSA9IG5ldyBTY3JpcHRUZXN0KCk7XG4gICAgICAgIG1vZHVsZS5wcmludChcImdhbWUubG9hZC5zY3JpcHQgZm9yIFNjcmlwdFRlc3QuanMgd29ya2VkIVwiKTtcblxuICAgICAgICBtb2R1bGUgPSBuZXcgU2NyaXB0VGVzdDEoKTtcbiAgICAgICAgbW9kdWxlLnByaW50KFwiZ2FtZS5sb2FkLnNjcmlwdCBmb3IgU2NyaXB0VGVzdDEuanMgd29ya2VkIVwiKTtcblxuICAgICAgICBtb2R1bGUgPSBuZXcgU2NyaXB0VGVzdDIoKTtcbiAgICAgICAgbW9kdWxlLnByaW50KFwiZ2FtZS5sb2FkLnNjcmlwdCBmb3IgU2NyaXB0VGVzdDIuanMgd29ya2VkIVwiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInNjcmlwdCAtIHNob3VsZCBzZWUgMiBlcnJvciBsb2dzIGZyb20gQXNzZXRMb2FkZXJcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0gc2hhZGVyIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGZpbHRlciA9IG5ldyBQaGFzZXIuRmlsdGVyKHRoaXMuZ2FtZSwgbnVsbCwgdGhpcy5nYW1lLmNhY2hlLmdldFNoYWRlcihBc3NldEtleXMuU0hBREVSXzApKTtcbiAgICAgICAgZmlsdGVyLnNldFJlc29sdXRpb24oNDAwLCA2MDApO1xuICAgICAgICBsZXQgc3ByaXRlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoKTtcbiAgICAgICAgc3ByaXRlLnggPSA1MDA7XG4gICAgICAgIHNwcml0ZS55ID0gMTUwO1xuICAgICAgICBzcHJpdGUud2lkdGggPSA0MDA7XG4gICAgICAgIHNwcml0ZS5oZWlnaHQgPSA2MDA7XG4gICAgICAgIHNwcml0ZS5maWx0ZXJzID0gW2ZpbHRlcl07XG5cbiAgICAgICAgZmlsdGVyID0gbmV3IFBoYXNlci5GaWx0ZXIodGhpcy5nYW1lLCBudWxsLCB0aGlzLmdhbWUuY2FjaGUuZ2V0U2hhZGVyKEFzc2V0S2V5cy5TSEFERVJfMSkpO1xuICAgICAgICBmaWx0ZXIuc2V0UmVzb2x1dGlvbig0MDAsIDYwMCk7XG4gICAgICAgIHNwcml0ZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKCk7XG4gICAgICAgIHNwcml0ZS54ID0gNTIwO1xuICAgICAgICBzcHJpdGUueSA9IDE3MDtcbiAgICAgICAgc3ByaXRlLndpZHRoID0gNDAwO1xuICAgICAgICBzcHJpdGUuaGVpZ2h0ID0gNjAwO1xuICAgICAgICBzcHJpdGUuZmlsdGVycyA9IFtmaWx0ZXJdO1xuXG4gICAgICAgIGZpbHRlciA9IG5ldyBQaGFzZXIuRmlsdGVyKHRoaXMuZ2FtZSwgbnVsbCwgdGhpcy5nYW1lLmNhY2hlLmdldFNoYWRlcihBc3NldEtleXMuU0hBREVSXzIpKTtcbiAgICAgICAgZmlsdGVyLnNldFJlc29sdXRpb24oNDAwLCA2MDApO1xuICAgICAgICBzcHJpdGUgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgpO1xuICAgICAgICBzcHJpdGUueCA9IDU0MDtcbiAgICAgICAgc3ByaXRlLnkgPSAxOTA7XG4gICAgICAgIHNwcml0ZS53aWR0aCA9IDQwMDtcbiAgICAgICAgc3ByaXRlLmhlaWdodCA9IDYwMDtcbiAgICAgICAgc3ByaXRlLmZpbHRlcnMgPSBbZmlsdGVyXTtcblxuICAgICAgICBmaWx0ZXIgPSBuZXcgUGhhc2VyLkZpbHRlcih0aGlzLmdhbWUsIG51bGwsIHRoaXMuZ2FtZS5jYWNoZS5nZXRTaGFkZXIoQXNzZXRLZXlzLlNIQURFUl8zKSk7XG4gICAgICAgIGZpbHRlci5zZXRSZXNvbHV0aW9uKDQwMCwgNjAwKTtcbiAgICAgICAgc3ByaXRlID0gdGhpcy5nYW1lLmFkZC5zcHJpdGUoKTtcbiAgICAgICAgc3ByaXRlLnggPSA1NjA7XG4gICAgICAgIHNwcml0ZS55ID0gMjEwO1xuICAgICAgICBzcHJpdGUud2lkdGggPSA0MDA7XG4gICAgICAgIHNwcml0ZS5oZWlnaHQgPSA2MDA7XG4gICAgICAgIHNwcml0ZS5maWx0ZXJzID0gW2ZpbHRlcl07XG5cbiAgICAgICAgZmlsdGVyID0gbmV3IFBoYXNlci5GaWx0ZXIodGhpcy5nYW1lLCBudWxsLCB0aGlzLmdhbWUuY2FjaGUuZ2V0U2hhZGVyKEFzc2V0S2V5cy5TSEFERVJfNCkpO1xuICAgICAgICBmaWx0ZXIuc2V0UmVzb2x1dGlvbig0MDAsIDYwMCk7XG4gICAgICAgIHNwcml0ZSA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKCk7XG4gICAgICAgIHNwcml0ZS54ID0gNTgwO1xuICAgICAgICBzcHJpdGUueSA9IDIzMDtcbiAgICAgICAgc3ByaXRlLndpZHRoID0gNDAwO1xuICAgICAgICBzcHJpdGUuaGVpZ2h0ID0gNjAwO1xuICAgICAgICBzcHJpdGUuZmlsdGVycyA9IFtmaWx0ZXJdO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2hhZGVyIC0gc2hvdWxkIHNlZSAzIGVycm9yIGxvZ3MgZnJvbSBBc3NldExvYWRlclwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSBzcHJpdGVzaGVldCAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCBzcHJpdGVzaGVldCA9IHRoaXMuZ2FtZS5hZGQuc3ByaXRlKDAsIDEzMCwgQXNzZXRLZXlzLlNQUklURVNIRUVUXzApO1xuICAgICAgICBzcHJpdGVzaGVldC5hbmltYXRpb25zLmFkZChcImFuaW1cIik7XG4gICAgICAgIHNwcml0ZXNoZWV0LmFuaW1hdGlvbnMucGxheShcImFuaW1cIik7XG5cbiAgICAgICAgc3ByaXRlc2hlZXQgPSB0aGlzLmdhbWUuYWRkLnNwcml0ZSgyMCwgMTUwLCBBc3NldEtleXMuU1BSSVRFU0hFRVRfMSk7XG4gICAgICAgIHNwcml0ZXNoZWV0LmFuaW1hdGlvbnMuYWRkKFwiYW5pbVwiKTtcbiAgICAgICAgc3ByaXRlc2hlZXQuYW5pbWF0aW9ucy5wbGF5KFwiYW5pbVwiKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInNwcml0ZXNoZWV0IC0gc2hvdWxkIHNlZSA1IGVycm9yIGxvZ3MgZnJvbSBBc3NldExvYWRlclwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSB0ZXh0IC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IGh0bWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0VGV4dChBc3NldEtleXMuVEVYVF8wKTtcbiAgICAgICAgY29uc29sZS5sb2coaHRtbCk7XG5cbiAgICAgICAgaHRtbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRUZXh0KEFzc2V0S2V5cy5URVhUXzEpO1xuICAgICAgICBjb25zb2xlLmxvZyhodG1sKTtcblxuICAgICAgICBodG1sID0gdGhpcy5nYW1lLmNhY2hlLmdldFRleHQoQXNzZXRLZXlzLlRFWFRfMik7XG4gICAgICAgIGNvbnNvbGUubG9nKGh0bWwpO1xuXG4gICAgICAgIGh0bWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0VGV4dChBc3NldEtleXMuVEVYVF8zKTtcbiAgICAgICAgY29uc29sZS5sb2coaHRtbCk7XG5cbiAgICAgICAgaHRtbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRUZXh0KEFzc2V0S2V5cy5URVhUXzQpO1xuICAgICAgICBjb25zb2xlLmxvZyhodG1sKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInRleHQgLSBzaG91bGQgc2VlIDMgZXJyb3IgbG9ncyBmcm9tIEFzc2V0TG9hZGVyXCIpO1xuXG4gICAgICAgIC8vIC0tLS0tLS0tIHRpbGVtYXAgLS0tLS0tLS0gLy9cblxuICAgICAgICBsZXQgbWFwID0gdGhpcy5nYW1lLmFkZC50aWxlbWFwKEFzc2V0S2V5cy5USUxFTUFQXzApO1xuICAgICAgICBpZiAobWFwLmdldExheWVySW5kZXgoXCJzdXJmYWNlXCIpKSB7XG4gICAgICAgICAgICBtYXAuYWRkVGlsZXNldEltYWdlKEFzc2V0S2V5cy5TUFJJVEVTSEVFVF8wLCBBc3NldEtleXMuU1BSSVRFU0hFRVRfMCwgNzAsIDcwKTtcbiAgICAgICAgICAgIGxldCBsYXllciA9IG1hcC5jcmVhdGVMYXllcihcInN1cmZhY2VcIik7XG4gICAgICAgICAgICBsYXllci5yZXNpemVXb3JsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwID0gdGhpcy5nYW1lLmFkZC50aWxlbWFwKEFzc2V0S2V5cy5USUxFTUFQXzEpO1xuICAgICAgICBpZiAobWFwLmdldExheWVySW5kZXgoXCJzdXJmYWNlXCIpKSB7XG4gICAgICAgICAgICBtYXAuYWRkVGlsZXNldEltYWdlKEFzc2V0S2V5cy5TUFJJVEVTSEVFVF8wLCBBc3NldEtleXMuU1BSSVRFU0hFRVRfMCwgNzAsIDcwKTtcbiAgICAgICAgICAgIGxldCBsYXllciA9IG1hcC5jcmVhdGVMYXllcihcInN1cmZhY2VcIik7XG4gICAgICAgICAgICBsYXllci5yZXNpemVXb3JsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwID0gdGhpcy5nYW1lLmFkZC50aWxlbWFwKEFzc2V0S2V5cy5USUxFTUFQXzIpO1xuICAgICAgICBpZiAobWFwLmdldExheWVySW5kZXgoXCJzdXJmYWNlXCIpKSB7XG4gICAgICAgICAgICBtYXAuYWRkVGlsZXNldEltYWdlKEFzc2V0S2V5cy5TUFJJVEVTSEVFVF8wLCBBc3NldEtleXMuU1BSSVRFU0hFRVRfMCwgNzAsIDcwKTtcbiAgICAgICAgICAgIGxldCBsYXllciA9IG1hcC5jcmVhdGVMYXllcihcInN1cmZhY2VcIik7XG4gICAgICAgICAgICBsYXllci5yZXNpemVXb3JsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwID0gdGhpcy5nYW1lLmFkZC50aWxlbWFwKEFzc2V0S2V5cy5USUxFTUFQXzMpO1xuICAgICAgICBpZiAobWFwLmdldExheWVySW5kZXgoXCJzdXJmYWNlXCIpKSB7XG4gICAgICAgICAgICBtYXAuYWRkVGlsZXNldEltYWdlKEFzc2V0S2V5cy5TUFJJVEVTSEVFVF8wLCBBc3NldEtleXMuU1BSSVRFU0hFRVRfMCwgNzAsIDcwKTtcbiAgICAgICAgICAgIGxldCBsYXllciA9IG1hcC5jcmVhdGVMYXllcihcInN1cmZhY2VcIik7XG4gICAgICAgICAgICBsYXllci5yZXNpemVXb3JsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWFwID0gdGhpcy5nYW1lLmFkZC50aWxlbWFwKEFzc2V0S2V5cy5USUxFTUFQXzQpO1xuICAgICAgICBpZiAobWFwLmdldExheWVySW5kZXgoXCJzdXJmYWNlXCIpKSB7XG4gICAgICAgICAgICBtYXAuYWRkVGlsZXNldEltYWdlKEFzc2V0S2V5cy5TUFJJVEVTSEVFVF8wLCBBc3NldEtleXMuU1BSSVRFU0hFRVRfMCwgNzAsIDcwKTtcbiAgICAgICAgICAgIGxldCBsYXllciA9IG1hcC5jcmVhdGVMYXllcihcInN1cmZhY2VcIik7XG4gICAgICAgICAgICBsYXllci5yZXNpemVXb3JsZCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ0aWxlbWFwIC0gc2hvdWxkIHNlZSA0IGVycm9yIGxvZ3MgZnJvbSBBc3NldExvYWRlclwiKTtcblxuICAgICAgICAvLyAtLS0tLS0tLSB2aWRlbyAtLS0tLS0tLSAvL1xuXG4gICAgICAgIGxldCB2aWRlbyA9IHRoaXMuZ2FtZS5hZGQudmlkZW8oQXNzZXRLZXlzLlZJREVPXzApO1xuICAgICAgICB2aWRlby5wbGF5KHRydWUpO1xuICAgICAgICB2aWRlby5hZGRUb1dvcmxkKDIwMCwgMjAwLCAwLCAwLCAwLjMsIDAuMyk7XG5cbiAgICAgICAgdmlkZW8gPSB0aGlzLmdhbWUuYWRkLnZpZGVvKEFzc2V0S2V5cy5WSURFT18xKTtcbiAgICAgICAgdmlkZW8ucGxheSh0cnVlKTtcbiAgICAgICAgdmlkZW8uYWRkVG9Xb3JsZCgyNTAsIDI1MCwgMCwgMCwgMC4zLCAwLjMpO1xuXG4gICAgICAgIHZpZGVvID0gdGhpcy5nYW1lLmFkZC52aWRlbyhBc3NldEtleXMuVklERU9fMik7XG4gICAgICAgIHZpZGVvLnBsYXkodHJ1ZSk7XG4gICAgICAgIHZpZGVvLmFkZFRvV29ybGQoMzAwLCAzMDAsIDAsIDAsIDAuMywgMC4zKTtcblxuICAgICAgICB2aWRlbyA9IHRoaXMuZ2FtZS5hZGQudmlkZW8oQXNzZXRLZXlzLlZJREVPXzMpO1xuICAgICAgICB2aWRlby5wbGF5KHRydWUpO1xuICAgICAgICB2aWRlby5hZGRUb1dvcmxkKDM1MCwgMzUwLCAwLCAwLCAwLjMsIDAuMyk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ2aWRlbyAtIHNob3VsZCBzZWUgMyBlcnJvciBsb2dzIGZyb20gQXNzZXRMb2FkZXJcIik7XG5cbiAgICAgICAgLy8gLS0tLS0tLS0geG1sIC0tLS0tLS0tIC8vXG5cbiAgICAgICAgbGV0IHhtbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRYTUwoQXNzZXRLZXlzLlhNTF8wKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDEwMCwgMTYwLCB4bWwuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MLCB7ZmlsbDogXCIjZmZmXCJ9KTtcblxuICAgICAgICB4bWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0WE1MKEFzc2V0S2V5cy5YTUxfMSk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxMjAsIDE4MCwgeG1sLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCwge2ZpbGw6IFwiI2ZmZlwifSk7XG5cbiAgICAgICAgeG1sID0gdGhpcy5nYW1lLmNhY2hlLmdldFhNTChBc3NldEtleXMuWE1MXzIpO1xuICAgICAgICB0aGlzLmdhbWUuYWRkLnRleHQoMTQwLCAyMDAsIHhtbC5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwsIHtmaWxsOiBcIiNmZmZcIn0pO1xuXG4gICAgICAgIHhtbCA9IHRoaXMuZ2FtZS5jYWNoZS5nZXRYTUwoQXNzZXRLZXlzLlhNTF8zKTtcbiAgICAgICAgdGhpcy5nYW1lLmFkZC50ZXh0KDE2MCwgMjIwLCB4bWwuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MLCB7ZmlsbDogXCIjZmZmXCJ9KTtcblxuICAgICAgICB4bWwgPSB0aGlzLmdhbWUuY2FjaGUuZ2V0WE1MKEFzc2V0S2V5cy5YTUxfNCk7XG4gICAgICAgIHRoaXMuZ2FtZS5hZGQudGV4dCgxODAsIDI0MCwgeG1sLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCwge2ZpbGw6IFwiI2ZmZlwifSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJ4bWwgLSBzaG91bGQgc2VlIDMgZXJyb3IgbG9ncyBmcm9tIEFzc2V0TG9hZGVyXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheVN0YXRlO1xuIl19
