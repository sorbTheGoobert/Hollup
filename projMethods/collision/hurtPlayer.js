export const hurt = (player) => {
  player.iframes = 120;
  if (player.endless) {
    player.hit--;
  } else {
    player.hit++;
  }
};
