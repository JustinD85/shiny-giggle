import * as Phaser from 'phaser'

export var config = {
  type: Phaser.AUTO,
  parent: 'phaser-target',
  pixelArt:true,
  width: 640,
  height: 480,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 },
    },
  },
  scene: {
    preload: preload,
    create: create,
  },
}

//Use this if I want the game to load without storing it first
// export default new Phaser.Game(config, 'phaser-target')

 function preload() {
  this.load.setBaseURL('http://labs.phaser.io')

  this.load.image('sky', 'assets/skies/space3.png')
  this.load.image('logo', 'assets/sprites/phaser3-logo.png')
  this.load.image('red', 'assets/particles/red.png')
}

 function create() {
  this.add.image(400, 300, 'sky')

  var particles = this.add.particles('red')
  var emitter = particles.createEmitter({
    speed: 100,
    scale: { start: 1, end: 0 },
    blendMode: 'ADD',
  })

  var logo = this.physics.add.image(400, 100, 'logo')

  logo.setVelocity(100, 200)
  logo.setBounce(1, 1)
  logo.setCollideWorldBounds(true)

  emitter.startFollow(logo)
}
