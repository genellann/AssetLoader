/**
 * Created by Genell Radley in 2017.
 *
 * https://github.com/gradley/AssetLoader
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

        this.game.add.sprite(0, 200, AssetKeys.ATLAS_0, "p1_hurt");

        // -------- atlasJSONArray -------- //

        this.game.add.sprite(0, 300, AssetKeys.ATLAS_JSON_ARRAY_0, "p1_front");

        // -------- atlasJSONHash -------- //

        this.game.add.sprite(0, 400, AssetKeys.ATLAS_JSON_HASH_0, "p1_duck");

        // -------- atlasXML -------- //

        this.game.add.sprite(0, 500, AssetKeys.ATLAS_XML_0, "bomb.png");

        // -------- binary -------- //

        let binary = this.game.cache.getBinary(AssetKeys.BINARY_0);
        this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, {fill: "#fff"});

        // -------- bitmapFont -------- //

        let text = this.game.add.bitmapText(200, 100, AssetKeys.BITMAP_FONT_0, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        // -------- image -------- //

        this.game.add.sprite(0, 0, AssetKeys.IMAGE_0);

        // -------- json -------- //

        let json = this.game.cache.getJSON(AssetKeys.JSON_0);
        this.game.add.text(100, 130, json.test, {fill: "#fff"});

        // -------- physics -------- //

        this.game.physics.startSystem(Phaser.Physics.P2JS);
        let contra = this.game.add.sprite(100, 200, AssetKeys.IMAGE_0);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS_0, 'contra2', contra);

        // -------- script -------- //

        let module = new ScriptTest();
        module.print("game.load.script worked!");

        // -------- shader -------- //

        let filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(AssetKeys.SHADER_0));
        filter.setResolution(400, 600);

        let sprite = this.game.add.sprite();
        sprite.x = 500;
        sprite.y = 150;
        sprite.width = 400;
        sprite.height = 600;

        sprite.filters = [filter];

        // -------- text -------- //

        let html = this.game.cache.getText(AssetKeys.TEXT_0);
        console.log(html);

        // -------- tilemap -------- //

        let map = this.game.add.tilemap(AssetKeys.TILEMAP_0);
        if (map.getLayerIndex("surface")) {
            map.addTilesetImage(AssetKeys.SPRITESHEET_0, AssetKeys.SPRITESHEET_0, 70, 70);
            let layer = map.createLayer("surface");
            layer.resizeWorld();
        }

        // -------- xml -------- //

        let xml = this.game.cache.getXML(AssetKeys.XML_0);
        this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#fff"});
    }

    testArray() {
        // -------- atlas -------- //

        this.game.add.sprite(0, 200, AssetKeys.ATLAS_0, "p1_hurt");

        this.game.add.sprite(20, 220, AssetKeys.ATLAS_1, "p1_hurt");

        // -------- atlasJSONArray -------- //

        this.game.add.sprite(0, 300, AssetKeys.ATLAS_JSON_ARRAY_0, "p1_front");

        this.game.add.sprite(20, 320, AssetKeys.ATLAS_JSON_ARRAY_1, "p1_front");

        // -------- atlasJSONHash -------- //

        this.game.add.sprite(0, 400, AssetKeys.ATLAS_JSON_HASH_0, "p1_duck");

        this.game.add.sprite(20, 420, AssetKeys.ATLAS_JSON_HASH_1, "p1_duck");

        // -------- atlasXML -------- //

        this.game.add.sprite(0, 500, AssetKeys.ATLAS_XML_0, "bomb.png");

        this.game.add.sprite(20, 520, AssetKeys.ATLAS_XML_1, "bomb.png");

        // -------- binary -------- //

        let binary = this.game.cache.getBinary(AssetKeys.BINARY_0);
        this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, {fill: "#fff"});

        binary = this.game.cache.getBinary(AssetKeys.BINARY_1);
        this.game.add.text(120, 520, "binary.byteLength: " + binary.byteLength, {fill: "#fff"});

        // -------- bitmapFont -------- //

        let text = this.game.add.bitmapText(200, 100, AssetKeys.BITMAP_FONT_0, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        text = this.game.add.bitmapText(220, 120, AssetKeys.BITMAP_FONT_1, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        // -------- image -------- //

        this.game.add.sprite(0, 0, AssetKeys.IMAGE_0);

        this.game.add.sprite(20, 20, AssetKeys.IMAGE_1);

        // -------- images -------- //

        this.game.add.sprite(40, 40, AssetKeys.IMAGES_0);

        this.game.add.sprite(60, 60, AssetKeys.IMAGES_1);

        // -------- json -------- //

        let json = this.game.cache.getJSON(AssetKeys.JSON_0);
        this.game.add.text(100, 130, json.test, {fill: "#fff"});

        json = this.game.cache.getJSON(AssetKeys.JSON_1);
        this.game.add.text(120, 150, json.test, {fill: "#fff"});

        // -------- physics -------- //

        this.game.physics.startSystem(Phaser.Physics.P2JS);

        let contra = this.game.add.sprite(100, 200, AssetKeys.IMAGE_0);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS_0, 'contra2', contra);

        contra = this.game.add.sprite(120, 220, AssetKeys.IMAGE_1);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS_1, 'contra2', contra);

        // -------- script -------- //

        let module = new ScriptTest();
        module.print("game.load.script worked!");

        module = new ScriptTest1();
        module.print("game.load.script worked again!");

        // -------- shader -------- //

        let filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(AssetKeys.SHADER_0));
        filter.setResolution(400, 600);
        let sprite = this.game.add.sprite();
        sprite.x = 500;
        sprite.y = 150;
        sprite.width = 400;
        sprite.height = 600;
        sprite.filters = [filter];

        filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(AssetKeys.SHADER_1));
        filter.setResolution(400, 600);
        sprite = this.game.add.sprite();
        sprite.x = 520;
        sprite.y = 170;
        sprite.width = 400;
        sprite.height = 600;
        sprite.filters = [filter];

        // -------- text -------- //

        let html = this.game.cache.getText(AssetKeys.TEXT_0);
        console.log(html);

        html = this.game.cache.getText(AssetKeys.TEXT_1);
        console.log(html);

        // -------- tilemap -------- //

        let map = this.game.add.tilemap(AssetKeys.TILEMAP_0);
        if (map.getLayerIndex("surface")) {
            map.addTilesetImage(AssetKeys.SPRITESHEET_0, AssetKeys.SPRITESHEET_0, 70, 70);
            let layer = map.createLayer("surface");
            layer.resizeWorld();
        }

        map = this.game.add.tilemap(AssetKeys.TILEMAP_1);
        if (map.getLayerIndex("surface")) {
            map.addTilesetImage(AssetKeys.SPRITESHEET_0, AssetKeys.SPRITESHEET_0, 70, 70);
            let layer = map.createLayer("surface");
            layer.resizeWorld();
        }

        // -------- xml -------- //

        let xml = this.game.cache.getXML(AssetKeys.XML_0);
        this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#fff"});

        xml = this.game.cache.getXML(AssetKeys.XML_1);
        this.game.add.text(120, 180, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#fff"});
    }

    testObject() {

        // -------- atlas -------- //

        this.game.add.sprite(0, 200, AssetKeys.ATLAS_0, "p1_hurt");
        this.game.add.sprite(20, 220, AssetKeys.ATLAS_1, "p1_hurt");
        this.game.add.sprite(40, 240, AssetKeys.ATLAS_2, "p1_hurt");
        this.game.add.sprite(60, 260, AssetKeys.ATLAS_3, "p1_hurt");
        this.game.add.sprite(80, 280, AssetKeys.ATLAS_4, "p1_hurt");
        this.game.add.sprite(100, 300, AssetKeys.ATLAS_5, "p1_hurt");
        this.game.add.sprite(120, 320, AssetKeys.ATLAS_6, "carrot");
        this.game.add.sprite(140, 340, AssetKeys.ATLAS_7, "p1_hurt");
        this.game.add.sprite(160, 360, AssetKeys.ATLAS_8, "p1_hurt");
        this.game.add.sprite(180, 380, AssetKeys.ATLAS_9, "p1_hurt");
        console.log("atlas - should see 5 error logs from AssetLoader");

        // -------- atlasJSONArray -------- //

        this.game.add.sprite(20, 300, AssetKeys.ATLAS_JSON_ARRAY_0, "p1_front");
        this.game.add.sprite(40, 320, AssetKeys.ATLAS_JSON_ARRAY_1, "p1_front");
        this.game.add.sprite(60, 340, AssetKeys.ATLAS_JSON_ARRAY_2, "p1_front");
        this.game.add.sprite(80, 360, AssetKeys.ATLAS_JSON_ARRAY_3, "p1_front");
        this.game.add.sprite(100, 380, AssetKeys.ATLAS_JSON_ARRAY_4, "p1_front");
        this.game.add.sprite(120, 400, AssetKeys.ATLAS_JSON_ARRAY_5, "p1_front");
        this.game.add.sprite(140, 420, AssetKeys.ATLAS_JSON_ARRAY_6, "p1_front");
        this.game.add.sprite(160, 440, AssetKeys.ATLAS_JSON_ARRAY_7, "p1_front");
        console.log("atlasJSONArray - should see 4 error logs from AssetLoader");

        // -------- atlasJSONHash -------- //

        this.game.add.sprite(0, 400, AssetKeys.ATLAS_JSON_HASH_0, "p1_duck");
        this.game.add.sprite(20, 420, AssetKeys.ATLAS_JSON_HASH_1, "p1_duck");
        this.game.add.sprite(40, 440, AssetKeys.ATLAS_JSON_HASH_2, "p1_duck");
        this.game.add.sprite(60, 460, AssetKeys.ATLAS_JSON_HASH_3, "p1_duck");
        this.game.add.sprite(80, 480, AssetKeys.ATLAS_JSON_HASH_4, "p1_duck");
        this.game.add.sprite(100, 500, AssetKeys.ATLAS_JSON_HASH_5, "p1_duck");
        this.game.add.sprite(120, 520, AssetKeys.ATLAS_JSON_HASH_6, "p1_duck");
        this.game.add.sprite(140, 540, AssetKeys.ATLAS_JSON_HASH_7, "p1_duck");
        console.log("atlasJSONHash - should see 4 error logs from AssetLoader");

        // -------- atlasXML -------- //

        this.game.add.sprite(0, 500, AssetKeys.ATLAS_XML_0, "bomb.png");
        this.game.add.sprite(20, 520, AssetKeys.ATLAS_XML_1, "bomb.png");
        this.game.add.sprite(40, 540, AssetKeys.ATLAS_XML_2, "bomb.png");
        this.game.add.sprite(60, 560, AssetKeys.ATLAS_XML_3, "bomb.png");
        this.game.add.sprite(80, 580, AssetKeys.ATLAS_XML_4, "bomb.png");
        this.game.add.sprite(100, 600, AssetKeys.ATLAS_XML_5, "bomb.png");
        this.game.add.sprite(120, 620, AssetKeys.ATLAS_XML_6, "bomb.png");
        this.game.add.sprite(140, 640, AssetKeys.ATLAS_XML_7, "bomb.png");
        console.log("atlasXML - should see 4 error logs from AssetLoader");

        // -------- audio -------- //

        this.game.sound.play(AssetKeys.AUDIO_0);
        this.game.sound.play(AssetKeys.AUDIO_1);
        this.game.sound.play(AssetKeys.AUDIO_2);
        this.game.sound.play(AssetKeys.AUDIO_3);
        this.game.sound.play(AssetKeys.AUDIO_4);
        console.log("audio - should see 9 error logs from AssetLoader");

        // -------- audioSprite -------- //

        let fx = this.game.add.audio(AssetKeys.AUDIO_SPRITE_0);
        fx.allowMultiple = true;
        fx.addMarker('alien death', 1, 1.0);
        this.game.add.button(200, 400, AssetKeys.IMAGE_4, () => {
            fx.play('alien death');
        }, this, 0, 1, 2);
        this.game.add.text(200, 400, "click for audioSprite test");

        fx = this.game.add.audio(AssetKeys.AUDIO_SPRITE_1);
        fx.allowMultiple = true;
        fx.addMarker('alien death', 1, 1.0);
        this.game.add.button(200, 420, AssetKeys.IMAGE_4, () => {
            fx.play('alien death');
        }, this, 0, 1, 2);
        this.game.add.text(200, 420, "click for audioSprite test");

        fx = this.game.add.audio(AssetKeys.AUDIO_SPRITE_2);
        fx.allowMultiple = true;
        fx.addMarker('alien death', 1, 1.0);
        this.game.add.button(200, 440, AssetKeys.IMAGE_4, () => {
            fx.play('alien death');
        }, this, 0, 1, 2);
        this.game.add.text(200, 440, "click for audioSprite test");

        fx = this.game.add.audio(AssetKeys.AUDIO_SPRITE_3);
        fx.allowMultiple = true;
        fx.addMarker('alien death', 1, 1.0);
        this.game.add.button(200, 460, AssetKeys.IMAGE_4, () => {
            fx.play('alien death');
        }, this, 0, 1, 2);
        this.game.add.text(200, 460, "click for audioSprite test");

        console.log("audioSprite - should see 7 error logs from AssetLoader");

        // -------- binary -------- //

        let binary = this.game.cache.getBinary(AssetKeys.BINARY_0);
        this.game.add.text(100, 500, "binary.byteLength: " + binary.byteLength, {fill: "#fff"});

        binary = this.game.cache.getBinary(AssetKeys.BINARY_1);
        this.game.add.text(120, 520, "binary.byteLength: " + binary.byteLength, {fill: "#fff"});

        binary = this.game.cache.getBinary(AssetKeys.BINARY_2);
        this.game.add.text(140, 540, "binary.byteLength: " + binary.byteLength, {fill: "#fff"});

        console.log("binary - should see 3 error logs from AssetLoader");

        // -------- bitmapFont -------- //

        let text = this.game.add.bitmapText(200, 100, AssetKeys.BITMAP_FONT_0, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        text = this.game.add.bitmapText(220, 120, AssetKeys.BITMAP_FONT_1, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        text = this.game.add.bitmapText(240, 140, AssetKeys.BITMAP_FONT_2, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        text = this.game.add.bitmapText(260, 160, AssetKeys.BITMAP_FONT_3, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        text = this.game.add.bitmapText(280, 180, AssetKeys.BITMAP_FONT_4, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        text = this.game.add.bitmapText(300, 200, AssetKeys.BITMAP_FONT_5, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        text = this.game.add.bitmapText(320, 230, AssetKeys.BITMAP_FONT_6, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        text = this.game.add.bitmapText(320, 230, AssetKeys.BITMAP_FONT_7, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        text = this.game.add.bitmapText(320, 230, AssetKeys.BITMAP_FONT_8, 'Bitmap Fonts!', 64);
        text.setText('Bitmap Fonts!\nx: ' + Math.round(this.game.input.x) + ' y: ' + Math.round(this.game.input.y));

        console.log("bitmapFont - should see 4 error logs from AssetLoader");

        // -------- image -------- //

        this.game.add.sprite(0, 0, AssetKeys.IMAGE_0);
        this.game.add.sprite(20, 20, AssetKeys.IMAGE_1);
        this.game.add.sprite(40, 40, AssetKeys.IMAGE_2);
        this.game.add.sprite(50, 50, AssetKeys.IMAGE_3);
        this.game.add.sprite(60, 60, AssetKeys.IMAGE_4);

        console.log("image - should see 3 error logs from AssetLoader");

        // -------- images -------- //

        this.game.add.sprite(700, 160, AssetKeys.IMAGES_0);
        this.game.add.sprite(720, 180, AssetKeys.IMAGES_1);

        // -------- json -------- //

        let json = this.game.cache.getJSON(AssetKeys.JSON_0);
        this.game.add.text(100, 130, json.test, {fill: "#fff"});

        json = this.game.cache.getJSON(AssetKeys.JSON_1);
        this.game.add.text(120, 150, json.test, {fill: "#fff"});

        json = this.game.cache.getJSON(AssetKeys.JSON_2);
        this.game.add.text(140, 170, json.test, {fill: "#fff"});

        json = this.game.cache.getJSON(AssetKeys.JSON_3);
        this.game.add.text(160, 190, json.test, {fill: "#fff"});

        json = this.game.cache.getJSON(AssetKeys.JSON_4);
        this.game.add.text(180, 210, json.test, {fill: "#fff"});

        console.log("json - should see 3 error logs from AssetLoader");

        // -------- pack -------- //

        this.game.add.image(0, 0, AssetKeys.IMAGE_5);
        this.game.add.image(20, 20, AssetKeys.IMAGE_6);

        console.log("pack - should see 1 error log from AssetLoader");

        // -------- physics -------- //

        this.game.physics.startSystem(Phaser.Physics.P2JS);

        let contra = this.game.add.sprite(100, 200, AssetKeys.IMAGES_0);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS_0, 'contra2', contra);

        contra = this.game.add.sprite(120, 220, AssetKeys.IMAGES_0);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS_1, 'contra2', contra);

        contra = this.game.add.sprite(140, 240, AssetKeys.IMAGES_0);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS_2, 'contra2', contra);

        contra = this.game.add.sprite(160, 260, AssetKeys.IMAGES_0);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS_3, 'contra2', contra);

        contra = this.game.add.sprite(180, 280, AssetKeys.IMAGES_0);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS_4, 'contra2', contra);

        contra = this.game.add.sprite(200, 300, AssetKeys.IMAGES_0);
        this.game.physics.enable(contra, Phaser.Physics.P2JS);
        contra.body.loadPolygon(AssetKeys.PHYSICS_5, 'contra2', contra);

        console.log("physics - should see 4 error logs from AssetLoader");

        // -------- script -------- //

        let module = new ScriptTest();
        module.print("game.load.script for ScriptTest.js worked!");

        module = new ScriptTest1();
        module.print("game.load.script for ScriptTest1.js worked!");

        module = new ScriptTest2();
        module.print("game.load.script for ScriptTest2.js worked!");

        console.log("script - should see 2 error logs from AssetLoader");

        // -------- shader -------- //

        let filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(AssetKeys.SHADER_0));
        filter.setResolution(400, 600);
        let sprite = this.game.add.sprite();
        sprite.x = 500;
        sprite.y = 150;
        sprite.width = 400;
        sprite.height = 600;
        sprite.filters = [filter];

        filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(AssetKeys.SHADER_1));
        filter.setResolution(400, 600);
        sprite = this.game.add.sprite();
        sprite.x = 520;
        sprite.y = 170;
        sprite.width = 400;
        sprite.height = 600;
        sprite.filters = [filter];

        filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(AssetKeys.SHADER_2));
        filter.setResolution(400, 600);
        sprite = this.game.add.sprite();
        sprite.x = 540;
        sprite.y = 190;
        sprite.width = 400;
        sprite.height = 600;
        sprite.filters = [filter];

        filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(AssetKeys.SHADER_3));
        filter.setResolution(400, 600);
        sprite = this.game.add.sprite();
        sprite.x = 560;
        sprite.y = 210;
        sprite.width = 400;
        sprite.height = 600;
        sprite.filters = [filter];

        filter = new Phaser.Filter(this.game, null, this.game.cache.getShader(AssetKeys.SHADER_4));
        filter.setResolution(400, 600);
        sprite = this.game.add.sprite();
        sprite.x = 580;
        sprite.y = 230;
        sprite.width = 400;
        sprite.height = 600;
        sprite.filters = [filter];

        console.log("shader - should see 3 error logs from AssetLoader");

        // -------- spritesheet -------- //

        let spritesheet = this.game.add.sprite(0, 130, AssetKeys.SPRITESHEET_0);
        spritesheet.animations.add("anim");
        spritesheet.animations.play("anim");

        spritesheet = this.game.add.sprite(20, 150, AssetKeys.SPRITESHEET_1);
        spritesheet.animations.add("anim");
        spritesheet.animations.play("anim");

        console.log("spritesheet - should see 5 error logs from AssetLoader");

        // -------- text -------- //

        let html = this.game.cache.getText(AssetKeys.TEXT_0);
        console.log(html);

        html = this.game.cache.getText(AssetKeys.TEXT_1);
        console.log(html);

        html = this.game.cache.getText(AssetKeys.TEXT_2);
        console.log(html);

        html = this.game.cache.getText(AssetKeys.TEXT_3);
        console.log(html);

        html = this.game.cache.getText(AssetKeys.TEXT_4);
        console.log(html);

        console.log("text - should see 3 error logs from AssetLoader");

        // -------- tilemap -------- //

        let map = this.game.add.tilemap(AssetKeys.TILEMAP_0);
        if (map.getLayerIndex("surface")) {
            map.addTilesetImage(AssetKeys.SPRITESHEET_0, AssetKeys.SPRITESHEET_0, 70, 70);
            let layer = map.createLayer("surface");
            layer.resizeWorld();
        }

        map = this.game.add.tilemap(AssetKeys.TILEMAP_1);
        if (map.getLayerIndex("surface")) {
            map.addTilesetImage(AssetKeys.SPRITESHEET_0, AssetKeys.SPRITESHEET_0, 70, 70);
            let layer = map.createLayer("surface");
            layer.resizeWorld();
        }

        map = this.game.add.tilemap(AssetKeys.TILEMAP_2);
        if (map.getLayerIndex("surface")) {
            map.addTilesetImage(AssetKeys.SPRITESHEET_0, AssetKeys.SPRITESHEET_0, 70, 70);
            let layer = map.createLayer("surface");
            layer.resizeWorld();
        }

        map = this.game.add.tilemap(AssetKeys.TILEMAP_3);
        if (map.getLayerIndex("surface")) {
            map.addTilesetImage(AssetKeys.SPRITESHEET_0, AssetKeys.SPRITESHEET_0, 70, 70);
            let layer = map.createLayer("surface");
            layer.resizeWorld();
        }

        map = this.game.add.tilemap(AssetKeys.TILEMAP_4);
        if (map.getLayerIndex("surface")) {
            map.addTilesetImage(AssetKeys.SPRITESHEET_0, AssetKeys.SPRITESHEET_0, 70, 70);
            let layer = map.createLayer("surface");
            layer.resizeWorld();
        }

        console.log("tilemap - should see 4 error logs from AssetLoader");

        // -------- video -------- //

        let video = this.game.add.video(AssetKeys.VIDEO_0);
        video.play(true);
        video.addToWorld(200, 200, 0, 0, 0.3, 0.3);

        video = this.game.add.video(AssetKeys.VIDEO_1);
        video.play(true);
        video.addToWorld(250, 250, 0, 0, 0.3, 0.3);

        video = this.game.add.video(AssetKeys.VIDEO_2);
        video.play(true);
        video.addToWorld(300, 300, 0, 0, 0.3, 0.3);

        video = this.game.add.video(AssetKeys.VIDEO_3);
        video.play(true);
        video.addToWorld(350, 350, 0, 0, 0.3, 0.3);

        console.log("video - should see 3 error logs from AssetLoader");

        // -------- xml -------- //

        let xml = this.game.cache.getXML(AssetKeys.XML_0);
        this.game.add.text(100, 160, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#fff"});

        xml = this.game.cache.getXML(AssetKeys.XML_1);
        this.game.add.text(120, 180, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#fff"});

        xml = this.game.cache.getXML(AssetKeys.XML_2);
        this.game.add.text(140, 200, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#fff"});

        xml = this.game.cache.getXML(AssetKeys.XML_3);
        this.game.add.text(160, 220, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#fff"});

        xml = this.game.cache.getXML(AssetKeys.XML_4);
        this.game.add.text(180, 240, xml.firstElementChild.firstElementChild.innerHTML, {fill: "#fff"});

        console.log("xml - should see 3 error logs from AssetLoader");
    }
}

export default PlayState;
