import Phaser from 'phaser';
import WorldScene from './map/WorldScene';
const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [WorldScene],
    parent: 'game'
};
new Phaser.Game(config);
