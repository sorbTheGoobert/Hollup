/**
 * * This is the background file and it has only one thing.
 * * Cmon you can guess.
 * * THATS CORRECT, FOR THE BACKGROUND CLASS
 */
class Background {
  /**
   * * This is the constructor for the background object
   * @param {string} source
   * * Source of the image
   * @param {number} x
   * * Horizontal position of the background (mainly 0)
   * @param {number} y
   * * Vertical position of the background (mainly 0)
   * @param {number} w
   * * Width of screen
   * @param {number} h
   * * Height of screen
   */
  constructor(image, x, y, w, h) {
    image = image || "./assets/missing.png";
    this.sprite = new Image();
    this.sprite.src = image;
    this.pos = {
      x: x,
      y: y,
    };
    this.width = w;
    this.height = h;
  }

  /**
   * * This is the draw method
   * @param {object} ctx
   * * As always the context
   */
  draw = (main, ctx) => {
    const ptrn = ctx.createPattern(this.sprite, "repeat");
    ctx.fillStyle = ptrn;

    let px = main.player.pos.x;
    let py = main.player.pos.y;
    px -= main.genuine_width / 2;
    py -= main.genuine_height / 2;
    px /= 10;
    py /= 10;
    // console.log({ h: main.genuine_height, w: main.genuine_width, px, py });
    ctx.translate(px, py);
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.translate(-px, -py);

    // ctx.fillRect(x, y, width, height);
    // ctx.drawImage(this.sprite, this.pos.x, this.pos.y, this.width, this.height);
    // ctx.translate(px, py);
  };
}

export default Background;
