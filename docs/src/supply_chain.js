function longestChain(words) {
    // Sort words by length
    words.sort((a, b) => a.length - b.length);
    
    let wordSet = new Set(words);
    let longest = new Map();
    
    let maxLength = 1;
    
    for (let word of words) {
        longest.set(word, 1); // Initialize chain length to 1 for each word
        
        // Try removing each character one by one
        for (let i = 0; i < word.length; i++) {
            let prev = word.slice(0, i) + word.slice(i + 1);
            if (wordSet.has(prev)) {
                longest.set(word, Math.max(longest.get(word), longest.get(prev) + 1));
            }
        }
        
        maxLength = Math.max(maxLength, longest.get(word));
    }
    
    return maxLength;
}

// Example usage
const words = ['a', 'b', 'ba', 'bca', 'bda', 'bdca'];
console.log(longestChain(words));  // Output: 4
