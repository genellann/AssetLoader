/**
 * Created by Genell Radley on 12/2/16.
 */

import AssetKeys from "./AssetKeys";

class PlayState extends Phaser.State {

    init() {

        // -------- atlas -------- //

        this.game.add.sprite(0, 200, AssetKeys.ATLAS, "p1_hurt");

        // -------- atlasJSONArray -------- //

        this.game.add.sprite(0, 300, AssetKeys.ATLAS_JSON_ARRAY, "p1_front");

        // -------- atlasJSONHash -------- //

        this.game.add.sprite(0, 400, AssetKeys.ATLAS_JSON_HASH, "p1_duck");

        // -------- atlasXML -------- //

        this.game.add.sprite(0, 500, AssetKeys.ATLAS_XML, "bomb.png");

        // -------- audio -------- //

        this.game.sound.play(AssetKeys.AUDIO);

        // -------- audioSprite -------- //

        let fx = this.game.add.audio(AssetKeys.AUDIO_SPRITE);
        fx.allowMultiple = true;
        fx.addMarker('alien death', 1, 1.0);
        let button = this.game.add.button(200, 500, AssetKeys.IMAGE, () => {
            fx.play('alien death');
        }, this, 0, 1, 2);

        // -------- binary -------- //

        let binary = this.game.cache.getBinary(AssetKeys.BINARY);
        this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, {fill: "#ffffff"});

        // -------- bitmapFont -------- //

        let text = this.game.add.bitmapText(200, 100, AssetKeys.BITMAP_FONT, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        // -------- image -------- //

        this.game.add.sprite(0, 0, AssetKeys.IMAGE);

        // -------- images -------- //

        this.game.add.sprite(500, -50, AssetKeys.IMAGE2);

        // -------- json -------- //

        let json = this.game.cache.getJSON(AssetKeys.JSON);
        this.game.add.text(100, 130, json.test, {fill: "#ffffff"});

        // -------- pack -------- //

        this.game.add.image(0, 0, AssetKeys.IMAGE3);

        // -------- physics -------- //

        this.game.physics.startSystem(Phaser.Physics.P2JS);
        let contra = this.game.add.sprite(100, 200, AssetKeys.IMAGE);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS, 'contra2', contra);

        // -------- script -------- //

        let module = new ScriptTest();
        module.print("game.load.script worked!");

        // -------- shader -------- //

        let filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(AssetKeys.SHADER));
        filter.setResolution(400, 600);

        let sprite = this.game.add.sprite();
        sprite.x = 500;
        sprite.y = 150;
        sprite.width = 400;
        sprite.height = 600;

        sprite.filters = [filter];

        // -------- spritesheet -------- //

        let spritesheet = this.game.add.sprite(0, 130, AssetKeys.SPRITESHEET);
        spritesheet.animations.add("anim");
        spritesheet.animations.play("anim");

        // -------- text -------- //

        let html = this.game.cache.getText(AssetKeys.TEXT);
        console.log(html);

        // -------- tilemap -------- //

        let map = this.game.add.tilemap(AssetKeys.TILEMAP);
        if (map.getLayerIndex("surface")) {
            map.addTilesetImage(AssetKeys.SPRITESHEET, AssetKeys.SPRITESHEET, 70, 70);
            let layer = map.createLayer("surface");
            layer.resizeWorld();
        }

        // -------- video -------- //

        let video = this.game.add.video(AssetKeys.VIDEO);
        video.play(true);
        video.addToWorld(200, 200, 0, 0, 0.3, 0.3);

        // -------- xml -------- //

        let xml = this.game.cache.getXML(AssetKeys.XML);
        this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#ffffff"});
    }
}

export default PlayState;
