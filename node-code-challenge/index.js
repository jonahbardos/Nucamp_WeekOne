// This "Imports" the node module function from this location. Means go to current working directory
const generateFunction = require('./generateFunction');

const locations = ['Bellingham', 'Marysville', 'Seattle', 'Tacoma', 'Spokane'];

generateFunction.generateMessage(locations);
console.log(generateFunction.generateMessage(locations));
