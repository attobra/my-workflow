// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-87, 87];

//1) understanding the problem
// - what is temp amplitude? difference between highest and lowest temp
//- how to compute tje max and min temp
//- what is a sensor error? and what to do?

//2) break up into sub-problems
// - How to ignore errors?
// - find max value in temp array
// -  find min value in temp array
// - substract min from max to find amplitude and return it

const calcTempAmplitude = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  //find max
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue; //skip that element

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(min, max);
  return max - min;
};

const amplitude = calcTempAmplitude(temperatures, temperatures2);
console.log(amplitude);

//PROBLEM 2: function should received 2 arrays of temps
//1) understand the problem
//with 2 arrays, should we implement functionality 2x? NO just merge the 2 arrays

//2) breaking up into sub-problems
//how to merge the 2 arrays
*/
