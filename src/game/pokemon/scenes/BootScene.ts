import { Scene } from 'phaser'

import background from '@/game/pokemon/assets/background.png'
import bomb from '@/game/pokemon/assets/bomb.png'
import thudMp3 from '@/game/pokemon/assets/thud.mp3'
import thudOgg from '@/game/pokemon/assets/thud.ogg'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('background', background)
    this.load.image('bomb', bomb)
    this.load.audio('thud', [thudMp3, thudOgg])
  }

  create () {
    this.scene.start('PlayScene')
  }
}
