/**
 * Created by Genell Radley on 12/2/16.
 */

import AssetKeys from "./AssetKeys";
import GameKeys from "./GameKeys";

class PlayState extends Phaser.State {

    init() {
        switch (this.game.test) {
            case GameKeys.TEST_STRING_EXISTING:
                this.testString();
                break;
            case GameKeys.TEST_ARRAY_EXISTING:
                this.testArray();
                break;
            case GameKeys.TEST_OBJECT_EXISTING:
                this.testObject();
                break;
        }
    }

    testString() {

        // -------- atlas -------- //

        this.game.add.sprite(0, 200, AssetKeys.ATLAS, "p1_hurt");

        // -------- atlasJSONArray -------- //

        this.game.add.sprite(0, 300, AssetKeys.ATLAS_JSON_ARRAY, "p1_front");

        // -------- atlasJSONHash -------- //

        this.game.add.sprite(0, 400, AssetKeys.ATLAS_JSON_HASH, "p1_duck");

        // -------- atlasXML -------- //

        this.game.add.sprite(0, 500, AssetKeys.ATLAS_XML, "bomb.png");

        // -------- binary -------- //

        let binary = this.game.cache.getBinary(AssetKeys.BINARY);
        this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, {fill: "#ffffff"});

        // -------- bitmapFont -------- //

        let text = this.game.add.bitmapText(200, 100, AssetKeys.BITMAP_FONT, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        // -------- image -------- //

        this.game.add.sprite(0, 0, AssetKeys.IMAGE);

        // -------- json -------- //

        let json = this.game.cache.getJSON(AssetKeys.JSON);
        this.game.add.text(100, 130, json.test, {fill: "#ffffff"});

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

        // -------- xml -------- //

        let xml = this.game.cache.getXML(AssetKeys.XML);
        this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#ffffff"});
    }

    testArray() {
        // -------- atlas -------- //

        this.game.add.sprite(0, 200, AssetKeys.ATLAS, "p1_hurt");

        this.game.add.sprite(20, 220, AssetKeys.ATLAS1, "p1_hurt");

        // -------- atlasJSONArray -------- //

        this.game.add.sprite(0, 300, AssetKeys.ATLAS_JSON_ARRAY, "p1_front");

        this.game.add.sprite(20, 320, AssetKeys.ATLAS_JSON_ARRAY1, "p1_front");

        // -------- atlasJSONHash -------- //

        this.game.add.sprite(0, 400, AssetKeys.ATLAS_JSON_HASH, "p1_duck");

        this.game.add.sprite(20, 420, AssetKeys.ATLAS_JSON_HASH1, "p1_duck");

        // -------- atlasXML -------- //

        this.game.add.sprite(0, 500, AssetKeys.ATLAS_XML, "bomb.png");

        this.game.add.sprite(20, 520, AssetKeys.ATLAS_XML1, "bomb.png");

        // -------- binary -------- //

        let binary = this.game.cache.getBinary(AssetKeys.BINARY);
        this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, {fill: "#ffffff"});

        binary = this.game.cache.getBinary(AssetKeys.BINARY1);
        this.game.add.text(120, 520, "binary.byteLength: " + binary.byteLength, {fill: "#ffffff"});

        // -------- bitmapFont -------- //

        let text = this.game.add.bitmapText(200, 100, AssetKeys.BITMAP_FONT, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        text = this.game.add.bitmapText(220, 120, AssetKeys.BITMAP_FONT1, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        // -------- image -------- //

        this.game.add.sprite(0, 0, AssetKeys.IMAGE);

        this.game.add.sprite(20, 20, AssetKeys.IMAGE1);

        // -------- images -------- //

        this.game.add.sprite(40, 40, AssetKeys.IMAGE2);

        this.game.add.sprite(60, 60, AssetKeys.IMAGE3);

        // -------- json -------- //

        let json = this.game.cache.getJSON(AssetKeys.JSON);
        this.game.add.text(100, 130, json.test, {fill: "#ffffff"});

        json = this.game.cache.getJSON(AssetKeys.JSON1);
        this.game.add.text(120, 150, json.test, {fill: "#ffffff"});

        // -------- physics -------- //

        this.game.physics.startSystem(Phaser.Physics.P2JS);

        let contra = this.game.add.sprite(100, 200, AssetKeys.IMAGE);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS, 'contra2', contra);

        contra = this.game.add.sprite(120, 220, AssetKeys.IMAGE1);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS1, 'contra2', contra);

        // -------- script -------- //

        let module = new ScriptTest();
        module.print("game.load.script worked!");

        module = new ScriptTest1();
        module.print("game.load.script worked again!");

        // -------- shader -------- //

        let filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(AssetKeys.SHADER));
        filter.setResolution(400, 600);
        let sprite = this.game.add.sprite();
        sprite.x = 500;
        sprite.y = 150;
        sprite.width = 400;
        sprite.height = 600;
        sprite.filters = [filter];

        filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(AssetKeys.SHADER1));
        filter.setResolution(400, 600);
        sprite = this.game.add.sprite();
        sprite.x = 520;
        sprite.y = 170;
        sprite.width = 400;
        sprite.height = 600;
        sprite.filters = [filter];

        // -------- text -------- //

        let html = this.game.cache.getText(AssetKeys.TEXT);
        console.log(html);

        html = this.game.cache.getText(AssetKeys.TEXT1);
        console.log(html);

        // -------- tilemap -------- //

        let map = this.game.add.tilemap(AssetKeys.TILEMAP);
        if (map.getLayerIndex("surface")) {
            map.addTilesetImage(AssetKeys.SPRITESHEET, AssetKeys.SPRITESHEET, 70, 70);
            let layer = map.createLayer("surface");
            layer.resizeWorld();
        }

        map = this.game.add.tilemap(AssetKeys.TILEMAP1);
        if (map.getLayerIndex("surface")) {
            map.addTilesetImage(AssetKeys.SPRITESHEET, AssetKeys.SPRITESHEET, 70, 70);
            let layer = map.createLayer("surface");
            layer.resizeWorld();
        }

        // -------- xml -------- //

        let xml = this.game.cache.getXML(AssetKeys.XML);
        this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#ffffff"});

        xml = this.game.cache.getXML(AssetKeys.XML1);
        this.game.add.text(120, 180, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#ffffff"});
    }

    testObject() {

        // -------- atlas -------- //

        this.game.add.sprite(0, 200, AssetKeys.ATLAS, "p1_hurt");
        this.game.add.sprite(20, 220, AssetKeys.ATLAS1, "p1_hurt");
        this.game.add.sprite(40, 240, AssetKeys.ATLAS2, "p1_hurt");
        let test = this.game.add.sprite(60, 260, AssetKeys.ATLAS3, "p1_hurt");
        if (test.data.test !== "test") {
            console.log("test failed for " + AssetKeys.ATLAS3);
        }
        test = this.game.add.sprite(80, 280, AssetKeys.ATLAS4, "p1_hurt");
        if (test.format !== 1) {
            console.log("test failed for " + AssetKeys.ATLAS4);
        }

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
