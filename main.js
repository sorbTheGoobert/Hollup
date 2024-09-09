/**
 * * You opened the main file, cool
 * * So uhh this is the file that contains all files here (not all but you get the idea)
 * TODO: Hit system
 * TODO: Bossfight or smth i dunno
 * TODO: Refining
 */

import Player from "./player.js";
import Background from "./background.js";
import Laser from "./laser.js";
import initAttacks from "./attacks.js";

// Display
const game = document.getElementById("game");
// Context
const ctx = game.getContext("2d");

/**
 * * OK this is the "main" object. It contains the background, player, projectiles, and lasers and stuff
 * ! SOME OF STUFF HERE IS DEPRECATED. SUCH AS THE LARGE MAP. ILL KEEP IT BECAUSE I MIGHT RETURN BACK TO IT
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
  background: new Background("./assets/image2.jpg", 0, 0, 10240, 7680),
  attacks: [],

  /**
   * * Draws the background, and refreshes it
   * @param {Object} ctx
   * * The context to draw the stuff.
   * * This is needed btw.
   */
  draw: (ctx) => {
    ctx.clearRect(0, 0, main.width, main.height);

    // ctx.fillStyle = main.bgColor;
    // ctx.fillRect(0, 0, main.width, main.height);

    main.background.draw(ctx, main.player.pos.y, main.player.pos.x);
  },

  drawGUI: (ctx) => {
    ctx.font = "50px Arial";
    ctx.fillStyle = "navy";
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
      if(event.code === "KeyF") {
        main.player.doADash();
      }
    })

    // Attacks
    initAttacks(main);

    setInterval(requestAnimationFrame, 1000 / 60, main.update);
  },

  /**
   * * This is the update method.
   * * It loops every tick.
   */
  update: () => {
    // Background
    main.draw(ctx);

    // Update and checks
    main.player.move(main.genuine_width, main.genuine_height);
    main.attacks.forEach((element) => {
      element.check(main.player, ctx);
    });

    // Drawing
    main.attacks.forEach((element) => {
      element.draw(ctx);
    });

    main.drawGUI(ctx);

    main.player.draw(ctx);
  },
};

// Start on load
window.onload = main.init();
