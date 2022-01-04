// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.

var solution = function(isBadVersion) {
	return function(n) {
		let left = 0
		let right = n
		
		while ( right > left ) {
			let mid = Math.floor( left + (right-left)/2 )
			if ( isBadVersion(mid) ) {
				right = mid
			}
			else {
				left = mid+1
			}
		}
		return left
	};
};