// A class is the blueprint of the OBJECT "Rectangle"
class Rectangle 
{
    // This gets initiated everytime a new object is created.
    // Known as Attributes of the Object
    // "this" attributes refer to the Object
    constructor(height, width) 
    {
        this.height = height;
        this.width = width;
    }


    // // A METHOD of the "OBJECT"
    calcArea()
    {
        const area = this.height * this.width;
        return area;
    }


    // Getters, a method used for getting attributes of an OBJECT.
    // Note: A getter "CANNOT" have the same name as its object attribute.
    get area()
    {
        return this.calcArea();
    }

    get height_Of_Rectangle()
    {
        return this.height;
    }

    get width_Of_Rectangle()
    {
        return this.width;
    }


    // Setters, a method used for setting attributes of an OBJECT.
    set height_Of_Rectangle(height)
    {
        this.height = height;
    }

    set width_Of_Rectangle(x)
    {
        this.width = x;
    }   

}

// We are creating an Object "Rectangle", where "Square" is the instance of that Object.
//for getters you dont need paranthesis
//for methods you need paranthesis
const Square = new Rectangle(25, 30);

console.log("Area of Rectangle", Square.area);
console.log("Height of Rectangle", Square.height_Of_Rectangle);
console.log("Width of Rectangle", Square.width_Of_Rectangle);
console.log("Changing Height of Rectangle.. ");
Square.height_Of_Rectangle = 50;
console.log("Height of Rectangle", Square.height_Of_Rectangle);







