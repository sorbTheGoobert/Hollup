import { rect2circ } from "./projMethods/collision/rect2circ.js";
import { accelarate } from "./projMethods/move/accelarate.js";

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
   * @param {number} h
   * * If the projectile homes or not
   */
  constructor(x, y, xs, ys, xa, ya, t, r, p) {
    this.pos = {
      x: x,
      y: y,
    };
    this.radius = r;
    this.color = "rgba(255, 0, 0, 0)";
    this.color_pointer = "rgba(255, 0, 0, 0.4)"
    this.hitbox = false;
    this.dead = false;
    this.prestart = true;
    this.speed = {
      horizontal: {
        current: 0,
        accel: xa,
        cap: xs,
      },
      vertical: {
        current: 0,
        accel: ya,
        cap: ys,
      },
    };
    this.pierce = p;
    this.timer = t;
    this.hit = false;
    this.opacity = 0;
  }

  /**
   * * Just draws the projectile
   * @param {object} ctx
   * * As always, context for drawing
   */
  draw = (ctx, main) => {
    if (this.prestart) {
      if (this.timer >= 60) {
        return null;
      }
      console.log(this.timer)
      let step = 1 / 120;
      this.opacity += step;
      this.color = `rgba(255, 0, 0, ${this.opacity.toPrecision(3)})`;
      console.log({ time: this.timer, color: this.color }, "Drawing pre hitbox!")
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
      return null;
    }
    this.color = "rgba(255, 0, 0, 1)";
    if (!this.dead) {
      const linearGrad = ctx.createLinearGradient(this.pos.x, this.pos.y, this.pos.x + this.speed.horizontal.current * 30, this.pos.y + this.speed.vertical.current * 30);
      linearGrad.addColorStop(0, this.color_pointer);
      linearGrad.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.strokeStyle = linearGrad;
      ctx.lineWidth = this.radius * 2
      ctx.beginPath();
      ctx.moveTo(this.pos.x, this.pos.y);
      ctx.lineTo(this.pos.x + this.speed.horizontal.current * 30, this.pos.y + this.speed.vertical.current * 30);
      ctx.stroke();
      ctx.closePath();
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
    if (this.timer <= 0) {
      this.hitbox = true;
      this.prestart = false;
      if (this.hit && !this.pierce) {
        this.hitbox = false;
      }
    }

    if (this.prestart) return null;
    // console.log(this.prestart)

    // Check if it has ran out
    if (this.dead) return null;

    // // Accelarate
    // this.speed.horizontal.current += this.speed.horizontal.accel;
    // this.speed.vertical.current += this.speed.vertical.accel;
    // if (this.speed.horizontal.current > this.speed.horizontal.cap) {
    //   this.speed.horizontal.current = this.speed.horizontal.cap;
    // }
    // if (this.speed.vertical.current > this.speed.vertical.cap) {
    //   this.speed.vertical.current = this.speed.vertical.cap;
    // }

    [this.speed.horizontal.current, this.speed.vertical.current] = accelarate(
      this.speed.horizontal.current,
      this.speed.vertical.current,
      this.speed.horizontal.accel,
      this.speed.vertical.accel,
      this.speed.horizontal.cap,
      this.speed.vertical.cap
    );

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

    if (
      rect2circ(
        this.pos.x,
        this.pos.y,
        this.radius,
        target.pos.x,
        target.pos.y,
        target.size,
        target.size
      ) &&
      target.iframes <= 0 &&
      target.dash.iframes <= 0
    ) {
      console.log("HIT");
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
