class Ball {
    constructor(paddle) {
        this.radius = 15
        this.size = this.radius * 2;
        this.pos = createVector(paddle.pos.x + (paddle.width/ 2), (paddle.pos.y - this.radius - 5))
        this.color = color('gold');
        this.velocity = createVector(5, -5);
        this.paddle = paddle;
    }
    bouncePaddle() {
        if(this.pos.x + this.radius >= this.paddle.pos.x && 
           this.pos.x - this.radius <= this.paddle.pos.x + this.paddle.width ) {
            if(this.pos.y + this.radius > this.paddle.pos.y) {
                this.reverse('y');
                this.pos.y = this.paddle.pos.y - this.radius -1;
            }
           }
    }
    
    bounceEdge() {
        if(this.pos.x + this.radius >= width ) {
            this.reverse('x')
        } else if (this.pos.x - this.radius <= 0) {
            this.reverse('x')
        } else if (this.pos.y - this.radius <= 0) {
            this.reverse('y')
        }
   }
    
  
    display() {
      fill(this.color);
      ellipse(this.pos.x, this.pos.y, this.size, this.size);
    }
  
    update() {
      this.pos.add(this.velocity);
    }

    reverse(coord) {
        this.velocity[coord] *= -1
    }
    belowBottom() {
        return this.pos.y - this.radius > height 
        }
    }

  