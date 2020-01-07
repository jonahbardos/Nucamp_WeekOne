// Write a function that returns an array with all the numbers from 1 to 255.
function ReturnArrayFromOneTo255() 
{
    let arr = [];
    for(let x=1; x<256; x++)
    {
        arr.push(x);
    }
    return arr;
}


//Write a function that would get the sum of all the even numbers from 1 to 1000.
function SumAllEven()
{
    let sum = 0;
    for(let x = 1; x<=1000; x++)
    {
        if (x % 2 == 0)
        {
            sum += x;
        }
    }
    return sum // 250500
}


//Write a function that returns the sum of all the odd numbers from 1 to 5000.
function SumAllOdd()
{
    let sum = 0;
    for(let x = 1; x <= 5000; x++)
    {
        if(x % 2 == 1)
        {
            sum += x;
        }
    }

    return sum;
}


// Write a function that returns the sum of all the values within an array. 
// (e.g. [1,2,5] returns 8, [-5,2,5,12] returns 14).
function ReturnSumOfArray(array)
{
    let sum = 0;
    for(let x = 0; x<array.length; x++)
    {
        sum += array[x];
    }
    return sum;
}


// 5.) Given an array with multiple values, 
// write a function that returns the maximum number in the array.
let maxarr = [1,2,4,5]
function MaxNumber(maxarr)
{
    max = maxarr[0]
    for(let x=1; x<maxarr.length; x++)
    {
        if(maxarr[x] > max)
        {
            max = maxarr[x];
        }
    }
    console.log(max);
    return max;
}



// 6.) Given an array with multiple values,
//  write a function that returns the average of the values in the array.
// [1,3,5,7,20] average is 7.2
let averageArr = [1,3,5,7,20]
function AverageArr(averageArr)
{
    let sum = 0;
    for(let x=0; x<averageArr.length; x++)
    {
        sum += averageArr[x];
    }
    return sum / averageArr.length;
}


// 7.) Write a function that would return an array of all the odd numbers between 1 to 50.
function ReturnOddValuesInArray()
{
    let array = [];
    for(let x=1; x<=50; x++)
    {
        if(x % 2 === 1)
        {
            array.push(x);
        }
    }
    return array;
}

// 8.) Given value of Y, write a function that takes an array and 
// returns the number of values that are greater than Y.
// let arrayForEight = [1,2,3,4,5];
function GreaterThanY(arr, Y)
{
    let count = 0;
    for(let x = 0; x<arr.length; x++)
    {
        if(arr[x] > Y)
        {
            count += 1;
        }
    }
    return count;
}

// 9.) Given an array with multiple values, write a function that replaces each value 
// in the array with the product of the original value multiplied by itself.
function SquareEachElement(arr)
{
    for(let x=0; x<arr.length; x++)
    {
        arr[x] = arr[x] * arr[x];
    }
    return arr;
}

// 10.) 
// Given an array with multiple values, write a function that replaces 
// any negative numbers within the array with the value of 0. 
// When the program is done the array should contain no negative values.
function ReplaceNegativeNumbers(arr)
{
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] < 0)
        {
            arr[index] = 0;
        }
    }
    return arr;
}

// 11.) 
// Given an array with multiple values, write a function
//  that returns a new array that only contains the maximum, minimum, and average values 
//  of the original array. 
function MaxMinAvg(arr)
{
    max = arr[0];
    min = arr[0];
    sum = arr[0];
    for(let x=1; x<arr.length; x++)
    {
        if(max < arr[x])
        {
            max = arr[x];
        }
        if(min > arr[x])
        {
            min = arr[x];
        }
        sum += arr[x];
    }
    return [max, min, sum/arr.length];
}



// 12.) 
// Write a function that will swap the first and last values of any given array.
function SwapFirstAndLast(arr)
{
    let temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}


// 13.) 
// Write a function that takes an array of numbers and 
// replaces any negative values within the array with the string 'NUCAMP'.
function ReplaceNegWithString(arr)
{
    for(let x=0; x<arr.length; x++)
    {
        if(arr[x] < 0)
        {
            arr[x] = "NUCAMP";
        }
    }
    return arr;
}