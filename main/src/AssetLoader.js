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
   * @param {json} data - The loaded json. You will have to load the json for
   *     this file manually but everything else can load from the
   *     AssetLoader.
   */
  constructor(game, data) {
    let key;
    let value;
    let i;
    let paramA;
    let paramB;
    let paramC;
    let paramD;
    let paramE;

    // -------- baseURL -------- //
    let collection = data.baseURL; // TODO: use bracket notation for all
    if (typeof collection === "string") {
      game.load.baseURL = collection;
    }

    // -------- crossOrigin -------- //
    collection = data.crossOrigin;
    if (typeof collection === "string" || typeof collection === "boolean") {
      game.load.crossOrigin = collection;
    }

    // -------- enableParallel -------- //
    collection = data.enableParallel;
    if (typeof collection === "boolean") {
      game.load.enableParallel = collection;
    }

    // -------- path -------- //
    collection = data.path;
    if (typeof collection === "string") {
      game.load.path = collection;
    }

    // -------- preloadSprite -------- //
    collection = data.preloadSprite;
    if (typeof collection === "string") {
      game.load.setPreloadSprite(collection);
    }

    // -------- resetLocked -------- //
    collection = data.resetLocked;
    if (typeof collection === "boolean") {
      game.load.resetLocked = collection;
    }

    // -------- atlas -------- //
    collection = data.atlas;
    if (typeof collection === "string") {
      game.load.atlas(collection);
    }
    else if (Array.isArray(collection)) {
      for (i = 0; i < collection.length; i++) {
        if (typeof collection[i] === "string") {
          game.load.atlas(collection[i]);
        }
      }
    }
    else if (typeof collection === "object") {
      for (key in collection) {
        value = collection[key];
        if (!value) {
          // if value is undefined, null, false, 0, nan, ""
          game.load.atlas(key);
        } else {
          paramA = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
          paramB = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
          paramC = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
          paramD = (value.hasOwnProperty("format")) ? value["format"] : null;
          game.load.atlas(key, paramA, paramB, paramC, paramD);
        }
      }
    }

    // -------- atlasJSONArray -------- //
    collection = data.atlasJSONArray;
    if (typeof collection === "string") {
      game.load.atlasJSONArray(collection);
    }
    else if (Array.isArray(collection)) {
      for (i = 0; i < collection.length; i++) {
        if (typeof collection[i] === "string") {
          game.load.atlasJSONArray(collection[i]);
        }
      }
    }
    else if (typeof collection === "object") {
      for (key in collection) {
        value = collection[key];
        if (!value) {
          // if value is undefined, null, false, 0, nan, ""
          game.load.atlasJSONArray(key);
        } else {
          paramA = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
          paramB = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
          paramC = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
          game.load.atlasJSONArray(key, paramA, paramB, paramC);
        }
      }
    }

    // -------- atlasJSONHash -------- //
    collection = data.atlasJSONHash;
    if (typeof collection === "string") {
      game.load.atlasJSONHash(collection);
    }
    else if (Array.isArray(collection)) {
      for (i = 0; i < collection.length; i++) {
        if (typeof collection[i] === "string") {
          game.load.atlasJSONHash(collection[i]);
        }
      }
    }
    else if (typeof collection === "object") {
      for (key in collection) {
        value = collection[key];
        if (!value) {
          // if value is undefined, null, false, 0, nan, ""
          game.load.atlasJSONHash(key);
        } else {
          paramA = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
          paramB = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
          paramC = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
          game.load.atlasJSONHash(key, paramA, paramB, paramC);
        }
      }
    }

    // -------- atlasXML -------- //
    collection = data.atlasXML;
    if (typeof collection === "string") {
      game.load.atlasXML(collection);
    }
    else if (Array.isArray(collection)) {
      for (i = 0; i < collection.length; i++) {
        if (typeof collection[i] === "string") {
          game.load.atlasXML(collection[i]);
        }
      }
    }
    else if (typeof collection === "object") {
      for (key in collection) {
        value = collection[key];
        if (!value) {
          // if value is undefined, null, false, 0, nan, ""
          game.load.atlasXML(key);
        } else {
          paramA = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
          paramB = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
          paramC = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
          game.load.atlasXML(key, paramA, paramB, paramC);
        }
      }
    }

    // -------- audio -------- //
    collection = data.audio;
    for (key in collection) {
      value = collection[key];
      if (typeof value === "string" || Array.isArray(value)) {
        game.load.audio(key, value);
      }
      else if (typeof value === "object") {
        paramA = (value.hasOwnProperty("urls")) ? value["urls"] : null;
        paramB = (value.hasOwnProperty("autoDecode")) ? value["autoDecode"] : true;
        game.load.audio(key, paramA, paramB);
      }
    }

    // -------- audioSprite -------- //
    collection = data.audioSprite;
    for (key in collection) {
      value = collection[key];
      if (typeof value === "string" || Array.isArray(value)) {
        game.load.audioSprite(key, value);
      }
      else if (typeof value === "object") {
        paramA = (value.hasOwnProperty("urls")) ? value["urls"] : null;
        paramB = (value.hasOwnProperty("jsonURL")) ? value["jsonURL"] : null;
        paramC = (value.hasOwnProperty("jsonData")) ? value["jsonData"] : null;
        paramD = (value.hasOwnProperty("autoDecode")) ? value["autoDecode"] : true;
        game.load.audioSprite(key, paramA, paramB, paramC, paramD);
      }
    }

    // -------- binary -------- //
    collection = data.binary;
    if (typeof collection === "string") {
      game.load.binary(collection);
    }
    else if (Array.isArray(collection)) {
      for (i = 0; i < collection.length; i++) {
        if (typeof collection[i] === "string") {
          game.load.binary(collection[i]);
        }
      }
    }
    else if (typeof collection === "object") {
      for (key in collection) {
        value = collection[key];
        if (!value) {
          // if value is undefined, null, false, 0, nan, ""
          game.load.binary(key);
        }
        else if (typeof value === "string") {
          game.load.binary(key, value);
        }
        else if (typeof value === "object") {
          if (value.hasOwnProperty("url")) {
            game.load.binary(key, value["url"]);
          }
        }
      }
    }

    // -------- bitmapFont -------- //
    collection = data.bitmapFont;
    if (typeof collection === "string") {
      game.load.bitmapFont(collection);
    }
    else if (Array.isArray(collection)) {
      for (i = 0; i < collection.length; i++) {
        if (typeof collection[i] === "string") {
          game.load.bitmapFont(collection[i]);
        }
      }
    }
    else if (typeof collection === "object") {
      for (key in collection) {
        value = collection[key];
        if (!value) {
          // if value is undefined, null, false, 0, nan, ""
          game.load.bitmapFont(key);
        } else {
          paramA = (value.hasOwnProperty("textureURL")) ? value["textureURL"] : null;
          paramB = (value.hasOwnProperty("atlasURL")) ? value["atlasURL"] : null;
          paramC = (value.hasOwnProperty("atlasData")) ? value["atlasData"] : null;
          paramD = (value.hasOwnProperty("xSpacing")) ? value["xSpacing"] : 0;
          paramE = (value.hasOwnProperty("ySpacing")) ? value["ySpacing"] : 0;
          game.load.bitmapFont(key, paramA, paramB, paramC, paramD, paramE);
        }
      }
    }

    // -------- image -------- //
    collection = data.image;
    if (typeof collection === "string") {
      game.load.image(collection);
    }
    else if (Array.isArray(collection)) {
      for (i = 0; i < collection.length; i++) {
        if (typeof collection[i] === "string") {
          game.load.image(collection[i]);
        }
      }
    }
    else if (typeof collection === "object") {
      for (key in collection) {
        value = collection[key];
        if (!value) {
          // if value is undefined, null, false, 0, nan, ""
          game.load.image(key);
        }
        else if (typeof value === "string") {
          game.load.image(key, value);
        }
        else if (typeof value === "object") {
          paramA = (value.hasOwnProperty("url")) ? value["url"] : null;
          paramB = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
          game.load.image(key, paramA, paramB);
        }
      }
    }

    // -------- images -------- //
    collection = data.images;
    if (Array.isArray(collection)) {
      if (typeof collection[0] === "string") {
        game.load.images(collection);
      }
      else if (typeof collection[0] === "object") {
        for (i = 0; i < collection.length; i++) {
          key = collection[i];
          paramA = (key.hasOwnProperty("keys")) ? key["keys"] : null;
          paramB = (key.hasOwnProperty("urls")) ? key["urls"] : false;
          game.load.images(key, paramA, paramB);
        }
      }
    }
    else if (typeof collection === "object") {
      paramA = (collection.hasOwnProperty("keys")) ? collection["keys"] : null;
      paramB = (collection.hasOwnProperty("urls")) ? collection["urls"] : false;
      game.load.images(key, paramA, paramB);
    }

    // -------- json -------- //
    collection = data.json;
    if (typeof collection === "string") {
      game.load.json(collection);
    }
    else if (Array.isArray(collection)) {
      for (i = 0; i < collection.length; i++) {
        if (typeof collection[i] === "string") {
          game.load.json(collection[i]);
        }
      }
    }
    else if (typeof collection === "object") {
      for (key in collection) {
        value = collection[key];
        if (!value) {
          // if value is undefined, null, false, 0, nan, ""
          game.load.json(key);
        }
        else if (typeof value === "string") {
          game.load.json(key, value);
        }
        else if (typeof value === "object") {
          paramA = (value.hasOwnProperty("url")) ? value["url"] : null;
          paramB = (value.hasOwnProperty("overwrite")) ? value["overwrite"] : false;
          game.load.json(key, paramA, paramB);
        }
      }
    }

    // -------- pack -------- //
    collection = data.pack;
    if (typeof collection === "string") {
      game.load.pack(collection);
    }
    else if (Array.isArray(collection)) {
      for (i = 0; i < collection.length; i++) {
        if (typeof collection[i] === "string") {
          game.load.pack(collection[i]);
        }
      }
    }
    else if (typeof collection === "object") {
      for (key in collection) {
        value = collection[key];
        if (!value) {
          // if value is undefined, null, false, 0, nan, ""
          game.load.pack(key);
        }
        else if (typeof value === "string") {
          game.load.pack(key, value);
        }
        // TODO: this will break if trying to pass an Asset Pack JSON and it
        // only has one field called "url" or "data". Look at an example of an
        // Asset Pack JSON and see if this can happen. TODO: fix others above
        // where it's url or json
        else if (typeof value === "object" && Object.keys(value).length === 1) {
          if (value.hasOwnProperty("url")) {
            game.load.pack(key, value["url"]);
          }
          else if (value.hasOwnProperty("data")) {
            game.load.pack(key, null, value["data"]);
          }
        }
        else if (typeof value === "object") {
          game.load.pack(key, null, value);
        }
      }
    }

    // -------- physics -------- //
    collection = data.physics;
    for (key in collection) {
      value = collection[key];
      game.load.physics(key, value["url"], value["data"], value["format"]);
    }

    collection = data.script;
    for (key in collection) {
      value = collection[key];
      game.load.script(key, value["url"]);
    }

    collection = data.shader;
    for (key in collection) {
      value = collection[key];
      game.load.shader(key, value["url"], value["overwrite"]);
    }

    collection = data.spritesheet;
    for (key in collection) {
      value = collection[key];
      game.load.spritesheet(key, value["url"], value["frameWidth"], value["frameHeight"], value["frameMax"], value["margin"], value["spacing"]);
    }

    collection = data.text;
    for (key in collection) {
      value = collection[key];
      game.load.text(key, value["url"], value["overwrite"]);
    }

    collection = data.tilemap;
    for (key in collection) {
      value = collection[key];
      game.load.tilemap(key, value["url"], value["data"], value["format"]);
    }

    collection = data.video;
    for (key in collection) {
      value = collection[key];
      game.load.video(key, value["urls"], value["loadEvent"], value["asBlob"]);
    }

    collection = data.xml;
    for (key in collection) {
      value = collection[key];
      game.load.xml(key, value["url"], value["overwrite"]);
    }
  }
}

export default AssetLoader;
