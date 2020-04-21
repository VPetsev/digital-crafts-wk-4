// Classes
  // Javascript doesnt have a real concept of 'classes'
  // everything in jS is an object or function

  /* Python classes: 
  class Car:
    def __init__(self):
    self.make = ""
    self.model = ""
    
    // adding a function to the class

    def drive(self):
      print('car is driving')
  */

// OLD WAY OF CREATING CLASSES IN JAVASCRIPT


// Car is a function which is acting like a class
function Car(make, model) {
  this.make = make
  this.model = model
}

function drive(){
  console.log("Car is driving")
}

function brake(){
  console.log("Car is braking")
}

function changeGear(gearNo) {
  console.log(gearNo)
}

// Attaching Functions to the Car class
// Car.prototype.driveTheCar = drive
Car.prototype.brakeTheCar = brake
Car.prototype.changeGear = changeGear

// Anonymous Function
  // Anonymous functions are important and should use them instead in class - functions
Car.prototype.drive = function() {
  console.log("Car is driving")
}

// 'new' means new object
  // car = Car() // Python

let car = new Car("Honda", "Accord") // Creates a new object of the car class

// access make property of the car object 
console.log(car.make)
console.log(car)

car.drive()
car.changeGear(2)


let car2 = new Car("Toyota", "Camry")
car2.drive()
car2.brakeTheCar()

car2.make


// Classes in modern Javascript - use a keyword called class
// __init__
class Table {
  constructor(width, height, materialType) { // This is same as __init__ in Python
    this.width = width
    this.height = height
    this.materialType = materialType
  }

  prepareForShipment() {
    this.polish()
    console.log("Prepare for shipment")
  }

  polish() {
    console.log("Polish the table")
  }
}

let woodTable = new Table(100, 200, "Cherry Wood")
console.log(woodTable)
woodTable.prepareForShipment()









