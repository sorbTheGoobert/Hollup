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
      current: "",
      dash: {
        active: "pink",
        ready: `rgba(255, 255, 0, 1)`,
        opacity: 1,
      },
      hit: {
        color1: "blue",
        color2: "cyan",
      },
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

    this.hit = 0;
    this.iframes = 0;
    this.dash = {
      doubleTapOverride: false,
      doubleClick: {
        og: 10,
        timer: 0,
        firstTap: false,
      },
      timer: 0,
      iframes: 0,
      ready: false,
    };
  }
  /**
   * * Draws the player
   * @param {Object} ctx
   */
  draw = (ctx) => {
    // Deleted the depricated stuff btw
    // ! THE COLOR IS CHANGED IN THE LASER JS AND DECIDED IF HIT OR NOT
    // * not anymore btw
    if (this.iframes > 0) {
      if (this.iframes % 60 == 0) {
        this.color.current = this.color.hit.color1;
      } else if (this.iframes % 60 == 30) {
        this.color.current = this.color.hit.color2;
      }
    } else if (this.dash.iframes > 0) {
      this.color.current = this.color.dash.active;
    } else {
      this.color.current = this.color.idle;
    }

    this.color.dash.opacity -= 1 / 30;
    if (this.color.dash.opacity < 0) {
      this.color.dash.opacity = 0;
    }
    this.color.dash.ready = `rgb(255, 255, 0, ${this.color.dash.opacity})`;

    ctx.fillStyle = this.color.current;
    ctx.fillRect(
      this.pos.x - this.size / 2,
      this.pos.y - this.size / 2,
      this.size,
      this.size
    );
    ctx.fillStyle = this.color.dash.ready;
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

  // ! THIS DOES NOT WORK.
  // ! AT ALL
  // doubleTapDash = (key) => {
  //   console.log({ key, first: this.dash.doubleClick.firstTap });
  //   if (
  //     !this.dash.doubleClick.firstTap &&
  //     key != this.dash.doubleClick.firstTap
  //   ) {
  //     this.dash.doubleClick.firstTap = key;
  //     this.dash.doubleClick.timer = this.dash.doubleClick.og;
  //   } else {
  //     this.doADash();
  //     this.dash.doubleClick.firstTap = null;
  //   }
  // };

  doADash = () => {
    if (this.dash.timer > 0) return null;
    let dashSide = this.keys.a
      ? -1
      : this.keys.d
      ? 1
      : Math.sign(this.speed.horizontal.current);
    this.speed.horizontal.current = 25 * dashSide;
    this.dash.iframes = 40;
    this.dash.timer = 90;
  };

  move = (width, height) => {
    // Extra update stuff
    this.iframes--;
    this.dash.iframes--;
    this.dash.timer--;
    if (this.dash.timer == 0) {
      this.dash.ready = true;
      this.color.dash.opacity = 1;
    }
    if (this.dash.timer == 30) {
      this.dash.ready = false;
    }
    this.dash.doubleClick.timer--;
    if (this.dash.doubleClick.timer <= 0) {
      this.dash.doubleClick.firstTap = null;
    }

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
        // * Use this if you want to but it kinda sucks
        // this.speed.horizontal.current = 0;
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
        this.speed.horizontal.current -= this.speed.horizontal.current / 30;
      }
    }
    if (
      Math.abs(this.speed.horizontal.current) > this.speed.horizontal.top_speed
    ) {
      if (this.dash.iframes > 0) {
        this.speed.horizontal.current -= this.speed.horizontal.current / 10;
      } else {
        this.speed.horizontal.current =
          this.speed.horizontal.top_speed *
          Math.sign(this.speed.horizontal.current);
      }
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
