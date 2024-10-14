/**
 * * This is the function to display a font chainging effect
 * @param {object} ctx 2D context
 * @param {string} text String that will be displayed
 * @param {int} timer An array containing the current time and the default time
 * @param {Array} fontChoice Array of strings containing the possible different fonts
 * @param {number} currentIndex Current chosen font's index
 * @param {Array} settings Position of the text and color and alignment
 * @returns [currentIndex, timer[0]]
 */
let fill = true;

const FontChangingText = (
  ctx,
  text,
  timer,
  fontChoice,
  currentIndex,
  settings
) => {
  if (timer[0] <= 0) {
    let temp = Math.floor(Math.random() * fontChoice.length);
    if (temp == currentIndex) {
      if (temp + 1 < fontChoice.length) {
        temp++;
      } else if (temp - 1 >= 0) {
        temp--;
      }
    }
    currentIndex = temp;
    fill = Math.random() > 0.5
    timer[0] = timer[1];
  } else {
    timer[0]--;
  }
  console.log({settings, fontChoice, currentIndex});
  ctx.font = fontChoice[currentIndex];
  ctx.textBaseline = settings[3];
  ctx.textAlign = settings[4];
  ctx.fillStyle = settings[2];
  ctx.strokeStyle = settings[2];
  ctx.lineWidth = settings[5];
  if (fill) {
    ctx.fillText(text, settings[0], settings[1]);
  }else{
    ctx.strokeText(text, settings[0], settings[1]);
  }
  return [currentIndex, timer[0]];
};

export default FontChangingText;
