/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/AssetLoader
 */

"use strict";

import GameKeys from "./GameKeys";
import BootState from "./BootState";
import LoadState from "./LoadState";
import PlayState from "./PlayState";

class Game extends Phaser.Game {

    constructor() {
        // super(800, 600, Phaser.WEBGL);
        super(800, 600, Phaser.CANVAS);

        this.state.add(GameKeys.BOOT, BootState);
        this.state.add(GameKeys.LOAD, LoadState);
        this.state.add(GameKeys.PLAY, PlayState);

        this.state.start(GameKeys.BOOT);
    }
}

new Game();
