/*
540. Single Element in a Sorted Array

You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

Return the single element that appears only once.

Your solution must run in O(log n) time and O(1) space.
 */

 var singleNonDuplicate = function(nums) {
     let start = 0;
     let end = nums.length;
     let middle;
     let found = false;




     while(found == false){
         middle = Math.floor((start + end) / 2);
         if( (nums[middle] != nums[middle - 1]) && (nums[middle] != nums[middle + 1])){
             found = true;
             console.log('YAY');
             return nums[middle];
         }

         if( (middle % 2 != 0) && (nums[middle] == nums[middle - 1]) ){
             start = middle + 1;
             console.log(start, 'Br1');
             continue;
         }
         if((middle % 2 != 0) && (nums[middle] == nums[middle + 1])){
             end = middle - 1;
             console.log(end, 'Br3');
             continue;
         }


         if((middle % 2 == 0) && (nums[middle] == nums[middle - 1])){
             end = middle - 1;
             console.log(end, 'Br2');
             continue;
         }


         if((middle % 2 == 0) && (nums[middle] == nums[middle + 1])){
             start = middle + 1;
             console.log(start, 'Br4');

             continue;
         }

         console.log(start, end);
     }



 };
 // tests
singleNonDuplicate([1,1,2,3,3,4,4,8,8]) // 2

singleNonDuplicate([3,3,7,7,10,11,11]) // 10
