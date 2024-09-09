/**
 * * Welcome to laser.js
 * * One of the projectile / attack types
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
   * @param {number} tu
   * * Time until the hitbox is on (i forgot the game term lol)
   * @param {number} ta
   * * Time until the hitbox is turned off
   * @param {number} tw
   * * Time until the hitbox is turned on where a less opacity version of the attack appears
   */
  constructor(x, y, w, h, tu, ta, tw) {
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

    // Check for hit
    if (!this.hitbox.on) return null;
    if (
      target.pos.x + target.size / 2 >= this.pos.x &&
      target.pos.x - target.size / 2 <= this.pos.x + this.width &&
      target.pos.y + target.size / 2 >= this.pos.y &&
      target.pos.y - target.size / 2 <= this.pos.y + this.height &&
      target.iframes <= 0 &&
      target.dash.iframes <= 0
    ) {
      target.iframes = 120;
      target.hit++;
    }
  };
}
