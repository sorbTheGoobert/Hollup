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
   * @param {number} xs
   * * Horizontal max velocity of the projectile
   * @param {number} ys
   * * Vertical max velocity of the projectile
   * @param {number} xa
   * * Horizontal accelaration of the projectile (Put to high amount for non accelarated boolet)
   * @param {number} ya
   * * Vertical accelaration of the projectile (Put to high amount for non accelarated boolet)
   * @param {number} t
   * * Time where the hitbox is active
   * @param {number} r
   * * Radius of the projectile
   * @param {number} p
   * * If the projectile pierces or not
   */
  constructor(x, y, xs, ys, xa, ya, t, r, p) {
    this.pos = {
      x: x,
      y: y,
    };
    this.radius = r;
    this.color = "rgba(255, 0, 0, 1)";
    this.hitbox = false;
    this.dead = false;
    this.prestart = true;
    this.speed = {
      horizontal: {
        current: 0,
        accel: xa,
        cap: xs
      },
      vertical: {
        current: 0,
        accel: ya,
        cap: ys
      },
    };
    this.pierce = p;
    this.timer = t;
  }

  /**
   * * Just draws the projectile
   * @param {object} ctx
   * * As always, context for drawing
   */
  draw = (ctx) => {
    if (this.prestart) {
      return null;
    }
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

    let decreaseSize = this.radius / 2;
    this.radius -= decreaseSize;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
    ctx.fill();
    ctx.closePath();
  };

  /**
   * * Collision detection with player
   * @param {object} target
   * * The player object
   * @param {number} w
   * * Screen width
   * @param {number} h
   * * Screen height
   */
  check = (target, w, h) => {
    this.timer--;
    if (!this.hitbox && this.timer <= 0) {
      this.prestart = false;
      this.dead = false;
      this.hitbox = true;
    }

    if (this.prestart) return null;

    // Check if it has ran out
    if (this.dead) return null;

    // Accelarate
    this.speed.horizontal.current += this.speed.horizontal.accel
    this.speed.vertical.current += this.speed.vertical.accel
    if (this.speed.horizontal.current > this.speed.horizontal.cap){
      this.speed.horizontal.current = this.speed.horizontal.cap
    }
    if (this.speed.vertical.current > this.speed.vertical.cap){
      this.speed.vertical.current = this.speed.vertical.cap
    }

    // Move
    this.pos.x += this.speed.horizontal.current;
    this.pos.y += this.speed.vertical.current;
    if (
      this.pos.x + this.radius < 0 ||
      this.pos.x - this.radius > w ||
      this.pos.y + this.radius < 0 ||
      this.pos.y - this.radius > h
    ) {
      this.dead = true;
      this.hitbox = false;
    }

    // Check for hit
    if (!this.hitbox) return null;

    let edgeX = this.pos.x,
      edgeY = this.pos.y;

    if (this.pos.x < target.pos.x - target.size / 2)
      edgeX = target.pos.x - target.size / 2;
    if (this.pos.x > target.pos.x + target.size / 2)
      edgeX = target.pos.x + target.size / 2;
    if (this.pos.y < target.pos.y - target.size / 2)
      edgeY = target.pos.y - target.size / 2;
    if (this.pos.y > target.pos.y + target.size / 2)
      edgeY = target.pos.y + target.size / 2;

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
