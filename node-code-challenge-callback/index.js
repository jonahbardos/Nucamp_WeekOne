// Import Node Modules
var willitbend = require('./willitBend');

function willit(){
    /* 
    This calls the function node module and takes a..
    "Callback Function", as a parameter.
    */
    willitbend((err, itblends) => {
        
        if (err){
            console.log(itblends)
            console.log("Error:", err.message)
        }
        else{
            console.log(err) // returns null
            console.log("Sweet", itblends.success)
        }
    })
}

willit();