
class Solution {
    
    rowWithMax1s(arr, n, m){
        // code here
        for(let j=0;j<m;j++){
            for(let i=0; i<n ; i++){
               if(arr[i][j]===1){
                   return i;
               }
            }
        }
        return -1;
    }
}
