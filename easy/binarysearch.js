// Given an array of integers 'nums' which is sorted in ascending order, and an integer 'target,' write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

//iterative approach
var search = function(nums, target) {
	let left = 0
	let right = nums.length-1
	
	while ( right >= left ) {
		let mid = Math.floor( left + (right-left)/2 )
		if ( target == nums[mid] ) {
			return mid
		}
		else if ( target < nums[mid] ) {
			right = mid -1
		}
		else if ( target > nums[mid] ) {
			left = mid + 1
		}
		else {
			return -1
		}
	}
	return -1
};

//recursive approach
var search = function(nums, target) {
    if (nums.length == 0) {
        return -1
    }
    return binary(nums, target, 0, nums.length-1)
};

var binary = function(nums, target, left, right) {
    if ( right >= left ) {
        let mid = Math.floor( (left + right)/2 )
        if ( target == nums[mid] ) {
            return mid
        }
        else if ( target < nums[mid] ) {
            return binary(nums, target, left, mid-1)
        }
        else if ( target > nums[mid] ) {
            return binary(nums, target, mid+1, right)
        }
    }
    return -1
}