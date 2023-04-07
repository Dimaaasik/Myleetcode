/*
You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.
 */

 let numEnclaves = function(grid) {
     const m = grid.length, n = grid[0].length;
     for(let i=0; i<m; i++) helper(i,0), helper(i,n-1);
     for(let i=0; i<n; i++) helper(0,i), helper(m-1,i);

     let count = 0
     for(let i=0; i<m; i++)
         for (let j=0; j<n; j++)
             if(grid[i][j]===1) count++;

     return count;

     function helper(x,y) {
         if(x<0 || y<0 || x>=m || y>=n || grid[x][y]===0) return;

         grid[x][y] = 0;
         helper(x-1, y);
         helper(x+1, y);
         helper(x, y-1);
         helper(x, y+1);
     }
 };

console.log(numEnclaves([[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]]));

console.log(numEnclaves([[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]]));
