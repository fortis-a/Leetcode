/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort()
    
    for(i=0; i < nums.length; i+=2){
        console.log(i)
        if(nums[i]!= nums[i+1] ){
            
            return nums[i]   
        }
    }
};