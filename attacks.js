import Laser from "./laser.js";
import Projectile from "./Projectile.js";

const initAttacks = (main) => {
  // // ! DEBUG LASER
  // main.attacks.push(
  //   new Laser(500, 0, 100, main.height, 1.5 * 60, 30000 * 60, 0.5 * 60)
  // );
  // ! DEBUG PROJECTILE
  main.attacks.push(new Projectile(100, 100, 0, 1, 10, false));

  // // Attacks
  // const firstBatchTime = 3 * 60;
  // const firstBatch = 45;
  // for (let attack = 0; attack < firstBatch; attack++) {
  //   // Horiz double
  //   main.attacks.push(
  //     new Laser(
  //       0,
  //       Math.floor(Math.random() * (main.height - 50)),
  //       main.width,
  //       50,
  //       firstBatchTime + attack * 20,
  //       0.25 * 60,
  //       1.5 * 60
  //     )
  //   );
  //   main.attacks.push(
  //     new Laser(
  //       0,
  //       Math.floor(Math.random() * (main.height - 50)),
  //       main.width,
  //       50,
  //       firstBatchTime + attack * 20,
  //       0.25 * 60,
  //       1.5 * 60
  //     )
  //   );

  //   // Verti double
  //   main.attacks.push(
  //     new Laser(
  //       Math.floor(Math.random() * (main.height - 50)),
  //       0,
  //       50,
  //       main.height,
  //       firstBatchTime + attack * 20,
  //       0.25 * 60,
  //       1.5 * 60
  //     )
  //   );
  //   main.attacks.push(
  //     new Laser(
  //       Math.floor(Math.random() * (main.height - 50)),
  //       0,
  //       50,
  //       main.height,
  //       firstBatchTime + attack * 20,
  //       0.25 * 60,
  //       1.5 * 60
  //     )
  //   );
  // }
  // const secondBatchTime = firstBatchTime + firstBatch * 20 + 0.25 * 60 + 120;
  // // const secondBatchTime = 3 * 60;
  // const secondBatch = 8;
  // const secondBatchHeight = main.height / 8;
  // const secondBatchWidth = main.width / 8;
  // for (let attack = 0; attack < secondBatch; attack++) {
  //   main.attacks.push(
  //     new Laser(
  //       attack * secondBatchWidth,
  //       0,
  //       secondBatchWidth,
  //       main.height,
  //       secondBatchTime + 0.5 * 60 * attack,
  //       0.1 * 60,
  //       0.4 * 60
  //     )
  //   );
  //   main.attacks.push(
  //     new Laser(
  //       0,
  //       attack * secondBatchHeight,
  //       main.width,
  //       secondBatchHeight,
  //       secondBatchTime + 0.5 * 60 * (attack + 2),
  //       0.1 * 60,
  //       0.4 * 60
  //     )
  //   );
  //   main.attacks.push(
  //     new Laser(
  //       main.width - (attack + 1) * secondBatchWidth,
  //       0,
  //       secondBatchWidth,
  //       main.height,
  //       secondBatchTime + 0.5 * 60 * (attack + 4),
  //       0.1 * 60,
  //       0.4 * 60
  //     )
  //   );
  //   main.attacks.push(
  //     new Laser(
  //       0,
  //       main.height - (attack + 1) * secondBatchHeight,
  //       main.width,
  //       secondBatchHeight,
  //       secondBatchTime + 0.5 * 60 * (attack + 6),
  //       0.1 * 60,
  //       0.4 * 60
  //     )
  //   );
  // }
  // const thirdBatchTime = secondBatchTime + 14 * 0.5 * 60 ;
  // // const thirdBatchTime = 3 * 60;
  // const thirdBatch = 8;
  // const thirdBatchHeight = main.height / 8;
  // const thirdBatchWidth = main.width / 8;
  // let mod = 0;
  // for (let attack = 0; attack < thirdBatch; attack++) {
  //   if (attack == 4) {
  //     mod = 1;
  //   }
  //   main.attacks.push(
  //     new Laser(
  //       attack * thirdBatchWidth,
  //       0,
  //       thirdBatchWidth,
  //       main.height,
  //       thirdBatchTime + 0.7 * 60 * (attack - mod),
  //       0.2 * 60,
  //       0.5 * 60
  //     )
  //   );
  //   main.attacks.push(
  //     new Laser(
  //       0,
  //       attack * thirdBatchHeight,
  //       main.width,
  //       thirdBatchHeight,
  //       thirdBatchTime + 0.7 * 60 * (attack - mod),
  //       0.2 * 60,
  //       0.5 * 60
  //     )
  //   );
  //   main.attacks.push(
  //     new Laser(
  //       main.width - (attack + 1) * thirdBatchWidth,
  //       0,
  //       thirdBatchWidth,
  //       main.height,
  //       thirdBatchTime + 0.7 * 60 * (attack - mod),
  //       0.2 * 60,
  //       0.5 * 60
  //     )
  //   );
  //   main.attacks.push(
  //     new Laser(
  //       0,
  //       main.height - (attack + 1) * thirdBatchHeight,
  //       main.width,
  //       thirdBatchHeight,
  //       thirdBatchTime + 0.7 * 60 * (attack - mod),
  //       0.2 * 60,
  //       0.5 * 60
  //     )
  //   );
  // }
};

export default initAttacks;
