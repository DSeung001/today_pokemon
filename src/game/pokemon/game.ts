import Phaser from 'phaser'
import BootScene from '@/game/pokemon/scenes/BootScene'
import PlayScene from '@/game/pokemon/scenes/PlayScene'

function launch(containerId: string) {
  return new Phaser.Game({
    type: Phaser.AUTO,
    width: 959,
    height: 511,
    parent: containerId,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: [BootScene, PlayScene]
  })
}

export default launch
export { launch }
