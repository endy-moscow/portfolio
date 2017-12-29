export const selectCar = (car) => {
  console.log("Car —", car.name)
  return {
    type: "CAR_SELECTED",
    payload: car
  }
};
