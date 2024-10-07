/**
 * This method calculates new velocities for a homing projectile with smoother steering.
 * @param {number} curx - Current horizontal velocity.
 * @param {number} cury - Current vertical velocity.
 * @param {number} acc - Acceleration magnitude (applied equally in x and y).
 * @param {number} maxSpeed - Maximum speed of the projectile.
 * @param {number} tx - Projectile's current x position.
 * @param {number} ty - Projectile's current y position.
 * @param {number} px - Target's (player's) x position.
 * @param {number} py - Target's (player's) y position.
 * @returns {[number, number]} - Updated [curx, cury] velocities for the projectile.
 */
export const homein = (curx, cury, acc, maxSpeed, tx, ty, px, py) => {
  // Calculate the difference between the target and projectile positions
  const dx = px - tx;
  const dy = py - ty;

  // Calculate the distance between the projectile and the player
  const dist = Math.sqrt(dx * dx + dy * dy);

  // Calculate the direction towards the player by normalizing the difference
  const dirX = dx / dist;
  const dirY = dy / dist;

  // Gradually adjust the projectile's velocity towards the target direction
  curx += dirX * acc;
  cury += dirY * acc;

  // Cap the speed to ensure it doesn't exceed maxSpeed
  const speed = Math.sqrt(curx * curx + cury * cury);
  if (speed > maxSpeed) {
    curx = (curx / speed) * maxSpeed;
    cury = (cury / speed) * maxSpeed;
  }

  return [curx, cury];

  // const a = tx - px;
  // const b = ty - py;

  // // const angleNow = Math.atan(b, a);
  // // let delta;
  // // let turn = angleNow - angle;
  // // let theta;

  // // if (angle !== angleNow) {
  // //   delta = angleNow - angle;
  // //   if (angle > Math.PI) {
  // //     angle -= Math.PI * 2;
  // //   } else if (angle < -Math.PI) {
  // //     angle += Math.PI * 2;
  // //   }

  // //   theta = angle > 0 ? turn : -turn;
  // //   angle += theta;
  // //   if (Math.abs(delta) < turn) {
  // //     angle = angleNow;
  // //   }
  // // }

  // // const c = Math.sqrt(a ** 2 + b ** 2)
  // // console.log({a, b, c})
  // // const angle = Math.cos((b ** 2 + c ** 2 - a ** 2) / Math.abs(2 * b * c)) ** -1 * 180 * (Math.sign());
  // const angle = Math.atan2(b, a);
  // // console.log(angle);
  // // console.log(angle * 180 / Math.PI)
  // // console.log(angle * 2)

  // // curx += accx * Math.cos(angle);
  // // cury += accy * Math.sin(angle);
  // // curx += -(accx * (90 - Math.abs(angle))) / 90;
  // // if (angle < 0) {
  // //   cury += accy - Math.abs((accx * (90 - Math.abs(angle))) / 90);
  // // } else {
  // //   cury += -accy + Math.abs((accx * (90 - Math.abs(angle))) / 90);
  // // }
  // curx += -Math.cos(angle) * accx;
  // cury += -Math.sin(angle) * accy;

  // if (Math.abs(curx) > capx) {
  //   curx = Math.sign(curx) * capx;
  // }
  // if (Math.abs(cury) > capy) {
  //   cury = Math.sign(cury) * capy;
  // }
  // return [curx, cury];
  // Calculate the difference between the target and projectile positions

  return [curx, cury];
};
