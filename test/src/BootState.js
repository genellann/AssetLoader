/**
 * Created by gradley on 12/26/2016.
 */

import AssetKeys from "./AssetKeys";
import GameKeys from "./GameKeys";

class BootState extends Phaser.State {

  preload() {
    this.game.load.json(AssetKeys.ASSETS_JSON.key, AssetKeys.ASSETS_JSON.path);
  }

  create() {
    this.game.state.start(GameKeys.LOAD);
  }
}

export default BootState;
