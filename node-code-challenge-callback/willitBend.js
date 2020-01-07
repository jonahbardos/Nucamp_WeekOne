module.exports = function willItBlend(callback) 
{
  // should be true for anything divisible by 3 between 0 and 9
  const itBlends = Math.floor(Math.random() * 10) % 3 === 0;

  if (itBlends) 
  {
    console.log(itBlends);
    callback(null, {success: "Good news! It Blends!"});
  } 
  else 
  {
    console.log(itBlends);
    callback(new Error("Oh No! It didn't Blend!"));
  }
}