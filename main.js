// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.



// Example 1:

const nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]


//////////first attempt////////////////
// function moveOver(arr) {
//   arr.sort((a, b) => {
//   return Math.abs(b) - Math.abs(a); 
//   })
//   return arr;
// }

// console.log(moveOver(nums));

////////////second attempt/////////////
// function movinOs (arr) {
//   let end = arr.length - 1;
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] === 0) {
//       arr.splice(i, 1);
//       console.log(arr);
//       arr.splice(end, 0, 0);
//       console.log(arr);
      
//     }
//   } return arr;
// }
// console.log(movinOs(nums));
// console.log(movinOs([0,0,1]))

///////third attempt///////////
function moveZero(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {                                 //solved
      arr.splice(i, 1);
      arr.push(0);
    }
  } return arr;
}

// console.log(moveZero(nums));
// console.log(moveZero([0,0,1]));


///////someone else's solution that I liked///////////////
function zeroThing(nums) {
  let lastNonZeroIndex = 0;
  for(let i =0; i < nums.length; i++){
//if current element isn't 0, then make the next element counting up from 0, whatever this value is.
      if(nums[i] !== 0){
          nums[lastNonZeroIndex++] = nums[i]
      }                                                           
  }    
//at this point there are no zeroes left in the array and "lastNonZeroIndex" is the number of zeroes there were before      
  for(let i = lastNonZeroIndex; i < nums.length; i++){            
      nums[i] = 0;
  }
//this obviously just makes the current index = 0, the same amount of times it overwrote a zero
  return nums;
};

console.log(zeroThing(nums));
// console.log(zeroThing([0,0,1]));