// Use type annotations when a variable is an empty array
const carMakers: string[] = [];

// Type inference
const dates = [new Date(), new Date()];

// Inner arrays
const carsByMake = [['f150'], ['corolla'], ['camaro']];
// Type annotation with an empty array of inner arrays
const carsByMake2: string[][] = [];

// Help with inference when extracting values
// const car = carMakers[0];
// const myCar = carMakers.pop();

// Prevent incompatible values
carMakers.push(100);

// Help with 'map' - typeScript will provide autocomplete to string method
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types
const importDates: (Date | string)[] = [new Date()];
importDates.push('2030-10-10');
importDates.push(new Date());
