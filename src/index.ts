import { exec } from "./Executors/exec";
import { BinarySearchStrategy } from "./Strategies/search/binarySearch";
import { FindInsertPositionStrategy } from "./Strategies/search/findInsertPosition";
import { FourSumStrategy } from "./Strategies/pointers/fourSum";
import { LongestSubStrWithNoRepeatCharStrategy } from "./Strategies/slidingWindow/longSubStringNoDup";
import { MinimumSizeSubarraySumStrategy } from "./Strategies/slidingWindow/minSizeSubarraySum";
import { MaximumSumSubArrayStrategy } from "./Strategies/slidingWindow/maxSumSubarray";
import { MoveZeroStrategy } from "./Strategies/arrayManipulation/moveZeros";
import { NextPermutationStrategy } from "./Strategies/arrayManipulation/nextPermutation";
import { SingleOccuringNumberStrategy } from "./Strategies/hashMap/singleNumber";
import { ThreeSumStrategy } from "./Strategies/pointers/threeSum";
import { ThreeSumClosestStrategy } from "./Strategies/pointers/threeSumClosest";
import { TwoSumStrategy1 } from "./Strategies/hashMap/twoSum1";
import { TwoSumStrategy2 } from "./Strategies/hashMap/twoSum2";
import { ContainerWithMostWaterStrategy } from "./Strategies/pointers/containerWithMostWater";
import { GroupAnagramsStrategy } from "./Strategies/hashMap/groupAnagrams";
import { CountHillsAndValleysStrategy } from "./Strategies/pointers/hillsAndValleysCount";
import { MaximumProductSubArrayStrategy } from "./Strategies/pointers/maxProductSubarry";


// TwoSum1: No pair adds to 100
const twoSum1 = new TwoSumStrategy1();
exec<'twoSum'>(twoSum1, { nums: [1, 2, 3, 4, 5], target: 100 }); // ➞ [-1,-1]

// TwoSum2: Multiple duplicates that sum to target
const twoSum2 = new TwoSumStrategy2();
exec<'twoSum'>(twoSum2, { nums: [2, 3, 3, 4, 5], target: 6 }); // ➞ [0,3]

// MoveZeros: All zeros
const moveZeros = new MoveZeroStrategy();
exec<'moveZeros'>(moveZeros, { nums: [0, 0, 0, 0] }); // ➞ [0, 0, 0, 0]

// BinarySearch: Target not found
const binarySearch = new BinarySearchStrategy();
exec<'binarySearch'>(binarySearch, { nums: [1, 2, 4, 5, 6], target: 3 }); // ➞ -1

// MinimumSizeSubarraySum: No subarray meets target
const minSizesubarrSum = new MinimumSizeSubarraySumStrategy();
exec<'minSizeSubarrSum'>(minSizesubarrSum, { nums: [1, 1, 1, 1], target: 10 }); // ➞ 0

// LongestSubStringNoDup: All same characters
const longSizesubstrNoDupLen = new LongestSubStrWithNoRepeatCharStrategy();
exec<'longestSubStringNoDup'>(longSizesubstrNoDupLen, { s: 'aaaaaa' }); // ➞ 1

// FindInsertPosition: Insert in middle
const findInserPosition = new FindInsertPositionStrategy();
exec<'findInsertPosition'>(findInserPosition, { nums: [1, 3, 5, 6], target: 4 }); // ➞ 2

// NextPermutation: Already in descending order
const nextPermutation = new NextPermutationStrategy();
exec<'nextPermutation'>(nextPermutation, { nums: [3, 2, 1] }); // ➞ [1, 2, 3]

// SingleOccuringNumber: Only one unique
const singleNumber = new SingleOccuringNumberStrategy();
exec<'singleOccuringNumber'>(singleNumber, { num: [7, 3, 3, 7, 1, 1, 4, 4, 9] }); // ➞ 9

// ThreeSum: Only valid triplet
const threeSum = new ThreeSumStrategy();
exec<'threeSum'>(threeSum, { nums: [-1, 0, 1, 2, -1, -4] }); // ➞ [[-1, -1, 2], [-1, 0, 1]]

//FourSum: All elements same, only one unique quadruplet
const fourSum = new FourSumStrategy();
exec<'fourSum'>(fourSum, { nums: [2, 2, 2, 2, 2], target: 8 }); // ➞ [[2, 2, 2, 2]]

//ThreeSumClosest: Return the closest 3Sum values
const threeSumClosest = new ThreeSumClosestStrategy();
exec<'threeSumClosest'>(threeSumClosest, { nums: [-8, -6, -5, -3, -1], target: 2 }); // ➞ -9 (closest to 2)

//ContainerWithMostWater: All heights zero
const containerWithMostWater = new ContainerWithMostWaterStrategy();
exec<'containerWithMostWater'>(containerWithMostWater, { nums: [0, 0, 0, 0, 0] }); // ➞ 0 

//GroupAnagrams: Empty array - no anagrams to group
const groupAnagrams = new GroupAnagramsStrategy();
exec<'groupAnagrams'>(groupAnagrams, { strings: [] }); // ➞ []

// MaximumSumSubArray: Edge Case 1000000
const maxSumSubarray = new MaximumSumSubArrayStrategy();
exec<'maxSumSubarray'>(maxSumSubarray, { nums: [1000000, -1000000, 1000000] }); // ➞ 1000000

// CountHillsAndValleys: All elements are the same 
const countHillsAndValleys = new CountHillsAndValleysStrategy();
exec<'countHillsAndValley'>(countHillsAndValleys, { nums: [5, 5, 5, 5, 5] }); // ➞ 0

// MaximumProductSubArray: Expected 0 as output
const maximumProductSubarray = new MaximumProductSubArrayStrategy();
exec<'maxProductSubarray'>(maximumProductSubarray, { nums: [-2, 0 - 2] }); // ➞ 4