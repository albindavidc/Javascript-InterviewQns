class Area {
  constructor() {}

  circle(radius) {
    const circleArea = 3.14159 * (radius * radius);
    return circleArea;
  }
  square(lenght) {
    const squareArea = length * length;
    return squareArea;
  }
  rectangle(lengthRec, width) {
    const rectangleArea = lengthRec * width;
    return rectangleArea;
  }
  triangle(breadth, height) {
    const triangleArea = 0.5 * breadth * height;
    return triangleArea;
  }
}

class MyClass extends Area {
  constructor() {
    super();
  }
  main() {
    const area = new Area();

    const value = Number(
      prompt(`Enter your choice (in Number): 
        \n 1. Find the area of circle 
        \n 2. Find the area of square : 
        \n 3. Find the area of rectange: 
        \n 4. Find the area of triangle: `)
    );
    switch (value) {
      case 1:
        const radius = Number(prompt("Enter the radius of the circle: "));
        const circleArea = this.circle(radius);
        alert(`Area of the circle is ${circleArea}`);
        break;
      case 2:
        const lenght = Number(prompt(`Enter the length of the square: `));
        const squareArea = this.square(lenght);
        alert(`Area of the square is: ${squareArea}`);
        break;
      case 3:
        const lengthRec = Number(prompt(`Enter the length of the squre: `));
        const width = Number(prompt(`Enter the width of the squre: `));
        const rectangeArea = this.square(lengthRec, width);
        alert(`Area of the rectangle is ${rectangeArea}`);
        break;
      case 4:
        const breadth = Number(prompt(`Enter the length of the breadth: `));
        const height = Number(prompt(`Enter the height of the breadth: `));
        const triangleArea = this.triangle(breadth, height);
        alert(`Area of the triangle is ${triangleArea}`);
        break;
      default:
        alert("You need little more understanding skill to solve this riddle. Thankyou");
    }
  }
}
const myClass = new MyClass();

myClass.main();
