import Homing from "./homingproj.js";
import Laser from "./laser.js";
import Projectile from "./projectile.js";

const initAttacks = (main) => {
  // ! DEBUG LASER
  // main.attacks.push(
  //   new Laser(500, 0, 100, main.height, 1.5 * 60, 30000 * 60, 0.5 * 60)
  // );
  // ! DEBUG PROJECTILE
  // main.attacks.push(new Projectile(0, 0, 3, 3, 0.1, 0.05, 10, 15, false));
  // ! DEBUG HOMING PROJECTILE
  main.attacks.push(new Homing(100, 100, 5, 5, 0.25, 0.25, 0, 1000000, 10, true))

  // // Attacks
  // const firstBatchTime = 3 * 60;
  // const firstBatch = 45;
  // for (let attack = 0; attack < firstBatch; attack++) {
  //   // Horiz double
  //   main.attacks.push(
  //     new Laser(
  //       0,
  //       Math.floor(Math.random() * (main.height - 25 /*You can also do 50 if you dont think its painfull*/)),
  //       main.width,
  //       25 /*You can also do 50 if you dont think its painfull*/,
  //       firstBatchTime + attack * 20,
  //       0.25 * 60,
  //       1.5 * 60
  //     )
  //   );
  //   main.attacks.push(
  //     new Laser(
  //       0,
  //       Math.floor(Math.random() * (main.height - 25 /*You can also do 50 if you dont think its painfull*/)),
  //       main.width,
  //       25 /*You can also do 50 if you dont think its painfull*/,
  //       firstBatchTime + attack * 20,
  //       0.25 * 60,
  //       1.5 * 60
  //     )
  //   );

  //   // Verti double
  //   main.attacks.push(
  //     new Laser(
  //       Math.floor(Math.random() * (main.height - 25 /*You can also do 50 if you dont think its painfull*/)),
  //       0,
  //       25 /*You can also do 50 if you dont think its painfull*/,
  //       main.height,
  //       firstBatchTime + attack * 20,
  //       0.25 * 60,
  //       1.5 * 60
  //     )
  //   );
  //   main.attacks.push(
  //     new Laser(
  //       Math.floor(Math.random() * (main.height - 25 /*You can also do 50 if you dont think its painfull*/)),
  //       0,
  //       25 /*You can also do 50 if you dont think its painfull*/,
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
  // const thirdBatchTime = secondBatchTime + 14 * 0.5 * 60;
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

  // const fourthBatchTime = thirdBatchTime + 0.7 * 60 * 7 + 0.2 * 60;
  // let shots = 4;
  // let spinner = 50;
  // let radiusOfTheSpinner = 5;
  // for (let i = 0; i < spinner; i++) {
  //   for (let j = 0; j < shots; j++) {
  //     let angle = ((j * (360 / shots) - i * 5) * Math.PI) / 180;
  //     let xVel = Math.cos(angle) * radiusOfTheSpinner;
  //     let yVel = Math.sin(angle) * radiusOfTheSpinner;
  //     while (angle > 2 * Math.PI) {
  //       angle -= 2 * Math.PI;
  //     }
  //     // console.log({ angle, i, j, xVel, yVel });
  //     main.attacks.push(
  //       new Projectile(
  //         main.width / 2,
  //         main.height / 2,
  //         xVel,
  //         yVel,
  //         1000000000000000,
  //         1000000000000000,
  //         fourthBatchTime + 60 + i * 5,
  //         10,
  //         true
  //       )
  //     );
  //     // lastAngle = angle;
  //   }
  // }
  // for (let i = 0; i < spinner; i++) {
  //   for (let j = 0; j < shots; j++) {
  //     let angle = ((j * (360 / shots) - i * 5) * Math.PI) / 180;
  //     // if (i == 0 && j == 0) {
  //     //   angle = lastAngle;
  //     // }
  //     let radiusOfTheSpinner = 5;
  //     let xVel = -Math.cos(angle) * radiusOfTheSpinner;
  //     let yVel = Math.sin(angle) * radiusOfTheSpinner;
  //     while (angle > 2 * Math.PI) {
  //       angle -= 2 * Math.PI;
  //     }
  //     // console.log({ angle, i, j, xVel, yVel });
  //     main.attacks.push(
  //       new Projectile(
  //         main.width / 2,
  //         main.height / 2,
  //         xVel,
  //         yVel,
  //         1000000000000000,
  //         1000000000000000,
  //         // 60 + i * 5 + 50 * i * 60,
  //         fourthBatchTime + 60 + 49 * 5 + i * 5,
  //         10,
  //         true
  //       )
  //     );
  //   }
  // }
  // spinner = 8;
  // shots = 12;
  // radiusOfTheSpinner = 5;
  // for (let big = 0; big < 4; big++) {
  //   for (let i = 0; i < spinner; i++) {
  //     for (let j = 0; j < shots; j++) {
  //       let angle = ((j * (360 / shots) - i * 5) * Math.PI) / 180;
  //       // if (i == 0 && j == 0) {
  //       //   angle = lastAngle;
  //       // }
  //       let modify = big % 2 ? -1 : 1;
  //       let xVel = modify * Math.cos(angle) * radiusOfTheSpinner;
  //       let yVel = Math.sin(angle) * radiusOfTheSpinner;
  //       while (angle > 2 * Math.PI) {
  //         angle -= 2 * Math.PI;
  //       }
  //       // console.log({ angle, i, j, xVel, yVel });
  //       main.attacks.push(
  //         new Projectile(
  //           main.width / 2,
  //           main.height / 2,
  //           xVel,
  //           yVel,
  //           1000000000000000,
  //           1000000000000000,
  //           // 60 + i * 5 + 50 * i * 60,
  //           fourthBatchTime + 60 + 49 * 5 + 50 * 5 + i * 5 + big * spinner * 5,
  //           10,
  //           true
  //         )
  //       );
  //     }
  //   }
  // }

  // shots = 5;
  // spinner = 30;
  // radiusOfTheSpinner = 5;
  // for (let big = 0; big < 3; big++) {
  //   for (let i = 0; i < spinner; i++) {
  //     for (let j = 0; j < shots; j++) {
  //       let angle = ((j * (360 / shots) - i * 5) * Math.PI) / 180;
  //       // if (i == 0 && j == 0) {
  //       //   angle = lastAngle;
  //       // }
  //       let modify = big % 2 ? -1 : 1;

  //       let xVel = modify * Math.cos(angle) * radiusOfTheSpinner;
  //       let yVel = Math.sin(angle) * radiusOfTheSpinner;
  //       while (angle > 2 * Math.PI) {
  //         angle -= 2 * Math.PI;
  //       }
  //       // console.log({ angle, i, j, xVel, yVel });
  //       main.attacks.push(
  //         new Projectile(
  //           main.width / 2,
  //           main.height / 2,
  //           xVel,
  //           yVel,
  //           1000000000000000,
  //           1000000000000000,
  //           // 60 + i * 5 + 50 * i * 60,
  //           fourthBatchTime +
  //             60 +
  //             49 * 5 +
  //             50 * 5 +
  //             11 * 5 +
  //             3 * 7 * 5 +
  //             i * 5 +
  //             big * spinner * 5,
  //           10,
  //           true
  //         )
  //       );
  //     }
  //   }
  //   shots++;
  // }
  // spinner = 50;
  // for (let i = 0; i < spinner; i++) {
  //   for (let j = 0; j < shots; j++) {
  //     let angle = ((j * (360 / shots) - i * 5) * Math.PI) / 180;
  //     // if (i == 0 && j == 0) {
  //     //   angle = lastAngle;
  //     // }
  //     let xVel = -1 * Math.cos(angle) * radiusOfTheSpinner;
  //     let yVel = Math.sin(angle) * radiusOfTheSpinner;
  //     while (angle > 2 * Math.PI) {
  //       angle -= 2 * Math.PI;
  //     }
  //     // console.log({ angle, i, j, xVel, yVel });
  //     main.attacks.push(
  //       new Projectile(
  //         main.width / 2,
  //         main.height / 2,
  //         xVel,
  //         yVel,
  //         1000000000000000,
  //         1000000000000000,
  //         // 60 + i * 5 + 50 * i * 60,
  //         fourthBatchTime +
  //           60 +
  //           49 * 5 +
  //           50 * 5 +
  //           11 * 5 +
  //           3 * 7 * 5 +
  //           29 * 5 +
  //           2 * 30 * 5 +
  //           i * 5,
  //         10,
  //         true
  //       )
  //     );
  //   }
  // }
};

export default initAttacks