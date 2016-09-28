'use strict'

import { Platform, View } from './_engine'

class Ball extends View.Item {
  constructor (dx, dy) {
    super(dx, dy, 12, 12)

    this.vectorX = randomNumberBetween(1, 9)
    this.vectorY = randomNumberBetween(1, 9)
  }

  get directionalMagnitude () {
    return Math.sqrt(this.vectorX ^ 2 + this.vectorY ^ 2)
  }

  draw (ctx) {
    ctx.beginPath()
    ctx.arc(6, 6, 6, Math.PI * 2, false)
    ctx.fillStyle = '#FF0000'
    ctx.fill()
    ctx.closePath()
  }
}

const originBall = new Ball(randomX(), randomY())
const layer = View
  .createLayer()
  .addEntity(originBall)

Platform.loop
  .add(() => {
    const entities = layer.getEntities()

    // Loop through the entities
    let ball
    let i = 0
    let n = entities.length

    for (; i < n;) {
      ball = entities[i++]

      // Ball Control
      let {dx: ballX, dy: ballY} = ball.getCoordinates()

      if (ballX + ball.getWidth() > View.getLayers()[0].getWidth() || ballX <= 0) {
        ball.vectorX = -ball.vectorX

        if (entities.length < 15) {
          layer.addEntity(new Ball(randomX(), randomY(), originBall.getCanvas()))
        }
      }

      if (ballY + ball.getHeight() > View.getLayers()[0].getHeight() || ballY <= 0) {
        ball.vectorY = -ball.vectorY

        if (entities.length < 15) {
          layer.addEntity(new Ball(randomX(), randomY(), originBall.getCanvas()))
        }
      }

      ball.setCoordinates({
        dx: ballX + ball.vectorX,
        dy: ballY + ball.vectorY
      })
    }
  })
  .start()

function randomX () {
  return randomNumberBetween(100, window.innerWidth - 100)
}

function randomY () {
  return randomNumberBetween(100, window.innerHeight - 100)
}

function randomNumberBetween (a, b) {
  return Math.floor(Math.random() * (b - a + 1) + a)
}

// import { Game, Input, Util, View } from './engine'
// import { ball } from './assets'
// import { player } from './objects/player'

// const rootLayer = View.createLayer()

// var bx = rootLayer.getWidth() / 2
// var by = rootLayer.getHeight() / 2
// var mx = rootLayer.getWidth() / 4
// var my = rootLayer.getHeight() / 4
// var dx = 2
// var dy = -2
// var ballRadius = 30

// window.addEventListener('resize', () => {
//   bx = rootLayer.getWidth() / 2
//   by = rootLayer.getHeight() / 2
//   mx = rootLayer.getWidth() / 4
//   my = rootLayer.getHeight() / 4
// }, false)

// Game.loop.add(() => {
//   rootLayer.clearCanvas()

//   // Box Control
//   if (Input.upArrow) {
//     my -= 4
//   }

//   if (Input.downArrow) {
//     my += 4
//   }

//   if (Input.leftArrow) {
//     mx -= 4
//   }

//   if (Input.rightArrow) {
//     mx += 4
//   }

//   player.coordinates(mx, my)

//   // Ball Control
//   if (bx + ballRadius * 2 > rootLayer.getWidth() || bx <= 0 || Util.collision.boxes(player, ball)) {
//     dx = -dx
//   }

//   if (by + ballRadius * 2 > rootLayer.getHeight() || by <= 0 || Util.collision.boxes(player, ball)) {
//     dy = -dy
//   }

//   bx += dx
//   by += dy

//   ball.coordinates(bx, by)

//   ball.draw(rootLayer)
//   player.draw(rootLayer)
// })

// Game.loop.start()
