import { Scene } from 'phaser'

import background from '@/game/pokemon/assets/background.png'
import bomb from '@/game/pokemon/assets/bomb.png'
import character from '@/game/pokemon/assets/character.png'

export default class BootScene extends Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.load.image('background', background)
    this.load.image('bomb', bomb)
    this.load.image('character', character)
  }

  create () {
    this.scene.start('PlayScene')
  }
}
