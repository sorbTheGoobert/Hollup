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
