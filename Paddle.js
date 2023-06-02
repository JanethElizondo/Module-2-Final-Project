class Paddle {
    constructor() {
    this.width = 200
    this.height = 25
    this.color = color('green')
    this.pos = createVector((width/ 2) - (this.width/2), height - 35)
    const speed = 10;
    this.speed = {
      right: createVector(speed, 0),
      left: createVector(speed * -1, 0)
    }
  }
  display() {
    fill(this.color)
    rect(this.pos.x, this.pos.y, this.width, this.height)
  }
  move(direction) {
   this.pos.add(this.speed [direction])

   if(this.pos.x <0) {
      this.pos.x = 0
   } else if (this.pos.x + this.width > width) {
     this.pos.x = width - this.width
   }
 }
}
                                  
