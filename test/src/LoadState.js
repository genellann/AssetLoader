/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/AssetLoader
 */

import AssetKeys from "./AssetKeys";
import GameKeys from "./GameKeys";

class LoadState extends Phaser.State {

    preload() {
        let preloadbar = this.game.add.sprite(0, 0, AssetKeys.PRELOAD_SPRITE);
        preloadbar.x = (this.game.width - preloadbar.width) / 2;
        preloadbar.y = (this.game.height - preloadbar.height) / 2;
        this.game.load.setPreloadSprite(preloadbar);

        new AssetLoader(this.game, this.game.cache.getJSON(AssetKeys.ASSETS));

        this._loadingMsg = "Loading... ";
        this._text = this.game.add.text(0, 0, this._loadingMsg, {fill: "#ffffff"});
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
    onFileComplete(progress, cacheKey, success, totalLoaded, totalFiles) {
        this._text.text = this._loadingMsg + progress + "%";

        if (progress === 100) {
            this.game.load.onFileComplete.remove(this.onFileComplete, this);
            this._text.text = "Loaded";
        }
    }

    onLoadComplete() {
        this.game.load.onLoadComplete.remove(this.onLoadComplete, this);
        this.game.state.start(GameKeys.PLAY);
    }
}

export default LoadState;

