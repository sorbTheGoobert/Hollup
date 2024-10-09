/**
 * * Hi! This is the function to ESSENTIAL for the game to work (not really)
 * * This function just changes the title of the web every few moments.
 * @returns nothin
 */

let timer = 0;

const moveTitle = () => {
  const title = document.getElementById("title");
  if (timer % 15 == 0) {
    let actualTitleLmao = title.innerHTML;
    actualTitleLmao = actualTitleLmao
      .slice(1, actualTitleLmao.length)
      .concat(actualTitleLmao.charAt(0));
    title.innerHTML = actualTitleLmao;
  }
  timer++;
};

export default moveTitle;
