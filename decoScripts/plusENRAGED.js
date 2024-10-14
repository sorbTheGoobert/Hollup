/**
 * This is the most EDGIEST EFFECT ever!!1!
 * * Use with caution!
 * @param {Array} pos Array containing the x and y position of the object
 * @param {Array} intensity Array containing the x and y intensity of the effect
 * @returns {Array} pos
 */
const shakeEffect = (pos, intensity) => {
  const modx = (Math.random() > 0.5 ? -1 : 1) * (Math.random() * intensity[0]);
  const mody = (Math.random() > 0.5 ? -1 : 1) * (Math.random() * intensity[1]);
  pos[0] += modx;
  pos[1] += mody;
  return pos;
};

export default shakeEffect;
