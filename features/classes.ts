class Vehicle {
  protected honk(): void {
    console.log('beeeeepppp beeepppp');
  }
}

class Car extends Vehicle {
  private drive(): void {
    console.log('vroommmm');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car();
car.startDrivingProcess();
