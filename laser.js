export default class Laser {
  constructor(x1, y1, x2, y2, w) {
    this.pos = {
      x1: x1,
      x2: x2,
      y1: y1,
      y2: y2,
    };
    this.width = w; // line width
    this.color = "red";
  }
  draw = (ctx) => {
    ctx.lineWidth = this.width;
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.pos.x1, this.pos.y1);
    ctx.lineTo(this.pos.x2, this.pos.y2);
    ctx.stroke();
  };
  check = (target, ctx) => {
    let boxAmount = 0;
    if (
      Math.abs(this.pos.x1 - this.pos.x2) <= Math.abs(this.pos.y1, this.pos.y2)
    ) {
      boxAmount = (this.pos.x2 - this.pos.x1) / this.width;
    } else {
      boxAmount = (this.pos.x2 - this.pos.x1) / this.width;
    }
    const deltaX = (this.pos.x2 - this.pos.x1) / boxAmount;
    const deltaY = (this.pos.y2 - this.pos.y1) / boxAmount;
    for (let box = 0; box < boxAmount; box++) {
      const boxX =
        this.pos.x1 +
        box * deltaX +
        (Math.sign(this.pos.x1 + box * deltaX) * this.width) / 2;
      const boxY =
        this.pos.y1 +
        box * deltaY +
        (Math.sign(this.pos.y1 + box * deltaY) * this.width) / 2;
      if (ctx !== undefined || ctx !== null) {
        ctx.fillRect(boxX, boxY, this.width, this.width);
      }
      if (
        boxX + this.width >= target.pos.x - target.size / 2 &&
        boxX - this.width <= target.pos.x + target.size / 2 &&
        boxY + this.width >= target.pos.y - target.size / 2 &&
        boxY - this.width <= target.pos.y + target.size / 2
      ) {
        console.log("HIT");
      }
    }
  };
}
