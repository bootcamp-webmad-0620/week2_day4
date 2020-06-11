// const app = {
//     name: 'Canvas App',
//     description: 'Basic drawing HTML5 Canvas app',
//     version: '1.0.0',
//     author: 'Germán Álvarez',
//     license: undefined,
//     canvasDom: undefined,
//     ctx: undefined,
//     canvasSize: {
//         w: window.innerWidth * .5,
//         h: window.innerHeight
//     },
//     init(id) {
//         this.canvasDom = document.getElementById(id)
//         this.canvasDom.setAttribute('width', this.canvasSize.w)
//         this.canvasDom.setAttribute('height', this.canvasSize.h)
//         this.ctx = this.canvasDom.getContext('2d')
//         console.log('Este es el contexto 2d de Canvas:', this.ctx)
//     },
//     drawFilledSquares() {
//         this.ctx.fillRect(0, 0, this.canvasSize.w, this.canvasSize.h)

//         this.ctx.fillStyle = '#fff'
//         this.ctx.fillRect(100, 100, this.canvasSize.w - 200, this.canvasSize.h - 200)

//         this.ctx.fillStyle = 'red'
//         this.ctx.fillRect(this.canvasSize.w / 2 - 25, 10, 50, this.canvasSize.h - 20)
//     },
//     drawLinearSquares() {
//         this.ctx.strokeRect(this.canvasSize.w / 2 - 100, this.canvasSize.h / 2 - 100, 200, 200)

//         this.ctx.strokeStyle = 'green'
//         this.ctx.lineWidth = 10
//         this.ctx.strokeRect(this.canvasSize.w / 2 - 25, this.canvasSize.h / 2 - 25, 50, 50)
//     },
//     drawLines() {
//         this.ctx.beginPath()
//         this.ctx.strokeStyle = 'blue'
//         this.ctx.lineWidth = 15
//         this.ctx.moveTo(100, 100)
//         this.ctx.lineTo(200, 200)
//         this.ctx.lineTo(300, 50)
//         this.ctx.stroke()

//         this.ctx.beginPath()
//         this.ctx.setLineDash([40, 20])
//         this.ctx.strokeStyle = 'black'
//         this.ctx.lineWidth = 8
//         this.ctx.moveTo(this.canvasSize.w / 2 - 4, 100)
//         this.ctx.lineTo(this.canvasSize.w / 2 - 4, this.canvasSize.h - 100)
//         this.ctx.stroke()
//     },
//     drawManyLines() {
//         this.ctx.beginPath()
//         for (let i = 0; i < 10; i++) {
//             this.ctx.moveTo(100, 100 * i)
//             this.ctx.lineTo(this.canvasSize.w - 100, this.canvasSize.h / 2)
//         }
//         this.ctx.stroke()
//     },
//     drawArc() {
//         this.ctx.fillStyle = 'red'
//         this.ctx.strokeStyle = 'green'
//         this.ctx.lineWidth = 30
//         this.ctx.arc(this.canvasSize.w / 2, this.canvasSize.h / 2, 200, 0, Math.PI)
//         this.ctx.stroke()
//         this.ctx.fill()
//     },
//     drawText(text) {
//         this.ctx.font = '80px sans-serif'
//         this.ctx.fillStyle = 'purple'
//         this.ctx.fillText(text, 100, 100)
//         // this.ctx.fillText(text, 100, 100)
//     },
//     drawImage(name) {
//         let image = new Image()
//         image.src = `img/${name}`
//         image.onload = () => this.ctx.drawImage(image, 100, 100, 200, 200)
//     }
// }











