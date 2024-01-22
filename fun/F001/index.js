class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.move = false;
  }

  info() {
    return `${this.brand} ${this.model}`;
  }

  drive() {
    if (this.move) {
      console.log("Car already in movement");
    } else {
      console.log("Honk-honk motherfucker!");
      this.move = true;
    }
  }

  stop() {
    if (this.move) {
      console.log("Car stoped");
      this.move = false;
    } else {
      console.log("Car already stop");
    }
  }
}


