import Player from "./player.js";
import Background from "./background.js";
import Laser from "./laser.js";

const game = document.getElementById("game");
const ctx = game.getContext("2d");

const main = {
  // genuine_width: 10240,
  // genuine_height: 7680,
  genuine_width: 1024,
  genuine_height: 768,
  width: game.width,
  height: game.height,
  bgColor: "black",
  // player: new Player(10240 / 2, 7680 / 2),
  player: new Player(1024 / 2, 768 / 2),
  background: new Background("./assets/image2.jpg", 0, 0, 10240, 7680),
  attacks: [
    new Laser(100, 600, 300, 100, 10)
  ],
  draw: (ctx) => {
    // ctx.clearRect(0, 0, main.width, main.height);
    // ctx.fillStyle = main.bgColor;
    // ctx.fillRect(0, 0, main.width, main.height);
    main.background.draw(ctx, main.player.pos.y, main.player.pos.x);
  },
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
    setInterval(requestAnimationFrame, 1000 / 60, main.update);
  },
  update: () => {
    main.draw(ctx);
    main.player.move(main.genuine_width, main.genuine_height);
    main.player.draw(
      ctx,
      main.genuine_width,
      main.genuine_height,
      main.width,
      main.height
    );
    main.attacks.forEach(element => {
      element.check(main.player, ctx);
    });
    main.attacks.forEach(element => {
      element.draw(ctx);
    });
  },
};

window.onload = main.init();
