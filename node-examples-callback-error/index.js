// javascript object es_6
// var rect = {
//     perimeter: (x,y) => (2*(x+y)),
//     area: (x,y) => (x*y)
// };

// var rect_es_5 = {
//     perimeter: function(x,y){
//         return 2*x(x+y);
//     },
//     area: function(x,y){
//         return x * y;
//     }
// }


var rect = require('./rectangle');

function solveRect(l, b){
    rect(l, b , (err, rectangle) => {
        if(err){
            console.log("Error:", err.message);
        }
        else{
            console.log("The area of the recntagle " + rectangle.area());
            console.log("The perimeter of the rectangle ", rectangle.perimeter() );
        }
    });
    console.log("This statement after the call to rect()");
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);