let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100, 102, 105];

console.log(search(nums, 4))

console.log(searchRecursive(nums, 4))

function search(nums, target){
    for(let i = 0; i <= nums.length; i++){
        if(target === nums[i]){
            return i;
        }
    }
    return -1
}


function search2(nums,target){
    let startIndex = 0;
    let endIndex = nums.length;


    while(startIndex <= endIndex){
        let midIndex = Math.floor((startIndex + endIndex)/2)

        if(target === nums[midIndex]){
            return midIndex
        } 
        //right side of array
        else if(target > nums[midIndex]){
            startIndex = midIndex + 1;
        }
        //left side of array
        else if(target < nums[midIndex]){
            endIndex = midIndex - 1
        }
        //not found
        else{
            return - 1
        }
    }
}

function searchRecursive(nums, target){

    function findMiddleNumber(startIndex, endIndex, target){
        if(startIndex > endIndex){
            return -1 //not found
        }

        let midIndex = Math.floor((startIndex + endIndex)/2)

        if(nums[midIndex] === target){
            return midIndex;
        
        } 
        //right side of array
        else if (nums[midIndex] > target){
            return findMiddleNumber(startIndex, midIndex-1, target)
        } 
        //left side of array
        else if (nums[midIndex] < target){
            return findMiddleNumber(midIndex+1, endIndex, target)
        }
    }

    return findMiddleNumber(0, nums.length, target)
    
}





