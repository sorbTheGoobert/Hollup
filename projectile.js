/**
 * * Welcome to projectile.js
 * * One of the projectile / attack types
 */
export default class Projectile {
  /**
   * * This is the constructor for Projectile
   * @param {number} x
   * * Horizontal position of the projectile
   * @param {number} y
   * * Vertical position of the projectile
   * @param {number} a
   * * Angle of the projectile
   * @param {number} s
   * * Horizontal of the projectile
   * @param {number} r
   * * Radius of the projectile
   * @param {number} p
   * * If the projectile pierces or not
   */
  constructor(x, y, a, s, r, p) {
    this.pos = {
      x: x,
      y: y,
    };
    this.radius = r;
    this.color = "rgba(255, 0, 0, 1)";
    this.hitbox = false;
    this.dead = false;
    this.speed = s;
    this.pierce = p;
    this.angle = a;
  }

  /**
   * * Just draws the projectile
   * @param {object} ctx
   * * As always, context for drawing
   */
  draw = (ctx) => {
    if (!this.dead) {
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
      return null;
    }

    if (this.radius <= 0) {
      return null;
    }

    let decreaseSize = this.radius / 10;
    this.radius -= decreaseSize;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  };

  /**
   * * Collision detection with player
   * @param {object} player
   * * The player object
   */
  check = (target) => {
    // Check if it has ran out
    if (this.dead) return null;

    // Move
    let deltaX = this.speed;
    let deltaY;

    if (this.angle == Math.PI || this.angle == 0) {
      deltaY = 0;
    } else if (this.angle > 0 && this.angle < Math.PI) {
      deltaY = deltaX / this.angle;
    } else if (this.angle > Math.PI && this.angle < 2 * Math.PI) {
      deltaY = -deltaX / Math.tan((this.angle * Math.PI) / Math.PI);
    }

    console.log({ dx: deltaX, dy: deltaY });

    this.pos.x += deltaX;
    this.pos.y += deltaY;

    // if()

    // Check for hit
    if (!this.hitbox) return null;

    let edgeX = this.pos.x,
      edgeY = this.pos.y;

    if (this.pos.x < target.pos.x) edgeX = target.pos.x;
    if (this.pos.x > target.pos.x + target.width)
      edgeX = target.pos.x + target.width;
    if (this.pos.y < target.pos.y) edgeY = target.pos.y;
    if (this.pos.y > target.pos.y + target.height)
      edgeY = target.pos.y + target.height;

    let distX = this.pos.x - edgeX;
    let distY = this.pos.y - edgeY;
    let dist = Math.sqrt(distX * distX + distY * distY);

    if (
      dist <= this.radius &&
      target.iframes <= 0 &&
      target.dash.iframes <= 0
    ) {
      if (!this.pierce) {
        this.hitbox = false;
        this.dead = true;
      }
      target.iframes = 120;
      target.hit++;
    }

    return null;
  };
}
