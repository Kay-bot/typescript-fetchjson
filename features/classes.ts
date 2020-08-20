class Vehicle {
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beeeeepppp beeepppp');
  }
}

const vehicle = new Vehicle('orange');
console.log(vehicle.color);

class Car extends Vehicle {
  private drive(): void {
    console.log('vroommmm');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('blue');
car.startDrivingProcess();
