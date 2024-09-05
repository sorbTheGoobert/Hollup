/**
 * * Welcome to laser.js
 * * One of the projectile / attack types
 * TODO: Add hit detection
 * TODO: Add amount of time waited for it to spawn and dispawn
 */
export default class Laser {
  /**
   * * This is the constructor for Laser
   * @param {number} x
   * * Horizontal position of the laser
   * @param {number} y
   * * Vertical position of the laser
   * @param {number} w
   * * Width of the laser
   * @param {number} h
   * * Height of the laser
   */
  constructor(x, y, w, h) {
    this.pos = {
      x: x,
      y: y,
    };
    this.width = w;
    this.height = h;
    this.color = "red";
  }

  /**
   * * Just draws the laser
   * @param {object} ctx
   * * As always, context for drawing
   */
  draw = (ctx) => {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
  };

  /**
   * * Collision detection with player
   * @param {object} player
   * * The player object
   */
  check = (target, ctx) => {
    if (
      target.pos.x + target.size / 2 >= this.pos.x &&
      target.pos.x - target.size / 2<= this.pos.x + this.width &&
      target.pos.y + target.size / 2 >= this.pos.y &&
      target.pos.y - target.size / 2<= this.pos.y + this.height
    ) {
      target.color.current = target.color.hit;
    }else{
      target.color.current = target.color.idle;
    }
  };
}
