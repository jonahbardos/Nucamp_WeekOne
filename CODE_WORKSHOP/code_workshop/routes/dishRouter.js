const express = require('express'); // Saying we will use the express module middleware
const bodyParser = require('body-parser'); // 
const dishRouter = express.Router(); // A Router instance for route handlers   
dishRouter.use(bodyParser.json()); // body-parser extract the entire body portion of an incoming request stream and exposes it on req.body. Used with express

//req == response from client
//res == response from server.
dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dishes to you!');
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes');
});


dishRouter.route('/:dishId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end("Will send all Dishes with the id " + req.params.dishId)
})
.post((req, res, next) => {
    res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dishes/:dishId');
})
.delete((req, res, next) => {
    res.end('Deleting all dishes' + req.params.dishId);
});


module.exports = dishRouter;
