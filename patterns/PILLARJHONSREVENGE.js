import Laser from "../laser.js";

const PILLARJHONSREVENGE = (main, currentTime) => {
  const height = main.height / 8;
  const width = main.width / 8;
  for (let attack = 0; attack < 8; attack++) {
    main.attacks.push(
      new Laser(
        attack * width,
        0,
        width,
        main.height,
        currentTime + 0.5 * 60,
        0.1 * 60,
        0.4 * 60
      )
    );
    main.attacks.push(
      new Laser(
        0,
        attack * height,
        main.width,
        height,
        currentTime + 0.5 * 60 + 60,
        0.1 * 60,
        0.4 * 60
      )
    );
    main.attacks.push(
      new Laser(
        main.width - (attack + 1) * width,
        0,
        width,
        main.height,
        currentTime + 0.5 * 60 + 120,
        0.1 * 60,
        0.4 * 60
      )
    );
    main.attacks.push(
      new Laser(
        0,
        main.height - (attack + 1) * height,
        main.width,
        height,
        currentTime + 0.5 * 60 + 180,
        0.1 * 60,
        0.4 * 60
      )
    );
    currentTime += 0.5 * 60;
  }
  currentTime += 180;
  // const thirdBatchTime = 3 * 60;
  const thirdBatch = 8;
  for (let attack = 0; attack < thirdBatch; attack++) {
    if (attack == 4) {
      continue;
    }
    main.attacks.push(
      new Laser(
        attack * width,
        0,
        width,
        main.height,
        currentTime + 0.7 * 60,
        0.2 * 60,
        0.5 * 60
      )
    );
    main.attacks.push(
      new Laser(
        0,
        attack * height,
        main.width,
        height,
        currentTime + 0.7 * 60,
        0.2 * 60,
        0.5 * 60
      )
    );
    main.attacks.push(
      new Laser(
        main.width - (attack + 1) * width,
        0,
        width,
        main.height,
        currentTime + 0.7 * 60,
        0.2 * 60,
        0.5 * 60
      )
    );
    main.attacks.push(
      new Laser(
        0,
        main.height - (attack + 1) * height,
        main.width,
        height,
        currentTime + 0.7 * 60,
        0.2 * 60,
        0.5 * 60
      )
    );
    currentTime += 0.7 * 60;
  }

  return currentTime;
};

export default PILLARJHONSREVENGE;
