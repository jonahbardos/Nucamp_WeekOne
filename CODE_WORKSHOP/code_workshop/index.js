const express = require('express'); // Importing express module
const hostname = 'localhost'; // Variable
const http = require('http'); // Importing
const port = 3000;
const app = express(); // Using the express middleware


const dishRouter = require('./routes/dishRouter'); //
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
app.use('/dishes', dishRouter); // 
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


/**
 * Creates server using Express.
 */
const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });