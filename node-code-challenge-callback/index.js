var willitbend = require('./willitBend');

function willit(){
    willitbend((err, itblends) => {
        if (err){
            console.log("Error:", err.message)
        }
        else{
            console.log("sweet", itblends.success)
        }
    })
}

willit();