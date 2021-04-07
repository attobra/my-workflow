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
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'kelvin',
    value: Number(prompt('degrees in celcius')),
  };
  console.table(measurement);
  const kelvin = measurement.value + 273;
  return kelvin;
};

console.log(measureKelvin());
*/

const temps1 = [17, 21, 23];
const temps2 = [12, 5, -5, 0, 4];

//1) understand the problem
// - array transformed to strings separated by ...
// - x days? index + 1

//2) breaking up the problem
// - transform array into string
// - transform each element to strings with C
// - strings needed to contain index+1 day
// - add ... between elements and start and end of string

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]} C in ${i + 1} days ... `;
    //console.log(`${arr[i]} C in ${i + 1} days`);
  }

  console.log('...' + str);
};

printForecast(temps1);
printForecast(temps2);
