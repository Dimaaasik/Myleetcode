/*
You are given an array people where people[i] is the weight of the ith person, and an infinite number of boats where each boat can carry a maximum weight of limit. Each boat carries at most two people at the same time, provided the sum of the weight of those people is at most limit.

Return the minimum number of boats to carry every given person.



Example 1:

Input: people = [1,2], limit = 3
Output: 1
Explanation: 1 boat (1, 2)
Example 2:

Input: people = [3,2,2,1], limit = 3
Output: 3
Explanation: 3 boats (1, 2), (2) and (3)
Example 3:

Input: people = [3,5,3,4], limit = 5
Output: 4
Explanation: 4 boats (3), (3), (4), (5)
 */

// не было времени из-за модуля придумать нормальное решение, пришлось делать на коленке за 5 минут
// хотя у других ребят были прикольные решения
 var numRescueBoats = function(people, limit) {
     people.sort((a, b) => a - b);
     answer = 0;
     while(people.length != 0){
         if(people[people.length - 1] == limit){
             people.pop();
             answer++;
         }
         else if((people[people.length - 1] + people[0]) <= limit  ){
             people.pop();
             people.shift();
             answer++;
         }
         else if((people[people.length - 1] + people[0]) > limit  ){
             people.pop();
             answer++;
         }
         else{
             answer++;
             return answer;
         }
     }
     return answer
 };

console.log(numRescueBoats([1,2], 3))
console.log(numRescueBoats([3,2,2,1], 3))
console.log(numRescueBoats([3,5,3,4], 5))
console.log(numRescueBoats([3,5,3,4], 5))
