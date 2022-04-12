class Entity {
  constructor(mass, pos) {
    this.mass = mass;

    this.pos = pos;
  }

  applyForce(force) {
    console.log(force);
  }
}

console.log("entity");
