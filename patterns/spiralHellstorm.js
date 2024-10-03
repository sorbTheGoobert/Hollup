import Projectile from "../projectile.js";

const spiralHellstorm = (main, currentTime) => {
  let shots = 4;
  let spinner = 50;
  let radiusOfTheSpinner = 5;
  for (let i = 0; i < spinner; i++) {
    for (let j = 0; j < shots; j++) {
      let angle = ((j * (360 / shots) - i * 5) * Math.PI) / 180;
      let xVel = Math.cos(angle) * radiusOfTheSpinner;
      let yVel = Math.sin(angle) * radiusOfTheSpinner;
      while (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      // console.log({ angle, i, j, xVel, yVel });
      main.attacks.push(
        new Projectile(
          main.width / 2,
          main.height / 2,
          xVel,
          yVel,
          1000000000000000,
          1000000000000000,
          currentTime,
          10,
          true
        )
      );
      // lastAngle = angle;
    }
    currentTime += 5;
  }
  for (let i = 0; i < spinner; i++) {
    for (let j = 0; j < shots; j++) {
      let angle = ((j * (360 / shots) - i * 5) * Math.PI) / 180;
      // if (i == 0 && j == 0) {
      //   angle = lastAngle;
      // }
      let radiusOfTheSpinner = 5;
      let xVel = -Math.cos(angle) * radiusOfTheSpinner;
      let yVel = Math.sin(angle) * radiusOfTheSpinner;
      while (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      // console.log({ angle, i, j, xVel, yVel });
      main.attacks.push(
        new Projectile(
          main.width / 2,
          main.height / 2,
          xVel,
          yVel,
          1000000000000000,
          1000000000000000,
          // 60 + i * 5 + 50 * i * 60,
          currentTime,
          10,
          true
        )
      );
    }
    currentTime += 5;
  }
  spinner = 8;
  shots = 12;
  radiusOfTheSpinner = 5;
  for (let big = 0; big < 4; big++) {
    for (let i = 0; i < spinner; i++) {
      for (let j = 0; j < shots; j++) {
        let angle = ((j * (360 / shots) - i * 5) * Math.PI) / 180;
        // if (i == 0 && j == 0) {
        //   angle = lastAngle;
        // }
        let modify = big % 2 ? -1 : 1;
        let xVel = modify * Math.cos(angle) * radiusOfTheSpinner;
        let yVel = Math.sin(angle) * radiusOfTheSpinner;
        while (angle > 2 * Math.PI) {
          angle -= 2 * Math.PI;
        }
        // console.log({ angle, i, j, xVel, yVel });
        main.attacks.push(
          new Projectile(
            main.width / 2,
            main.height / 2,
            xVel,
            yVel,
            1000000000000000,
            1000000000000000,
            // 60 + i * 5 + 50 * i * 60,
            currentTime,
            10,
            true
          )
        );
      }
      currentTime += 5;
    }
  }

  shots = 5;
  spinner = 30;
  radiusOfTheSpinner = 5;
  for (let big = 0; big < 3; big++) {
    for (let i = 0; i < spinner; i++) {
      for (let j = 0; j < shots; j++) {
        let angle = ((j * (360 / shots) - i * 5) * Math.PI) / 180;
        // if (i == 0 && j == 0) {
        //   angle = lastAngle;
        // }
        let modify = big % 2 ? -1 : 1;

        let xVel = modify * Math.cos(angle) * radiusOfTheSpinner;
        let yVel = Math.sin(angle) * radiusOfTheSpinner;
        while (angle > 2 * Math.PI) {
          angle -= 2 * Math.PI;
        }
        // console.log({ angle, i, j, xVel, yVel });
        main.attacks.push(
          new Projectile(
            main.width / 2,
            main.height / 2,
            xVel,
            yVel,
            1000000000000000,
            1000000000000000,
            // 60 + i * 5 + 50 * i * 60,
            currentTime,
            10,
            true
          )
        );
      }
      currentTime += 5;
    }
    shots++;
  }
  spinner = 50;
  for (let i = 0; i < spinner; i++) {
    for (let j = 0; j < shots; j++) {
      let angle = ((j * (360 / shots) - i * 5) * Math.PI) / 180;
      // if (i == 0 && j == 0) {
      //   angle = lastAngle;
      // }
      let xVel = -1 * Math.cos(angle) * radiusOfTheSpinner;
      let yVel = Math.sin(angle) * radiusOfTheSpinner;
      while (angle > 2 * Math.PI) {
        angle -= 2 * Math.PI;
      }
      // console.log({ angle, i, j, xVel, yVel });
      main.attacks.push(
        new Projectile(
          main.width / 2,
          main.height / 2,
          xVel,
          yVel,
          1000000000000000,
          1000000000000000,
          // 60 + i * 5 + 50 * i * 60,
          currentTime,
          10,
          true
        )
      );
    }
    currentTime += 5;
  }

  return currentTime;
};

export default spiralHellstorm;
