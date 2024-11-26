function countPairs(projectCosts, target) {
    let costSet = new Set();
    let pairCount = 0;

    for (let cost of projectCosts) {
        if (costSet.has(cost - target)) {
            pairCount++;
        }
        if (costSet.has(cost + target)) {
            pairCount++;
        }
        costSet.add(cost);
    }
    
    return pairCount;
}

// Example usage
const projectCosts = [1, 5, 3, 4, 2];
const target = 2;
console.log(countPairs(projectCosts, target));  // Output: 3