// const movingApp = {
//     name: 'Canvas App',
//     description: 'Basic animated HTML5 Canvas app',
//     version: '1.0.0',
//     author: 'Germán Álvarez',
//     license: undefined,
//     canvasDom: undefined,
//     ctx: undefined,
//     balls: [],
//     canvasSize: {
//         w: window.innerWidth,
//         h: window.innerHeight
//     },
//     init(id) {
//         this.canvasDom = document.getElementById(id)
//         this.canvasDom.setAttribute('width', this.canvasSize.w)
//         this.canvasDom.setAttribute('height', this.canvasSize.h)
//         this.ctx = this.canvasDom.getContext('2d')
//         this.drawBalls('football-ball.png')
//     },
//     drawBalls(name) {
//         const myBall1 = new Ball(this.ctx, name, 0, 50, 100, 100, 2, this.canvasSize)
//         const myBall2 = new Ball(this.ctx, name, 100, 250, 100, 100, 1, this.canvasSize)
//         const myBall3 = new Ball(this.ctx, name, 200, 450, 100, 100, 4, this.canvasSize)
//         const myBall4 = new Ball(this.ctx, name, 0, 650, 100, 100, 7, this.canvasSize)

//         this.balls.push(myBall1, myBall2, myBall3, myBall4)

//         this.balls.forEach(elm => elm.init())

//         setInterval(() => {
//             this.clearScreen()
//             this.balls.forEach(elm => elm.move())
//         }, 20)
//     },
//     clearScreen() {
//         this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
//     }
// }


// class Ball {
//     constructor(ctx, name, posX, posY, ballW, ballH, vel, canvasSize) {
//         this.ctx = ctx
//         this.name = name
//         this.posX = posX
//         this.posY = posY
//         this.ballW = ballW
//         this.ballH = ballH
//         this.vel = vel
//         this.canvasSize = canvasSize
//         this.ball = undefined
//     }

//     init() {
//         this.ball = new Image()
//         this.ball.src = `img/${this.name}`
//     }

//     move() {

//         // if (this.posX > this.canvasSize.w - this.ballW || this.posX < 0) {
//         //     this.changeDirection()
//         // }

//         this.posX > this.canvasSize.w - this.ballW || this.posX < 0 ? this.changeDirection() : null
//         this.posX += this.vel
//         this.drawUpdatedBall()
//     }

//     changeDirection() {
//         this.vel *= -1
//     }

//     drawUpdatedBall() {
//         this.ctx.drawImage(this.ball, this.posX, this.posY, this.ballW, this.ballH)
//     }
// }











const controlsApp = {
    name: 'Canvas App',
    description: 'Basic animated HTML5 Canvas app',
    version: '1.0.0',
    author: 'Germán Álvarez',
    license: undefined,
    canvasDom: undefined,
    ctx: undefined,
    ball: undefined,
    frames: 0,
    canvasSize: {
        w: window.innerWidth,
        h: window.innerHeight
    },
    init(id) {
        this.canvasDom = document.getElementById(id)
        this.canvasDom.setAttribute('width', this.canvasSize.w)
        this.canvasDom.setAttribute('height', this.canvasSize.h)
        this.ctx = this.canvasDom.getContext('2d')
        this.drawBall('football-ball.png')
        this.setEventListeners()
    },
    drawBall(name) {
        this.ball = new Ball(this.ctx, name, 10, 100, 100, 100, 5, this.canvasSize)
        this.ball.init()
        setInterval(() => {
            this.frames++
            this.frames % 50 === 0 ? console.log('UN OBSTACULO!! OH NO!!') : null
            this.clearScreen()
            this.ball.draw()
        }, 20)
    },
    setEventListeners() {
        document.onkeydown = e => {
            e.keyCode === 37 ? this.ball.move('left') : null
            e.keyCode === 39 ? this.ball.move('right') : null
        }
    },
    clearScreen() {
        this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    }
}


class Ball {
    constructor(ctx, name, posX, posY, ballW, ballH, vel, canvasSize) {
        this.ctx = ctx
        this.name = name
        this.posX = posX
        this.posY = posY
        this.ballW = ballW
        this.ballH = ballH
        this.vel = vel
        this.canvasSize = canvasSize
        this.ball = undefined
    }

    init() {
        this.ball = new Image()
        this.ball.src = `img/${this.name}`
    }

    move(dir) {
        dir === 'left' ? this.posX -= this.vel : null
        dir === 'right' ? this.posX += this.vel : null
    }

    draw() {
        this.ctx.drawImage(this.ball, this.posX, this.posY, this.ballW, this.ballH)
    }
}