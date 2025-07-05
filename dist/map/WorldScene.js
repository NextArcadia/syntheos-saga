import Phaser from 'phaser';
export default class WorldScene extends Phaser.Scene {
    constructor() {
        super('WorldScene');
        this.tileSize = 32;
    }
    create() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.player = this.add.rectangle(0, 0, this.tileSize, this.tileSize, 0xff0000)
            .setOrigin(0)
            .setPosition(this.tileSize * 5, this.tileSize * 5);
    }
    update() {
        let dx = 0;
        let dy = 0;
        if (this.cursors.left && Phaser.Input.Keyboard.JustDown(this.cursors.left)) {
            dx -= 1;
        }
        if (this.cursors.right && Phaser.Input.Keyboard.JustDown(this.cursors.right)) {
            dx += 1;
        }
        if (this.cursors.up && Phaser.Input.Keyboard.JustDown(this.cursors.up)) {
            dy -= 1;
        }
        if (this.cursors.down && Phaser.Input.Keyboard.JustDown(this.cursors.down)) {
            dy += 1;
        }
        if (dx !== 0 || dy !== 0) {
            this.player.x += dx * this.tileSize;
            this.player.y += dy * this.tileSize;
        }
    }
}
