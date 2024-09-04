<<<<<<< HEAD
/**
 * * Welcome to laser.js
 * * One of the projectile / attack types
 * TODO: Add hit detection
 * TODO: Add amount of time waited for it to spawn and dispawn
 */

export default class Laser {
  constructor(x1, y1, x2, y2, w) {
    this.pos = {
      x1: x1,
      x2: x2,
      y1: y1,
      y2: y2,
    };
    this.width = w; // line width
    this.color = "red";
  }
  draw = (ctx) => {
    ctx.lineWidth = this.width;
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.pos.x1, this.pos.y1);
    ctx.lineTo(this.pos.x2, this.pos.y2);
    ctx.stroke();
  };
  check = (target) => {
    
  };
}
=======
export default class Laser {
  constructor(x, y, w, h) {
    this.pos = {
      x: x,
      y: y,
    };
    this.width = w;
    this.height = h;
    this.color = "red";
  }
  draw = (ctx) => {
    ctx.fillStyle = this.color
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  };
  check = (target) => {
    if(
      target.pos.x + target.size >= this.pos.x &&
      target.pos.x <= this.pos.x + this.width &&
      target.pos.y + target.size >= this.pos.y &&
      target.pos.y <= this.pos.y + this.height
    ){
      console.log("HIT")
    }
  };
}
>>>>>>> origin/main
