/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/PhaserAssetLoader
 */

import AssetKeys from "./AssetKeys";
import GameKeys from "./GameKeys";

class BootState extends Phaser.State {

    preload() {
        this.game.test = GameKeys.TEST_STRING_EMPTY;
        // this.game.test = GameKeys.TEST_STRING_EXISTING;
        // this.game.test = GameKeys.TEST_ARRAY_EMPTY;
        // this.game.test = GameKeys.TEST_ARRAY_EXISTING;
        // this.game.test = GameKeys.TEST_OBJECT_EMPTY;
        // this.game.test = GameKeys.TEST_OBJECT_EXISTING;

        this.game.load.json(AssetKeys.ASSETS, this.game.test);

        this.game.load.image(AssetKeys.PRELOAD_SPRITE, "assets/imageTest.png");
    }

    create() {
        this.game.state.start(GameKeys.LOAD);
    }
}

export default BootState;
