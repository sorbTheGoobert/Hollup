import spinny from "./spinny.js";

const spiralHellstorm = (main, currentTime) => {
  let shots = 4;
  let spinner = 50;
  let radiusOfTheSpinner = 10;
  for (let i = 0; i < spinner; i++) {
    spinny(main, currentTime, shots, 1, radiusOfTheSpinner, i * 5, 60 * 2);
    currentTime += 5;
  }
  for (let i = 0; i < spinner; i++) {
    spinny(main, currentTime, shots, -1, radiusOfTheSpinner, i * 5, 60 * 2);
    currentTime += 5;
  }

  spinner = 8;
  shots = 12;
  for (let big = 0; big < 4; big++) {
    for (let i = 0; i < spinner; i++) {
      let modify = big % 2 ? -1 : 1;
      spinny(main, currentTime, shots, modify, radiusOfTheSpinner, i * 5, 15 * 2);
      currentTime += 5;
    }
  }

  shots = 5;
  spinner = 30;
  for (let big = 0; big < 3; big++) {
    for (let i = 0; i < spinner; i++) {
      let modify = big % 2 ? -1 : 1;
      spinny(
        main,
        currentTime,
        shots,
        modify,
        radiusOfTheSpinner,
        i * 5,
        60 * 2 - big * 10 * 2
      );
      currentTime += 5;
    }
    shots++;
  }

  spinner = 50;
  for (let i = 0; i < spinner; i++) {
    spinny(main, currentTime, shots, -1, radiusOfTheSpinner, i * 5, 30 * 2);
    currentTime += 5;
  }

  return currentTime;
};

export default spiralHellstorm;
