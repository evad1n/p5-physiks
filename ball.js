class Ball extends Entity {
  constructor(mass, pos, radius, color) {
    super(mass, pos);
    this.radius = radius;
    this.color = color;
  }

  draw() {
    fill(this.color);
    circle(this.pos.x, this.pos.y, this.radius);
  }
}
