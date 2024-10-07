/**
 * * This is the method to accelarate the speed
 * @param {number} curx
 * * Current horizontal velocity
 * @param {number} cury
 * * Current vertical velocity
 * @param {number} accx
 * * Horizontal accelaration
 * @param {number} accy
 * * Vertical accelaration
 * @param {number} capx
 * * Max horizontal velocity
 * @param {number} capy
 * * Max vertical velocity
 * @returns
 */
export const accelarate = (curx, cury, accx, accy, capx, capy) => {
  curx += accx;
  cury += accy;
  if (curx > capx) {
    curx = capx;
  }
  if (cury > capy) {
    cury = capy;
  }
  return [curx, cury];
};
