import thatoneannoyingstarterattack from "./patterns/thatoneannoyingstarterattack.js";
import PILLARJHONSREVENGE from "./patterns/PILLARJHONSREVENGE.js";
import spiralHellstorm from "./patterns/spiralHellstorm.js";

const initAttacks = (main) => {
  // ! DEBUG LASER
  // main.attacks.push(
  //   new Laser(500, 0, 100, main.height, 1.5 * 60, 30000 * 60, 0.5 * 60)
  // );
  // ! DEBUG PROJECTILE
  // main.attacks.push(new Projectile(0, 0, 3, 3, 0.1, 0.05, 10, 15, false));
  // ! DEBUG HOMING PROJECTILE
  // const accel = [];
  // const max = [];
  // for (let i = 0; i < 10; i++) {
  //   for (let j = 0; j < 4; j++) {
  //     let x, y;
  //     switch (j) {
  //       case 0:
  //         x = 0;
  //         y = 0;
  //         break;
  //       case 1:
  //         x = main.width;
  //         y = 0;
  //         break;
  //       case 2:
  //         x = 0;
  //         y = main.height;
  //         break;
  //       case 3:
  //         x = main.width;
  //         y = main.height;
  //         break;
  //     }
  //     console.log(x, y);
  //     main.attacks.push(
  //       new Homing(
  //         x,
  //         y,
  //         10,
  //         10,
  //         Math.random(),
  //         Math.floor(Math.random() * 3) + 5,
  //         5 * 60 + i * 60,
  //         5 * 60,
  //         0.5 * 60,
  //         15,
  //         true
  //       )
  //     );
  //     main.attacks.push(
  //       new Homing(
  //         x,
  //         y,
  //         10,
  //         -10,
  //         Math.random(),
  //         Math.floor(Math.random() * 3) + 5,
  //         2 * 60 + i * 60 * 5,
  //         5 * 60,
  //         0.5 * 60,
  //         15,
  //         true
  //       )
  //     );
  //     main.attacks.push(
  //       new Homing(
  //         x,
  //         y,
  //         -10,
  //         10,
  //         Math.random(),
  //         Math.floor(Math.random() * 3) + 5,
  //         2 * 60 + i * 60 * 5,
  //         5 * 60,
  //         0.5 * 60,
  //         15,
  //         true
  //       )
  //     );
  //     main.attacks.push(
  //       new Homing(
  //         x,
  //         y,
  //         -10,
  //         -10,
  //         Math.random(),
  //         Math.floor(Math.random() * 3) + 5,
  //         2 * 60 + i * 60 * 5,
  //         5 * 60,
  //         0.5 * 60,
  //         15,
  //         true
  //       )
  //     );
  //   }
  // }
  // for (let i = 0; i < 5; i++) {
  //   main.attacks.push(
  //     new movingLaser(
  //       0,
  //       0,
  //       100,
  //       main.height,
  //       2 * 60 + i * 60 * 4,
  //       5 * 60,
  //       0.5 * 60,
  //       5,
  //       100,
  //       0.25,
  //       0,
  //       0,
  //       0
  //     )
  //   );
  //   main.attacks.push(
  //     new movingLaser(
  //       main.width - 100,
  //       0,
  //       100,
  //       main.height,
  //       2 * 60 + 5 * 60 * 4 + i * 60 * 4,
  //       5 * 60,
  //       0.5 * 60,
  //       -5,
  //       100,
  //       -0.25,
  //       0,
  //       0,
  //       0
  //     )
  //   );
  // }

  // * Init
  let currentTime = 3 * 60;

  // * Main attacks
  currentTime = thatoneannoyingstarterattack(main, currentTime);

  currentTime += 120;
  currentTime = PILLARJHONSREVENGE(main, currentTime);

  currentTime += 120;
  currentTime = spiralHellstorm(main, currentTime);

  console.log(main.attacks.length);
};

export default initAttacks;
