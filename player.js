
/**
 * * This is the player file, Its only for the Player class
 */
class Player {
  /**
   * * So this is the initialization of the Player
   * @param {number} x
   * X coordinate
   * @param {number} y
   * Y coordinate
   */
  constructor(x, y) {
    this.pos = {
      x: x,
      y: y,
    };

    this.color = {
      idle: "navy",
      hit: "purple",
      current: ""
    };
    this.size = 25;
    this.keys = {
      space: false,
      a: false,
      s: false,
      d: false,
    };

    this.speed = {
      horizontal: {
        current: 0,
        thrust: 0.6,
        top_speed: 6,
        deaccelearation: -0.1,
      },
      vertical: {
        current: 0,
        thrust: -0.6,
        gravity: 0.4,
        terminal: 8,
        top_speed: -5,
      },
    };
  }
  /**
   * * Draws the player
   * @param {Object} ctx
   */
  draw = (ctx) => {
    // Deleted the depricated stuff btw
    // ! THE COLOR IS CHANGED IN THE LASER JS AND DECIDED IF HIT OR NOT
    ctx.fillStyle = this.color.current
    ctx.fillRect(
      this.pos.x - this.size / 2,
      this.pos.y - this.size / 2,
      this.size,
      this.size
    );
  };

  /**
   * * So this is the method that handles player moevement
   * @param {number} width 
   * Game widht
   * @param {number} height 
   * Game height
   */
  move = (width, height) => {
    
    // vertical movement
    if (this.keys.space && this.keys.s) {
      this.speed.vertical.current = 0;
    } else if (this.keys.space) {
      this.speed.vertical.current += this.speed.vertical.thrust;
    } else {
      this.speed.vertical.current += this.speed.vertical.gravity;
    }

    if (this.speed.vertical.current > this.speed.vertical.terminal) {
      this.speed.vertical.current = this.speed.vertical.terminal;
    } else if (this.speed.vertical.current < this.speed.vertical.top_speed) {
      this.speed.vertical.current = this.speed.vertical.top_speed;
    }

    // horizontal movement
    if (this.keys.a || this.keys.d) {
      if (this.keys.a && this.keys.d) {
        if (!this.speed.horizontal.current == 0) {
          this.speed.horizontal.current +=
            Math.sign(this.speed.horizontal.current) *
            this.speed.horizontal.deaccelearation;
        }
      } else {
        if (this.keys.a) {
          this.speed.horizontal.current -= this.speed.horizontal.thrust;
        }
        if (this.keys.d) {
          this.speed.horizontal.current += this.speed.horizontal.thrust;
        }
      }
    } else {
      if (!this.speed.horizontal.current == 0) {
        this.speed.horizontal.current +=
          Math.sign(this.speed.horizontal.current) *
          this.speed.horizontal.deaccelearation;
      }
    }
    if (
      Math.abs(this.speed.horizontal.current) > this.speed.horizontal.top_speed
    ) {
      this.speed.horizontal.current =
        Math.sign(this.speed.horizontal.current) *
        this.speed.horizontal.top_speed;
    }

    // add speed
    this.pos.x += this.speed.horizontal.current;
    this.pos.y += this.speed.vertical.current;

    if (this.pos.x - this.size / 2 < 0) {
      this.pos.x = this.size / 2;
      this.speed.horizontal.current = 0;
    }
    if (this.pos.x + this.size / 2 > width) {
      this.pos.x = width - this.size / 2;
      this.speed.horizontal.current = 0;
    }
    if (this.pos.y - this.size / 2 < 0) {
      this.pos.y = this.size / 2;
      this.speed.vertical.current = 0;
    }
    if (this.pos.y + this.size / 2 > height) {
      this.pos.y = height - this.size / 2;
      this.speed.vertical.current = 0;
    }
  };
}

export default Player;
