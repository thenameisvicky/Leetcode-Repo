import { BaseSingleArrayExecutionStrategy } from "../../Executors/types/arrays";
import { nextPermutationParams } from "../type";

export class NextPermutationStrategy implements BaseSingleArrayExecutionStrategy<'nextPermutation'> {
    contextFunction(params: nextPermutationParams): any {
        const { nums } = params;
        let i = nums.length - 2;
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }
        if (i >= 0) {
            let j = nums.length - 1;
            while (nums[j] <= nums[i]) {
                j--;
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];
        }
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]];
            left++;
            right--;
        }
        return nums;
    }
}