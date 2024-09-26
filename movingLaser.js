
import { rect2rect } from "./projMethods/collision/rect2rect.js";
import { accelarate } from "./projMethods/move/accelarate.js";

/**
 * * Welcome to laser.js
 * * One of the projectile / attack types
 */
export class movingLaser {
  /**
   * * This is the constructor for movingLaser
   * @param {number} x
   * * Horizontal position of the laser
   * @param {number} y
   * * Vertical position of the laser
   * @param {number} w
   * * Width of the laser
   * @param {number} h
   * * Height of the laser
   * @param {number} tu
   * * Time until the hitbox is on (i forgot the game term lol)
   * @param {number} ta
   * * Time until the hitbox is turned off
   * @param {number} tw
   * * Time until the hitbox is turned on where a less opacity version of the attack appears
   * @param {number} hv
   * * Initial horizontal velocity
   * @param {number} hmv
   * * Max horizontal velocity
   * @param {number} hac
   * * Horizontal accelaration
   * @param {number} vv
   * * Initial vertical velocity
   * @param {number} vmv
   * * Max vertical velocity
   * @param {number} vac
   * * Vertical accelaration
   */
  constructor(x, y, w, h, tu, ta, tw, hv, hmv, hac, vv, vmv, vac) {
    this.pos = {
      x: x,
      y: y,
    };
    this.width = w;
    this.height = h;
    this.opacity = {
      current: 0,
      step: 0.3 / tw,
    };
    this.color = {
      active: "rgba(255, 0, 0, 1)",
      pre_active: `rgba(255, 0, 0, ${this.opacity.current})`,
    };
    this.hitbox = {
      on: false,
      pre_active: false,
      timer: {
        until_active: tu,
        active: ta,
        pre_active: tw,
      },
    };
    this.dead = false;
    this.horizontal = w > h;
    this.speed = {
      horizontal: {
        current: hv,
        max_velocity: hmv,
        accelaration: hac,
      },
      vertical: {
        current: vv,
        max_velocity: vmv,
        accelaration: vac,
      },
    };
  }

  /**
   * * Just draws the laser
   * @param {object} ctx
   * * As always, context for drawing
   */
  draw = (ctx) => {
    if (this.hitbox.pre_active) {
      this.opacity.current += this.opacity.step;
      this.color.pre_active = `rgba(255, 0, 0, ${this.opacity.current})`;
      ctx.fillStyle = this.color.pre_active;
      ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }

    if (this.hitbox.on) {
      this.opacity.current = 1;
      ctx.fillStyle = this.color.active;
      ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }

    if (this.dead && this.width >= 0 && this.height >= 0) {
      let decreaseSize = this.horizontal ? this.height / 10 : this.width / 10;
      this.opacity.current -= 0.05;
      this.color.pre_active = `rgba(255, 0, 0, ${this.opacity.current})`;
      if (this.horizontal) {
        this.pos.y += decreaseSize / 2;
        this.height -= decreaseSize;
      } else {
        this.pos.x += decreaseSize / 2;
        this.width -= decreaseSize;
      }
      ctx.fillStyle = this.color.pre_active;
      ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height);
    }
  };

  /**
   * * Collision detection with player
   * @param {object} player
   * * The player object
   */
  check = (target) => {
    if (this.dead) return null;
    // // Check if it has ran out
    // if (this.hitbox.timer.active <= 0) return null;

    // Timer down until the hitbox is on
    this.hitbox.timer.until_active--;
    if (this.hitbox.timer.until_active == 0) {
      this.hitbox.on = true;
    }

    if (this.hitbox.timer.until_active - this.hitbox.timer.pre_active == 0) {
      this.hitbox.pre_active = true;
    }

    if (this.hitbox.on) {
      // If on timer down the remainder
      this.hitbox.timer.active--;
    }
    // Turn off both counter stuff
    if (this.hitbox.timer.active == 0) {
      this.hitbox.on = false;
      this.hitbox.pre_active = false;
      this.dead = true;
    }

    if(this.hitbox.on){
      [this.speed.horizontal.current, this.speed.vertical.current] = accelarate(
        this.speed.horizontal.current,
        this.speed.vertical.current,
        this.speed.horizontal.accelaration,
        this.speed.vertical.accelaration,
        this.speed.horizontal.max_velocity,
        this.speed.vertical.max_velocity
      );
  
      this.pos.x += this.speed.horizontal.current;
      this.pos.y += this.speed.vertical.current;
    }

    // Check for hit
    if (!this.hitbox.on) return null;
    if (
      rect2rect(
        target.pos.x,
        target.pos.y,
        target.size,
        target.size,
        this.pos.x,
        this.pos.y,
        this.width,
        this.height
      ) &&
      target.iframes <= 0 &&
      target.dash.iframes <= 0
    ) {
      target.iframes = 120;
      target.hit++;
    }
  };
}
