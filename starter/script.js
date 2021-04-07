// Remember, we're gonna use strict mode in all scripts now!
'use strict';

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//1) understanding the problem
// - what is temp amplitude? difference between highest and lowest temp
//- how to compute tje max and min temp
//- what is a sensor error? and what to do?

//2) break up into sub-problems
// - How to ignore errors?
// - find max value in temp array
// -  find min value in temp array
// - substract min from max to find amplitude and return it

const calcTempAmplitude = function (temps) {
  //find max
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    }
    console.log(max);
  }
};

calcTempAmplitude([3, 7, 4, -1, 111]);
