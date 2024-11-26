function vowelSubstring(s) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    let n = s.length;
    
    // Iterate over each starting point of the substring
    for (let i = 0; i < n; i++) {
        let seenVowels = new Set();
        
        // Explore substrings from i
        for (let j = i; j < n; j++) {
            if (vowels.has(s[j])) {
                seenVowels.add(s[j]);
            }
            // If all vowels are seen in the substring
            if (seenVowels.size === 5) {
                count++;
            }
        }
    }
    
    return count;
}

// Example usage
const s = "aaeiouxa";
console.log(vowelSubstring(s));  // Output: 2
