
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
  draw = (ctx) => {
    
    const ptrn = ctx.createPattern(this.sprite, "repeat");
    ctx.fillStyle = ptrn;

    // ctx.translate(-px, -py);

    ctx.strokeStyle = "green";
    ctx.lineWidth = 5;
    ctx.strokeRect(5, 5, this.width - 5, this.height - 5);
    ctx.fillRect(0, 0, this.width, this.height);
    
    // ctx.fillRect(x, y, width, height);
    // ctx.drawImage(this.sprite, this.pos.x, this.pos.y, this.width, this.height);
    // ctx.translate(px, py);

  };
}

export default Background;
