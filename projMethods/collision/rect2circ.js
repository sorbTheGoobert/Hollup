/**
 * * This is the function for detecting rectangles to circles
 * @param {number} cx
 * ! Assuming its positioned at the center, x pos of the circle
 * @param {number} cy
 * ! Assuming its positioned at the center, y pos of the circle
 * @param {number} cr
 * * Radius of the circle
 * @param {number} rx
 * ! Assuming its positioned at the center, x pos of the rectangle
 * @param {number} ry
 * ! Assuming its positioned at the center, y pos of the rectangle
 * @param {number} rw
 * * Width of the rectangle
 * @param {number} rh
 * * Height of the rectangle
 * @returns 
 */
export const rect2circ = (cx, cy, cr, rx, ry, rw, rh) => {
  let edgeX = cx,
    edgeY = cy;

  if (cx < rx - rw / 2) edgeX = rx - rw / 2;
  if (cx > rx + rw / 2) edgeX = rx + rw / 2;
  if (cy < ry - rh / 2) edgeY = ry - rh / 2;
  if (cy > ry + rh / 2) edgeY = ry + rh / 2;

  let distX = cx - edgeX;
  let distY = cy - edgeY;
  let dist = Math.sqrt(distX * distX + distY * distY);

  if (dist <= cr) {
    return true;
  }
  return false;
};
