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
 * @param {number} tx
 * * Obj1 pos x
 * @param {number} ty
 * * Obj1 pos y
 * @param {number} px
 * * Obj2 pos x
 * @param {number} py
 * * Obj2 pos y
 * @returns
 */
export const homein = (curx, cury, accx, accy, capx, capy, tx, ty, px, py) => {
  if(tx > px){
    curx -= accx
  }else{
    curx += accx
  }
  if (ty > py) {
    cury -= accy;
  } else {
    cury += accy;
  }
  // curx += accx;
  // cury += accy;
  if (Math.abs(curx) > capx) {
    curx = Math.sign(curx) * capx;
  }
  if (Math.abs(cury) > capy) {
    cury = Math.sign(cury) * capy;
  }
  return [curx, cury];
};
