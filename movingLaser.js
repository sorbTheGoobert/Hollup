import Laser from "./laser.js";
import { accelarate } from "./projMethods/move/accelarate.js";

export class movingLaser extends Laser {
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
    super(x, y, w, h, tu, ta, tw);
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
  draw = (ctx) => {
    // super.draw(ctx);
  };
  check = (target) => {
    super.check(target);
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
    return null;
  };
}
