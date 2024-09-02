export default class Laser {
  constructor(x, y, w, h) {
    this.pos = {
      x: x,
      y: y,
    };
    this.width = w;
    this.height = h;
    this.color = "red";
  }
  draw = (ctx) => {
    ctx.fillStyle = this.color
    ctx.fillRect(this.pos.x, this.pos.y, this.width, this.height)
  };
  check = (target) => {
    if(
      target.pos.x + target.size >= this.pos.x &&
      target.pos.x <= this.pos.x + this.width &&
      target.pos.y + target.size >= this.pos.y &&
      target.pos.y <= this.pos.y + this.height
    ){
      console.log("HIT")
    }
  };
}
