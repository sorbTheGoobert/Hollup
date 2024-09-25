import { rect2circ } from "./projMethods/collision/rect2circ.js";
import { accelarate } from "./projMethods/move/accelarate.js";
import { homein } from "./projMethods/move/home.js";

/**
 * * Welcome to projectile.js
 * * One of the projectile / attack types
 */
export default class Homing {
  /**
   * * This is the constructer for homing projectiles
   * @param {number} x - Initial x position
   * @param {number} y - Initial y position
   * @param {number} a - Acceleration
   * @param {number} m - Max speed
   * @param {number} t - Time until it spawns
   * @param {number} tu - Time until it despawns
   * @param {number} r - Radius
   * @param {number} p - If the projectile pierces or not
   */
  constructor(x, y, xs, ys, a, m, t, tu, th, r, p) {
    this.pos = {
      x: x,
      y: y,
    };
    this.radius = r;
    this.color = "rgba(255, 128, 0, 1)";
    this.hitbox = false;
    this.dead = false;
    this.prestart = true;
    this.speed = {
      horizontal: xs,
      vertical: ys,
      accel: a,
      max: m,
    };
    this.pierce = p;
    this.timer = {
      until: t,
      on: tu,
      holdon: th,
    };
    this.hit = false;
  }

  /**
   * * Just draws the projectile
   * @param {object} ctx
   * * As always, context for drawing
   */
  draw = (ctx, main) => {
    if (
      rect2circ(
        this.pos.x,
        this.pos.y,
        this.radius,
        main.width / 2,
        main.height / 2,
        main.width,
        main.height
      )
    )
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
    this.timer.until--;
    if (this.timer.until <= 0) {
      this.timer.on--;
      this.hitbox = true;
      this.prestart = false;
      if (this.hit && !this.pierce) {
        this.hitbox = false;
        this.timer.on = 0;
      }
      if (this.timer.on <= 0) {
        this.hitbox = false;
        this.dead = true
      }
    }

    if (this.prestart) return null;
    // console.log(this.prestart)

    // Check if it has ran out
    if (this.dead) return null;

    if (this.timer.holdon > 0) {
      this.timer.holdon--;
      this.speed.horizontal = Math.max(this.speed.horizontal - this.speed.accel, Math.sign(this.speed.horizontal) * 1);
      this.speed.vertical = Math.max(this.speed.vertical - this.speed.accel, Math.sign(this.speed.vertical) * 1);
      this.pos.x += Math.max(this.speed.horizontal, Math.sign(this.speed.horizontal) * 1)
      this.pos.y += Math.max(this.speed.vertical, Math.sign(this.speed.vertical) * 1)
      return null;
    }

    // // Accelarate
    // this.speed.horizontal.current += this.speed.horizontal.accel;
    // this.speed.vertical.current += this.speed.vertical.accel;
    // if (this.speed.horizontal.current > this.speed.horizontal.cap) {
    //   this.speed.horizontal.current = this.speed.horizontal.cap;
    // }
    // if (this.speed.vertical.current > this.speed.vertical.cap) {
    //   this.speed.vertical.current = this.speed.vertical.cap;
    // }

    [this.speed.horizontal, this.speed.vertical] = homein(
      this.speed.horizontal,
      this.speed.vertical,
      this.speed.accel,
      this.speed.max,
      this.pos.x,
      this.pos.y,
      target.pos.x,
      target.pos.y
    );

    // Move
    this.pos.x += this.speed.horizontal;
    this.pos.y += this.speed.vertical;
    // if (
    //   this.pos.x + this.radius < 0 ||
    //   this.pos.x - this.radius > w ||
    //   this.pos.y + this.radius < 0 ||
    //   this.pos.y - this.radius > h
    // ) {
    //   this.dead = true;
    //   this.hitbox = false;
    // }

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
