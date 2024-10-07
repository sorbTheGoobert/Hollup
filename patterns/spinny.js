import Projectile from "../projectile.js";

const spinny = (
  main,
  currentTime,
  shots,
  direction,
  radiusOfTheSpinner,
  offset
) => {
  for (let j = 0; j < shots; j++) {
    let angle = ((j * (360 / shots) - offset) * Math.PI) / 180;
    let xVel = direction * Math.cos(angle) * radiusOfTheSpinner;
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
};

export default spinny;
