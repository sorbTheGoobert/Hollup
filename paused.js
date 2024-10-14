import FontChangingText from "./decoScripts/FONTCHANGING.js";

let timer = [5, 5];
const fontChoice = [
  "128px terminus",
  "128px VCR_OSD",
  "128px wingdings",
  "128px flexure",
  "128px Londrina Sketch",
  "128px Poppins",
  "128px Roboto",
  "128px Qwitcher Grypen",
];
let currentIndex = Math.floor(Math.random() * fontChoice.length);
const settings = [0, 0, "rgb(255, 255, 255)", "middle", "center", 5];
// let xIntensity = 0;
let xIntensity = 5;
// let yIntensity = 0;
let yIntensity = 4;
/**
 * * This is the display function of the most edgiest pause screen ever.
 * @param {object} main The object from main.js
 * @param {object} ctx Canvas 2d context
 */
const displayPaused = (main, ctx) => {
  const modx = ((Math.random() > 0.5) ? -1 : 1) * (Math.random() * xIntensity);
  const mody = ((Math.random() > 0.5) ? -1 : 1) * (Math.random() * yIntensity);
  settings[0] = main.genuine_width / 2 + modx;
  settings[1] = main.genuine_height / 2 + mody;
  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(0, 0, main.genuine_width, main.genuine_height);
  [currentIndex, timer[0]] = FontChangingText(
    ctx,
    "PAUSED",
    timer,
    fontChoice,
    currentIndex,
    settings
  );
};

export default displayPaused;
