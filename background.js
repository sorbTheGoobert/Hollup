class Background {
  constructor(image, x, y, w, h) {
    this.sprite = new Image();
    this.sprite.src = image;
    this.pos = {
      x: x,
      y: y,
    };
    this.width = w;
    this.height = h;
  }
  draw = (ctx, py, px) => {
    const ptrn = ctx.createPattern(this.sprite, "repeat"); // Create a pattern with this image, and set it to "repeat".
    ctx.fillStyle = ptrn;
    // ctx.translate(-px, -py);
    ctx.strokeStyle = "green"
    ctx.lineWidth = 5;
    ctx.strokeRect(5, 5, this.width - 5, this.height - 5)
    ctx.fillRect(0, 0, this.width, this.height); // ctx.fillRect(x, y, width, height);
    // ctx.drawImage(this.sprite, this.pos.x, this.pos.y, this.width, this.height);
    // ctx.translate(px, py);a
  };
}

export default Background;
