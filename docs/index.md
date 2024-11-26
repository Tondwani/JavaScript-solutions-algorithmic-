1. Supply Chain (Longest String Chain)
Plan
Inputs:

n (int): Number of words in the array.
words (list of strings): List of strings in the dictionary.
Outputs:

Integer: The length of the longest string chain.
Steps:

Sort the words by length (shorter words first) to ensure processing precedence.
Use a dictionary for dynamic programming where keys are words and values are the longest chain lengths ending at that word.
Iterate through each word, and for each word:
Remove one character at a time to form potential predecessor words.
Check if the predecessor exists in the dictionary, and update the chain length for the current word accordingly.
Return the maximum chain length from the dictionary.
Algorithm:

Sorting: 
𝑂
(
𝑛
⋅
log
⁡
𝑛
)
O(n⋅logn)
Iterating over words and generating predecessors: 
𝑂
(
𝑛
⋅
𝑘
2
)
O(n⋅k 
2
 ), where 
𝑘
k is the maximum word length.
2. Vowel Substring
Plan
Inputs:

s (string): The input string.
Outputs:

Integer: Count of substrings that contain only vowels and include all vowels at least once.
Steps:

Sliding Window Technique:
Expand the window until it contains all vowels.
Shrink the window while maintaining the condition.
Set for Vowel Check:
Use a set ({'a', 'e', 'i', 'o', 'u'}) to keep track of vowels present in the current window.
Count all valid substrings starting from each qualifying window position.
Algorithm:

Sliding window expands and shrinks: 
𝑂
(
𝑛
)
O(n)
Checking vowels in the current window: 
𝑂
(
1
)
O(1) with a set.
3. Project Estimates (Count Distinct Pairs)
Plan
Inputs:

projectCosts (list of integers): List of project costs.
target (int): The target absolute difference.
Outputs:

Integer: The number of distinct pairs with the given absolute difference.
Steps:

Use a hash set to store the project costs for quick lookups.
Iterate over the project costs:
Check if cost + target or cost - target exists in the set.
Use a second hash set to avoid counting duplicate pairs.
Algorithm:

Iterating through costs: 
𝑂
(
𝑛
)
O(n)
Set lookups: 
𝑂
(
1
)
O(1)
4. Count Between Ranges
Plan
Inputs:

arr (list of integers): Array of integers.
low (list of integers): Lower bounds of the ranges.
high (list of integers): Upper bounds of the ranges.
Outputs:

List of integers: Number of elements in the array within each range.
Steps:

Pre-sort the array for faster range queries.
Use binary search:
Find the first index greater than or equal to low[i].
Find the last index less than or equal to high[i].
Compute the count as the difference between the two indices.
Algorithm:

Sorting the array: 
𝑂
(
𝑛
⋅
log
⁡
𝑛
)
O(n⋅logn)
Binary search for each query: 
𝑂
(
𝑞
⋅
log
⁡
𝑛
)
O(q⋅logn), where 
𝑞
q is the number of ranges.
Let me know if you're ready for me to implement any of these solutions!
