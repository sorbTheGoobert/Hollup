import FontChangingText from "./decoScripts/FONTCHANGING.js";
import shakeEffect from "./decoScripts/plusENRAGED.js";

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
  "128px UnifrakturCook",
  "80px BD_Eject"
];
let currentIndex = Math.floor(Math.random() * fontChoice.length);
const settings = [0, 0, "rgb(255, 255, 255)", "middle", "center", 5];
const intensity = [5, 4];
/**
 * * This is the display function of the most edgiest pause screen ever.
 * @param {object} main The object from main.js
 * @param {object} ctx Canvas 2d context
 */
const displayPaused = (main, ctx) => {
  const center = [main.genuine_width / 2, main.genuine_height / 2];
  [settings[0], settings[1]] = shakeEffect(center, intensity);
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
