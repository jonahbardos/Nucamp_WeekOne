const express = require('express');
const hostname = 'localhost';
const http = require('http');
const port = 3000;
const app = express();


const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
app.use('/dishes', dishRouter); //WHEN GOING TO THIS GO TO DISHROUTER
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);


const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });