/**
 * * This is the function for detecting rectangle to rectangle collision
 * @param {number} r1x 
 * ! Assuming its positioned at the center, x pos of the rectangle1
 * @param {number} r1y 
 * ! Assuming its positioned at the center, y pos of the rectangle1
 * @param {number} r1w 
 * * Width of the rectangle1
 * @param {number} r1h 
 * * Height of the rectangle1
 * @param {number} r2x 
 * ! Assuming its positioned at the left top, x pos of the rectangle2
 * @param {number} r2y 
 * ! Assuming its positioned at the left top, y pos of the rectangle2
 * @param {number} r2w 
 * * Width of the rectangl2
 * @param {number} r2h 
 * * Height of the rectangl2
 * @returns 
 */
export const rect2rect = (r1x, r1y, r1w, r1h, r2x, r2y, r2w, r2h) => {
  if (
    r1x + r1w / 2 >= r2x &&
    r1x - r1w / 2 <= r2x + r2w &&
    r1y + r1h / 2 >= r2y &&
    r1y - r1h / 2 <= r2y + r2h
  ) {
    return true;
  }
  return false;
};
