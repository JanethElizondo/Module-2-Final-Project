class Brick {
    constructor(pos, width, height, color) {
        this.pos = pos
        this.width = width
        this.height = height
        this.color = color
        this.points = 2
        
    }

    display() {
        fill(this.color)
        rect(this.pos.x, this.pos.y, this.width, this.height)
    }
    isColliding(ball) {
        if(ball.pos.y - ball.radius <= this.pos.y + this.height &&
            ball.pos.y + ball.radius >= this.pos.y &&
            ball.pos.x + ball.radius >= this.pos.x &&
            ball.pos.x - ball.radius <= this.pos.x +this.width ) {
                return true
            }
    }
}