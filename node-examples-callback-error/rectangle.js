//standard way
//this is only to simulate on how it would look like
module.exports = (x, y, callback ) => {
    if (x <= 0 || y <= 0)
    {
        setTimeout(() => 
            callback(new Error('Rectangle dimensions should be greater than zero: l = '+ x +
            ", and b = " + y), null),
            1000);

    }
    else
    {
        //error is null 
        setTimeout(() => 
            callback(null, {
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            }) ,
            1000);
    }
}





