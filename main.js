/**
 * * You opened the main file, cool
 * * So uhh this is the file that contains all files here (not all but you get the idea)
 */

import Player from "./player.js";
import Background from "./background.js";
import initAttacks from "./attacks.js";
import moveTitle from "./decoScripts/WOAHMOVINGTITLE.js";
import displayPaused from "./paused.js";

// Display
const game = document.getElementById("game");
// Context
const ctx = game.getContext("2d");

/**
 * * OK this is the "main" object. It contains the background, player, projectiles, and lasers and stuff
 * ! SOME OF STUFF HERE IS DEPRECATED. SUCH AS THE LARGE MAP. ILL KEEP IT BECAUSE I MIGHT RETURN BACK TO IT
 * fun fact i never did
 */
const main = {
  // genuine_width: 10240,
  // genuine_height: 7680,

  // Game initials
  genuine_width: 1024,
  genuine_height: 768,
  width: game.width,
  height: game.height,
  // bgColor: "black",

  // player: new Player(10240 / 2, 7680 / 2),

  // Game objects
  player: new Player(1024 / 2, 768 / 2),
  background: new Background("./assets/image2.jpg", 0, 0, 1024 * 5, 768 * 5),
  // background: new Background(null, 0, 0, 10240, 7680),
  attacks: [],
  paused: false,

  /**
   * * Draws the background, and refreshes it
   * @param {Object} ctx
   * * The context to draw the stuff.
   * * This is needed btw.
   */
  draw: (main, ctx) => {
    ctx.clearRect(0, 0, main.width, main.height);

    // ctx.fillStyle = main.bgColor;
    // ctx.fillRect(0, 0, main.width, main.height);

    main.background.draw(main, ctx);
  },

  drawGUI: (ctx) => {
    ctx.font = "50px Arial";
    ctx.fillStyle = main.player.color.current;
    ctx.textBaseline = "top";
    ctx.textAlign = "start";
    ctx.fillText(main.player.hit, 10, 10);
  },

  /**
   * * This is the init method.
   * * It adds the event listeners and starts the loop
   */
  init: () => {
    window.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "Space":
          main.player.keys.space = true;
          break;
        case "KeyA":
          main.player.keys.a = true;
          break;
        case "KeyS":
          main.player.keys.s = true;
          break;
        case "KeyD":
          main.player.keys.d = true;
          break;
        default:
          break;
      }
    });

    window.addEventListener("keyup", (event) => {
      switch (event.code) {
        case "Space":
          main.player.keys.space = false;
          break;
        case "KeyA":
          main.player.keys.a = false;
          break;
        case "KeyS":
          main.player.keys.s = false;
          break;
        case "KeyD":
          main.player.keys.d = false;
          break;
        default:
          break;
      }
    });

    window.addEventListener("keypress", (event) => {
      if (event.code === "KeyF") {
        main.player.doADash();
      }
      if (event.code === "Backquote") {
        main.paused = !main.paused;
      }
    });

    const aButton = document.getElementById("aButton");
    const wButton = document.getElementById("wButton");
    const sButton = document.getElementById("sButton");
    const dButton = document.getElementById("dButton");
    const dashButton = document.getElementById("dashButton");

    aButton.addEventListener("touchstart", (event) => {
      main.player.keys.a = true;
    });
    wButton.addEventListener("touchstart", (event) => {
      main.player.keys.space = true;
    });
    sButton.addEventListener("touchstart", (event) => {
      main.player.keys.s = true;
    });
    dButton.addEventListener("touchstart", (event) => {
      main.player.keys.d = true;
    });
    dashButton.addEventListener("touchstart", (event) => {
      main.player.doADash();
    });
    aButton.addEventListener("touchend", (event) => {
      main.player.keys.a = false;
    });
    wButton.addEventListener("touchend", (event) => {
      main.player.keys.space = false;
    });
    sButton.addEventListener("touchend", (event) => {
      main.player.keys.s = false;
    });
    dButton.addEventListener("touchend", (event) => {
      main.player.keys.d = false;
    });

    // Attacks
    initAttacks(main);

    setInterval(requestAnimationFrame, 1000 / 60, main.update);
  },

  drawOthers: (main, ctx) => {
    main.draw(main, ctx);

    main.attacks.forEach((element) => {
      element.draw(ctx, main);
    });

    main.drawGUI(ctx);

    main.player.draw(ctx);
  },

  /**
   * * This is the update method.
   * * It loops every tick.
   */
  update: () => {
    if (main.paused) {
      main.draw(main, ctx);
      main.drawOthers(main, ctx);
      displayPaused(main, ctx);
      return null;
    }

    // Misc
    moveTitle();

    // Background
    main.draw(main, ctx);

    // Update and checks
    main.player.move(main.genuine_width, main.genuine_height);
    main.attacks.forEach((element) => {
      element.check(main.player, main.width, main.height);
    });

    main.drawOthers(main, ctx);
  },
};

// Start on load
window.onload = main.init();
