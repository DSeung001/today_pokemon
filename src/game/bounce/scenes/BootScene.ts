import { Scene } from 'phaser'
import sky from '@/game/bounce/assets/sky.png'
import bomb from '@/game/bounce/assets/bomb.png'
import thudMp3 from '@/game/bounce/assets/thud.mp3'
import thudOgg from '@/game/bounce/assets/thud.ogg'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('sky', sky)
    this.load.image('bomb', bomb)
    this.load.audio('thud', [thudMp3, thudOgg])
  }

  create () {
    this.scene.start('PlayScene')
  }
}
