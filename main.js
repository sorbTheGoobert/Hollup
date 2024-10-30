/**
 * * You opened the main file, cool
 * * So uhh this is the file that contains all files here (not all but you get the idea)
 */

import Player from "./player.js";
import Background from "./background.js";
import initAttacks from "./attacks.js";
import moveTitle from "./decoScripts/WOAHMOVINGTITLE.js";
import displayPaused from "./paused.js";

import thatoneannoyingstarterattack from "./patterns/thatoneannoyingstarterattack.js";
import pillarattackidunno from "./patterns/pillarattackidunno.js";
import spiralHellstorm from "./patterns/spiralHellstorm.js";

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
  paused: true,
  time: {
    last: new Date(),
    current: new Date(),
    highestDelta: 0,
  },
  endless: {
    on: true,
    score: 0,
    attackPool: [
      thatoneannoyingstarterattack,
      pillarattackidunno,
      spiralHellstorm,
    ],
    check: () => {
      if (main.attacks.length == 0) {
        let currentTime = 3 * 60;
        currentTime = main.endless.attackPool[
          Math.floor(Math.random() * main.endless.attackPool.length)
        ](main, currentTime);
      }
      if (!main.endless.on) {
        return;
      }
      const alive = main.attacks.filter((e) => !e.dead);
      if (alive.length != 0) {
        return;
      }
      main.attacks = [];
      let currentTime = 3 * 60;
      currentTime = main.endless.attackPool[
        Math.floor(Math.random() * main.endless.attackPool.length)
      ](main, currentTime);
      main.endless.score++;
    },
    render: () => {
      ctx.font = "50px VCR_OSD";
      if (!main.paused) {
        ctx.fillStyle = main.player.color.current;
      } else {
        ctx.fillStyle = "white";
      }
      ctx.textBaseline = "top";
      ctx.textAlign = "end";
      ctx.fillText(main.endless.score, main.genuine_width - 10, 10);
    },
  },

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
    ctx.font = "50px VCR_OSD";
    if (!main.paused) {
      ctx.fillStyle = main.player.color.current;
    } else {
      ctx.fillStyle = "white";
    }
    ctx.textBaseline = "top";
    ctx.textAlign = "start";
    ctx.fillText(main.player.hit, 10, 10);
    if (!main.endless.on) {
      return;
    }
    main.endless.render();
  },

  /**
   * * This is the init method.
   * * It adds the event listeners and starts the loop
   */
  init: () => {
    // Endless stuff
    if (main.endless.on) {
      main.player.hit = 20;
      main.player.endless = true;
    }

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
      if (event.code === "KeyR") {
        main.player.hit = 0;
        main.player.pos.x = main.genuine_width / 2;
        main.player.pos.y = main.genuine_height / 2;
        main.attacks = [];
        initAttacks(main);
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
    if (!main.endless.on) {
      initAttacks(main);
    }

    // while (true ) {
    //   main.update();
    // }
    requestAnimationFrame(main.update);
    // setInterval(requestAnimationFrame, 1000 / 60, main.update);
  },

  drawOthers: (main, ctx) => {
    main.draw(main, ctx);

    main.attacks.forEach((element) => {
      element.draw(ctx, main);
    });

    main.player.draw(ctx);
  },

  /**
   * * This is the update method.
   * * It loops every tick.
   */
  update: () => {
    // ! DELTA TIME NOT NEEDED
    // * The game auto tries to stay at 60fps
    // TODO: TEST ON LOWER END HARDWARE AND DECIDE IF NECESSARY
    // console.clear();
    // let dt =
    //   main.time.current.getMilliseconds() - main.time.last.getMilliseconds();
    // if (dt < 0) {
    //   dt += 1000;
    // }
    // console.log({ mil: dt, sec: dt / 1000 });

    if (main.paused) {
      main.draw(main, ctx);
      main.drawOthers(main, ctx, true);
      displayPaused(main, ctx);
      main.drawGUI(ctx);
      requestAnimationFrame(main.update);
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
    main.endless.check();

    // Render
    main.drawOthers(main, ctx);
    main.drawGUI(ctx);

    // ctx.font = "50px terminus";
    // ctx.fillStyle = "red";
    // ctx.fillText(dt / 1000, 890, 0);
    // if (dt / 1000 > main.time.highestDelta) {
    //   main.time.highestDelta = dt / 1000;
    // }
    // ctx.fillText(main.time.highestDelta, 890, 50);

    // main.time.last = main.time.current;
    // main.time.current = new Date();

    requestAnimationFrame(main.update);
  },
};

// Start on load
window.onload = main.init();
