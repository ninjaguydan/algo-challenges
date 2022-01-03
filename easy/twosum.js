// Given an array of integers 'nums' and an integer 'target', return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

var twoSum = function(nums, target) {
	let answer = {}
	for (let i = 0; i < nums.length; i++) {
		let difference = target - nums[i]
		if ( answer[difference] !== undefined ) {
			return [i, answer[difference]]
		} else {
			answer[nums[i]] = i
		}
	}
	
};